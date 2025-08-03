
// import { Users, Target, Heart, Lightbulb, Rocket, Shield, Globe, Award } from "lucide-react"

// export default function About() {
//   return (
//     <div className="pt-12 md:pt-16 lg:pt-20">
//       {/* Hero Section */}
//       <section className="py-20 sm:py-18 md:py-20 lg:py-24 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="animate-fade-in">
//             <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4 sm:mb-6 md:mb-8">
//               <Users className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" />
//               <span className="text-xs sm:text-sm font-medium text-white">About reeCoder</span>
//             </div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">Get to Know reeCoder</h1>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//               At reeCoder, we are a passionate team of developers and innovators dedicated to delivering intelligent digital solutions that make a global impact.
//             </p>
//           </div>
//         </div>

//         {/* Floating orbs */}
//         <div className="absolute top-10 left-5 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-float" />
//         <div
//           className="absolute bottom-10 right-5 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full animate-float"
//           style={{ animationDelay: "2s" }}
//         />
//       </section>

//       {/* Mission Section */}
//       <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
//             {/* Left column */}
//             <div className="animate-slide-in-left">
//               <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-3 sm:mb-4 md:mb-6">
//                 <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
//                 <span className="text-xs sm:text-sm font-medium text-blue-600">Our Mission</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//                 Empowering Digital Transformation
//               </h2>
//               <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
//                 At reeCoder, our mission is to help businesses grow by leveraging the latest web technologies and smart AI solutions for real-world impact.
//                 We are committed to delivering exceptional value through innovative software development.
//               </p>
//               <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
//                 We specialize in building smart, scalable, and modern solutions — like AI chatbots, automation tools, and data-driven systems — that solve real problems and help make work faster and easier.
//               </p>

//               <div className="space-y-2 sm:space-y-3 md:space-y-4">
//                 {[
//                   "Innovation in every line of code we write",
//                   "Our biggest success is when our clients succeed",
//                   "We keep learning and improving with the latest technologies",
//                   "Building long-term partnerships with our clients",
//                 ].map((item) => (
//                   <div key={item} className="flex items-start">
//                     <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
//                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
//                     </div>
//                     <span className="text-xs sm:text-sm md:text-base text-slate-600">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right column */}
//             <div className="animate-slide-in-right">
//               <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-100">
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text-blue">What Drives Us</h3>
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
//                   {[
//                     {
//                       icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-1 sm:mb-2 md:mb-3" />,
//                       title: "Innovation",
//                       subtitle: "Cutting-edge solutions",
//                       bg: "from-purple-50 to-pink-50",
//                     },
//                     {
//                       icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1 sm:mb-2 md:mb-3" />,
//                       title: "Quality",
//                       subtitle: "Excellence in delivery",
//                       bg: "from-blue-50 to-cyan-50",
//                     },
//                     {
//                       icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-1 sm:mb-2 md:mb-3" />,
//                       title: "Global",
//                       subtitle: "Worldwide impact",
//                       bg: "from-green-50 to-emerald-50",
//                     },
//                     {
//                       icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 sm:mb-2 md:mb-3" />,
//                       title: "Excellence",
//                       subtitle: "Award-winning work",
//                       bg: "from-orange-50 to-red-50",
//                     },
//                   ].map((card) => (
//                     <div key={card.title} className={`text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br ${card.bg} rounded-lg sm:rounded-xl md:rounded-2xl`}>
//                       {card.icon}
//                       <div className="font-semibold text-xs sm:text-sm md:text-base text-slate-900">{card.title}</div>
//                       <div className="text-xs text-slate-600">{card.subtitle}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Values Section */}
//       <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
//             <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 sm:mb-4 md:mb-6">
//               <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" />
//               <span className="text-xs sm:text-sm font-medium text-blue-700">Vision & Values</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//               Our Core Principles
//             </h2>
//             <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//             {[
//               {
//                 icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
//                 title: "Vision",
//                 desc: "To be the leading global provider of intelligent digital solutions, enabling businesses to thrive in the AI-driven future.",
//                 grad: ["from-purple-500", "to-pink-500"],
//                 bg: ["from-purple-100", "to-indigo-100"],
//               },
//               {
//                 icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
//                 title: "Integrity",
//                 desc: "We maintain the highest standards of honesty, transparency, and ethical practices in all our business relationships.",
//                 grad: ["from-green-500", "to-lime-400"],
//                 bg: ["from-lime-100", "to-lime-100"],
//               },
//               {
//                 icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
//                 title: "Innovation",
//                 desc: "We constantly push boundaries, embrace new technologies, and find creative solutions to complex challenges.",
//                 grad: ["from-yellow-500", "to-orange-500"],
//                 bg: ["from-yellow-50", "to-orange-50"],
//               },
//               {
//                 icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
//                 title: "Collaboration",
//                 desc: "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
//                 grad: ["from-blue-500", "to-cyan-500"],
//                 bg: ["from-blue-50", "to-cyan-50"],
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className={`bg-gradient-to-br ${item.bg.join(" ")} p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-[1.03] card-hover animate-slide-up`}
//               >
//                 <div
//                   className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.grad.join(" ")} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 md:mb-6`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-900">{item.title}</h3>
//                 <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           {/* Heading */}
//           <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
//             <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 sm:mb-4 md:mb-6">
//               <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1 md:mr-2" />
//               <span className="text-xs sm:text-sm font-medium text-blue-500">Our Team</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//               Meet Our Team
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Meet the passionate innovators behind reeCoder who are dedicated to transforming your digital vision into
//               reality with cutting-edge technology and creative solutions.
//             </p>
//           </div>

