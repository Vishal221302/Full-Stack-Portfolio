"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, MessageSquare, Send, Phone, MapPin, Clock, Check, Linkedin, Github, Sparkles, Zap, Instagram } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll("[data-contact-item]")
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

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     // Send data to Google Sheet
//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbyL-tmm_PUPauWy-UabmpfvWT1gMPJxE2142EkUTa1fND69olf9mlVuLff5H2XOw1uk/exec",
//       {
//         method: "POST",
//         body: JSON.stringify(formData),
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "" });

//       // Hide success message after 4 seconds
//       setTimeout(() => setSubmitted(false), 4000);
//     } else {
//       console.error("Google Script Error:", data);
//       alert("Something went wrong!");
//     }
//   } catch (error) {
//     console.error("Request Failed:", error);
//     alert("Error sending data to Google Sheets.");
//   }

//   setIsSubmitting(false);
// };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // ⬇️ Add Google Sheet API call
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyL-tmm_PUPauWy-UabmpfvWT1gMPJxE2142EkUTa1fND69olf9mlVuLff5H2XOw1uk/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
  } catch (error) {
    console.log("Google Sheet API Error:", error);
  }

  // Your existing code (unchanged)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  setSubmitted(true);
  setIsSubmitting(false);
  setFormData({ name: "", email: "", message: "" });

  setTimeout(() => setSubmitted(false), 4000);
};



  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "vishalpatel221302@gmail.com",
      link: "mailto:vishalpatel221302@gmail.com",
      color: "from-rose-500 to-pink-500",
      description: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 8175844601",
      link: "tel: +918175844601",
      color: "from-emerald-500 to-green-500",
      description: "Available 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Vijay Nagar Ghaziabad, UP",
      link: "#",
      color: "from-sky-500 to-cyan-500",
      description: "Open to remote work"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24 Hours",
      link: "#",
      color: "from-amber-500 to-orange-500",
      description: "Typically responds quickly"
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vishal-patel05",
      color: "from-blue-600 to-blue-700",
      username: "vishal-patel05"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Vishal221302",
      color: "from-gray-700 to-gray-800",
      username: "Vishal221302"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/vishal_patel9043/",
      color: "from-violet-500 to-purple-600",
      username: "vishal_patel9043"
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-sky-500/10 border border-white/10 backdrop-blur-sm mb-6">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-rose-300 to-sky-300 bg-clip-text text-transparent">
              LET'S CONNECT
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    data-contact-item
                    href={info.link}
                    className=" group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-10`}>
                          <Icon className={`w-5 h-5 ${info.color.split(' ')[0].replace('from-', 'text-')}`} />
                        </div>
                        <Zap className="w-4 h-4 text-gray-400  group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                        <p className="text-gray-300 text-sm">{info.info}</p>
                        <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div data-contact-item >
              <h3 className="text-xl font-bold text-white mb-4">Connect on Social</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${social.color} bg-opacity-10`}>
                          <Icon className={`w-5 h-5 ${social.color.split(' ')[0].replace('from-', 'text-')}`} />
                        </div>
                        <div>
                          <span className="text-gray-300 font-medium">{social.label}</span>
                          <p className="text-gray-500 text-sm">{social.username}</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                        Follow →
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div data-contact-item className=" p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <div className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Current Availability</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    I'm currently available for new projects and collaborations.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-400 font-medium">✅ Accepting new work</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Typically responds in 2-4 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div data-contact-item >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10">
              {/* Form Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-rose-500/10 to-amber-500/10">
                    <Send className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>
                <p className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-amber-400 transition-colors">
                      👤
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-rose-400 transition-colors">
                      ✉️
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <div className="relative">
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 focus:border-white/30 outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-sky-400 transition-colors">
                      💬
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden ${
                    submitted
                      ? "bg-gradient-to-r from-emerald-500 to-green-500"
                      : isSubmitting
                      ? "bg-gradient-to-r from-amber-500 to-orange-500"
                      : "bg-gradient-to-r from-rose-500 to-amber-500 hover:shadow-2xl hover:shadow-rose-500/30"
                  } ${(isSubmitting || submitted) ? '' : 'hover:-translate-y-1'}`}
                >
                  {/* Loading/Submit Animation */}
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                      <div>
                        <p className="text-emerald-300 font-medium">Thank you for your message!</p>
                        <p className="text-emerald-400/80 text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Form Decorative Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-rose-500/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-sky-500/30 rounded-br-3xl" />
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div data-contact-item className=" mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
              <p className="text-gray-400">
                Let's schedule a call to discuss your requirements and how I can help bring your vision to life.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:vishalpatel221302@gmail.com"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a
                href="tel:+918175844601"
                className="px-8 py-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 text-gray-200 font-medium hover:border-white/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <Clock className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}