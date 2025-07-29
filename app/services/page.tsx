import {
  Code2,
  Brain,
  MessageSquare,
  Building2,
  ArrowRight,
  CheckCircle,
  Repeat,
  Star,
  Zap,
  Users,
  Sparkles,
  Target,
  Award,
  Bot,
  Lightbulb,
  CodeXml,
   DollarSign, BadgeDollarSign, Settings, Timer
} from "lucide-react"
import { FileText, Scale, Clock, SquareStack, Calendar, Cpu } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Web Development",
      subtitle: "Modern Digital Solutions",
      description: "Create stunning, high-performance web applications with cutting-edge technologies.",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
  
    {
      icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Chatbot Development",
      subtitle: "Conversational AI",
      description: "We build custom chatbots tailored to your needs — with text, image, and voice support",
      gradient: "from-orange-600 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: <Bot className="w-8 h-8 md:w-10 md:h-10" />,
      title: "AI Agent Creation",
      subtitle: "Intelligent Agents for Smarter Operations",
      description: "We build custom AI agents that automate tasks, make decisions, and interact naturally with users — tailored to your business needs.",
      gradient: "from-pink-600 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  {
  title: "API Development",
  icon: <CodeXml className="w-8 h-8 md:w-10 md:h-10" />,
  subtitle: "High-Performance API Solutions",
  description:
    "We create simple and fast APIs that make it easy for your apps to work together, share information, and run more smoothly and efficiently.",
  gradient: "from-green-500 to-lime-500",
  bgGradient: "from-lime-100 to-green-100",
},

  
  ]

  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-18 md:py-20 lg:py-24 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4 sm:mb-6 md:mb-8">
              <Users className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
              <span className="text-xs sm:text-sm font-medium text-white">Our Services</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">Services by Our Experts</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
From concept to launch, we deliver powerful, scalable AI integration services that help you grow, engage, and lead in your industry.            </p>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* Services Intro */}
      <section className="py-8 md:py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 md:mb-4 lg:mb-6">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-blue-700">Trusted Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 lg:mb-6 gradient-text-blue leading-tight">
                High-Impact <span className="gradient-text-blue">Digital Services</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                We deliver reliable and scalable digital services tailored to your needs — helping you innovate faster, operate smarter, and achieve growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 gradient-bg-blue text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-xs sm:text-sm md:text-base"
                >
                  Let's Work Together
                  <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl border border-slate-200">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                    <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg md:rounded-xl lg:rounded-2xl">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 gradient-bg-blue rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2 lg:mb-3">
                        <Code2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-lg md:text-xl lg:text-2xl font-bold gradient-text-blue mb-1">5+</div>
                      <div className="text-xs md:text-sm text-slate-600">Services</div>
                    </div>
                    <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg md:rounded-xl lg:rounded-2xl">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 gradient-bg rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2 lg:mb-3">
                        <Users className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-lg md:text-xl lg:text-2xl font-bold gradient-text mb-1">Expert</div>
                      <div className="text-xs md:text-sm text-slate-600">Team</div>
                    </div>
                    <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg md:rounded-xl lg:rounded-2xl">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2 lg:mb-3">
                        <Award className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-600 mb-1">100%</div>
                      <div className="text-xs md:text-sm text-slate-600">Quality</div>
                    </div>
                    <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg md:rounded-xl lg:rounded-2xl">
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-1 md:mb-2 lg:mb-3">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-orange-600 mb-1">24/7</div>
                      <div className="text-xs md:text-sm text-slate-600">Support</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
                <div
                  className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 lg:-bottom-4 lg:-left-4 w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>



