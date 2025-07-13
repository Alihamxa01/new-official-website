import { Users, Target, Heart, Lightbulb, Rocket, Shield, Globe, Award } from "lucide-react"

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
              <Users className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">About reeCoder</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white">Innovating Digital Excellence</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking software house dedicated to building intelligent digital solutions that drive
              business growth and technological innovation across the globe.
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

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Target className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-700">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Empowering Digital Transformation</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At reeCoder, our mission is to empower businesses worldwide with cutting-edge digital solutions that
                combine the power of modern web technologies with artificial intelligence. We believe that every
                business deserves access to intelligent, scalable, and user-friendly digital tools.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are committed to delivering exceptional value through innovative software development, ensuring that
                our clients stay ahead of the competition in an increasingly digital world.
              </p>

              <div className="space-y-4">
                {[
                  "Innovation in every line of code we write",
                  "Client success as our primary measure of achievement",
                  "Continuous learning and adaptation to emerging technologies",
                  "Building long-term partnerships with our clients",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-6 gradient-text-blue">What Drives Us</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <Rocket className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="font-semibold text-slate-900">Innovation</div>
                    <div className="text-sm text-slate-600">Cutting-edge solutions</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="font-semibold text-slate-900">Quality</div>
                    <div className="text-sm text-slate-600">Excellence in delivery</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="font-semibold text-slate-900">Global</div>
                    <div className="text-sm text-slate-600">Worldwide impact</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <div className="font-semibold text-slate-900">Excellence</div>
                    <div className="text-sm text-slate-600">Award-winning work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Vision & Values</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text-blue">Our Core Principles</h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={40} />,
                title: "Vision",
                description:
                  "To be the leading global provider of intelligent digital solutions, enabling businesses to thrive in the AI-driven future.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: <Heart size={40} />,
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty, transparency, and ethical practices in all our business relationships.",
                gradient: "from-red-500 to-pink-500",
                bgGradient: "from-red-50 to-pink-50",
              },
              {
                icon: <Lightbulb size={40} />,
                title: "Innovation",
                description:
                  "We constantly push boundaries, embrace new technologies, and find creative solutions to complex challenges.",
                gradient: "from-yellow-500 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-50",
              },
              {
                icon: <Users size={40} />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
              <Users className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-700">Our Team</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Global Talent, Local Impact</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              reeCoder is powered by a diverse team of passionate developers, designers, and strategists from around the
              world. Our remote-first approach allows us to tap into global talent while maintaining the agility and
              innovation that our clients expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Development Team",
                description:
                  "Full-stack developers specializing in modern web technologies, AI integration, and scalable architecture solutions.",
                icon: <Rocket className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                title: "Design Team",
                description:
                  "UI/UX designers focused on creating intuitive, accessible, and visually stunning user experiences that convert.",
                icon: <Heart className="w-8 h-8" />,
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                title: "Strategy Team",
                description:
                  "Business analysts and project managers who ensure every solution aligns perfectly with client objectives and goals.",
                icon: <Target className="w-8 h-8" />,
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50",
              },
            ].map((team, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${team.bgGradient} p-8 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover animate-slide-up`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${team.gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}
                >
                  {team.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{team.title}</h3>
                <p className="text-slate-600 leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-orange-700">Future Goals</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Looking Forward</h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 animate-slide-up">
              <h3 className="text-3xl font-bold mb-8 text-center gradient-text-blue">Our Roadmap to Excellence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Technology Leadership",
                    description:
                      "We aim to be at the forefront of emerging technologies, particularly in AI, machine learning, and next-generation web frameworks.",
                    icon: <Lightbulb className="w-6 h-6" />,
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "Global Expansion",
                    description:
                      "Our goal is to serve clients in 25+ countries by 2026, establishing reeCoder as a truly global digital solutions provider.",
                    icon: <Globe className="w-6 h-6" />,
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    title: "Innovation Hub",
                    description:
                      "We plan to establish an innovation lab focused on experimental technologies and open-source contributions to the developer community.",
                    icon: <Rocket className="w-6 h-6" />,
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    title: "Sustainable Growth",
                    description:
                      "We are committed to sustainable business practices and helping our clients build environmentally conscious digital solutions.",
                    icon: <Heart className="w-6 h-6" />,
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((goal, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${goal.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                    >
                      {goal.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-slate-900">{goal.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
