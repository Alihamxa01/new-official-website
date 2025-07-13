// import { Code2, Brain, Palette, MessageSquare, Building2, ArrowRight, CheckCircle } from "lucide-react"
// import Link from "next/link"

// export default function Services() {
//   const services = [
//     {
//       icon: <Code2 size={48} />,
//       title: "Web Development",
//       description:
//         "Custom web applications built with modern frameworks like Next.js, React, and Node.js. We create responsive, fast, and scalable solutions that drive business growth.",
//       benefits: [
//         "Responsive design for all devices and screen sizes",
//         "SEO-optimized architecture for better visibility",
//         "High performance and lightning-fast loading speeds",
//         "Scalable and maintainable codebase for future growth",
//       ],
//       useCase:
//         "Perfect for businesses needing modern websites, e-commerce platforms, progressive web apps, or complex web applications that deliver exceptional user experiences.",
//       gradient: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-50 to-cyan-50",
//     },
//     {
//       icon: <Building2 size={48} />,
//       title: "Custom Software",
//       description:
//         "Tailored software solutions designed specifically for your business needs. From enterprise applications to specialized tools that streamline your operations.",
//       benefits: [
//         "Built to your exact specifications and requirements",
//         "Seamless integration with existing systems and workflows",
//         "Ongoing support, maintenance, and feature updates",
//         "Scalable architecture designed for business growth",
//       ],
//       useCase:
//         "Ideal for businesses with unique workflows that require specialized software solutions, enterprise-level applications, or custom tools for operational efficiency.",
//       gradient: "from-purple-500 to-pink-500",
//       bgGradient: "from-purple-50 to-pink-50",
//     },
//     {
//       icon: <Brain size={48} />,
//       title: "AI Integration",
//       description:
//         "Integrate artificial intelligence into your existing systems or build new AI-powered applications to automate processes and gain competitive advantages.",
//       benefits: [
//         "Process automation and intelligent optimization",
//         "Advanced data analysis and predictive insights",
//         "Machine learning capabilities for better decisions",
//         "Custom AI model development and deployment",
//       ],
//       useCase:
//         "Great for businesses looking to leverage AI for competitive advantage, automate repetitive tasks, gain insights from data, or enhance customer experiences.",
//       gradient: "from-green-500 to-emerald-500",
//       bgGradient: "from-green-50 to-emerald-50",
//     },
//     {
//       icon: <MessageSquare size={48} />,
//       title: "Chatbot Development",
//       description:
//         "Intelligent chatbots and conversational AI systems that provide 24/7 customer support, enhance user engagement, and streamline communication.",
//       benefits: [
//         "24/7 automated customer support and assistance",
//         "Advanced natural language processing capabilities",
//         "Multi-platform deployment across web and mobile",
//         "Seamless integration with existing business systems",
//       ],
//       useCase:
//         "Perfect for businesses wanting to improve customer service, reduce support costs, handle high-volume inquiries, or provide instant assistance to users.",
//       gradient: "from-orange-500 to-red-500",
//       bgGradient: "from-orange-50 to-red-50",
//     },
//     {
//       icon: <Palette size={48} />,
//       title: "UI/UX Design",
//       description:
//         "User-centered design that creates intuitive, accessible, and visually appealing digital experiences that convert visitors into loyal customers.",
//       benefits: [
//         "Comprehensive user research and usability testing",
//         "Responsive design systems and component libraries",
//         "Accessibility compliance and inclusive design",
//         "Conversion rate optimization and user journey mapping",
//       ],
//       useCase:
//         "Essential for businesses wanting to improve user satisfaction, increase conversion rates, enhance brand perception, or redesign existing digital products.",
//       gradient: "from-pink-500 to-rose-500",
//       bgGradient: "from-pink-50 to-rose-50",
//     },
//   ]

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="py-24 gradient-bg relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="animate-fade-in">
//             <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
//               <Code2 className="w-4 h-4 text-white mr-2" />
//               <span className="text-sm font-medium text-white">Our Services</span>
//             </div>
//             <h1 className="text-6xl font-bold mb-6 text-white">Comprehensive Digital Solutions</h1>
//             <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
//               Tailored services designed to drive your business forward in the modern digital landscape with
//               cutting-edge technology and innovative approaches.
//             </p>
//           </div>
//         </div>