{/* Services Grid */}
<section className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-slide-up">
      <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 md:mb-4 lg:mb-6">
        <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
        <span className="text-xs md:text-sm font-medium text-blue-700">What We Offer</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 gradient-text-blue">Service Portfolio</h2>
      <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Comprehensive solutions tailored to your business needs
      </p>
    </div>

    {/* Modified grid - 1 column on mobile, 2x2 on lg and up */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${service.bgGradient} p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-slate-200 hover:shadow-md md:hover:shadow-lg lg:hover:shadow-xl transition-all duration-500 card-hover`}
        >
          <div
            className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 md:mb-4 lg:mb-6`}
          >
            {service.icon}
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-1 md:mb-2">{service.title}</h3>
          <p className="text-xs md:text-sm font-semibold text-slate-600 mb-2 md:mb-3 lg:mb-4">{service.subtitle}</p>
          <p className="text-xs md:text-sm lg:text-base text-slate-700 mb-3 md:mb-4 lg:mb-6 leading-relaxed">{service.description}</p>

          <Link
            href="/contact"
            className={`w-full inline-flex items-center justify-center px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300 text-xs md:text-sm lg:text-base`}
          >
            Learn More
            <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Signature Expertise */}
      <section className="py-8 md:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Signature Expertise */}
          <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
            <div className="inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 via-sky-600 to-sky-500 rounded-full">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-white">Signature Expertise</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text">
                AI <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-transparent bg-clip-text">Automation Specialists</span>
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-4 md:mb-5 lg:mb-6 leading-relaxed">
                We specialize in building AI agents that automate most of your tasks, saving you valuable time and effort.
                These agents are powered by advanced technologies like the OpenAI Agent SDK. In addition, we create fully
                customizable AI chatbots tailored to your business needs.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-4 md:mb-5 lg:mb-6 leading-relaxed">
                Our team has deep expertise in AI development, We also build advanced chatbots and create powerful APIs to help your systems work better.<br></br> With our solutions, your business can become more efficient, reliable, and productive.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 gradient-bg-blue text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-xs sm:text-sm md:text-base"
              >
                Automate Your Workflow
                <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </Link>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg border border-slate-200">
                <div className="space-y-4 md:space-y-5 lg:space-y-6">
                  {[
                    {
                      icon: <Bot className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />,
                      title: "AI-Powered Automation",
                      description: "Transform your operations with custom AI agents built using the OpenAI Agent SDK. From intelligent chatbots to complex task automation and data processing.",
                      gradient: "from-orange-600 to-orange-400",
                    },
                    {
                      icon: <Repeat className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />,
                      title: "End-to-End Task Automation",
                      description: "Eliminate repetitive manual processes with intelligent automation that streamlines workflows, improves accuracy, and accelerates productivity.",
                      gradient: "from-blue-600 to-cyan-500",
                    },
                    {
                      icon: <Code2 className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />,
                      title: "Next-Gen Web Development",
                      description: "We craft fast, scalable, and modern websites tailored for outstanding performance, responsiveness, and user experience using the latest technologies.",
                      gradient: "from-green-600 to-emerald-500",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 md:space-x-4 lg:space-x-6">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${feature.gradient} rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-xs md:text-sm lg:text-base text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6 lg:mb-8">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
            <span className="text-xs md:text-sm font-medium text-blue-700">Transparent Pricing</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-5 gradient-text-blue">
            Project Pricing
          </h2>

          {/* Subheading */}
          <p className="text-sm md:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12 leading-relaxed">
            Every project we build is unique — just like your goals. That's why we don't stick to fixed packages.
            Instead, our pricing adapts to your vision, complexity, and timeline.
          </p>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-4 md:p-6 lg:p-8 xl:p-12 rounded-2xl lg:rounded-3xl border border-slate-200 shadow-md lg:shadow-lg text-left max-w-5xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6 text-blue-600">
              <BadgeDollarSign className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">How We Price Our Projects</h3>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-slate-700">
              Our pricing depends on your project's <span className="font-medium text-slate-900">timeline</span>,
              <span className="font-medium text-slate-900"> complexity</span>, and <span className="font-medium text-slate-900">business goals</span>.
              We ensure a pricing structure that's fair, customized, and reflects the real value we deliver — not just a generic rate.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mt-6 md:mt-8 lg:mt-10">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-blue-100 p-2 md:p-3 rounded-lg">
                  <Timer className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-slate-800">Timeline-Based</h4>
                  <p className="text-xs md:text-sm text-slate-600">Shorter or urgent timelines may affect the pricing based on effort and speed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-purple-100 p-2 md:p-3 rounded-lg">
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-slate-800">Complexity Focused</h4>
                  <p className="text-xs md:text-sm text-slate-600">More complex features and logic increase planning, coding, and testing time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-lg">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-slate-800">Value-Oriented</h4>
                  <p className="text-xs md:text-sm text-slate-600">We price based on the value delivered — not just hours worked.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-3 md:mb-4 lg:mb-6">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-purple-600 mr-1 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-purple-700">Our Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 gradient-text">How We Work</h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
              Our streamlined process ensures successful project delivery
            </p>
          </div>

          <div className="space-y-4 md:space-y-5 lg:space-y-6">
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
              <div key={index} className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 animate-slide-up">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${process.gradient} rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-bold text-base md:text-lg lg:text-xl flex-shrink-0`}
                >
                  {process.step}
                </div>
                <div className="flex-1 bg-white p-3 md:p-4 lg:p-6 rounded-lg md:rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm md:shadow-md lg:shadow-lg">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-1">{process.title}</h3>
                  <p className="text-xs md:text-sm lg:text-base text-slate-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-4 md:p-6 lg:p-8 xl:p-12 text-white">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 rounded-full mb-3 md:mb-4 lg:mb-6">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
                  <span className="text-xs md:text-sm font-semibold text-white">Get Started</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6">Ready to Transform Your Business?</h2>
                <p className="text-sm md:text-base lg:text-lg text-white/90 mb-4 md:mb-5 lg:mb-6 leading-relaxed">
                  Let's discuss your project and create something amazing together. Get a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white text-purple-600 font-bold rounded-lg md:rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] text-xs sm:text-sm md:text-base"
                  >
                    Start Project
                    <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white/20 border border-white/30 text-white font-semibold rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-xs sm:text-sm md:text-base"
                  >
                    Meet Our Team
                    <Users className="ml-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </Link>
                </div>
              </div>
              <div className="p-4 md:p-6 lg:p-8 xl:p-12 bg-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">Free</div>
                    <div className="text-xs md:text-sm text-white/80">Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">5+</div>
                    <div className="text-xs md:text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs md:text-sm text-white/80">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-xs md:text-sm text-white/80">Quality</div>
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
