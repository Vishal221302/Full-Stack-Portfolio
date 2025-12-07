"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Code2, Sparkles, ArrowRight } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleMenuItemClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-xl" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-rose-400 to-sky-400 bg-clip-text text-transparent">
                Vishal Patel
              </span>
              <span className="text-xs text-gray-400 font-medium">Full Stack Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-rose-500/20 to-sky-500/20" 
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full" />
                    )}
                    {item.label}
                    {isActive && (
                      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-amber-400" />
                    )}
                  </a>
                )
              })}
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-amber-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-2">
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 relative z-50"
            onClick={handleMenuClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Mobile Navigation - Fixed */}
          <div className={`lg:hidden fixed inset-0 w-full h-screen bg-gradient-to-b from-gray-950 to-gray-900 transition-all duration-300 ease-in-out ${
            isOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-2"
          }`}
          style={{ 
            top: '0', 
            zIndex: 40 
          }}>
            <div className="relative w-full h-full pt-20 pb-8 overflow-y-auto">
              <div className="max-w-md mx-auto px-6 flex flex-col gap-3">
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1)
                  const isActive = activeSection === sectionId
                  
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-rose-500/20 to-sky-500/20 text-white border border-white/10" 
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-sky-500 animate-pulse" />
                          <Sparkles className="w-4 h-4 text-amber-400" />
                        </div>
                      )}
                    </a>
                  )
                })}
                
                {/* Mobile CTA Button */}
                <a
                  href="#contact"
                  className="group mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold text-center hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 relative overflow-hidden"
                  onClick={handleMenuItemClick}
                >
                  {/* Glow effect for mobile */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span>Let's Connect</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-rose-500 to-sky-500 transition-all duration-300"
          style={{
            width: `${(navItems.findIndex(item => item.href.substring(1) === activeSection) + 1) / navItems.length * 100}%`
          }}
        />
      </div>
    </header>
  )
}