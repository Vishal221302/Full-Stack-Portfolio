"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github, ArrowRight, Eye, Star, Zap, Globe } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Life Navigator Panel",
    description:
      "Life Navigator Panel organizes calls, tasks, and essential services in one streamlined React.js interface, helping users manage daily workflows efficiently.",
    tags: ["React.js", "Laravel", "Stripe", "PostgreSQL","MUI"],
    link: "https://life.avertisystems.com/",
    github: "#",
    image: "/project_images/lifenavigator.png",
    status: "Live",
    highlights: ["Centralized tasks and call management", "Smooth, responsive React.js interface", "Easy access to all essential services"],
    color: "from-rose-500 to-amber-500"
  },
  {
    title: "Client Panel",
    description:
      "Client Panel allows users to request services, manage tasks, track progress, and communicate easily through a secure and organized online portal.",
    tags: ["React", "Laravel", "WebSocket", "Bootstrap","PostgreSQL"],
    link: "https://client.avertisystems.com/",
    github: "#",
    image: "/project_images/client_panel.png",
    status: "Live",
    highlights: ["Simple service request and task tracking", "Clear status updates and progress overview", "Secure, user-friendly client portal"],
    color: "from-sky-500 to-cyan-500"
  },
  {
    title: "DJ Rental",
    description: "DJ Rental platform allows users to easily book DJs, lighting, and decoration services for events with fast scheduling and seamless online booking.",
    tags: ["React.Js", "Node.js", "Mysql", "Bootstrap"],
    link: "https://midtownav.btruetech.com/",
    github: "#",
    image: "/project_images/djrental.png",
    status: "Live",
    highlights: ["Easy DJ and lighting booking", "Event-ready decoration services", "Fast, simple online scheduling"],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "SVM IT Solution",
    description: "VM IT Solution delivers modern IT services, web development, and digital solutions with a professional Next.js website focused on speed, security, and performance.",
    tags: ["Next.js", "TypeScript", "Tailwindcss"],
    link: "https://svmitsolution.com/",
    github: "#",
    image: "/project_images/svm_it.png",
    status: "Live",
    highlights: ["Fast, SEO-optimized Next.js website for better user experience", "Professional presentation of IT services and solutions", "Secure, scalable structure ready for future expansion"],
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Calling Dialer",
    description: "A React.js dialer using Twilio enables secure, real-time calling from the browser with fast UI, easy controls, and seamless call management.",
    tags: ["React.js", "Bootstrap", "Twilio", "MUI"],
    link: "https://call.website-design-india.com",
    github: "#",
    image: "/project_images/calling_dailer.png",
    status: "Live",
    highlights: ["Web-Based Calling (No Hardware Required)", "Secure Authentication Using Twilio Tokens", "Real-Time Call Controls"],
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "School Management Systems Dashbaord",
    description: "A School Management System Dashboard offers centralized control for attendance, students, teachers, exams, and reports with an intuitive, fast, and organized interface.",
    tags: ["Next.js", "Tailwindcss", "Vercel"],
    link: "https://sms-indol.vercel.app/",
    github: "#",
    image: "/project_images/SMS.png",
    status: "Live",
    highlights: ["Easy student & teacher management", "Quick attendance and exam tracking", "Real-time performance reports"],
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Task Management Systems",
    description: "Next.js Task Management System organizes projects, tasks, teams, and deadlines with realtime updates, secure auth, and scalable performance for businesses",
    tags: ["Next.js", "Tailwindcss", "Vercel"],
    link: "https://projecthub-eight.vercel.app/",
    github: "#",
    image: "/project_images/project-management.png",
    status: "Live",
    highlights: ["Real-time task updates and notifications", "Role-based access and secure authentication", "Scalable Next.js frontend with API integration"],
    color: "from-fuchsia-500 to-pink-500"
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("[data-project-item]")
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

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-sky-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-rose-300 to-sky-300 bg-clip-text text-transparent">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work, from full-stack applications to innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-project-item
              className="opacity-0 group relative"
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20">
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/30 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-300' :
                      project.status === 'Beta' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-sky-500/20 text-sky-300'
                    } border border-white/10 backdrop-blur-sm`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="mb-4">
                    <a href={project.link} className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-amber-400 transition-all duration-300">
                      {project.title}
                    </a>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        className="group/link flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href={project.github}
                        className="group/github flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                    <button className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 hover:border-white/20 transition-colors group/btn">
                      <Eye className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/10 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/10 rounded-br-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Banner */}
        <div data-project-item className="opacity-0 mt-16">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-amber-500/5 to-sky-500/5" />
            
            {/* <div className="relative grid lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/20 border border-white/10 mb-4">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-300">Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Enterprise SaaS Platform
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    A comprehensive SaaS platform built for enterprise clients with advanced analytics, 
                    team collaboration features, and scalable infrastructure handling 1M+ requests daily.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">1M+</div>
                      <div className="text-sm text-gray-400">Daily Requests</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">40%</div>
                      <div className="text-sm text-gray-400">Faster</div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative h-64 lg:h-full rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/projects/featured.jpg"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Have a project in mind?
              </h3>
              <p className="text-xl text-gray-400">
                Let's collaborate and build something amazing together
              </p>
            </div>
            <a
              href="#contact"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}