//         {/* Background Elements */}
//         <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
//         <div
//           className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-24">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
//               >
//                 <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-slide-in-left`}>
//                   <div
//                     className={`bg-gradient-to-br ${service.bgGradient} p-10 rounded-3xl border border-slate-100 shadow-lg`}
//                   >
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-8`}
//                     >
//                       {service.icon}
//                     </div>
//                     <h2 className="text-4xl font-bold mb-6 text-slate-900">{service.title}</h2>
//                     <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

//                     <div className="mb-8">
//                       <h3 className="text-xl font-bold mb-4 text-slate-900">Key Benefits:</h3>
//                       <ul className="space-y-3">
//                         {service.benefits.map((benefit, benefitIndex) => (
//                           <li key={benefitIndex} className="flex items-start">
//                             <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                             <span className="text-slate-600">{benefit}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} animate-slide-in-right`}>
//                   <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
//                     <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
//                       <span className="text-sm font-medium text-slate-700">Use Case</span>
//                     </div>
//                     <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Perfect For</h3>
//                     <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.useCase}</p>

//                     <div className="space-y-4">
//                       <Link
//                         href="/contact"
//                         className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
//                       >
//                         Get Started
//                         <ArrowRight className="ml-2 w-5 h-5" />
//                       </Link>
//                       <div className="text-sm text-slate-500">Free consultation • Custom quote • 24/7 support</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-slide-up">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
//               <Building2 className="w-4 h-4 text-blue-600 mr-2" />
//               <span className="text-sm font-medium text-blue-700">Our Process</span>
//             </div>
//             <h2 className="text-5xl font-bold mb-6 gradient-text-blue">How We Work</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               We follow a proven methodology to ensure successful project delivery and exceptional results
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Discovery",
//                 description:
//                   "We analyze your requirements, goals, and technical needs to create a comprehensive project roadmap and strategy.",
//                 gradient: "from-purple-500 to-pink-500",
//                 bgGradient: "from-purple-50 to-pink-50",
//               },
//               {
//                 step: "02",
//                 title: "Design",
//                 description:
//                   "Our team creates detailed designs and prototypes, ensuring perfect alignment with your vision and user needs.",
//                 gradient: "from-blue-500 to-cyan-500",
//                 bgGradient: "from-blue-50 to-cyan-50",
//               },
//               {
//                 step: "03",
//                 title: "Development",
//                 description:
//                   "We build your solution using best practices, with regular updates and transparent communication throughout.",
//                 gradient: "from-green-500 to-emerald-500",
//                 bgGradient: "from-green-50 to-emerald-50",
//               },
//               {
//                 step: "04",
//                 title: "Delivery",
//                 description:
//                   "We deploy, test, and provide ongoing support to ensure your solution performs optimally and exceeds expectations.",
//                 gradient: "from-orange-500 to-red-500",
//                 bgGradient: "from-orange-50 to-red-50",
//               },
//             ].map((process, index) => (
//               <div key={index} className="text-center animate-slide-up">
//                 <div
//                   className={`bg-gradient-to-br ${process.bgGradient} p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover`}
//                 >
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}
//                   >
//                     {process.step}
//                   </div>
//                   <h3 className="text-xl font-bold mb-4 text-slate-900">{process.title}</h3>
//                   <p className="text-slate-600 leading-relaxed">{process.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 gradient-bg relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="animate-fade-in">
//             <h2 className="text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
//             <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
//               {
//                 "Let's discuss your project and how we can help bring your vision to life with our expert team and cutting-edge solutions."
//               }
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               >
//                 Start Your Project
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Link>
//               <Link
//                 href="/about"
//                 className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
//               >
//                 Learn More About Us
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Background Elements */}
//         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
//         <div
//           className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </section>
//     </div>
//   )
// }


