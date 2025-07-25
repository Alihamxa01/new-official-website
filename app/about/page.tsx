  import { Users, Target, Heart, Lightbulb, Rocket, Shield, Globe, Award } from "lucide-react"

  export default function About() {
    return (
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-blue-400  to-blue-600  relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 md:mb-8">
                <Users className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-white">About reeCoder</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">Get to Know reeCoder</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
            At reeCoder, we are a passionate team of developers and innovators dedicated to delivering intelligent digital solutions that make a global impact.
              </p>
            </div>
          </div>

          {/* Floating orbs */}
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full animate-float" />
          <div
            className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left column */}
              <div className="animate-slide-in-left">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6">
                  <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-700-600 mr-1 md:mr-2" />
                  <span className="text-xs md:text-sm font-medium text-blue-600">Our Mission</span>
                </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Empowering Digital Transformation</h2>
                <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">
                  At reeCoder, our mission is to help businesses grow by leveraging the latest web technologies and smart AI solutions for real-world impact.
            We are committed to delivering exceptional value through innovative software development    </p>
                <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
We specialize in building smart, scalable, and modern solutions — like AI chatbots, automation tools, and data-driven systems — that solve real problems and help make work faster and easier.


                </p>

                <div className="space-y-3 md:space-y-4">
                  {[
                    "Innovation in every line of code we write",
                    "Our biggest success is when our clients succeed",
                    "We keep learning and improving with the latest technologies",
                    "Building long-term partnerships with our clients",
                  ].map((item) => (
                    <div key={item} className="flex items-start">
   <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-sm md:text-base text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl md:shadow-2xl border border-slate-100">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 gradient-text-blue">What Drives Us</h3>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {[
                      {
                        icon: <Rocket className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2 md:mb-3" />,
                        title: "Innovation",
                        subtitle: "Cutting-edge solutions",
                        bg: "from-purple-50 to-pink-50",
                      },
                      {
                        icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />,
                        title: "Quality",
                        subtitle: "Excellence in delivery",
                        bg: "from-blue-50 to-cyan-50",
                      },
                      {
                        icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2 md:mb-3" />,
                        title: "Global",
                        subtitle: "Worldwide impact",
                        bg: "from-green-50 to-emerald-50",
                      },
                      {
                        icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-600 mx-auto mb-2 md:mb-3" />,
                        title: "Excellence",
                        subtitle: "Award-winning work",
                        bg: "from-orange-50 to-red-50",
                      },
                    ].map((card) => (
                      <div key={card.title} className={`text-center p-4 md:p-6 bg-gradient-to-br ${card.bg} rounded-xl md:rounded-2xl`}>
                        {card.icon}
                        <div className="font-semibold text-sm md:text-base text-slate-900">{card.title}</div>
                        <div className="text-xs md:text-sm text-slate-600">{card.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-slide-up">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
                <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-blue-700">Vision & Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text-blue">Our Core Principles</h2>
              <div className="w-16 md:w-24 h-1 gradient-bg mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
                  title: "Vision",
                  desc: "To be the leading global provider of intelligent digital solutions, enabling businesses to thrive in the AI-driven future.",
                  grad: ["from-purple-500", "to-pink-500"],
                  bg: ["from-purple-100", "to-indigo-100"],
                },
                {
                  icon: <Heart className="w-8 text- h-8 md:w-10 md:h-10" />,
                  title: "Integrity",
                  desc: "We maintain the highest standards of honesty, transparency, and ethical practices in all our business relationships.",
                  grad: ["from-green-500", "to-lime-400"],
                  bg: ["from-lime-100", "to-lime-100"],
                },
                {
                  icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
                  title: "Innovation",
                  desc: "We constantly push boundaries, embrace new technologies, and find creative solutions to complex challenges.",
                  grad: ["from-yellow-500", "to-orange-500"],
                  bg: ["from-yellow-50", "to-orange-50"],
                },
                {
                  icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
                  title: "Collaboration",
                  desc: "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
                  grad: ["from-blue-500", "to-cyan-500"],
                  bg: ["from-blue-50", "to-cyan-50"],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`bg-gradient-to-br ${item.bg.join(
                    " "
                  )} p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 card-hover animate-slide-up`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${item.grad.join(
                      " "
                    )} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-12 md:mb-16 animate-slide-up">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
                <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-blue-500">Our Team</span>
              </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Meet Our Team</h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
                Meet the passionate innovators behind reeCoder who are dedicated to transforming your digital vision into
                reality with cutting-edge technology and creative solutions.
              </p>
            </div>

            {/* Team cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl md:max-w-5xl mx-auto">
              {/* Ali Hamza */}
              <div className="bg-gradient-to-br from-green-200 to-lime-100 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-100 hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 card-hover animate-slide-up">
                <div className="text-center mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl font-bold text-white">AH</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">Ali Hamza</h3>
                  <div className="inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 bg-emerald-200 rounded-full mb-1 md:mb-2">
                    <span className="text-xs md:text-sm font-bold text-green-800">FOUNDER & CHIEF OPERATOR</span>
                  </div>
                  <p className="text-sm md:text-base text-green-600 font-semibold mb-1">Business Development & Marketing Head</p>
                  <p className="text-xs md:text-sm text-slate-600 font-medium">Front-End Developer</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {/* Skills */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3">Core Skills</h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {[
                        { name: "Next.js", grad: ["from-black", "to-gray-600"] },
                        {
                          name: "Tailwind CSS",
                          grad: ["from-cyan-500", "to-blue-500"],
                        },
                        {
                          name: "Node.js",
                          grad: ["from-green-500", "to-green-600"],
                        },
                        {
                          name: "Figma",
                          grad: ["from-purple-500", "to-pink-500"],
                        },
                        {
                          name: "Python",
                          grad: ["from-yellow-500", "to-blue-500"],
                        },
                      ].map((skill) => (
                        <div key={skill.name} className="flex items-center space-x-1 md:space-x-2">
                          <div className={`w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r ${skill.grad.join(" ")} rounded-full`} />
                          <span className="text-xs md:text-sm font-medium text-slate-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="pt-3 md:pt-4 border-t border-purple-200">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      A dynamic operator combining business strategy with modern front-end development, Ali specializes in
                      building engaging web experiences using Next.js, Tailwind CSS, and Figma — while also leading
                      marketing and client growth at reeCoder.
                    </p>
                  </div>
                </div>
              </div>

              {/* Najaf Ali */}
              <div className="bg-gradient-to-br from-cyan-200 to-blue-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-blue-100 hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 card-hover animate-slide-up">
                <div className="text-center mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl font-bold text-white">NA</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">Najaf Ali</h3>
                  <div className="inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 rounded-full mb-1 md:mb-2">
                    <span className="text-xs md:text-sm font-bold text-blue-700">CEO & AI AGENT DEVELOPER</span>
                  </div>
                  <p className="text-sm md:text-base text-blue-600 font-semibold mb-1">Lead Developer & Full-Stack Developer</p>
                  <p className="text-xs md:text-sm text-slate-600 font-medium text-center">AI Specialist</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {/* Skills */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3">Core Skills</h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {[
                        {
                          name: "Python Specialist",
                          grad: ["from-yellow-500", "to-blue-500"],
                        },
                        {
                          name: "JavaScript",
                          grad: ["from-yellow-400", "to-orange-500"],
                        },
                        { name: "Next.js", grad: ["from-black", "to-gray-600"] },
                        {
                          name: "Figma",
                          grad: ["from-purple-500", "to-pink-500"],
                        },
                        { name: "AI Expert", grad: ["from-green-400", "to-blue-500"] },
                      ].map((skill) => (
                        <div key={skill.name} className="flex items-center space-x-1 md:space-x-2">
                          <div className={`w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r ${skill.grad.join(" ")} rounded-full`} />
                          <span className="text-xs md:text-sm font-medium text-slate-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="pt-3 md:pt-4 border-t border-blue-200">
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Najaf drives the future of automation at reeCoder by crafting advanced AI solutions and intelligent
                      systems. With deep expertise in Python, JavaScript, and Next.js, he leads full-stack development
                      while specializing in building powerful AI agents and tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>

        </section>

        {/* Future Goals Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-slide-up">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-orange-100 rounded-full mb-4 md:mb-6">
                <Rocket className="w-3 h-3 md:w-4 md:h-4 text-orange-600 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm font-medium text-orange-700">Future Goals</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-9 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Looking Forward</h2>
              <div className="w-16 md:w-24 h-1 gradient-bg mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl md:max-w-5xl mx-auto">
              <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-slate-100 animate-slide-up">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center gradient-text-blue">Our Roadmap to Excellence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {[
                    {
                      title: "Technology Leadership",
                      desc: "We aim to be at the forefront of emerging technologies, particularly in AI, machine learning, and next-generation web frameworks.",
                      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
                      grad: ["from-purple-500", "to-pink-500"],
                    },
                    {
                      title: "Global Expansion",
                      desc: "Our goal is to serve clients in 25+ countries by 2026, establishing reeCoder as a truly global digital solutions provider.",
                      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
                      grad: ["from-blue-500", "to-cyan-500"],
                    },
                    {
                      title: "Innovation Hub",
                      desc: "We plan to establish an innovation lab focused on experimental technologies and open-source contributions to the developer community.",
                      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
                      grad: ["from-green-500", "to-emerald-500"],
                    },
                    {
                      title: "Sustainable Growth",
                      desc: "We are committed to sustainable business practices and helping our clients build environmentally conscious digital solutions.",
                      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
                      grad: ["from-orange-500", "to-red-500"],
                    },
                  ].map((goal) => (
                    <div key={goal.title} className="flex items-start space-x-3 md:space-x-4">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${goal.grad.join(
                          " "
                        )} rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {goal.icon}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-slate-900">{goal.title}</h4>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{goal.desc}</p>
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
