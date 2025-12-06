"use client"
import { Github, Linkedin, Mail, Twitter, Instagram, Codepen, Heart, Code2, ArrowUp, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Vishal221302",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:text-white",
      iconColor: "text-gray-400",
      bg: "bg-gray-900/50"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-patel05/",
      label: "Linkedin",
      color: "hover:bg-blue-600 hover:text-white",
      iconColor: "text-blue-400",
      bg: "bg-blue-900/20"
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white",
      iconColor: "text-sky-400",
      bg: "bg-sky-900/20"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vishal_patel9043/",
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-orange-500 hover:text-white",
      iconColor: "text-pink-400",
      bg: "bg-pink-900/20"
    },
    {
      icon: Codepen,
      href: "#",
      label: "CodePen",
      color: "hover:bg-gray-800 hover:text-white",
      iconColor: "text-gray-400",
      bg: "bg-gray-900/50"
    },
    {
      icon: Mail,
      href: "mailto:vishalpatel221302@gmail.com",
      label: "Email",
      color: "hover:bg-rose-600 hover:text-white",
      iconColor: "text-rose-400",
      bg: "bg-rose-900/20"
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-sky-400 bg-clip-text text-transparent">
                  Vishal Patel
                </span>
                <span className="text-sm font-medium text-gray-400">Full Stack Developer</span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-md">
              Building exceptional digital experiences with modern technologies and innovative solutions.
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 py-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm">{link.name}</span>
                  <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Let's Connect
            </h4>
            <p className="text-gray-400 text-sm">
              Follow me on social media for updates, tips, and interesting web development content.
            </p>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color.split(' ')[0].replace('hover:', '')} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex flex-col items-center gap-2">
                        <div className={`p-2 rounded-lg ${social.bg}`}>
                          <Icon className={`w-4 h-4 ${social.iconColor}`} />
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
              <span>Built with passion</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span>Made with</span>
              <span className="text-white font-medium">Next.js</span>
              <span className="text-gray-500">•</span>
              <span className="text-white font-medium">Tailwind CSS</span>
              <span className="text-gray-500">•</span>
              <span className="text-white font-medium">TypeScript</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {currentYear} <span className="text-white font-medium">Vishal Patel</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Crafted with precision and attention to detail
            </p>
          </div>
        </div>

        {/* Tech Stack Badges - Mobile */}
        <div className="mt-6 md:hidden">
          <div className="flex flex-wrap justify-center gap-2">
            {['Next.js', 'Tailwind', 'TypeScript', 'Vercel'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp className="w-5 h-5 text-white group-hover:text-rose-300 transition-colors" />
            </div>
          </div>
        </button>
      )}

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="h-20 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>
    </footer>
  )
}