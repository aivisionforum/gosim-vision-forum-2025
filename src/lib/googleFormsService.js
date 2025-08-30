import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

export class GoogleFormsService {
  constructor() {
    this.auth = null;
    this.forms = null;
    this.formId = null;
  }

  async initialize() {
    try {
      // Load form ID from environment
      this.formId = process.env.GOOGLE_FORMS_FORM_ID;
      if (!this.formId) {
        throw new Error('GOOGLE_FORMS_FORM_ID environment variable not set');
      }

      // Load service account credentials
      const credentialsPath = process.env.GOOGLE_FORMS_CREDENTIALS;
      if (!credentialsPath) {
        throw new Error('GOOGLE_FORMS_CREDENTIALS environment variable not set');
      }

      const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

      // Create JWT auth client using service account
      this.auth = new google.auth.GoogleAuth({
        credentials: credentials,
        scopes: [
          'https://www.googleapis.com/auth/forms.body',
          'https://www.googleapis.com/auth/forms.responses.readonly',
          'https://www.googleapis.com/auth/forms.body.readonly',
          'https://www.googleapis.com/auth/drive'
        ]
      });

      // Initialize Forms API
      this.forms = google.forms({ version: 'v1', auth: this.auth });

      console.log('Google Forms API initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Google Forms API:', error);
      throw error;
    }
  }

  async getFormStructure() {
    try {
      if (!this.forms || !this.formId) {
        await this.initialize();
      }

      const response = await this.forms.forms.get({
        formId: this.formId,
      });

      return response.data;
    } catch (error) {
      console.error('Error getting form structure:', error);
      throw error;
    }
  }

  async submitResponse(formData) {
    try {
      if (!this.forms || !this.formId) {
        await this.initialize();
      }

      // Get form structure to map field names to question IDs
      const form = await this.getFormStructure();
      const answers = this.mapFormDataToAnswers(formData, form);

      // Submit the response
      const response = await this.forms.forms.responses.create({
        formId: this.formId,
        requestBody: {
          answers: answers
        }
      });

      console.log('Form response submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting form response:', error);
      throw error;
    }
  }

  mapFormDataToAnswers(formData, form) {
    const answers = {};

    // Map common field names to Google Forms questions
    const fieldMapping = {
      'name': ['name', 'full name', '姓名', 'nome'],
      'email': ['email', 'e-mail', 'email address', '邮箱', '电子邮件'],
      'phone': ['phone', 'telephone', 'mobile', '手机', '电话', '手机号码'],
      'organization': ['organization', 'company', 'org', '机构', '公司', '组织'],
      'afternoon_activity': ['afternoon', 'afternoon activity', '下午活动'],
      'evening_activity': ['evening', 'evening activity', '晚上活动', '夜间活动'],
      'dietary': ['dietary', 'diet', 'allergies', '饮食', '过敏', '饮食限制'],
      'emergency_contact': ['emergency', 'emergency contact', '紧急联系人'],
      'transportation': ['transport', 'transportation', '交通', '交通需求'],
      'special_requests': ['special', 'requests', 'notes', '特殊', '备注', '需求']
    };

    // Iterate through form items and match with our data
    if (form.items) {
      form.items.forEach(item => {
        if (item.questionItem) {
          const question = item.questionItem.question;
          const questionId = question.questionId;
          const title = item.title?.toLowerCase() || '';

          // Find matching field in our form data
          for (const [fieldName, keywords] of Object.entries(fieldMapping)) {
            if (keywords.some(keyword => title.includes(keyword.toLowerCase()))) {
              const value = formData[fieldName];
              if (value) {
                // Handle different question types
                if (question.textQuestion) {
                  answers[questionId] = {
                    textAnswers: {
                      answers: [{ value: value }]
                    }
                  };
                } else if (question.choiceQuestion) {
                  answers[questionId] = {
                    textAnswers: {
                      answers: [{ value: value }]
                    }
                  };
                }
              }
              break;
            }
          }
        }
      });
    }

    return answers;
  }

  async getResponses() {
    try {
      if (!this.forms || !this.formId) {
        await this.initialize();
      }

      const response = await this.forms.forms.responses.list({
        formId: this.formId,
      });

      return response.data.responses || [];
    } catch (error) {
      console.error('Error getting form responses:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const googleFormsService = new GoogleFormsService();