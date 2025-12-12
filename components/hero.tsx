"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail, Code, Cpu, Database, Terminal, Zap, Globe, Server, Sparkles, Download } from "lucide-react"
import Image from "next/image"

const CodingIcons = [
  { icon: Code, color: "text-rose-400" },
  { icon: Cpu, color: "text-sky-400" },
  { icon: Database, color: "text-emerald-400" },
  { icon: Terminal, color: "text-amber-400" },
  { icon: Zap, color: "text-violet-400" },
  { icon: Globe, color: "text-cyan-400" },
  { icon: Server, color: "text-fuchsia-400" },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Coding Icons */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {CodingIcons.map((item, index) => {
            const Icon = item.icon
            const duration = 20 + Math.random() * 20
            const delay = Math.random() * 5
            const size = 24 + Math.random() * 32
            const left = Math.random() * 100
            const opacity = 0.15 + Math.random() * 0.2
            
            return (
              <div
                key={index}
                className={`absolute ${item.color}`}
                style={{
                  left: `${left}%`,
                  top: '-5%',
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animation: `float-diagonal ${duration}s ease-in-out ${delay}s infinite`,
                }}
              >
                <Icon size={size} className="drop-shadow-lg" />
              </div>
            )
          })}
        </div>
      )}

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i}
            className="absolute rounded-full bg-gradient-to-r from-rose-500/30 to-sky-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animation: `pulse ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full relative z-10">
        <div ref={heroRef} className="opacity-0 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content - Shows below image on mobile */}
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
            {/* Animated Welcome Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-500/10 to-sky-500/10 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-rose-300 to-sky-300 bg-clip-text text-transparent">
                Welcome to My Digital Space
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="text-gray-100">
                  Developer &
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Creative Designer
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
                I blend technical expertise with creative vision to build 
                <span className="text-amber-300 font-medium"> immersive digital experiences</span> 
                that leave lasting impressions.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-400">TECH STACK</p>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {['React', 'Next.js', 'React Native', 'Node.js', 'Tailwind', 'MongoDB', 'Figma', 'Mysql'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-sm font-medium bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 hover:border-rose-500/30 hover:from-rose-500/10 hover:to-rose-500/5 transition-all duration-300 cursor-default group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-6">
              <a
                href="#projects"
                className="group px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-gray-950 font-semibold hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 lg:gap-3 text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} className="lg:group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 hover:border-rose-500/50 text-gray-200 font-medium transition-all duration-300 hover:-translate-y-1 relative overflow-hidden text-center"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-amber-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
              <a
                href="/documents/vishal_resume.pdf"
                download="Vishal_Patel_Full_Stack_Developer_CV.pdf"
                className="group px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 lg:gap-3 text-center"
              >
                <Download size={18} className="lg:group-hover:translate-y-1 transition-transform duration-300" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 lg:pt-8">
              <p className="text-sm font-medium text-gray-400">CONNECT WITH ME</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/Vishal221302", color: "hover:from-gray-800 hover:to-gray-900" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-patel05/", color: "hover:from-blue-600 hover:to-blue-700" },
                  { icon: Mail, href: "mailto: vishalpatel221302@gmail.com", color: "hover:from-rose-600 hover:to-amber-600" },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="group p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Image Section - Shows at top on mobile */}
          <div className="relative h-[400px] lg:h-[600px] w-full ">
            {/* Container for 3D effect */}
            <div className="relative h-full w-full transform transition-transform duration-700 lg:group-hover:scale-[1.02]">
              
              {/* Back glow effect */}
              <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-br from-rose-500/20 via-amber-500/20 to-sky-500/20 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-50 lg:group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Main image container */}
              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                
                {/* Image with object-cover for perfect fit */}
                <div className="absolute inset-0">
                  <Image
                    src="/office1.jpg"
                    alt="Full Stack Developer at work"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-sky-500/10 mix-blend-overlay" />
                
                {/* Floating elements overlay */}
                <div className="absolute inset-0">
                  {/* Code snippets floating */}
                  <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-xl animate-pulse" />
                  <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 blur-xl animate-pulse delay-1000" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-2xl">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent animate-shimmer" />
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent animate-shimmer delay-300" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent animate-shimmer delay-600" />
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500 to-transparent animate-shimmer delay-900" />
                  </div>
                </div>
                
                {/* Content overlay - Hidden on mobile, shown on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 bg-gradient-to-t from-gray-950 via-gray-950/95 to-transparent  lg:block">
                  <div className="space-y-2 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-2 h-6 lg:h-8 bg-gradient-to-b from-rose-500 to-amber-500 rounded-full" />
                      <h3 className="text-lg lg:text-2xl font-bold text-white">
                        Currently Building
                      </h3>
                    </div>
                    <p className="text-sm lg:text-base text-gray-300 font-light">
                      Modern web applications with cutting-edge technologies and responsive design principles.
                    </p>
                    <div className="flex items-center gap-3 lg:gap-4 pt-2 lg:pt-4">
                      <div className="flex items-center gap-1 lg:gap-2">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-xs lg:text-sm text-emerald-400 font-medium">Available for Work</span>
                      </div>
                      <div className="h-3 lg:h-4 w-px bg-gray-700" />
                      <div className="flex items-center gap-1 lg:gap-2">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-amber-500" />
                        <span className="text-xs lg:text-sm text-amber-400 font-medium">Open to Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating tech badges - Hidden on mobile, shown on desktop */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex flex-col gap-2 lg:gap-3 hidden lg:flex">
                  <div className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg bg-gray-950/90 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-mono text-cyan-400">React.js</span>
                  </div>
                  <div className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg bg-gray-950/90 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-mono text-green-400">Next.js</span>
                  </div>
                  <div className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg bg-gray-950/90 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-mono text-violet-400">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile caption */}
            <div className="mt-4 text-center lg:hidden">
              <div className="inline-flex px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-white/10">
                <p className="text-xs text-gray-400 font-medium">
                  🚀 Passionate about clean code & beautiful design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}