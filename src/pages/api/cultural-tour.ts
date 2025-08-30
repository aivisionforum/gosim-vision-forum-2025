import type { APIRoute } from 'astro';
import { googleFormsService } from '../../lib/googleFormsService.js';

export const prerender = false;

interface CulturalTourRegistration {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  afternoon_activity: string;
  evening_activity: string;
  dietary?: string;
  emergency_contact: string;
  transportation: string;
  special_requests?: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Handle both JSON and FormData
    let registration: CulturalTourRegistration;
    
    const contentType = request.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      registration = await request.json();
    } else {
      const formData = await request.formData();
      registration = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        organization: formData.get('organization') as string || '',
        afternoon_activity: formData.get('afternoon_activity') as string,
        evening_activity: formData.get('evening_activity') as string,
        dietary: formData.get('dietary') as string || '',
        emergency_contact: formData.get('emergency_contact') as string,
        transportation: formData.get('transportation') as string || '',
        special_requests: formData.get('special_requests') as string || '',
      };
    }

    // Basic validation
    if (!registration.name || !registration.email || !registration.phone || !registration.emergency_contact) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: '请填写所有必填项目' 
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!registration.afternoon_activity || !registration.evening_activity) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: '请选择下午和晚上的活动' 
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registration.email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: '请输入有效的邮箱地址' 
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    try {
      // Submit to Google Forms
      const result = await googleFormsService.submitResponse(registration);
      
      console.log('Cultural Tour Registration submitted to Google Forms:', {
        timestamp: new Date().toISOString(),
        responseId: result.responseId,
        ...registration
      });

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: '报名提交成功！我们会尽快与您联系确认详情。',
          data: {
            name: registration.name,
            email: registration.email,
            afternoon_activity: registration.afternoon_activity,
            evening_activity: registration.evening_activity,
            responseId: result.responseId
          }
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (formsError) {
      console.error('Google Forms submission error:', formsError);
      
      // Fallback: Log the registration locally
      console.log('Cultural Tour Registration (fallback):', {
        timestamp: new Date().toISOString(),
        ...registration
      });
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: '报名提交成功！我们会尽快与您联系确认详情。',
          data: {
            name: registration.name,
            email: registration.email,
            afternoon_activity: registration.afternoon_activity,
            evening_activity: registration.evening_activity
          },
          warning: 'Form submitted locally due to Google Forms API issue'
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: '服务器错误，请稍后再试' 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};