//           {/* Team cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl lg:max-w-5xl mx-auto">
//             {/* Ali Hamza */}
//             <div className="bg-gradient-to-br from-green-200 to-lime-100 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-purple-100 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-[1.03] card-hover animate-slide-up">
//               <div className="text-center mb-3 sm:mb-4 md:mb-6">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
//                   <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">AH</span>
//                 </div>
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Ali Hamza</h3>
//                 <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-emerald-200 rounded-full mb-1 sm:mb-2">
//                   <span className="text-xs sm:text-sm font-bold text-green-800">FOUNDER & CHIEF OPERATOR</span>
//                 </div>
//                 <p className="text-xs sm:text-sm md:text-base text-green-600 font-semibold mb-1">Business Development & Marketing Head</p>
//                 <p className="text-xs text-slate-600 font-medium">Front-End Developer</p>
//               </div>

//               <div className="space-y-2 sm:space-y-3 md:space-y-4">
//                 {/* Skills */}
//                 <div>
//                   <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2 md:mb-3">Core Skills</h4>
//                   <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
//                     {[
//                       { name: "Next.js", grad: ["from-black", "to-gray-600"] },
//                       {
//                         name: "Tailwind CSS",
//                         grad: ["from-cyan-500", "to-blue-500"],
//                       },
//                       {
//                         name: "Node.js",
//                         grad: ["from-green-500", "to-green-600"],
//                       },
//                       {
//                         name: "Figma",
//                         grad: ["from-purple-500", "to-pink-500"],
//                       },
//                       {
//                         name: "Python",
//                         grad: ["from-yellow-500", "to-blue-500"],
//                       },
//                     ].map((skill) => (
//                       <div key={skill.name} className="flex items-center space-x-1 sm:space-x-2">
//                         <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${skill.grad.join(" ")} rounded-full`} />
//                         <span className="text-xs sm:text-sm font-medium text-slate-700">{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Bio */}
//                 <div className="pt-2 sm:pt-3 md:pt-4 border-t border-purple-200">
//                   <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
//                     A dynamic operator combining business strategy with modern front-end development, Ali specializes in
//                     building engaging web experiences using Next.js, Tailwind CSS, and Figma — while also leading
//                     marketing and client growth at reeCoder.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Najaf Ali */}
//             <div className="bg-gradient-to-br from-cyan-200 to-blue-50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-blue-100 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-[1.03] card-hover animate-slide-up">
//               <div className="text-center mb-3 sm:mb-4 md:mb-6">
//                 <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
//                   <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">NA</span>
//                 </div>
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Najaf Ali</h3>
//                 <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 rounded-full mb-1 sm:mb-2">
//                   <span className="text-xs sm:text-sm font-bold text-blue-700">CEO & AI AGENT DEVELOPER</span>
//                 </div>
//                 <p className="text-xs sm:text-sm md:text-base text-blue-600 font-semibold mb-1">Lead Developer & Full-Stack Developer</p>
//                 <p className="text-xs text-slate-600 font-medium text-center">AI Specialist</p>
//               </div>

