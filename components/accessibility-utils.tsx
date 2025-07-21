import React from 'react'

interface AccessibilityUtilsProps {
  children: React.ReactNode
}

// Screen reader announcement component
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="sr-only">{children}</span>
)

// Live region for dynamic content announcements
export const LiveRegion: React.FC<{ 
  children: React.ReactNode 
  politeness?: 'polite' | 'assertive'
  atomic?: boolean 
}> = ({ children, politeness = 'polite', atomic = true }) => (
  <div
    role="region"
    aria-live={politeness}
    aria-atomic={atomic}
    className="sr-only"
  >
    {children}
  </div>
)

// Focus management component
export const FocusTrap: React.FC<AccessibilityUtilsProps> = ({ children }) => {
  const focusTrapRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const element = focusTrapRef.current
    if (!element) return

    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>
    
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          e.preventDefault()
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    return () => element.removeEventListener('keydown', handleTabKey)
  }, [])

  return (
    <div ref={focusTrapRef}>
      {children}
    </div>
  )
}

// Skip link component
export const SkipLink: React.FC<{ 
  href: string
  children: React.ReactNode 
}> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-600 text-white px-4 py-2 rounded-md z-50 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    tabIndex={1}
  >
    {children}
  </a>
)

// Accessible button with enhanced keyboard navigation
export const AccessibleButton: React.FC<{
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
  ariaDescribedBy?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}> = ({ 
  children, 
  onClick, 
  disabled, 
  ariaLabel, 
  ariaDescribedBy, 
  className = '', 
  type = 'button' 
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.()
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  )
}

// Form field with built-in accessibility features
export const AccessibleFormField: React.FC<{
  label: string
  required?: boolean
  error?: string
  helpText?: string
  children: React.ReactNode
  fieldId: string
}> = ({ label, required, error, helpText, children, fieldId }) => {
  const helpId = `${fieldId}-help`
  const errorId = `${fieldId}-error`

  return (
    <div className="space-y-2">
      <label 
        htmlFor={fieldId} 
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      
      {React.cloneElement(children as React.ReactElement, {
        id: fieldId,
        'aria-describedby': [
          helpText ? helpId : null,
          error ? errorId : null
        ].filter(Boolean).join(' ') || undefined,
        'aria-invalid': error ? 'true' : undefined,
        'aria-required': required
      } as any)}
      
      {helpText && (
        <p id={helpId} className="text-xs text-gray-500">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={errorId} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default {
  ScreenReaderOnly,
  LiveRegion,
  FocusTrap,
  SkipLink,
  AccessibleButton,
  AccessibleFormField
}