import {
  Code2,
  Brain,
  Palette,
  MessageSquare,
  Building2,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Users,
  Sparkles,
  Target,
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Code2 size={40} />,
      title: "Web Development",
      subtitle: "Modern Digital Solutions",
      description: "Create stunning, high-performance web applications with cutting-edge technologies.",
      features: ["Next.js & React", "Responsive Design", "SEO Optimization", "E-commerce Integration"],
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Building2 size={40} />,
      title: "Custom Software",
      subtitle: "Tailored Business Solutions",
      description: "Transform your business operations with custom software designed for your needs.",
      features: ["Enterprise Apps", "Database Design", "System Integration", "Cloud Solutions"],
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Brain size={40} />,
      title: "AI Integration",
      subtitle: "Intelligent Automation",
      description: "Harness artificial intelligence to revolutionize your business processes.",
      features: ["Machine Learning", "NLP Solutions", "Computer Vision", "Predictive Analytics"],
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Chatbot Development",
      subtitle: "Conversational AI",
      description: "Enhance customer engagement with intelligent chatbots and AI assistants.",
      features: ["AI Chatbots", "Multi-Platform", "NLU Integration", "24/7 Support"],
      gradient: "from-orange-600 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description: "Create beautiful, intuitive digital experiences that convert visitors into customers.",
      features: ["User Research", "Interface Design", "Design Systems", "Usability Testing"],
      gradient: "from-pink-600 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section - New Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-700">Professional Services</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 gradient-text leading-tight">
                Our Expert <span className="gradient-text-blue">Services</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Comprehensive digital solutions designed to transform your business and accelerate growth through
                innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 gradient-bg text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <div className="inline-flex items-center px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-xl">
                  <Clock className="mr-2 w-5 h-5" />
                  Free Consultation
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl shadow-2xl border border-slate-200">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                      <div className="w-12 h-12 gradient-bg-blue rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold gradient-text-blue mb-1">5+</div>
                      <div className="text-slate-600 text-sm">Services</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold gradient-text mb-1">Expert</div>
                      <div className="text-slate-600 text-sm">Team</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                      <div className="text-slate-600 text-sm">Quality</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                      <div className="text-slate-600 text-sm">Support</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - New Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Target className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">What We Offer</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text-blue">Service Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          {/* Services in 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm font-semibold text-slate-600 mb-4">{service.subtitle}</p>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom 2 Services in 2-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(3, 5).map((service, index) => (
              <div
                key={index + 3}
                className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm font-semibold text-slate-600 mb-4">{service.subtitle}</p>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Horizontal Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <Award className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-700">Why Choose Us</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Why reeCoder?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We combine technical expertise with business understanding to deliver solutions that drive real results
                for your business.
              </p>
            </div>
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Building2 className="w-8 h-8" />,
                    title: "Scalable Solutions",
                    description: "Built to grow with your business",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Expert Team",
                    description: "Seasoned professionals with deep expertise",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Fast Delivery",
                    description: "Quick turnaround without compromising quality",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Quality Assured",
                    description: "Rigorous testing and quality control",
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - New Vertical Timeline Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Our Process</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">How We Work</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our streamlined process ensures successful project delivery
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a comprehensive project strategy.",
                gradient: "from-purple-600 to-pink-500",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our team creates detailed designs and interactive prototypes for your approval.",
                gradient: "from-blue-600 to-cyan-500",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We build your solution using best practices with rigorous testing throughout.",
                gradient: "from-green-600 to-emerald-500",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your solution and provide ongoing support for optimal performance.",
                gradient: "from-orange-600 to-red-500",
              },
            ].map((process, index) => (
              <div key={index} className="flex items-center space-x-8 animate-slide-up">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}
                >
                  {process.step}
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - New Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                  <Star className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm font-semibold text-white">Get Started</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Let's discuss your project and create something amazing together. Get a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-4 bg-white/20 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
                  >
                    Meet Our Team
                    <Users className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="p-12 bg-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Free</div>
                    <div className="text-white/80">Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/80">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-white/80">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
