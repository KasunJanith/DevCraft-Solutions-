// EmailJS Integration for Gmail
// To use this, you need to:
// 1. Create account at https://www.emailjs.com/
// 2. Connect your Gmail account
// 3. Create email template
// 4. Replace the IDs below with your actual IDs

import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_GMAIL_SERVICE_ID', // Replace with your service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',     // Replace with your template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'        // Replace with your public key
};

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      to_email: 'kasunbandara1999@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

// Steps to set up EmailJS:
/*
1. Go to https://www.emailjs.com/ and create free account
2. Add Gmail service in EmailJS dashboard
3. Create email template with these variables:
   - {{from_name}}
   - {{from_email}}
   - {{subject}}
   - {{message}}
   - {{to_email}}
4. Get your Service ID, Template ID, and Public Key
5. Replace the values in EMAILJS_CONFIG above
6. Uncomment the EmailJS option in ContactUs.jsx
*/
