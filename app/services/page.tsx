import { Card, CardContent } from "@/components/ui/card"
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
  Clock,
  Award,
  Bot,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
      icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Custom Software",
      subtitle: "Tailored Business Solutions",
      description: "Transform your business operations with custom software designed for your needs.",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
      title: "AI Integration",
      subtitle: "Intelligent Automation",
      description: "We integrate AI into websites, software, and custom agents — and build related solutions tailored to your needs.",
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
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
      title: "Automation Tools",
      icon: <Repeat className="w-8 h-8 md:w-10 md:h-10" />,
      subtitle: "Save Time with Smart Workflows",
      description: "Automate repetitive tasks, streamline operations, and boost efficiency with custom-built AI-powered automation tools.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-pink-100 to-purple-100",
    },
    {
      title: "Custom Solutions",
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
      subtitle: "Tailored to Your Needs",
      description: "We build AI agents, software, and web tools fully customized to your unique business requirements — using modern tech like OpenAI SDK, APIs, and advanced automation.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-100 to-yellow-100",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-600 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-purple-700">Professional Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 gradient-text leading-tight">
                Our Expert <span className="gradient-text-blue">Services</span>
              </h1>
              <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Comprehensive digital solutions designed to transform your business and accelerate growth through
                innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 gradient-bg text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 text-sm md:text-base"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>

                
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-slate-200">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl">
                      <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg-blue rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                        <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold gradient-text-blue mb-1 md:mb-2">5+</div>
                      <div className="text-xs md:text-sm text-slate-600">Services</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl">
                      <div className="w-10 h-10 md:w-12 md:h-12 gradient-bg rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                        <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold gradient-text mb-1 md:mb-2">Expert</div>
                      <div className="text-xs md:text-sm text-slate-600">Team</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-green-600 mb-1 md:mb-2">100%</div>
                      <div className="text-xs md:text-sm text-slate-600">Quality</div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl md:rounded-2xl">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                        <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1 md:mb-2">24/7</div>
                      <div className="text-xs md:text-sm text-slate-600">Support</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
                <div
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
              <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-blue-700">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text-blue">Service Portfolio</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          {/* Services in 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 hover:shadow-lg md:hover:shadow-2xl transition-all duration-500 card-hover`}
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm font-semibold text-slate-600 mb-3 md:mb-4">{service.subtitle}</p>
                <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">{service.description}</p>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg md:rounded-xl hover:shadow-md md:hover:shadow-lg transition-all duration-300 text-sm md:text-base`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom 2 Services in 2-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.slice(3, 7).map((service, index) => (
              <div
                key={index + 2}
                className={`bg-gradient-to-br ${service.bgGradient} p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 hover:shadow-lg md:hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] md:hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm font-semibold text-slate-600 mb-3 md:mb-4">{service.subtitle}</p>
                <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">{service.description}</p>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg md:rounded-xl hover:shadow-md md:hover:shadow-lg transition-all duration-300 text-sm md:text-base`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-green-100 rounded-full mb-4 md:mb-6">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-green-700">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">Why reeCoder?</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We combine technical expertise with business understanding to deliver solutions that drive real results
                for your business.
              </p>
            </div>
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
                    title: "Scalable Solutions",
                    description: "Built to grow with your business",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
                    title: "Expert Team",
                    description: "Seasoned professionals with deep expertise",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
                    title: "Fast Delivery",
                    description: "Quick turnaround without compromising quality",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
                    title: "Quality Assured",
                    description: "Rigorous testing and quality control",
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 hover:shadow-md md:hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.gradient} rounded-lg md:rounded-xl flex items-center justify-center text-white mb-3 md:mb-4`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Project Pricing</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
              Every project is unique, and so is our pricing approach.
            </p>
          </div>

          <Card className="border-0 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-12 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Tailored Pricing for Every Project</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
                Our project pricing depends on the specific requirements, complexity, and scope of your project. We
                believe in transparent, fair pricing that reflects the value we deliver.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="text-center p-3 md:p-4">
                  <h4 className="font-semibold mb-1 md:mb-2 text-primary text-sm md:text-base">Project Scope</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Complexity and features required</p>
                </div>
                <div className="text-center p-3 md:p-4">
                  <h4 className="font-semibold mb-1 md:mb-2 text-primary text-sm md:text-base">Timeline</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Delivery schedule and urgency</p>
                </div>
                <div className="text-center p-3 md:p-4">
                  <h4 className="font-semibold mb-1 md:mb-2 text-primary text-sm md:text-base">Technology Stack</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Tools and technologies used</p>
                </div>
              </div>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm md:text-base"
                >
                  Get Your Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-purple-600 mr-1 md:mr-2" />
              <span className="text-xs md:text-sm font-medium text-purple-700">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">How We Work</h2>
            <p className="text-base md:text-xl text-slate-600 leading-relaxed">
              Our streamlined process ensures successful project delivery
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
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
              <div key={index} className="flex items-center space-x-4 md:space-x-8 animate-slide-up">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${process.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0`}
                >
                  {process.step}
                </div>
                <div className="flex-1 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 shadow-md md:shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{process.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 md:p-12 text-white">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 rounded-full mb-4 md:mb-6">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
                  <span className="text-xs md:text-sm font-semibold text-white">Get Started</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Business?</h2>
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                  Let's discuss your project and create something amazing together. Get a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white text-purple-600 font-bold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 text-sm md:text-base"
                  >
                    Start Project
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white/20 border border-white/30 text-white font-semibold rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm md:text-base"
                  >
                    Meet Our Team
                    <Users className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
              <div className="p-6 md:p-12 bg-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">Free</div>
                    <div className="text-xs md:text-sm text-white/80">Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">5+</div>
                    <div className="text-xs md:text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">24/7</div>
                    <div className="text-xs md:text-sm text-white/80">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">100%</div>
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
