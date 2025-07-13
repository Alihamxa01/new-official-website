import Link from "next/link"
import {
  ArrowRight,
  Code2,
  Brain,
  Palette,
  Building2,
  Users,
  Globe,
  Award,
  Sparkles,
  Rocket,
  Shield,
  Zap,
} from "lucide-react"

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden floating-shapes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200 mb-8">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-slate-700">Building Digital Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Welcome to <span className="gradient-text">reeCoder</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We create powerful web & AI solutions that transform businesses and drive innovation in the digital age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 gradient-bg text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {"Let's Work Together"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                Explore Services
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>

     
      {/* Our Vision Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Brain className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Our Vision</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Innovating Through Technology</h2>
            <div className="w-24 h-1 gradient-bg mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Shaping the Future of Digital Solutions</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At reeCoder, we envision a future where businesses harness the full potential of digital intelligence.
                Our mission is to bridge the gap between cutting-edge technology and practical business solutions.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We believe in creating scalable, intelligent systems that not only solve today's challenges but
                anticipate tomorrow's opportunities. Through innovative development and AI integration, we empower
                businesses to stay ahead in an ever-evolving digital landscape.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Innovation First</div>
                  <div className="text-slate-600">Cutting-edge solutions for modern challenges</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                    <div className="text-slate-600 font-medium">Tech Stacks Mastered</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text-blue mb-2">AI</div>
                    <div className="text-slate-600 font-medium">Powered Solutions</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-slate-600 font-medium">Years Innovation</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-slate-600 font-medium">Secure Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Code2 className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">What We Do</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text-blue">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
             Delivering cutting-edge Web Development, smart Chatbots, powerful AI Agents (OpenAI SDK), and tailored Software Solutions for the future-ready business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code2 size={32} />,
                title: "Web Development",
                description:
                  "Modern, responsive websites and applications built with the latest technologies and best practices.",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-100 to-pink-50",
              },
              {
                icon: <Brain size={32} />,
                title: "AI Solutions",
                description:
                  " Advanced AI systems and automation tools designed to enhance efficiency and streamline business operations.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: <Palette size={32} />,
                title: "OpenAI Agents",
                description:
                  " Custom AI agents built with OpenAI's Agent SDK to handle tasks, automate workflows, and deliver intelligent interactions.",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                icon: <Building2 size={32} />,
                title: "Software Architecture",
                description:
                  "Scalable and robust system architecture designed for enterprise-level applications and growth.",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose reeCoder Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
              <Award className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Why reeCoder Stands Out</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 size={32} />,
                title: "Scalable Solutions",
                description:
                  "We build systems that grow with your business, ensuring long-term success and adaptability to market changes.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Users size={32} />,
                title: "Expert Team",
                description:
                  "Our team consists of seasoned professionals with deep expertise in cutting-edge technologies and methodologies.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Globe size={32} />,
                title: "Global Reach",
                description:
                  "We serve clients worldwide, understanding diverse market needs and cultural nuances for better solutions.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: <Sparkles size={32} />,
                title: "Custom Strategies",
                description:
                  "Every project receives a tailored approach designed specifically for your unique requirements and goals.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((point, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${point.gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}
                  >
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-slate-600 mr-2" />
              <span className="text-sm font-medium text-slate-700">Technology Stack</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Trusted Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We leverage industry-leading technologies to deliver exceptional results and future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Next.js", color: "from-black to-gray-600" },
              { name: "React", color: "from-blue-500 to-cyan-500" },
              { name: "Tailwind", color: "from-cyan-500 to-blue-500" },
              { name: "Python", color: "from-yellow-500 to-blue-500" },
              { name: "Node.js", color: "from-green-500 to-green-600" },
              { name: "TypeScript", color: "from-blue-600 to-blue-700" },
              { name: "OpenAI", color: "from-green-400 to-blue-500" },
              { name: "PostgreSQL", color: "from-blue-700 to-blue-800" },
              { name: "MongoDB", color: "from-green-600 to-green-700" },
              { name: "AWS", color: "from-orange-500 to-yellow-500" },
              { name: "Docker", color: "from-blue-500 to-blue-600" },
              { name: "Kubernetes", color: "from-blue-600 to-purple-600" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center animate-slide-up"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl mx-auto mb-3`}></div>
                <div className="font-semibold text-slate-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              {
                "Let's discuss how we can help you build the digital solutions your business needs to thrive in tomorrow's world"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Get In Touch
                <Sparkles className="ml-2 w-5 h-5" />
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
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>
    </div>
  )
}
