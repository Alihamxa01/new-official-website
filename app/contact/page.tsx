"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Globe, Award } from "lucide-react"

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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Mail className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Contact Us</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white">{"Let's Build Something Amazing"}</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? {"Let's"} discuss how we can help transform your business with
              cutting-edge digital solutions and innovative technology.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                  <Send className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Send Message</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 gradient-text-blue">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none transition-all duration-200"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 gradient-bg text-white font-semibold rounded-xl hover:shadow-lg disabled:opacity-70 transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <div className="flex items-center justify-center text-green-600 bg-green-50 p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                    <Users className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-700">Contact Info</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">{"Let's"} Connect</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {"We're"} here to help you bring your digital vision to life. Reach out to us through any of the
                    channels below, and {"we'll"} get back to you within 24 hours with a detailed response.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                    <div className="w-12 h-12 gradient-bg-blue rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-slate-900">Email</h3>
                      <p className="text-slate-700 font-medium">info@reecoder.com</p>
                      <p className="text-sm text-slate-500">{"We'll"} respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                  

                  <div className="flex items-start p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-slate-900">Location</h3>
                      <p className="text-slate-700 font-medium">Global Remote Team</p>
                      <p className="text-sm text-slate-500">Serving clients worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-slate-900">Business Hours</h3>
                      <p className="text-slate-700 font-medium">Monday - Friday: 9:00 AM - 7:00 PM (EST)</p>
                      <p className="text-slate-700 font-medium">Saturday: 10:00 AM - 4:00 PM </p>
                      <p className="text-sm text-slate-500"> support available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 shadow-lg ">
                  <h3 className="text-xl font-bold mb-6 gradient-text-blue">Why Choose reeCoder?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <CheckCircle className="w-5 h-5" />,
                        text: "Free initial consultation and project assessment",
                      },
                      { icon: <Globe className="w-5 h-5" />, text: "Transparent pricing and realistic timelines" },
                      { icon: <Users className="w-5 h-5" />, text: "Dedicated project manager for your success" },
                      { icon: <Award className="w-5 h-5" />, text: "Ongoing support and maintenance included" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="text-green-500 mr-3 mt-0.5">{item.icon}</div>
                        <span className="text-slate-600">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Globe className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Global Presence</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Worldwide Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              While we operate as a remote-first team, we serve clients across the globe with localized support and
              understanding
            </p>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 animate-slide-up">
            <div className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center relative z-10">
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text-blue">Global Remote Excellence</h3>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Our distributed team allows us to provide 24/7 support and work across different time zones to serve
                  our international clients effectively. We understand global markets and deliver solutions that work
                  everywhere.
                </p>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-float"></div>
              <div
                className="absolute bottom-10 right-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 right-20 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-float"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
