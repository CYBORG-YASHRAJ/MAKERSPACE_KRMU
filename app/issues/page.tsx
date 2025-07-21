"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, CheckCircle, Upload, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function IssuesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    title: "",
    description: "",
    location: "",
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        category: "",
        priority: "",
        title: "",
        description: "",
        location: "",
      })
      setSelectedFile(null)
    }, 3000)
  }

  const isFormValid =
    formData.name && formData.email && formData.category && formData.priority && formData.title && formData.description

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <Card className="border-0 shadow-lg rounded-2xl max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Issue Reported Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reporting the issue. Our technical team will review it and get back to you soon.
            </p>
            <p className="text-sm text-gray-500">
              You should receive a confirmation email shortly with your ticket number.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Report an Issue</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us maintain our lab by reporting any technical issues, equipment problems, or safety concerns you
            encounter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Issue Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Issue Report Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Issue Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Issue Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equipment">Equipment Malfunction</SelectItem>
                          <SelectItem value="software">Software Issue</SelectItem>
                          <SelectItem value="safety">Safety Concern</SelectItem>
                          <SelectItem value="facility">Facility Issue</SelectItem>
                          <SelectItem value="access">Access Problem</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level *</Label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Minor inconvenience</SelectItem>
                          <SelectItem value="medium">Medium - Affects workflow</SelectItem>
                          <SelectItem value="high">High - Blocks work</SelectItem>
                          <SelectItem value="urgent">Urgent - Safety concern</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="e.g., Main Lab, Room A, 3D Printing Station"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Issue Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Brief description of the issue"
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Please provide a detailed description of the issue, including steps to reproduce if applicable..."
                      className="rounded-xl min-h-[120px]"
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Attach Image (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                      {selectedFile ? (
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center">
                            <Upload className="h-5 w-5 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-700">{selectedFile.name}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Click to upload an image or drag and drop</p>
                          <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <Button type="submit" disabled={!isFormValid || isSubmitting} className="w-full rounded-xl py-3">
                    {isSubmitting ? "Submitting..." : "Submit Issue Report"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  For urgent safety issues or emergencies, contact us immediately:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Emergency:</strong> (555) 123-4567
                  </p>
                  <p>
                    <strong>Lab Manager:</strong> (555) 123-4568
                  </p>
                  <p>
                    <strong>Email:</strong> emergency@innovationlab.edu
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Common Issues */}
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Common Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900">3D Printer Not Working</h4>
                    <p className="text-gray-600">Check filament, bed leveling, and power connection</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Computer Login Issues</h4>
                    <p className="text-gray-600">Verify student ID and password, contact IT if needed</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Equipment Reservation</h4>
                    <p className="text-gray-600">Use the online booking system or contact staff</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Response Time:</strong> We typically respond to issues within 24 hours. Urgent safety concerns
                are addressed immediately.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  )
}
