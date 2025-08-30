// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create account and add an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  // Your EmailJS public key (from Integration settings)
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Your EmailJS service ID (from Email Services)
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  
  // Your EmailJS template ID (from Email Templates)
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
};

// Template variables that will be sent to your email template:
// - {{from_name}} - User's name
// - {{from_email}} - User's email
// - {{phone}} - User's phone number
// - {{organization}} - User's organization
// - {{afternoon_activity}} - Selected afternoon activity
// - {{evening_activity}} - Selected evening activity
// - {{dietary}} - Dietary restrictions
// - {{emergency_contact}} - Emergency contact info
// - {{transportation}} - Transportation needs
// - {{special_requests}} - Special requests
// - {{submission_date}} - Date and time of submission