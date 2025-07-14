import emailjs from '@emailjs/browser';

// IMPORTANT: Initialize EmailJS with your Public Key
// This should be done ONCE when your app starts.
// Doing it here means it runs when this module is first loaded.
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendConsultationRequest = async (formData) => {
  // Access environment variables using import.meta.env
  // They MUST be prefixed with VITE_ to be exposed to client-side code in Vite
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Explicitly pass it for clarity in send function

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      phone: formData.phone || 'Not provided',
      interest: formData.interest,
      message: formData.message,
      consultation_type: formData.consultationType || 'General Consultation',
      preferred_time: formData.preferredTime || 'Not specified',
      to_name: 'Norivane Team',
      reply_to: formData.email
    };

    // Use the imported emailjs, and pass the public key
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey // Make sure to pass the public key here as the last argument
    );

    console.log('Consultation request EmailJS Success!', response.status, response.text);
    return {
      success: true,
      message: 'Consultation request sent successfully!',
      response
    };
  } catch (error) {
    console.error('Consultation request EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send consultation request. Please try again.',
      error
    };
  }
};

export const sendContactMessage = async (formData) => {
  // Access environment variables using import.meta.env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Explicitly pass it for clarity in send function

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      phone: formData.phone || 'Not provided',
      interest: formData.interest,
      message: formData.message,
      subject: formData.subject || 'Contact Form Inquiry',
      consultation_type: 'Contact Form Inquiry',
      to_name: 'Norivane Team',
      reply_to: formData.email
    };

    // Use the imported emailjs, and pass the public key
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey // Make sure to pass the public key here as the last argument
    );

    console.log('Contact message EmailJS Success!', response.status, response.text);
    return {
      success: true,
      message: 'Message sent successfully!',
      response
    };
  } catch (error) {
    console.error('Contact message EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      error
    };
  }
};

// Alias for backward compatibility (ensure this is used by Contact.jsx's handleSubmit)
export const sendContactForm = sendContactMessage;

export const sendLeadMagnetRequest = async (email) => {
  // Access environment variables using import.meta.env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Explicitly pass it for clarity in send function

  try {
    const templateParams = {
      from_name: 'Website Visitor',
      from_email: email,
      message: 'Requested the Value Accelerator Checklist download',
      consultation_type: 'Lead Magnet - Value Accelerator Checklist',
      to_name: 'Norivane Team',
      reply_to: email
    };

    // Use the imported emailjs, and pass the public key
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey // Make sure to pass the public key here as the last argument
    );

    console.log('Lead magnet EmailJS Success!', response.status, response.text);
    return {
      success: true,
      message: 'Checklist request sent! Check your email.',
      response
    };
  } catch (error) {
    console.error('Lead magnet EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send request. Please try again.',
      error
    };
  }
};