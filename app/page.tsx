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
    <div className="pt-1">
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative min-h-[65vh] md:min-h-screen flex items-center justify-center overflow-hidden floating-shapes pt-16 md:pt-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8">
    <div className="animate-fade-in">
      <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/50 backdrop-blur-sm rounded-full border border-slate-200 mb-4 md:mb-8">
        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
        <span className="text-xs md:text-sm font-medium text-slate-700">Building Digital Intelligence</span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight px-4">
        Welcome to <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">reeCoder</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-12 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4">
        We create powerful web & AI solutions that transform businesses and drive innovation in the digital age
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          {"Let's Work Together"}
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg md:rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
        >
          Explore Services
          <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute top-20 left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
  <div
    className="absolute bottom-20 right-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
    style={{ animationDelay: "2s" }}
  ></div>
  <div
    className="absolute top-1/2 right-10 md:right-20 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float"
    style={{ animationDelay: "4s" }}
  ></div>
</section>

      {/* Our Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-sky-100 rounded-full mb-3 sm:mb-4 md:mb-6">
              <Brain className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600 mr-1 sm:mr-1 md:mr-2" />
              <span className="text-xs sm:text-xs md:text-sm font-medium text-blue-700">Our Vision</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text px-2">Innovating Through Technology</h2>
            <div className="w-12 sm:w-16 md:w-24 h-1 gradient-bg mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="animate-slide-in-left px-2 sm:px-0">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-slate-900">Building Software That Works for You</h3>
              <p className="text-sm xs:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                reeCoder specializes in building user-friendly, high-impact digital tools using modern web frameworks and artificial intelligence. We help businesses accelerate workflows, make smarter decisions, and unlock new growth opportunities.
              </p>
              <p className="text-sm xs:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
               we build trust first—through reliable software, honest partnerships, and real results. Your success is our priority. we build solutions that work today and grow with you tomorrow.
              </p>
              <div className="flex items-center space-x-2 xs:space-x-3 md:space-x-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 gradient-bg rounded-lg md:rounded-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-xs xs:text-sm md:text-base text-slate-900">Innovation First</div>
                  <div className="text-xs md:text-sm text-slate-600">Cutting-edge solutions for modern challenges</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right px-2 sm:px-0">
              <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-100">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg sm:rounded-xl md:rounded-2xl">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3">
                      <Code2 className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold gradient-text mb-1 md:mb-2">10+</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">Tech Stacks Mastered</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl md:rounded-2xl">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3">
                      <Brain className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold gradient-text-blue mb-1 md:mb-2">AI</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">Powered Solutions</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl md:rounded-2xl">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3">
                      <Rocket className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">5+</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">Years Innovation</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg sm:rounded-xl md:rounded-2xl">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3">
                      <Shield className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-xl xs:text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">100%</div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium">Secure Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 sm:mb-4 md:mb-6">
              <Code2 className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600 mr-1 sm:mr-1 md:mr-2" />
              <span className="text-xs sm:text-xs md:text-sm font-medium text-blue-700">What We Do</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text-blue px-2">Our Core Services</h2>
            <p className="text-sm xs:text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              Delivering cutting-edge Web Development, smart Chatbots, powerful AI Agents (OpenAI SDK), and tailored Software Solutions for the future-ready business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {[
              {
                icon: <Code2 size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Web Development",
                description:
                  "Modern, responsive websites and applications built with the latest technologies and best practices.",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-100 to-pink-50",
              },
              {
                icon: <Brain size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "AI Solutions",
                description:
                  "Advanced AI systems and automation tools designed to enhance efficiency and streamline business operations.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: <Palette size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "OpenAI Agents",
                description:
                  "Custom AI agents built with OpenAI's Agent SDK to handle tasks, automate workflows, and deliver intelligent interactions.",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                icon: <Building2 size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Software Architecture",
                description:
                  "Scalable and robust system architecture designed for enterprise-level applications and growth.",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgColor} p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 md:mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base xs:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-900">{service.title}</h3>
                <p className="text-xs xs:text-sm md:text-base text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose reeCoder Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-green-100 rounded-full mb-3 sm:mb-4 md:mb-6">
              <Award className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-600 mr-1 sm:mr-1 md:mr-2" />
              <span className="text-xs sm:text-xs md:text-sm font-medium text-green-700">Why Choose Us</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text-blue px-2">Why reeCoder Stands Out</h2>
            <p className="text-sm xs:text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {[
              {
                icon: <Building2 size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Scalable Solutions",
                description:
                  "We build systems that grow with your business, ensuring long-term success and adaptability to market changes.",
                gradient: "from-purple-500 to-pink-500",
              },
               {
                icon: <Shield  size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Security Approach",
                description:
                  "We keep your data safe with strong, high-level security from the very beginning—so you never have to worry.",
                gradient: "from-slate-500 to-gray-600",
              },
              {
                icon: <Users size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Expert Team",
                description:
                  "Our team consists of seasoned professionals with deep expertise in cutting-edge technologies and methodologies.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Globe size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Global Reach",
                description:
                  "We serve clients worldwide, understanding diverse market needs and cultural nuances for better solutions.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: <Sparkles size={20} className="xs:w-6 xs:h-6 md:w-8 md:h-8" />,
                title: "Custom Strategies",
              description:
  "We personally plan every project based on your specific needs and goals, ensuring the final result is a perfect fit for you.",

                gradient: "from-orange-500 to-red-500",
              },
            ].map((point, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-100 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 card-hover">
                  <div
                    className={`w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 bg-gradient-to-r ${point.gradient} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 md:mb-6 mx-auto`}
                  >
                    {point.icon}
                  </div>
                  <h3 className="text-base xs:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-900">{point.title}</h3>
                  <p className="text-xs xs:text-sm md:text-base text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-slate-100 rounded-full mb-3 sm:mb-4 md:mb-6">
              <Zap className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-slate-600 mr-1 sm:mr-1 md:mr-2" />
              <span className="text-xs sm:text-xs md:text-sm font-medium text-slate-700">Technology Stack</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text px-2">Trusted Technologies</h2>
            <p className="text-sm xs:text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
              We leverage industry-leading technologies to deliver exceptional results and future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
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
                className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md md:hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 text-center animate-slide-up"
              >
                <div className={`w-6 h-6 xs:w-8 xs:h-8 md:w-12 md:h-12 bg-gradient-to-r ${tech.color} rounded-md sm:rounded-lg md:rounded-xl mx-auto mb-1 sm:mb-2 md:mb-3`}></div>
                <div className="font-semibold text-xs xs:text-sm md:text-base text-slate-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white px-2">Ready to Transform Your Business?</h2>
            <p className="text-sm xs:text-base md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
              {"Let's discuss how we can help you build the digital solutions your business needs to thrive in tomorrow's world"}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center px-2">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-4 py-2 xs:px-6 xs:py-3 md:px-8 md:py-4 bg-white text-purple-600 font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 text-xs xs:text-sm md:text-base"
              >
                Explore Our Services
                <ArrowRight className="ml-1 xs:ml-2 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 xs:px-6 xs:py-3 md:px-8 md:py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-xs xs:text-sm md:text-base"
              >
                Get In Touch
                <Sparkles className="ml-1 xs:ml-2 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-6 xs:top-10 left-4 xs:left-6 sm:left-10 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-6 xs:bottom-10 right-4 xs:right-6 sm:right-10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/10 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>
    </div>
  )
}