"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Info, Calendar, Newspaper, Image as ImageIcon, AlertCircle, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
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

    // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return
      
      const target = event.target as Element
      const mobileMenu = document.querySelector('[data-mobile-menu]')
      const menuButton = document.querySelector('[data-menu-button]')
      
      if (mobileMenu && !mobileMenu.contains(target) && !menuButton?.contains(target)) {
        setIsOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-out ${
        isScrolled 
          ? 'top-6 transform scale-95' 
          : 'top-0 transform scale-100'
      }`}>
        <div className={`transition-all duration-1000 ease-out ${
          isScrolled 
            ? 'max-w-fit mx-auto transform translate-y-0' 
            : 'w-full transform translate-y-0'
        }`}>
          <div className={`relative overflow-hidden transition-all duration-1000 ease-out ${
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
            <div className={`transition-all duration-800 ease-out ${
              isScrolled ? 'opacity-0 h-0 overflow-hidden scale-90 transform -translate-y-4' : 'opacity-100 scale-100 transform translate-y-0'
            }`}>
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                  {/* KRMU Logo */}
                  <div className="flex items-center">
                    <Link href="/" className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105">
                      <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 group-hover:bg-white/20 transition-all duration-300">
                        <Image
                          src="/KRMU1.jpeg"
                          alt="KR Mangalam University"
                          width={40}
                          height={20}
                          className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="hidden lg:block">
                        <span className="text-white font-semibold text-sm">K.R MANGALAM UNIVERSITY</span>
                        <div className="text-cyan-300 text-xs">MAKERSPACE</div>
                      </div>
                    </Link>
                  </div>

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
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setIsOpen(!isOpen)
                      }} 
                      className="text-gray-200 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
                      aria-label="Toggle mobile menu"
                    >
                      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Island (when scrolled) */}
            <div className={`transition-all duration-800 ease-out ${
              isScrolled ? 'opacity-100 scale-100 transform translate-y-0' : 'opacity-0 h-0 overflow-hidden scale-110 transform translate-y-4'
            }`}>
              <div className={`px-6 py-4 transition-all duration-500 ease-out ${
                isOpen ? 'px-8 py-5' : 'px-6 py-4'
              }`}>
                {/* Desktop Dynamic Island */}
                <div className="hidden md:block">
                  {!isOpen ? (
                    // Collapsed state - shows logo and navigation with names
                    <div className="flex items-center space-x-4">
                      {/* KRMU Logo in Dynamic Island */}
                      <Link href="/" className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105">
                        <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 group-hover:bg-white/20 transition-all duration-300">
                          <Image
                            src="/KRMU1.jpeg"
                            alt="KRMU"
                            width={24}
                            height={12}
                            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                        <span className="text-white text-xs font-medium hidden xl:block">KRMU</span>
                      </Link>
                      
                      {/* Separator */}
                      <div className="w-px h-6 bg-white/20"></div>
                      
                      {/* Navigation Items */}
                      <div className="flex items-center space-x-3">
                        {navigation.map((item, index) => {
                          const IconComponent = item.icon
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out hover:scale-110 group relative overflow-hidden ${
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
                      data-menu-button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setIsOpen(!isOpen)
                      }}
                      className="flex items-center space-x-2 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-purple-600/40 transition-all duration-500 hover:scale-110 group relative overflow-hidden active:scale-95"
                      aria-label="Toggle mobile menu"
                    >
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                      
                      <div className="relative z-10 flex items-center space-x-2">
                        {isOpen ? (
                          <X className="h-5 w-5 transition-transform duration-300 rotate-180" />
                        ) : (
                          <Menu className="h-5 w-5 transition-transform duration-300" />
                        )}
                        <span className="text-sm font-medium">Menu</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"></div>
          
          {/* Mobile Menu Sidebar */}
          <div 
            data-mobile-menu
            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-blue-900/98 via-purple-900/98 to-indigo-900/98 backdrop-blur-xl border-l-2 border-cyan-400/30 shadow-2xl animate-in slide-in-from-right duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-2">
                  <Image
                    src="/KRMU1.jpeg"
                    alt="KRMU"
                    width={32}
                    height={16}
                    className="object-contain opacity-90"
                  />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm">KRMU</span>
                  <div className="text-cyan-300 text-xs">MAKERSPACE</div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsOpen(false)
                }}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-95"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-3">
              {navigation.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      // Ensure the menu closes when a link is clicked
                      setIsOpen(false)
                      // Allow default navigation behavior
                    }}
                    className={`flex items-center space-x-4 px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
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
                    
                    <IconComponent className={`h-5 w-5 relative z-10 transition-all duration-300 ${isActive(item.href) ? 'animate-pulse' : 'group-hover:rotate-12'}`} />
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Arrow indicator */}
                    <div className="ml-auto relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-white/70 text-sm">Welcome to</div>
                <div className="text-cyan-300 font-semibold">MAKERSPACE</div>
                <div className="text-white/50 text-xs mt-1">Innovation Hub</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