//               <div className="space-y-2 sm:space-y-3 md:space-y-4">
//                 {/* Skills */}
//                 <div>
//                   <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2 md:mb-3">Core Skills</h4>
//                   <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
//                     {[
//                       {
//                         name: "Python Specialist",
//                         grad: ["from-yellow-500", "to-blue-500"],
//                       },
//                       {
//                         name: "JavaScript",
//                         grad: ["from-yellow-400", "to-orange-500"],
//                       },
//                       { name: "Next.js", grad: ["from-black", "to-gray-600"] },
//                       {
//                         name: "Figma",
//                         grad: ["from-purple-500", "to-pink-500"],
//                       },
//                       { name: "AI Expert", grad: ["from-green-400", "to-blue-500"] },
//                     ].map((skill) => (
//                       <div key={skill.name} className="flex items-center space-x-1 sm:space-x-2">
//                         <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${skill.grad.join(" ")} rounded-full`} />
//                         <span className="text-xs sm:text-sm font-medium text-slate-700">{skill.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Bio */}
//                 <div className="pt-2 sm:pt-3 md:pt-4 border-t border-blue-200">
//                   <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
//                     Najaf drives the future of automation at reeCoder by crafting advanced AI solutions and intelligent
//                     systems. With deep expertise in Python, JavaScript, and Next.js, he leads full-stack development
//                     while specializing in building powerful AI agents and tools.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Future Goals Section */}
//       <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-slide-up">
//             <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-orange-100 rounded-full mb-3 sm:mb-4 md:mb-6">
//               <Rocket className="w-3 h-3 md:w-4 md:h-4 text-orange-600 mr-1 md:mr-2" />
//               <span className="text-xs sm:text-sm font-medium text-orange-700">Future Goals</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
//               Looking Forward
//             </h2>
//             <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
//           </div>

//           <div className="max-w-4xl lg:max-w-5xl mx-auto">
//             <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl border border-slate-100 animate-slide-up">
//               <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//                 Our Roadmap to Excellence
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
//                 {[
//                   {
//                     title: "Technology Leadership",
//                     desc: "We aim to be at the forefront of emerging technologies, particularly in AI, machine learning, and next-generation web frameworks.",
//                     icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
//                     grad: ["from-purple-500", "to-pink-500"],
//                   },
//                   {
//                     title: "Global Expansion",
//                     desc: "Our goal is to serve clients in 25+ countries by 2026, establishing reeCoder as a truly global digital solutions provider.",
//                     icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
//                     grad: ["from-blue-500", "to-cyan-500"],
//                   },
//                   {
//                     title: "Innovation Hub",
//                     desc: "We plan to establish an innovation lab focused on experimental technologies and open-source contributions to the developer community.",
//                     icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
//                     grad: ["from-green-500", "to-emerald-500"],
//                   },
//                   {
//                     title: "Sustainable Growth",
//                     desc: "We are committed to sustainable business practices and helping our clients build environmentally conscious digital solutions.",
//                     icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
//                     grad: ["from-orange-500", "to-red-500"],
//                   },
//                 ].map((goal) => (
//                   <div key={goal.title} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
//                     <div
//                       className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${goal.grad.join(
//                         " "
//                       )} rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0`}
//                     >
//                       {goal.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-slate-900">{goal.title}</h4>
//                       <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{goal.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }




