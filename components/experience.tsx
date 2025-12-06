"use client"

import { useEffect, useRef } from "react"
import { Briefcase, Building, Calendar, ChevronRight, Target, Users, Zap, Award, Code2, Rocket } from "lucide-react"

const experiences = [
  {
    company: "Ayanshtech Solution",
    position: "Full Stack Developer",
    period: "Jun 2022 - Present",
    description:
      "Leading full-stack development initiatives, architecting scalable solutions, and mentoring junior developers while implementing modern DevOps practices.",
    achievements: [
      "Architected and deployed 15+ scalable web applications serving enterprise clients",
      "Reduced system latency by 35% through performance optimization and caching strategies",
      "Led migration from monolithic architecture to microservices, improving scalability",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes"
    ],
    tech: ["React", "Next.js", "Node.js", "React Native", "Mysql", "TypeScript", "MongoDB"],
    color: "from-rose-500 to-amber-500",
    icon: Rocket,
    type: "Full-time",
    duration: "3.5+ years"
  },
  {
    company: "Ayanshtech Solution",
    position: "Full Stack Developer Intern",
    period: "Jan 2022 - Jun 2022",
    description: "Completed intensive 6-month internship program, contributing to real-world projects and mastering modern web development technologies.",
    achievements: [
      "Contributed to 8+ production applications under senior developer guidance",
      "Mastered React ecosystem and modern JavaScript/TypeScript best practices",
      "Implemented responsive designs with pixel-perfect accuracy across devices",
      "Gained hands-on experience with version control and agile development workflows"
    ],
    tech: ["React", "JavaScript", "CSS", "Git", "REST API", "Bootstrap"],
    color: "from-sky-500 to-cyan-500",
    icon: Code2,
    type: "Internship",
    duration: "6 months"
  }
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("[data-experience-item]")
          items.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate-fade-in-up")
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      {/* Timeline Line */}
      <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-sky-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-rose-300 to-sky-300 bg-clip-text text-transparent">
              PROFESSIONAL JOURNEY
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From internship to full-stack development: My growth journey through hands-on experience
          </p>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={index}
                data-experience-item
                className={`opacity-0 relative ${
                  isEven 
                    ? "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start" 
                    : "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start lg:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 -translate-x-3 w-6 h-6 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-white/20 flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                </div>

                {/* Content Card */}
                <div className={`ml-12 lg:ml-0 ${
                  isEven ? "lg:col-start-2" : "lg:col-start-1 lg:text-right"
                }`}>
                  <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Company & Period Header */}
                      <div className={`flex items-center justify-between mb-4 ${
                        isEven ? "" : "lg:flex-row-reverse"
                      }`}>
                        <div className={`flex items-center gap-3 ${
                          isEven ? "" : "lg:flex-row-reverse"
                        }`}>
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${exp.color} bg-opacity-10`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                            <div className={`flex items-center gap-2 mt-1 ${
                              isEven ? "" : "lg:justify-end"
                            }`}>
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-xs font-semibold text-white flex items-center gap-1`}>
                          <span>#{index + 1}</span>
                          <span className="text-[10px] opacity-80">{exp.type}</span>
                        </div>
                      </div>

                      {/* Position & Duration */}
                      <div className={`flex items-center justify-between mb-6 ${
                        isEven ? "" : "lg:flex-row-reverse"
                      }`}>
                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                          <ChevronRight className="w-5 h-5 text-amber-400" />
                          {exp.position}
                        </h4>
                        <div className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400">
                          {exp.duration}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        <div className={`flex items-center justify-between ${
                          isEven ? "" : "lg:flex-row-reverse"
                        }`}>
                          <p className="text-sm font-medium text-gray-400">KEY ACHIEVEMENTS</p>
                          <div className={`text-xs px-2 py-1 rounded-full ${exp.type === 'Internship' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                            {exp.type}
                          </div>
                        </div>
                        <ul className={`space-y-2 ${isEven ? "" : "lg:text-right"}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li 
                              key={i}
                              className={`flex items-start gap-2 text-gray-300 text-sm ${
                                isEven ? "" : "lg:flex-row-reverse"
                              }`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1.5 flex-shrink-0`} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-sm font-medium text-gray-400 mb-3">TECHNOLOGY STACK</p>
                        <div className={`flex flex-wrap gap-2 ${isEven ? "" : "lg:justify-end"}`}>
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 text-gray-300 hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute top-0 ${isEven ? "left-0" : "lg:right-0"} w-16 h-16 border-t-2 border-l-2 ${isEven ? "border-l-2" : "lg:border-r-2"} border-rose-500/30 rounded-tl-2xl ${isEven ? "rounded-tl-2xl" : "lg:rounded-tr-2xl"}`} />
                      <div className={`absolute bottom-0 ${isEven ? "right-0" : "lg:left-0"} w-16 h-16 border-b-2 ${isEven ? "border-r-2" : "lg:border-l-2"} border-sky-500/30 ${isEven ? "rounded-br-2xl" : "lg:rounded-bl-2xl"}`} />
                    </div>
                  </div>
                </div>

                {/* Date Marker for Desktop */}
                <div className={`hidden lg:flex items-center justify-center h-full ${
                  isEven ? "lg:col-start-1" : "lg:col-start-2"
                }`}>
                  <div className={`relative px-6 py-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 ${
                    isEven ? "text-right mr-auto" : "text-left ml-auto"
                  }`}>
                    <div className="text-3xl font-bold text-white mb-1">
                      {exp.type === 'Internship' ? exp.period.split(' ')[0] : 'Present'}
                    </div>
                    <div className="text-sm text-gray-400">
                      {exp.type === 'Internship' ? 'Started' : 'Current'}
                    </div>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                      isEven ? "-right-3" : "-left-3"
                    } w-6 h-6 rotate-45 bg-gradient-to-br from-gray-800 to-gray-900 border-t border-l border-white/10`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Career Progression Summary */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Career Progression</h3>
            <p className="text-gray-400">Growth timeline from intern to full-stack developer</p>
          </div>
          
          
        </div>

        {/* Additional Experience Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "3+", label: "Years at Ayanshtech", color: "text-rose-400", icon: Calendar },
            { value: "3.5+", label: "Total Experience", color: "text-sky-400", icon: Target },
            { value: "20+", label: "Technologies Mastered", color: "text-emerald-400", icon: Zap },
            { value: "95%", label: "Client Satisfaction", color: "text-amber-400", icon: Award },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                data-experience-item
                className="opacity-0 group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'from-')}/10 ${stat.color.replace('text-', 'to-')}/5`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Career Path Note */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <Building className="w-5 h-5 text-amber-400" />
            <p className="text-gray-300">
              <span className="text-white font-semibold">Currently open</span> to new opportunities and exciting challenges in product development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}