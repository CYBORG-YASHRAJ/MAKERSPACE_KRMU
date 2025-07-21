"use client"

import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  error?: Error
  reset?: () => void
  message?: string
}

export default function ErrorBoundary({ 
  error, 
  reset, 
  message = "Something went wrong. Please try again." 
}: ErrorBoundaryProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            {message}
          </p>
          {error && (
            <details className="text-sm text-gray-500 mb-4">
              <summary className="cursor-pointer hover:text-gray-700">
                Technical details
              </summary>
              <p className="mt-2 p-2 bg-gray-100 rounded text-left break-words">
                {error.message}
              </p>
            </details>
          )}
          {reset && (
            <Button 
              onClick={reset}
              className="inline-flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Try Again</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
