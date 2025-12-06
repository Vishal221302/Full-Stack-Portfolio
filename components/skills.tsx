"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Code2, 
  Palette, 
  Server, 
  Zap, 
  Cpu, 
  Database, 
  Globe, 
  Terminal,
  Cloud,
  GitBranch,
  Layers,
  Shield,
  Smartphone,
  Wifi,
  // Cogs,
  Rocket,
  Sparkles
} from "lucide-react"

const techStack = [
  { name: "React", icon: Code2, color: "from-cyan-400 to-sky-500" },
  { name: "Next.js", icon: Rocket, color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", icon: Cpu, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: Palette, color: "from-teal-400 to-cyan-500" },
  { name: "Node.js", icon: Server, color: "from-emerald-400 to-green-500" },
  { name: "Express", icon: Terminal, color: "from-gray-400 to-gray-500" },
  { name: "MongoDB", icon: Database, color: "from-green-400 to-emerald-500" },
  { name: "Mysql", icon: Database, color: "from-blue-400 to-indigo-500" },
  // { name: "GraphQL", icon: Zap, color: "from-pink-400 to-rose-500" },
  // { name: "AWS", icon: Cloud, color: "from-amber-400 to-orange-500" },
  // { name: "Docker", icon: Layers, color: "from-blue-400 to-cyan-500" },
  { name: "Git", icon: GitBranch, color: "from-orange-400 to-red-500" },
  { name: "Firebase", icon: Wifi, color: "from-yellow-400 to-orange-500" },
  { name: "Vercel", icon: Globe, color: "from-gray-400 to-black" },
  { name: "React Native", icon: Smartphone, color: "from-blue-400 to-purple-500" },
  // { name: "Python", icon: Cogs, color: "from-blue-400 to-yellow-500" },
]

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux", "Zustand"],
    description: "Building responsive, accessible user interfaces",
    icon: Code2,
    color: "from-cyan-500 to-sky-600",
    bg: "bg-gradient-to-br from-cyan-500/5 to-sky-500/5"
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    description: "Scalable server-side solutions & databases",
    icon: Server,
    color: "from-emerald-500 to-green-600",
    bg: "bg-gradient-to-br from-emerald-500/5 to-green-500/5"
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "CI/CD", "Vercel", "Firebase", "Linux", "Nginx"],
    description: "Infrastructure & deployment automation",
    icon: Cloud,
    color: "from-amber-500 to-orange-600",
    bg: "bg-gradient-to-br from-amber-500/5 to-orange-500/5"
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "Agile", "Figma", "Jest", "Webpack", "ESLint", "UI/UX"],
    description: "Development workflow & collaboration",
    icon: Zap,
    color: "from-violet-500 to-purple-600",
    bg: "bg-gradient-to-br from-violet-500/5 to-purple-500/5"
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("[data-skill-category]")
          items.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-fade-in-up")
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Infinite scrolling animation
    const scrollContainer = scrollContainerRef.current
    let animationId: number
    let position = 0

    const animateScroll = () => {
      if (scrollContainer) {
        position -= 0.5 // Adjust speed here
        if (position <= -scrollContainer.scrollWidth / 2) {
          position = 0
        }
        scrollContainer.style.transform = `translateX(${position}px)`
        setScrollPosition(position)
      }
      animationId = requestAnimationFrame(animateScroll)
    }

    if (scrollContainer) {
      animateScroll()
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-gradient-to-r from-amber-500 to-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              TECHNICAL EXPERTISE
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastery across modern web development technologies and best practices
          </p>
        </div>

        {/* Infinite Scrolling Tech Stack */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 py-4"
            style={{ width: 'max-content' }}
          >
            {/* First set */}
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="group flex-shrink-0 w-40 h-40 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} bg-opacity-10 mb-4`}>
                      <Icon className={`w-8 h-8 ${tech.color.split(' ')[0].replace('from-', 'text-')}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                    <div className="mt-2 w-12 h-1 rounded-full bg-gradient-to-r from-gray-600 to-gray-400" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.abs(scrollPosition) % 100 < 25 * dot ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                />
              ))}
              <span className="ml-2 text-xs text-gray-400">Continuously updating</span>
            </div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                data-skill-category
                className="opacity-0 group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 p-3 rounded-xl ${category.bg} mb-4`}>
                    <Icon className={`w-5 h-5 ${category.color.split(' ')[0].replace('from-', 'text-')} text-white`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
                  <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-sm text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Skill Proficiency Bars */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">Skill Proficiency</h3>
            <p className="text-gray-400">Level of expertise across key technologies</p>
          </div>
          
          {[
            { skill: "React/Next.js", level: 95, color: "from-cyan-500 to-sky-500" },
            { skill: "React Native", level: 90, color: "from-blue-500 to-indigo-500" },
            { skill: "Node.js/Express", level: 88, color: "from-emerald-500 to-green-500" },
            { skill: "UI/UX Design", level: 90, color: "from-purple-500 to-pink-500" },
            { skill: "Cloud & DevOps", level: 70, color: "from-amber-500 to-orange-500" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">{item.skill}</span>
                <span className="text-sm font-bold text-white">{item.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: 0,
                    animation: `fillWidth 1.5s ease-out forwards`,
                    animationDelay: `${index * 0.2}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Certifications & Achievements</h3>
            <p className="text-gray-400">Professional recognition and accomplishments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "AWS Certified Developer", 
                issuer: "Amazon Web Services",
                year: "2023",
                icon: Cloud,
                color: "from-amber-500 to-orange-500"
              },
              { 
                title: "React.js Expert", 
                issuer: "Vercel",
                year: "2023",
                icon: Rocket,
                color: "from-gray-500 to-black"
              },
              { 
                title: "TypeScript Professional", 
                issuer: "Microsoft",
                year: "2022",
                icon: Cpu,
                color: "from-blue-500 to-indigo-500"
              },
            ].map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-10`}>
                      <Icon className={`w-6 h-6 ${cert.color.split(' ')[0].replace('from-', 'text-')}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-400">{cert.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-gray-300">
                <span className="text-white font-semibold">Continuously learning</span> new technologies and staying updated with industry trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}