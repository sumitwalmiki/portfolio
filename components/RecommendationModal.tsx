"use client"

import type React from "react"
import { useState } from "react"
import { X, Send, Linkedin, User, Building, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RecommendationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (recommendation: any) => void
}

export default function RecommendationModal({ isOpen, onClose, onSubmit }: RecommendationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    relationship: "",
    linkedinUrl: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onSubmit(formData)
      setFormData({
        name: "",
        role: "",
        company: "",
        content: "",
        relationship: "",
        linkedinUrl: "",
      })
      onClose()
    } catch (error) {
      console.error("Error submitting recommendation:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-slate-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Add Your Recommendation</h2>
                <p className="text-sm text-slate-600">Share your experience working with Sumit</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-slate-100">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Form - Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">
                  <Building className="w-4 h-4 inline mr-1" />
                  Your Role *
                </label>
                <Input
                  id="role"
                  name="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="Senior Developer"
                  className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company *
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Tech Company Inc."
                  className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="relationship" className="block text-sm font-semibold text-slate-700 mb-2">
                  Working Relationship *
                </label>
                <Input
                  id="relationship"
                  name="relationship"
                  type="text"
                  required
                  value={formData.relationship}
                  onChange={handleInputChange}
                  placeholder="Worked together on Project X"
                  className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="linkedinUrl" className="block text-sm font-semibold text-slate-700 mb-2">
                <Linkedin className="w-4 h-4 inline mr-1" />
                LinkedIn Profile (Optional)
              </label>
              <Input
                id="linkedinUrl"
                name="linkedinUrl"
                type="url"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-2">
                Your Recommendation *
              </label>
              <textarea
                id="content"
                name="content"
                rows={4}
                required
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Share your experience working with Sumit. What made the collaboration successful? What skills did you observe?"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
              <p className="text-xs text-slate-500 mt-1">Minimum 50 characters ({formData.content.length}/50)</p>
            </div>
          </form>
        </div>

        {/* Actions - Fixed Footer */}
        <div className="flex-shrink-0 border-t border-slate-200 p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || formData.content.length < 50}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Recommendation
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-slate-300 hover:border-slate-400 px-6 py-3 rounded-lg bg-transparent"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
