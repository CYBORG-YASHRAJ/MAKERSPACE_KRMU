import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import LoadingSpinner from "@/components/loading-spinner"
import { AlertCircle, CheckCircle, Send } from "lucide-react"

interface FormState {
  isSubmitting: boolean
  message: string
  type: 'idle' | 'success' | 'error'
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    message: '',
    type: 'idle'
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    setFormState({ isSubmitting: true, message: '', type: 'idle' })
    
    try {
      const formData = new FormData(event.currentTarget)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (onSubmit) {
        await onSubmit(formData)
      }
      
      setFormState({
        isSubmitting: false,
        message: 'Thank you for your message! We\'ll get back to you soon.',
        type: 'success'
      })
      
      // Reset form
      event.currentTarget.reset()
      
    } catch (error) {
      setFormState({
        isSubmitting: false,
        message: 'Sorry, there was an error sending your message. Please try again.',
        type: 'error'
      })
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-orange-600">Get in Touch</CardTitle>
        <CardDescription>
          Have questions about our makerspace? We'd love to hear from you!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              disabled={formState.isSubmitting}
              className="w-full"
              placeholder="Enter your full name"
              aria-describedby="name-help"
            />
            <p id="name-help" className="text-xs text-gray-500">
              Please provide your full name so we can address you properly
            </p>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              disabled={formState.isSubmitting}
              className="w-full"
              placeholder="your.email@example.com"
              aria-describedby="email-help"
            />
            <p id="email-help" className="text-xs text-gray-500">
              We'll use this to respond to your inquiry
            </p>
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              disabled={formState.isSubmitting}
              className="w-full"
              placeholder="What is this regarding?"
              aria-describedby="subject-help"
            />
            <p id="subject-help" className="text-xs text-gray-500">
              Brief description of your inquiry
            </p>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              disabled={formState.isSubmitting}
              className="w-full min-h-32"
              placeholder="Please share your questions, feedback, or how we can help you..."
              aria-describedby="message-help"
            />
            <p id="message-help" className="text-xs text-gray-500">
              Minimum 10 characters. Be as detailed as possible to help us assist you better.
            </p>
          </div>

          {/* Status Message */}
          {formState.message && (
            <div
              className={`flex items-center space-x-2 p-4 rounded-md ${
                formState.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
              role="alert"
              aria-live="polite"
            >
              {formState.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
              )}
              <span className="text-sm font-medium">{formState.message}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-describedby="submit-help"
          >
            {formState.isSubmitting ? (
              <>
                <LoadingSpinner size="sm" />
                <span className="ml-2">Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                Send Message
              </>
            )}
          </Button>
          <p id="submit-help" className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