import { Users, Target, Heart, Lightbulb, Rocket, Shield, Globe, Award } from "lucide-react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About reeCoder - Smart AI & Web Solutions</title>
        <meta name="description" content="Discover reeCoder's mission, team, and vision. We build smart AI agents, automation tools, and web solutions for global impact." />
        <meta name="keywords" content="reeCoder, AI agency, automation, smart bots, web development, software house, About reecoder, AI agent, chatbots " />
        <meta property="og:title" content="About reeCoder" />
        <meta property="og:description" content="Meet the team behind reeCoder. See our mission, values, and future roadmap." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="pt-12 md:pt-16 lg:pt-20">
        {/* Hero Section */}
        <header className="py-20 sm:py-18 md:py-20 lg:py-24 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4 sm:mb-6 md:mb-8">
              <Users className="w-3 h-3 md:w-4 md:h-4 text-white mr-1 md:mr-2" role="img" aria-label="Team icon" />
              <span className="text-xs sm:text-sm font-medium text-white">About reeCoder</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">Get to Know reeCoder</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              At reeCoder, we are a passionate team of developers and innovators dedicated to delivering intelligent digital solutions that make a global impact.
            </p>
          </div>

          {/* Floating orbs */}
          <div className="absolute top-10 left-5 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-5 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full" />
        </header>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left column */}
              <div>
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-purple-100 rounded-full mb-3 sm:mb-4 md:mb-6">
                  <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" role="img" aria-label="Target icon" />
                  <span className="text-xs sm:text-sm font-medium text-blue-600">Our Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Empowering Digital Transformation
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                  At reeCoder, our mission is to help businesses grow by leveraging the latest web technologies and smart AI solutions for real-world impact.
                  We are committed to delivering exceptional value through innovative software development.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  We specialize in building smart, scalable, and modern solutions — like AI chatbots, automation tools, and data-driven systems — that solve real problems and help make work faster and easier.
                </p>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {[
                    "Innovation in every line of code we write",
                    "Our biggest success is when our clients succeed",
                    "We keep learning and improving with the latest technologies",
                    "Building long-term partnerships with our clients",
                  ].map((item) => (
                    <div key={item} className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div>
                <article className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-100">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 gradient-text-blue">What Drives Us</h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {[
                      {
                        icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-1 sm:mb-2 md:mb-3" role="img" aria-label="Innovation icon" />,
                        title: "Innovation",
                        subtitle: "Cutting-edge solutions",
                        bg: "from-purple-50 to-pink-50",
                      },
                      {
                        icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-1 sm:mb-2 md:mb-3" role="img" aria-label="Quality icon" />,
                        title: "Quality",
                        subtitle: "Excellence in delivery",
                        bg: "from-blue-50 to-cyan-50",
                      },
                      {
                        icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-1 sm:mb-2 md:mb-3" role="img" aria-label="Global icon" />,
                        title: "Global",
                        subtitle: "Worldwide impact",
                        bg: "from-green-50 to-emerald-50",
                      },
                      {
                        icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600 mx-auto mb-1 sm:mb-2 md:mb-3" role="img" aria-label="Excellence icon" />,
                        title: "Excellence",
                        subtitle: "Award-winning work",
                        bg: "from-orange-50 to-red-50",
                      },
                    ].map((card) => (
                      <div key={card.title} className={`text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br ${card.bg} rounded-lg sm:rounded-xl md:rounded-2xl`}>
                        {card.icon}
                        <div className="font-semibold text-xs sm:text-sm md:text-base text-slate-900">{card.title}</div>
                        <div className="text-xs text-slate-600">{card.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 sm:mb-4 md:mb-6">
                <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" role="img" aria-label="Lightbulb icon" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">Vision & Values</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Our Core Principles
              </h2>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" role="img" aria-label="Vision icon" />,
                  title: "Vision",
                  desc: "To be the leading global provider of intelligent digital solutions, enabling businesses to thrive in the AI-driven future.",
                  grad: ["from-purple-500", "to-pink-500"],
                  bg: ["from-purple-100", "to-indigo-100"],
                },
                {
                  icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" role="img" aria-label="Integrity icon" />,
                  title: "Integrity",
                  desc: "We maintain the highest standards of honesty, transparency, and ethical practices in all our business relationships.",
                  grad: ["from-green-500", "to-lime-400"],
                  bg: ["from-lime-100", "to-lime-100"],
                },
                {
                  icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" role="img" aria-label="Innovation icon" />,
                  title: "Innovation",
                  desc: "We constantly push boundaries, embrace new technologies, and find creative solutions to complex challenges.",
                  grad: ["from-yellow-500", "to-orange-500"],
                  bg: ["from-yellow-50", "to-orange-50"],
                },
                {
                  icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" role="img" aria-label="Collaboration icon" />,
                  title: "Collaboration",
                  desc: "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
                  grad: ["from-blue-500", "to-cyan-500"],
                  bg: ["from-blue-50", "to-cyan-50"],
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className={`bg-gradient-to-br ${item.bg.join(" ")} p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-100 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-[1.03] card-hover`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.grad.join(" ")} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 md:mb-6`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full mb-3 sm:mb-4 md:mb-6">
                <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1 md:mr-2" role="img" aria-label="Team icon" />
                <span className="text-xs sm:text-sm font-medium text-blue-500">Our Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Meet the passionate innovators behind reeCoder who are dedicated to transforming your digital vision into
                reality with cutting-edge technology and creative solutions.
              </p>
            </div>

            {/* Team cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl lg:max-w-5xl mx-auto">
              {/* Ali Hamza */}
              <article className="bg-gradient-to-br from-green-200 to-lime-100 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-purple-100 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-[1.03] card-hover">
                <div className="text-center mb-3 sm:mb-4 md:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">AH</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Ali Hamza</h3>
                  <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-emerald-200 rounded-full mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm font-bold text-green-800">FOUNDER & CHIEF OPERATOR</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-green-600 font-semibold mb-1">Business Development & Marketing Head</p>
                  <p className="text-xs text-slate-600 font-medium">Front-End Developer</p>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Skills */}
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2 md:mb-3">Core Skills</h4>
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
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
                        <div key={skill.name} className="flex items-center space-x-1 sm:space-x-2">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${skill.grad.join(" ")} rounded-full`} />
                          <span className="text-xs sm:text-sm font-medium text-slate-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="pt-2 sm:pt-3 md:pt-4 border-t border-purple-200">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A dynamic operator combining business strategy with modern front-end development, Ali specializes in
                      building engaging web experiences using Next.js, Tailwind CSS, and Figma — while also leading
                      marketing and client growth at reeCoder.
                    </p>
                  </div>
                </div>
              </article>

              {/* Najaf Ali */}
              <article className="bg-gradient-to-br from-cyan-200 to-blue-50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-blue-100 hover:shadow-md sm:hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-[1.03] card-hover">
                <div className="text-center mb-3 sm:mb-4 md:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">NA</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Najaf Ali</h3>
                  <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 rounded-full mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm font-bold text-blue-700">CEO & AI AGENT DEVELOPER</span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-blue-600 font-semibold mb-1">Lead Developer & Full-Stack Developer</p>
                  <p className="text-xs text-slate-600 font-medium text-center">AI Specialist</p>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Skills */}
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2 md:mb-3">Core Skills</h4>
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
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
                        <div key={skill.name} className="flex items-center space-x-1 sm:space-x-2">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${skill.grad.join(" ")} rounded-full`} />
                          <span className="text-xs sm:text-sm font-medium text-slate-700">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="pt-2 sm:pt-3 md:pt-4 border-t border-blue-200">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Najaf drives the future of automation at reeCoder by crafting advanced AI solutions and intelligent
                      systems. With deep expertise in Python, JavaScript, and Next.js, he leads full-stack development
                      while specializing in building powerful AI agents and tools.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-orange-100 rounded-full mb-3 sm:mb-4 md:mb-6">
                <Rocket className="w-3 h-3 md:w-4 md:h-4 text-orange-600 mr-1 md:mr-2" role="img" aria-label="Rocket icon" />
                <span className="text-xs sm:text-sm font-medium text-orange-700">Future Goals</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                Looking Forward
              </h2>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl lg:max-w-5xl mx-auto">
              <article className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg md:shadow-xl border border-slate-100">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Our Roadmap to Excellence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  {[
                    {
                      title: "Technology Leadership",
                      desc: "We aim to be at the forefront of emerging technologies, particularly in AI, machine learning, and next-generation web frameworks.",
                      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" role="img" aria-label="Technology icon" />,
                      grad: ["from-purple-500", "to-pink-500"],
                    },
                    {
                      title: "Global Expansion",
                      desc: "Our goal is to serve clients in 25+ countries by 2026, establishing reeCoder as a truly global digital solutions provider.",
                      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" role="img" aria-label="Global icon" />,
                      grad: ["from-blue-500", "to-cyan-500"],
                    },
                    {
                      title: "Innovation Hub",
                      desc: "We plan to establish an innovation lab focused on experimental technologies and open-source contributions to the developer community.",
                      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" role="img" aria-label="Innovation icon" />,
                      grad: ["from-green-500", "to-emerald-500"],
                    },
                    {
                      title: "Sustainable Growth",
                      desc: "We are committed to sustainable business practices and helping our clients build environmentally conscious digital solutions.",
                      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" role="img" aria-label="Sustainability icon" />,
                      grad: ["from-orange-500", "to-red-500"],
                    },
                  ].map((goal) => (
                    <div key={goal.title} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${goal.grad.join(
                          " "
                        )} rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {goal.icon}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-slate-900">{goal.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{goal.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}