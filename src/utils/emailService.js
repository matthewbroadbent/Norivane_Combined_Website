// Email service utility for handling consultation requests
export const sendConsultationRequest = async (formData) => {
  try {
    // In a real application, this would send to your backend API
    // For now, we'll simulate the email sending process
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'Please fill in all required fields.'
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.'
      }
    }
    
    // Log the consultation request (in production, this would be sent to your email service)
    console.log('Consultation Request:', {
      timestamp: new Date().toISOString(),
      ...formData
    })
    
    // Simulate successful submission
    return {
      success: true,
      message: `Thank you ${formData.name}! We've received your consultation request and will contact you within 24 hours.`
    }
    
  } catch (error) {
    console.error('Email service error:', error)
    return {
      success: false,
      message: 'There was an error sending your request. Please try again or contact us directly.'
    }
  }
}

// Helper function to format consultation data for email
export const formatConsultationEmail = (formData) => {
  return `
New Consultation Request - ${formData.consultationType}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Company: ${formData.company || 'Not provided'}

Request Details:
- Interest: ${formData.interest}
- Preferred Time: ${formData.preferredTime || 'Not specified'}
- Message: ${formData.message}

Submitted: ${new Date().toLocaleString()}
  `.trim()
}
