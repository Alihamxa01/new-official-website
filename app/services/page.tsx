import { Code2, Brain, Palette, MessageSquare, Building2, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Code2 size={48} />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like Next.js, React, and Node.js. We create responsive, fast, and scalable solutions that drive business growth.",
      benefits: [
        "Responsive design for all devices and screen sizes",
        "SEO-optimized architecture for better visibility",
        "High performance and lightning-fast loading speeds",
        "Scalable and maintainable codebase for future growth",
      ],
      useCase:
        "Perfect for businesses needing modern websites, e-commerce platforms, progressive web apps, or complex web applications that deliver exceptional user experiences.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Building2 size={48} />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed specifically for your business needs. From enterprise applications to specialized tools that streamline your operations.",
      benefits: [
        "Built to your exact specifications and requirements",
        "Seamless integration with existing systems and workflows",
        "Ongoing support, maintenance, and feature updates",
        "Scalable architecture designed for business growth",
      ],
      useCase:
        "Ideal for businesses with unique workflows that require specialized software solutions, enterprise-level applications, or custom tools for operational efficiency.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Brain size={48} />,
      title: "AI Integration",
      description:
        "Integrate artificial intelligence into your existing systems or build new AI-powered applications to automate processes and gain competitive advantages.",
      benefits: [
        "Process automation and intelligent optimization",
        "Advanced data analysis and predictive insights",
        "Machine learning capabilities for better decisions",
        "Custom AI model development and deployment",
      ],
      useCase:
        "Great for businesses looking to leverage AI for competitive advantage, automate repetitive tasks, gain insights from data, or enhance customer experiences.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <MessageSquare size={48} />,
      title: "Chatbot Development",
      description:
        "Intelligent chatbots and conversational AI systems that provide 24/7 customer support, enhance user engagement, and streamline communication.",
      benefits: [
        "24/7 automated customer support and assistance",
        "Advanced natural language processing capabilities",
        "Multi-platform deployment across web and mobile",
        "Seamless integration with existing business systems",
      ],
      useCase:
        "Perfect for businesses wanting to improve customer service, reduce support costs, handle high-volume inquiries, or provide instant assistance to users.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: <Palette size={48} />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, accessible, and visually appealing digital experiences that convert visitors into loyal customers.",
      benefits: [
        "Comprehensive user research and usability testing",
        "Responsive design systems and component libraries",
        "Accessibility compliance and inclusive design",
        "Conversion rate optimization and user journey mapping",
      ],
      useCase:
        "Essential for businesses wanting to improve user satisfaction, increase conversion rates, enhance brand perception, or redesign existing digital products.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Code2 className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Our Services</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white">Comprehensive Digital Solutions</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Tailored services designed to drive your business forward in the modern digital landscape with
              cutting-edge technology and innovative approaches.
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-slide-in-left`}>
                  <div
                    className={`bg-gradient-to-br ${service.bgGradient} p-10 rounded-3xl border border-slate-100 shadow-lg`}
                  >
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-8`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4 text-slate-900">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} animate-slide-in-right`}>
                  <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                      <span className="text-sm font-medium text-slate-700">Use Case</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Perfect For</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.useCase}</p>

                    <div className="space-y-4">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      <div className="text-sm text-slate-500">Free consultation • Custom quote • 24/7 support</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Our Process</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text-blue">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your requirements, goals, and technical needs to create a comprehensive project roadmap and strategy.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team creates detailed designs and prototypes, ensuring perfect alignment with your vision and user needs.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your solution using best practices, with regular updates and transparent communication throughout.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "We deploy, test, and provide ongoing support to ensure your solution performs optimally and exceeds expectations.",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div
                  className={`bg-gradient-to-br ${process.bgGradient} p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}
                  >
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              {
                "Let's discuss your project and how we can help bring your vision to life with our expert team and cutting-edge solutions."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
    </div>
  )
}
