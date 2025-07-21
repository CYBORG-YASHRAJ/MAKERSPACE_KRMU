import Link from "next/link"
import { Cpu, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/20">
                <Image
                  src="/makerspace logo.jpg"
                  alt="MAKERSPACE Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">MAKERSPACE</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              MAKERSPACE - K.R. Mangalam University. Empowering students to create, innovate, and build the future through cutting-edge technology and
              collaborative learning experiences.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">FB</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">TW</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">IN</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/issues" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Report Issue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/20 transition-colors">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-gray-300 leading-relaxed">Engineering Building, Room 201</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-gray-300">info@makerspace.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Meet Our Developers Section */}
        <div className="border-t border-white/10 mt-12 pt-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Meet Our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Developers</span>
            </h3>
            <p className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto">
              The talented team behind this innovative platform, dedicated to empowering the next generation of creators.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 mb-12">
              {/* Developer 1 - Yashraj Pahuja */}
              <div className="group text-center">
                <div className="relative mb-6 mx-auto w-28 h-28 lg:w-36 lg:h-36">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                  <div className="relative w-full h-full bg-white/10 rounded-full border-2 border-white/20 group-hover:border-cyan-400/50 transition-all duration-300 overflow-hidden shadow-lg">
                    {/* Yashraj's photo */}
                    <Image
                      src="/yashraj.jpg"
                      alt="Yashraj Pahuja Photo"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h4 className="text-white font-bold text-base lg:text-lg mb-2">YASHRAJ PAHUJA</h4>
                <p className="text-cyan-400 text-sm lg:text-base font-medium mb-2">Developer</p>
                <p className="text-gray-400 text-xs lg:text-sm mb-4">B.Tech CSE (AI & ML)</p>
                
                {/* LinkedIn Button */}
                <Link 
                  href="https://www.linkedin.com/in/yashraj-pahuja-28a34b325/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </div>

              {/* Developer 2 - Piyush Sharma */}
              <div className="group text-center">
                <div className="relative mb-6 mx-auto w-28 h-28 lg:w-36 lg:h-36">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                  <div className="relative w-full h-full bg-white/10 rounded-full border-2 border-white/20 group-hover:border-blue-400/50 transition-all duration-300 overflow-hidden shadow-lg">
                    {/* Piyush's photo */}
                    <Image
                      src="/piyush.png"
                      alt="Piyush Sharma Photo"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h4 className="text-white font-bold text-base lg:text-lg mb-2">PIYUSH SHARMA</h4>
                <p className="text-blue-400 text-sm lg:text-base font-medium mb-2">Developer</p>
                <p className="text-gray-400 text-xs lg:text-sm mb-4">B.Tech CSE (AI & ML)</p>
                
                {/* LinkedIn Button */}
                <Link 
                  href="https://www.linkedin.com/in/piyush-078455221/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} MAKERSPACE. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 relative group">
              Privacy Policy
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 relative group">
              Terms of Service
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
