// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Globe, Award } from "lucide-react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setSubmitStatus("success")
//       setFormData({ name: "", email: "", message: "" })

//       // Reset status after 3 seconds
//       setTimeout(() => setSubmitStatus("idle"), 3000)
//     }, 1000)
//   }

//   return (
//     <div className="pt-16 md:pt-20">
//       {/* Hero Section */}
//       <section className="py-12 md:py-24 gradient-bg-blue  relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="animate-fade-in">
//             <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 md:mb-8">
//               <Mail className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
//               <span className="text-xs md:text-sm font-medium text-white">Contact Us</span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">{"Let's Build Something Amazing"}</h1>
//             <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
//               Ready to start your next project? {"Let's"} discuss how we can help transform your business with
//               cutting-edge digital solutions and innovative technology.
//             </p>
//           </div>
//         </div>

//         {/* Background Elements */}
//         <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full animate-float"></div>
//         <div
//           className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-12 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
//             {/* Contact Form */}
//             <div className="animate-slide-in-left">
//               <div className="bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-slate-100">
//                 <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
//                   <Send className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
//                   <span className="text-xs md:text-sm font-medium text-blue-700">Send Message</span>
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text-blue">Get In Touch</h2>
//                 <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 md:mb-3">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 md:mb-3">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200"
//                       placeholder="Enter your email address"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 md:mb-3">
//                       Project Details *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none transition-all duration-200"
//                       placeholder="Tell us about your project, goals, and requirements..."
//                     />
//                   </div>
//                    <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full flex items-center justify-center px-6 py-3 md:px-8 md:py-4 gradient-bg-blue text-white font-semibold rounded-lg md:rounded-xl hover:shadow-md md:hover:shadow-lg disabled:opacity-70 transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105"
//                   >
//                     {isSubmitting ? (
//                       <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-t-2 border-b-2 border-white"></div>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
//                       </>
//                     )}
//                   </button>
//                   {submitStatus === "success" && (
//                     <div className="flex items-center justify-center text-sm md:text-base text-green-600 bg-green-50 p-3 md:p-4 rounded-lg md:rounded-xl">
//                       <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                       Thank you! Your message has been sent successfully.
//                     </div>
//                   )}
//                 </form>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="animate-slide-in-right">
//               <div className="space-y-6 md:space-y-8">
//                 <div>
//                   <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-green-100 rounded-full mb-4 md:mb-6">
//                     <Users className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-1 md:mr-2" />
//                     <span className="text-xs md:text-sm font-medium text-green-700">Contact Info</span>
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 gradient-text-blue">{"Let's"} Connect</h2>
//                   <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
//                     We're just a message away. Whether you've got a detailed plan or just a starting idea, reach out and we'll get back to you within 24 hours.
//                   </p>
//                 </div>

//                 <div className="space-y-4 md:space-y-6">
//                   <div className="flex items-start p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl border border-blue-100">
//                     <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg-blue rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                       <Mail size={20} className="text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">Email</h3>
//                       <p className="text-sm md:text-base text-slate-700 font-medium">info@reecoder.com</p>
//                       <p className="text-xs md:text-sm text-slate-500">{"We'll"} respond within 24 hours</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl border border-green-100">
//                     <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                       <MapPin size={20} className="text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">Location</h3>
//                       <p className="text-sm md:text-base text-slate-700 font-medium">Global Remote Team</p>
//                       <p className="text-xs md:text-sm text-slate-500">Serving clients worldwide</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start p-4 md:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl md:rounded-2xl border border-orange-100">
//                     <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//                       <Clock size={20} className="text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">Business Hours</h3>
//                       <p className="text-sm md:text-base text-slate-700 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                       <p className="text-sm md:text-base text-slate-700 font-medium">Saturday: 10:00 AM - 3:00 PM</p>
//                       <p className="text-xs md:text-sm text-slate-500">Support available 24/7</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-12 md:py-24 bg-slate-50">
//         <div className="max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 text-center animate-fade-in">
//           <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-yellow-100 rounded-full mb-4">
//             <Award className="w-3 h-3 md:w-4 md:h-4 text-yellow-600 mr-1 md:mr-2" />
//             <span className="text-xs md:text-sm font-medium text-yellow-800">Why Choose reeCoder?</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text-blue">What Makes Us Stand Out</h2>
//           <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto">
//             Whether you're starting from scratch or scaling your business, reeCoder is the team that delivers high-performance digital solutions tailored for your success.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 text-left">
//             {[
//               {
//                 icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
//                 text: "Free intro call to understand your needs",
//               },
//               {
//                 icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
//                 text: "Clear pricing and honest deadlines",
//               },
//               {
//                 icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
//                 text: "One project manager focused just on you",
//               },
//               {
//                 icon: <Award className="w-5 h-5  md:w-6 text-orange-500" />,
//                 text: "Ongoing support and maintenance included",
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-start p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm md:shadow-md border border-slate-100">
//                 <div className="mr-3 md:mr-4">{item.icon}</div>
//                 <p className="text-sm md:text-base text-slate-700 font-medium">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Global Presence Section */}
//       <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16 animate-slide-up">
//             <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6">
//               <Globe className="w-3 h-3 md:w-4 md:h-4 text-purple-600 mr-1 md:mr-2" />
//               <span className="text-xs md:text-sm font-medium text-purple-700">Global Presence</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Worldwide Impact</h2>
//             <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               While we operate as a remote-first team, we serve clients across the globe with localized support and
//               understanding
//             </p>
//           </div>

