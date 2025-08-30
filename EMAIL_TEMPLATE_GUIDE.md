# EmailJS Template Setup Guide

## 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

## 2. Add Email Service
- Go to "Email Services" in your EmailJS dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions to connect your email

## 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template content:

### Subject Line:
```
New GOSIM 2025 Cultural Tour Registration - {{from_name}}
```

### Email Body:
```html
<h2>GOSIM 2025 Cultural Tour Registration</h2>

<h3>Personal Information:</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Organization:</strong> {{organization}}</p>

<h3>Activity Preferences:</h3>
<p><strong>Afternoon Activity:</strong> {{afternoon_activity}}</p>
<p><strong>Evening Activity:</strong> {{evening_activity}}</p>

<h3>Additional Information:</h3>
<p><strong>Dietary Restrictions:</strong> {{dietary}}</p>
<p><strong>Emergency Contact:</strong> {{emergency_contact}}</p>
<p><strong>Transportation:</strong> {{transportation}}</p>
<p><strong>Special Requests:</strong> {{special_requests}}</p>

<hr>
<p><small>Submitted on: {{submission_date}}</small></p>
```

## 4. Get Your Credentials
After setting up the service and template:
- Go to "Integration" → Copy your **Public Key**
- From "Email Services" → Copy your **Service ID**  
- From "Email Templates" → Copy your **Template ID**

## 5. Update Configuration
Edit `src/lib/emailConfig.js` and replace:
- `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key
- `YOUR_EMAILJS_SERVICE_ID` with your actual service ID
- `YOUR_EMAILJS_TEMPLATE_ID` with your actual template ID

## 6. Test
Once configured, test the form submission to ensure emails are being delivered to your designated email account.