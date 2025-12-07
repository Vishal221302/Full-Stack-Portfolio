"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, BookOpen, Brain, Code2, Award, Calendar, Users, Zap, Star } from "lucide-react"

const educationData = [
  {
    year: "2021 - 2024",
    degree: "B.Tech in Computer Science",
    institution: "University of Technology",
    description: "I hold a Bachelor of Technology (B.Tech) in Computer Science, which has provided me with a strong foundation in both theoretical and practical aspects of computing.",
    courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"],
    color: "from-rose-500 to-amber-500",
    icon: Code2,
    gpa: "8.5/10",
    highlights: ["University Topper", "Published Research", "Project Excellence Award"]
  },
  {
    year: "2018 - 2021",
    degree: "Diploma in Mechanical Engineering (Production)",
    institution: "State Polytechnic Institute",
    description: "I hold a diploma in Mechanical Engineering with a focus on production techniques and manufacturing processes. My education has equipped me with a solid foundation in the principles of mechanical design, materials science, and production management.",
    courses: ["Manufacturing Processes", "CAD/CAM", "Production Management", "Material Science", "Quality Control"],
    color: "from-sky-500 to-cyan-500",
    icon: BookOpen,
    gpa: "85%",
    highlights: ["CAD Expert", "Production Planning", "Quality Management"]
  },
  {
    year: "2015 - 2017",
    degree: "Intermediate (Science)",
    institution: "State Board of Education",
    description: "Mathematics is not just about numbers and equations; it's a language of patterns and logic. Reading, in turn, is the key to unlocking the stories and theories behind those patterns, turning abstract numbers into meaningful narratives.",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
    color: "from-emerald-500 to-green-500",
    icon: Brain,
    gpa: "92%",
    highlights: ["Topper in Maths", "Science Olympiad", "Academic Excellence"]
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("[data-education-item]")
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
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-sky-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-rose-300 to-sky-300 bg-clip-text text-transparent">
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My academic journey that shaped my technical expertise and problem-solving skills
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {educationData.map((edu, index) => {
            const Icon = edu.icon
            return (
              <div
                key={index}
                data-education-item
                className=" group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/20">
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-3xl blur opacity-1 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Header with Icon */}
                  <div className={`relative p-8 pb-0 ${index === 0 ? 'bg-gradient-to-br from-rose-500/10 to-amber-500/10' : index === 1 ? 'bg-gradient-to-br from-sky-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-emerald-500/10 to-green-500/10'}`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} bg-opacity-20`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-300">GPA</div>
                        <div className="text-xl font-bold text-white">{edu.gpa}</div>
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">{edu.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-10">
                    {/* Degree Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-amber-400 transition-all duration-300">
                      {edu.degree}
                    </h3>
                    
                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-gray-300 font-medium">{edu.institution}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Key Courses */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-400">KEY COURSES</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-400">HIGHLIGHTS</span>
                      </div>
                      <div className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color}`} />
                            <span className="text-sm text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/10 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/10 rounded-br-3xl" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Academic Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Academic Journey Timeline</h3>
            <p className="text-gray-400">My path from foundation to specialization</p>
          </div>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-rose-500/20 via-amber-500/20 to-sky-500/20 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  year: "2015-2017",
                  title: "Foundation",
                  description: "Built strong analytical and logical thinking skills through Science and Mathematics",
                  icon: Brain,
                  color: "from-emerald-500 to-green-500"
                },
                {
                  year: "2018-2021",
                  title: "Technical Foundation",
                  description: "Developed engineering mindset with focus on production and manufacturing processes",
                  icon: Users,
                  color: "from-sky-500 to-cyan-500"
                },
                {
                  year: "2021-2024",
                  title: "Specialization",
                  description: "Mastered computer science principles and full-stack development technologies",
                  icon: Zap,
                  color: "from-rose-500 to-amber-500"
                },
              ].map((stage, index) => {
                const Icon = stage.icon
                return (
                  <div
                    key={index}
                    data-education-item
                    className="relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10">
                      <div className="flex flex-col items-center text-center">
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${stage.color} bg-opacity-10 border border-white/10 mb-4`}>
                          <Icon className={`w-4 h-4 ${stage.color.split(' ')[0].replace('from-', 'text-')}`} />
                          <span className="text-sm font-medium text-white">{stage.year}</span>
                        </div>
                        
                        {/* Stage Title */}
                        <h4 className="text-lg font-bold text-white mb-2">{stage.title}</h4>
                        
                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4">{stage.description}</p>
                        
                        {/* Progress Dot */}
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${stage.color} mt-2`} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Skills Development Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">Skills Development Through Education</h3>
            <p className="text-gray-400">How my education shaped my technical abilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                skill: "Problem Solving",
                level: 95,
                color: "from-rose-500 to-amber-500",
                education: "Mathematics + CS"
              },
              {
                skill: "Analytical Thinking",
                level: 90,
                color: "from-sky-500 to-cyan-500",
                education: "Physics + Engineering"
              },
              {
                skill: "Technical Knowledge",
                level: 92,
                color: "from-emerald-500 to-green-500",
                education: "Computer Science"
              },
              {
                skill: "Project Management",
                level: 85,
                color: "from-violet-500 to-purple-500",
                education: "Production Engineering"
              },
            ].map((skill, index) => (
              <div
                key={index}
                data-education-item
                className=" group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-white">{skill.skill}</h4>
                    <span className="text-sm font-bold text-white">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: 0,
                        animation: `fillWidth 1.5s ease-out forwards`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{skill.education}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Philosophy */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-amber-500 rounded-3xl blur opacity-20" />
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-amber-500/10 border border-white/10 mb-6">
                  <Brain className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-300">Learning Philosophy</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  How My Diverse Education Shaped Me
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey from Mechanical Engineering to Computer Science has given me a unique perspective. 
                  The systematic approach of engineering combined with the creative problem-solving of computer 
                  science allows me to approach development challenges from multiple angles.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-sm text-gray-300">Interdisciplinary Thinking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                    <span className="text-sm text-gray-300">Systematic Approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-gray-300">Creative Problem Solving</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "3+", label: "Years CS Education", color: "bg-gradient-to-r from-rose-500 to-amber-500" },
                  { number: "40+", label: "Technical Courses", color: "bg-gradient-to-r from-sky-500 to-cyan-500" },
                  { number: "5+", label: "Academic Awards", color: "bg-gradient-to-r from-emerald-500 to-green-500" },
                  { number: "100%", label: "Learning Passion", color: "bg-gradient-to-r from-violet-500 to-purple-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-white/10"
                  >
                    <div className={`text-2xl font-bold text-white mb-1 ${stat.color.split(' ')[0].replace('bg-', 'text-')}`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}