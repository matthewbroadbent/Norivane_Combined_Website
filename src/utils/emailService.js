// EmailJS configuration - using global emailjs from CDN
const SERVICE_ID = 'service_m0qgr6d'
const TEMPLATE_ID = 'template_rwsra3u'

export const sendConsultationRequest = async (formData) => {
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
    }

    const response = await window.emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    return {
      success: true,
      message: 'Consultation request sent successfully!',
      response
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return {
      success: false,
      message: 'Failed to send consultation request. Please try again.',
      error
    }
  }
}

export const sendContactMessage = async (formData) => {
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
    }

    const response = await window.emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    return {
      success: true,
      message: 'Message sent successfully!',
      response
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      error
    }
  }
}

// Alias for backward compatibility
export const sendContactForm = sendContactMessage

export const sendLeadMagnetRequest = async (email) => {
  try {
    const templateParams = {
      from_name: 'Website Visitor',
      from_email: email,
      message: 'Requested the Value Accelerator Checklist download',
      consultation_type: 'Lead Magnet - Value Accelerator Checklist',
      to_name: 'Norivane Team',
      reply_to: email
    }

    const response = await window.emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    return {
      success: true,
      message: 'Checklist request sent! Check your email.',
      response
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return {
      success: false,
      message: 'Failed to send request. Please try again.',
      error
    }
  }
}
