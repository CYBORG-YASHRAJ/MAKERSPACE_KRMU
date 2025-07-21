import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 text-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-4 w-48 h-48 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 w-64 h-64 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-200/20 rounded-full blur-2xl animate-bounce transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
        
        <div className="relative container mx-auto px-4 py-8 sm:py-16 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/50 text-xs sm:text-sm text-blue-700 font-medium mb-4 sm:mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Welcome to the Future of Innovation
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                  <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Makerspace Logo */}
                    <div className="relative group flex-shrink-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-200/50 group-hover:bg-white transition-all duration-300 group-hover:shadow-xl">
                        <Image
                          src="/makerspace logo.jpg"
                          alt="MAKERSPACE Logo"
                          width={80}
                          height={80}
                          className="object-contain transition-transform duration-300 group-hover:scale-105 sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]"
                        />
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* MAKERSPACE Text */}
                    <span className="relative inline-block text-gray-900">
                      MAKERSPACE
                      <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                    </span>
                  </div>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mt-3 sm:mt-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light">
                    Where Ideas Come to Life
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  Empowering students to create, innovate, and build the future through cutting-edge technology,
                  collaborative learning, and hands-on experimentation in robotics, AI, and IoT.
                </p>
                
                {/* University Department Info */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 max-w-full sm:max-w-2xl shadow-sm mx-auto lg:mx-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-200/50">
                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">School of Engineering & Technology</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Advanced Research & Innovation Hub</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                <Link href="/gallery" className="w-full">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                    Explore the Lab
                  </Button>
                </Link>
              </div>
              
              {/* Stats Section */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
                <div className="text-center min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Active Students</div>
                </div>
                <div className="text-center min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Projects Completed</div>
                </div>
                <div className="text-center min-w-0">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Advanced Tools</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:justify-self-end mt-8 lg:mt-0 order-first lg:order-last">
              <div className="relative">
                {/* Floating Elements - Hidden on small screens for better performance */}
                <div className="hidden sm:block absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl sm:rounded-2xl rotate-12 opacity-60 animate-float"></div>
                <div className="hidden sm:block absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl sm:rounded-2xl -rotate-12 opacity-60 animate-float-delayed"></div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 shadow-xl border border-gray-200/50 relative z-10">
                  <Image
                    src="/Font.jpg"
                    alt="MAKERSPACE facility and equipment"
                    width={500}
                    height={400}
                    className="rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100 rounded-full text-blue-700 font-medium mb-4 sm:mb-6 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Our Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4 sm:px-0">
              State-of-the-Art 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Facilities</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Our makerspace is equipped with the latest technology and tools to support innovation across multiple
              disciplines, fostering creativity and hands-on learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden touch-manipulation">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">3D Printing & Fabrication</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Professional-grade 3D printers, laser cutters, and CNC machines for rapid prototyping and manufacturing.
              </p>
              <div className="text-sm sm:text-base text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Learn More →
              </div>
            </div>

            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 relative overflow-hidden touch-manipulation">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Electronics & IoT</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Arduino, Raspberry Pi, sensors, and components for building smart connected devices and prototypes.
              </p>
              <div className="text-sm sm:text-base text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                Learn More →
              </div>
            </div>

            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 hover:-translate-y-2 relative overflow-hidden touch-manipulation">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Collaborative Spaces</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Open workspaces, meeting rooms, and presentation areas designed for team projects and brainstorming.
              </p>
              <div className="text-sm sm:text-base text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Learn More →
              </div>
            </div>

            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:-translate-y-2 relative overflow-hidden touch-manipulation">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">AI & Robotics</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                High-performance computing resources and robotics kits for artificial intelligence development and research.
              </p>
              <div className="text-sm sm:text-base text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-medium mb-4 sm:mb-6 border border-blue-200/50 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Ready to Start?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4 sm:px-0">
              Get Started 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Today</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our resources and join the innovation community where creativity meets technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Link href="/events" className="group">
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden touch-manipulation">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Upcoming Events</h3>
                  <p className="mb-4 sm:mb-6 text-blue-100 leading-relaxed text-sm sm:text-base">Join workshops, bootcamps, and competitions to enhance your skills and network with peers.</p>
                  <div className="flex items-center text-blue-200 group-hover:text-white font-semibold transition-colors text-sm sm:text-base">
                    View Events 
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden touch-manipulation">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Project Gallery</h3>
                  <p className="mb-4 sm:mb-6 text-emerald-100 leading-relaxed text-sm sm:text-base">See amazing projects created by our talented student community and get inspired.</p>
                  <div className="flex items-center text-emerald-200 group-hover:text-white font-semibold transition-colors text-sm sm:text-base">
                    Browse Gallery 
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/about" className="group md:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden touch-manipulation">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About the Lab</h3>
                  <p className="mb-4 sm:mb-6 text-violet-100 leading-relaxed text-sm sm:text-base">Learn about our mission, facilities, and how to get involved in our innovation ecosystem.</p>
                  <div className="flex items-center text-violet-200 group-hover:text-white font-semibold transition-colors text-sm sm:text-base">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
