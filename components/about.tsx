"use client"

import { useEffect, useRef } from "react"
import { Code2, Palette, Server, Zap, Award, Users, Briefcase, Target } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll("[data-animate]")
          elements.forEach((el, index) => {
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

    return () => observer.disconnect()
  }, [])

  const skills = [
    { icon: Code2, label: "Frontend", color: "text-sky-400", bg: "from-sky-500/10 to-sky-500/5" },
    { icon: Server, label: "Backend", color: "text-emerald-400", bg: "from-emerald-500/10 to-emerald-500/5" },
    { icon: Palette, label: "Design", color: "text-violet-400", bg: "from-violet-500/10 to-violet-500/5" },
    { icon: Zap, label: "Figma", color: "text-amber-400", bg: "from-amber-500/10 to-amber-500/5" },
  ]

  const stats = [
    { icon: Briefcase, value: "3.8", label: "Years Experience", color: "text-rose-400" },
    { icon: Award, value: "20+", label: "Projects Completed", color: "text-sky-400" },
    // { icon: Users, value: "20+", label: "Happy Clients", color: "text-emerald-400" },
    // { icon: Target, value: "10+", label: "Tech Stack Skills", color: "text-amber-400" },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div data-animate className="opacity-0 mb-16 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-sky-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-rose-300 to-sky-300 bg-clip-text text-transparent">
              GET TO KNOW ME
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div data-animate className="opacity-0 space-y-6">
              <div className="space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  I'm a <span className="text-amber-300 font-medium">passionate full-stack developer</span> with 3.8 years of experience building 
                  scalable web applications. My journey in tech started with a curiosity to understand how things work, 
                  which led me to master both frontend and backend technologies.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  I believe in writing <span className="text-emerald-300 font-medium">clean, maintainable code</span> and creating 
                  <span className="text-rose-300 font-medium"> user-centric designs</span>. Every project is an opportunity 
                  to learn something new and push the boundaries of what's possible on the web.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  When I'm not coding, you'll find me <span className="text-sky-300 font-medium">exploring new tech trends</span>, 
                  contributing to open-source projects, or sharing knowledge with the community.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div data-animate className="opacity-0 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.label}
                      className="group p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.bg}`}>
                          <Icon className={`w-5 h-5 ${skill.color}`} />
                        </div>
                        <span className="text-gray-300 font-medium">{skill.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div data-animate className="opacity-0 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/10 to-sky-500/10 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                        <div className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400">
                          #{index + 1}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Profile Card */}
            <div data-animate className="opacity-0 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-sky-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-rose-500 to-amber-500 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                        <img 
                          src="/office1.jpg" 
                          alt="Professional portrait"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Vishal Patel</h3>
                    <p className="text-gray-400 font-medium">Full Stack Developer</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">95%</div>
                      <div className="text-xs text-gray-400">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">99%</div>
                      <div className="text-xs text-gray-400">On Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">100%</div>
                      <div className="text-xs text-gray-400">Code Quality</div>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-rose-500/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-sky-500/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-500/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-500/50 rounded-br-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div data-animate className="opacity-0 mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Something Amazing?</h3>
              <p className="text-gray-400">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
            </div>
            <a
              href="#contact"
              className="group px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Start a Conversation
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}