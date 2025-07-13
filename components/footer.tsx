import Link from "next/link"
import { Mail, Phone, MapPin, Zap, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">reeCoder</span>
            </div>
            <p className="text-slate-600 max-w-md mb-6 leading-relaxed">
              Innovative software house delivering cutting-edge solutions that transform businesses and drive digital
              success in the modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Github className="w-5 h-5 text-slate-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-slate-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Twitter className="w-5 h-5 text-slate-600" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-900">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-900">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-600">
                <Mail size={16} className="mr-3 text-slate-400" />
                hello@reecoder.com
              </li>
              <li className="flex items-center text-slate-600">
                <Phone size={16} className="mr-3 text-slate-400" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-slate-600">
                <MapPin size={16} className="mr-3 text-slate-400" />
                Global Remote Team
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-600">
          <p>&copy; 2024 reeCoder. All rights reserved. Crafted with passion for innovation.</p>
        </div>
      </div>
    </footer>
  )
}
