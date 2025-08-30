# Google Forms API Setup Guide

## Step 1: Google Cloud Console Setup

### 1.1 Create/Select Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your Project ID

### 1.2 Enable APIs
1. Go to **APIs & Services > Library**
2. Search and enable these APIs:
   - **Google Forms API**
   - **Google Drive API** (needed for form creation/access)

### 1.3 Create Service Account
1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > Service Account**
3. Fill in:
   - Service account name: `gosim-forms-api`
   - Service account ID: `gosim-forms-api`
   - Description: `Service account for GOSIM cultural tour form submissions`
4. Click **Create and Continue**
5. Skip role assignment for now (click **Continue**)
6. Click **Done**

### 1.4 Generate Service Account Key
1. Click on the created service account
2. Go to **Keys** tab
3. Click **Add Key > Create New Key**
4. Select **JSON** format
5. Download the JSON file
6. **IMPORTANT**: Keep this file secure, don't commit to git

## Step 2: Form Setup

### 2.1 Create Google Form (if not already done)
1. Go to [Google Forms](https://forms.google.com/)
2. Create your cultural tour registration form
3. Add all necessary fields
4. Note the Form ID from URL: `https://docs.google.com/forms/d/[FORM_ID]/edit`

### 2.2 Share Form with Service Account
1. Open your Google Form
2. Click **Send** button
3. Go to **Settings** (gear icon)
4. Under **Responses**, turn on **Collect email addresses**
5. Share the form with your service account email (found in the JSON file)
   - Right-click form > **Share**
   - Add service account email with **Editor** permissions

## Step 3: Project Implementation

### 3.1 Install Dependencies
```bash
npm install googleapis
npm install dotenv
```

### 3.2 Environment Setup
Create `.env` file in project root:
```env
GOOGLE_FORMS_CREDENTIALS=path/to/your/service-account-key.json
GOOGLE_FORMS_FORM_ID=your_form_id_here
```

### 3.3 Implementation Files
The implementation will include:
- Server-side API endpoint to handle form submissions
- Frontend JavaScript to send data to our API
- Proper authentication and error handling

## Next Steps
After completing the above setup, I will:
1. Install the required packages
2. Create the server-side API endpoint
3. Update the frontend forms
4. Add proper error handling and validation