//          <div className="max-w-lg mx-auto bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-slate-200 animate-slide-up">
//   <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
//     <div className="text-center relative z-10 px-4 py-5">
//       <div className="w-14 h-14 md:w-20 md:h-20 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
//         <Globe size={32} className="text-white" />
//       </div>
//       <h3 className="text-xl md:text-2xl font-semibold mb-3 gradient-text-blue">
//         Global Remote Excellence
//       </h3>
//       <p className="text-base md:text-lg text-slate-700 max-w-lg mx-auto leading-relaxed">
//         Our distributed team allows us to provide 24/7 support and work across time zones to serve
//         international clients effectively. We understand global markets and deliver solutions that work
//         everywhere.
//       </p>
//     </div>

//     {/* Floating Elements */}
//     <div className="absolute top-3 left-3 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-float"></div>
//     <div
//       className="absolute bottom-3 right-3 w-10 h-10 bg-purple-200 rounded-full opacity-40 animate-float"
//       style={{ animationDelay: "2s" }}
//     ></div>
//     <div
//       className="absolute top-1/2 right-4 w-8 h-8 bg-green-200 rounded-full opacity-40 animate-float"
//       style={{ animationDelay: "4s" }}
//     ></div>
//   </div>
// </div>


//         </div>
//       </section>
//     </div>
//   )
// }




























