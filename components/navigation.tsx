"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Info, Calendar, Newspaper, Image, AlertCircle, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Report Issue", href: "/issues", icon: AlertCircle },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const shouldBeScrolled = scrollPosition > 50
      
      // Add smooth transition delay
      if (shouldBeScrolled !== isScrolled) {
        setTimeout(() => {
          setIsScrolled(shouldBeScrolled)
        }, shouldBeScrolled ? 100 : 200)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
      isScrolled 
        ? 'top-6 transform scale-95' 
        : 'top-0 transform scale-100'
    }`}>
      <div className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isScrolled 
          ? 'max-w-fit mx-auto transform translate-y-0' 
          : 'w-full transform translate-y-0'
      }`}>
        <div className={`relative overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isScrolled
            ? 'bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-xl rounded-full border-2 border-cyan-400/40 shadow-2xl shadow-blue-500/30 mx-4 hover:shadow-3xl hover:shadow-cyan-500/40 hover:border-cyan-400/60'
            : 'bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 backdrop-blur-lg shadow-lg border-b border-white/10'
        }`}>
          {/* Animated background glow */}
          <div className={`absolute inset-0 transition-all duration-1000 ${
            isScrolled 
              ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse rounded-full' 
              : 'opacity-0'
          }`}></div>
          
          {/* Floating particles effect for Dynamic Island */}
          {isScrolled && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-2 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
              <div className="absolute top-4 right-6 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40 delay-300"></div>
              <div className="absolute bottom-3 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40 delay-700"></div>
              <div className="absolute bottom-2 right-4 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-40 delay-1000"></div>
            </div>
          )}

          {/* Full Navigation Bar (when not scrolled) */}
          <div className={`transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isScrolled ? 'opacity-0 h-0 overflow-hidden scale-90 transform -translate-y-4' : 'opacity-100 scale-100 transform translate-y-0'
          }`}>
            <div className="container mx-auto px-4">
              <div className="flex justify-center items-center h-20">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                          : "text-gray-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      {!isActive(item.href) && (
                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-200">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {isOpen && (
                <div className="md:hidden py-4 border-t border-white/10">
                  <div className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            : "text-gray-200 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dynamic Island (when scrolled) */}
          <div className={`transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isScrolled ? 'opacity-100 scale-100 transform translate-y-0' : 'opacity-0 h-0 overflow-hidden scale-110 transform translate-y-4'
          }`}>
            <div className={`px-6 py-4 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              isOpen ? 'px-8 py-5' : 'px-6 py-4'
            }`}>
              {/* Desktop Dynamic Island */}
              <div className="hidden md:block">
                {!isOpen ? (
                  // Collapsed state - shows navigation with names
                  <div className="flex items-center space-x-3">
                    {navigation.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110 group relative overflow-hidden ${
                            isActive(item.href)
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40 scale-105"
                              : "text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-purple-600/40 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20"
                          }`}
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          {/* Ripple effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                          
                          <IconComponent className={`h-4 w-4 transition-all duration-300 ${isActive(item.href) ? 'animate-pulse' : 'group-hover:rotate-12'}`} />
                          <span className="whitespace-nowrap relative z-10">{item.name}</span>
                          
                          {/* Active indicator */}
                          {isActive(item.href) && (
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 animate-pulse"></div>
                          )}
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                      )
                    })}
                  </div>
                ) : (
                  // This state won't be used since we're showing all items by default now
                  <div className="flex items-center space-x-3">
                    {navigation.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-110 ${
                            isActive(item.href)
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40"
                              : "text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-purple-600/40"
                          }`}
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span className="whitespace-nowrap">{item.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Dynamic Island */}
              <div className="md:hidden">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-500 hover:scale-110 group relative overflow-hidden"
                  >
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                    
                    <div className="relative z-10 flex items-center space-x-2">
                      {isOpen ? <X className="h-5 w-5 transition-transform duration-300 rotate-180" /> : <Menu className="h-5 w-5 transition-transform duration-300" />}
                      <span className="text-sm font-medium">Menu</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="md:hidden absolute top-full mt-3 left-1/2 transform -translate-x-1/2 w-64 animate-in slide-in-from-top-2 duration-500">
                <div className="bg-gradient-to-br from-blue-900/98 via-purple-900/98 to-indigo-900/98 backdrop-blur-xl rounded-2xl border-2 border-cyan-400/30 shadow-2xl shadow-blue-500/30 p-4 relative overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse rounded-2xl"></div>
                  
                  {navigation.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/40"
                            : "text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/50 hover:to-purple-600/50"
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-400 ease-out"></div>
                        
                        <IconComponent className={`h-4 w-4 relative z-10 transition-all duration-300 ${isActive(item.href) ? 'animate-pulse' : 'group-hover:rotate-12'}`} />
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
