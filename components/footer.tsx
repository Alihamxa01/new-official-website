import Link from "next/link"
import { Mail, Phone, MapPin, Zap, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center spaces-x-0">
  <div className="flex items-center justify-center">
    <img
      src="/imgg.png"
      alt="reeCoder Logo"
      className="h-16  w-auto object-contain "
    />
  </div>
  {/* <span className="text-2xl font-bold text-black ">eeCoder</span> */}
</Link>
              <span className="text-2xl font-extrabold tracking-tight">reeCoder</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              We craft intelligent digital products and services that transform ideas into innovative business solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-600 pb-2">Explore</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-600 pb-2">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-300 text-sm">
                <Mail size={18} className="mr-3 text-indigo-400" />
                info@reecoder.com
              </li>
             
              <li className="flex items-center text-slate-300 text-sm">
                <MapPin size={18} className="mr-3 text-indigo-400" />
                Global Digital Hub
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-600 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
{/*               <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-6 h-6 text-white" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/reecoder/"
                className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://x.com/thereecoder"
                className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2025 reeCoder. All rights reserved. Designed for innovation.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-indigo-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-indigo-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