"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Globe, Award } from "lucide-react"
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

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
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-24 gradient-bg-blue  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 md:mb-8">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-white">Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">{"Let's Build Something Amazing"}</h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? {"Let's"} discuss how we can help transform your business with
              cutting-edge digital solutions and innovative technology.
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Form */}
            {/* <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-slate-100">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
                  <Send className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
                  <span className="text-xs md:text-sm font-medium text-blue-700">Send Message</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 gradient-text-blue">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 md:py-4 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400 resize-none transition-all duration-200"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>
                   <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 md:px-8 md:py-4 gradient-bg-blue text-white font-semibold rounded-lg md:rounded-xl hover:shadow-md md:hover:shadow-lg disabled:opacity-70 transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-t-2 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                      </>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <div className="flex items-center justify-center text-sm md:text-base text-green-600 bg-green-50 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </div>
            </div> */}







            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-green-100 rounded-full mb-4 md:mb-6">
                    <Users className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-1 md:mr-2" />
                    <span className="text-xs md:text-sm font-medium text-green-700">Contact Info</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 gradient-text-blue">{"Let's"} Connect</h2>
                  <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                    We're just a message away. Whether you've got a detailed plan or just a starting idea, reach out and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl border border-blue-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg-blue rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">Email</h3>
                      <p className="text-sm md:text-base text-slate-700 font-medium">info@reecoder.com</p>
                      <p className="text-xs md:text-sm text-slate-500">{"We'll"} respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl border border-green-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">Location</h3>
                      <p className="text-sm md:text-base text-slate-700 font-medium">Global Remote Team</p>
                      <p className="text-xs md:text-sm text-slate-500">Serving clients worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 md:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl md:rounded-2xl border border-orange-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">Business Hours</h3>
                      <p className="text-sm md:text-base text-slate-700 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm md:text-base text-slate-700 font-medium">Saturday: 10:00 AM - 3:00 PM</p>
                      <p className="text-xs md:text-sm text-slate-500">Support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 text-center animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-yellow-100 rounded-full mb-4">
            <Award className="w-3 h-3 md:w-4 md:h-4 text-yellow-600 mr-1 md:mr-2" />
            <span className="text-xs md:text-sm font-medium text-yellow-800">Why Choose reeCoder?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text-blue">What Makes Us Stand Out</h2>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto">
            Whether you're starting from scratch or scaling your business, reeCoder is the team that delivers high-performance digital solutions tailored for your success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 text-left">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                text: "Free intro call to understand your needs",
              },
              {
                icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
                text: "Clear pricing and honest deadlines",
              },
              {
                icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
                text: "One project manager focused just on you",
              },
              {
                icon: <Award className="w-5 h-5  md:w-6 text-orange-500" />,
                text: "Ongoing support and maintenance included",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm md:shadow-md border border-slate-100">
                <div className="mr-3 md:mr-4">{item.icon}</div>
                <p className="text-sm md:text-base text-slate-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6">
              <Globe className="w-3 h-3 md:w-4 md:h-4 text-purple-600 mr-1 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-purple-700">Global Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Worldwide Impact</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              While we operate as a remote-first team, we serve clients across the globe with localized support and
              understanding
            </p>
          </div>

         <div className="max-w-lg mx-auto bg-white p-4 md:p-5 rounded-2xl shadow-lg border border-slate-200 animate-slide-up">
  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
    <div className="text-center relative z-10 px-4 py-5">
      <div className="w-14 h-14 md:w-20 md:h-20 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
        <Globe size={32} className="text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3 gradient-text-blue">
        Global Remote Excellence
      </h3>
      <p className="text-base md:text-lg text-slate-700 max-w-lg mx-auto leading-relaxed">
        Our distributed team allows us to provide 24/7 support and work across time zones to serve
        international clients effectively. We understand global markets and deliver solutions that work
        everywhere.
      </p>
    </div>

    {/* Floating Elements */}
    <div className="absolute top-3 left-3 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-float"></div>
    <div
      className="absolute bottom-3 right-3 w-10 h-10 bg-purple-200 rounded-full opacity-40 animate-float"
      style={{ animationDelay: "2s" }}
    ></div>
    <div
      className="absolute top-1/2 right-4 w-8 h-8 bg-green-200 rounded-full opacity-40 animate-float"
      style={{ animationDelay: "4s" }}
    ></div>
  </div>
</div>


        </div>
      </section>

{/* {/* Premium Social Connect Section */}
<section className="py-24 bg-white relative overflow-hidden text-slate-800">
  {/* Decorative blurred shapes */}
  <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-200 rounded-full blur-[100px] opacity-10"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-40"></div>
    <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-200 rounded-full blur-[100px] opacity-10"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-40"></div>



  <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 text-center">
    {/* Soft badge */}
    <span className="inline-block px-4 py-1.5 text-sm font-semibold text-cyan-700 bg-cyan-100 rounded-full border border-cyan-200 mb-5">
      Stay Connected
    </span>

    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
      Join Our <span className="text-cyan-600">Professional Network</span>
    </h2>

    {/* Description */}
    <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed">
      Be part of our online presence. Stay updated with the latest insights, trends, and announcements directly from our team.
    </p>

    {/* Social Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[
        {
          name: "LinkedIn",
          icon: <FaLinkedinIn className="w-6 h-6 text-[#0A66C2]" />,
          url: "https://www.linkedin.com/company/reecoder/",
        },
        {
          name: "Twitter",
          icon: <FaTwitter className="w-6 h-6 text-[#1DA1F2]" />,
          url: "https://x.com/thereecoder",
        },
        {
          name: "Instagram",
          icon: <FaInstagram className="w-6 h-6 text-[#E1306C]" />,
          url: "https://www.instagram.com/thereecoder/",
        },
      
      ].map((platform, idx) => (
        <a
          key={idx}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-slate-200 hover:border-cyan-400 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center"
          aria-label={`Follow us on ${platform.name}`}
        >
          <div className="mb-3 group-hover:scale-110 transition-transform">
            {platform.icon}
          </div>
          <span className="text-sm font-medium text-slate-700 group-hover:text-cyan-600 transition-colors">
            {platform.name}
          </span>
        </a>
      ))}
    </div>

    {/* Email Contact Card */}
    <div className="mt-20 max-w-xl mx-auto bg-white border border-slate-200 rounded-xl shadow-md p-6 sm:p-8 text-left">
      <div className="flex items-start sm:items-center gap-5">
        <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full border border-cyan-200">
          <HiOutlineMail className="w-6 h-6 text-cyan-500" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-800 mb-1">Connect via Email</h3>
          <a 
            href="mailto:info@reecoder.com" 
            className="text-cyan-600 hover:text-cyan-500 font-medium text-sm inline-flex items-center"
          >
            info@reecoder.com <FiArrowUpRight className="ml-1" />
          </a>
          <p className="text-xs text-slate-500 mt-1">We prioritize professional queries</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
