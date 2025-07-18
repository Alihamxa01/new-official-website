"use client"

import type React from "react"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  Globe,
  Award,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-bg text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <Mail className="w-4 h-4 text-white mr-2" />
            <span className="text-sm font-medium text-white">Contact Us</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">Let's Work Together on Something Great</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Got an idea? Need help bringing it to life? We're here to turn your vision into a powerful digital solution—designed to grow your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl shadow-2xl border animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Send className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Send Message</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 gradient-text-blue">Let’s Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project, goals, and needs..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-8 py-4 gradient-bg text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <div className="flex items-center justify-center text-green-600 bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in delay-300">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
                <Users className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-700">Contact Info</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Let’s Talk</h2>
              <p className="text-lg text-slate-600">  We're just a message away. Whether you’ve got a detailed plan or just a starting idea, reach out and we'll get back to you within 24 hours.</p>
            </div>
            <div className="space-y-6">  
              <InfoBox icon={<Mail size={24} />} title="Email" subtitle="info@reecoder.com" note="We usually reply within 24 hours" color="blue" />
              <InfoBox icon={<MapPin size={24} />} title="Location" subtitle="Global Remote Team" note="Remote-first, globally active" color="green" />
              <InfoBox icon={<Clock size={24} />} title="Business Hours" subtitle="Mon-Fri: 9AM–6PM (EST)" note="Support available 24/7" color="orange" />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold mb-4 gradient-text-blue">What Makes reeCoder Different?</h3>
              <ul className="space-y-3">
                {[
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Free intro call to understand your needs" },
                  { icon: <Globe className="w-5 h-5" />, text: "Fair pricing and realistic timelines" },
                  { icon: <Users className="w-5 h-5" />, text: "One project manager focused just on you" },
                  { icon: <Award className="w-5 h-5" />, text: "Ongoing help after your project launches" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">{item.icon}</span>
                    <span className="text-slate-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



{/* Why Choose Us */}
<section className="py-24 bg-slate-50">
  <div className="max-w-5xl mx-auto px-4 text-center animate-fade-in">
    <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
      <Award className="w-4 h-4 text-yellow-600 mr-2" />
      <span className="text-sm font-medium text-yellow-800">Why Choose reeCoder?</span>
    </div>
    <h2 className="text-5xl font-bold mb-6 gradient-text-blue">What Makes Us Stand Out</h2>
    <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
      Whether you're starting from scratch or scaling your business, reeCoder is the team that delivers high-performance digital solutions tailored for your success.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
      {[
        {
          icon: <CheckCircle className="w-6 h-6 text-green-500" />,
          text: "Free intro call to understand your needs",
        },
        {
          icon: <Globe className="w-6 h-6 text-blue-500" />,
          text: "Clear pricing and honest deadlines",
        },
        {
          icon: <Users className="w-6 h-6 text-purple-500" />,
          text: "One project manager focused just on you",
        },
        {
          icon: <Award className="w-6 h-6 text-orange-500" />,
          text: "Ongoing support and maintenance included",
        },
      ].map((item, idx) => (
        <div key={idx} className="flex items-start p-6 bg-white rounded-2xl shadow-md border border-slate-100">
          <div className="mr-4">{item.icon}</div>
          <p className="text-slate-700 font-medium">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      
      {/* Global Presence */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Globe className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Global Presence</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 gradient-text">A Team That Works Wherever You Are</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Being a fully remote team helps us support clients around the world—across different time zones, with the same high-quality work and care.
          </p>
          <div className="mt-12 p-10 bg-white rounded-3xl shadow-2xl border border-slate-100">
            <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text-blue">Built for Global Success</h3>
            <p className="text-slate-600">
              Our international team works around the clock, so your deadlines are met no matter your timezone. We adapt to your market and deliver results that fit your world.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoBox({ icon, title, subtitle, note, color }: any) {
  const bg = {
    blue: "from-blue-50 to-cyan-50",
    green: "from-green-50 to-emerald-50",
    orange: "from-orange-50 to-red-50",
  }[color]
  return (
    <div className={`flex items-start p-6 bg-gradient-to-br ${bg} rounded-2xl border shadow-sm`}>
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-slate-900">{title}</h3>
        <p className="text-slate-700 font-medium">{subtitle}</p>
        <p className="text-sm text-slate-500">{note}</p>
      </div>
    </div>
  )
}
