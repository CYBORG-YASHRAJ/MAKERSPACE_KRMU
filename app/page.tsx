import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 text-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-2xl animate-bounce"></div>
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
        
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          {/* KRMU Logo Section - Light Theme */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200/50 hover:bg-white/90 transition-all duration-500 shadow-lg">
                  <Image
                    src="/KRMU.png"
                    alt="KR Mangalam University Logo"
                    width={200}
                    height={100}
                    className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl sm:w-[240px] sm:h-[120px]"
                  />
                </div>
              </div>
              <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/50 text-xs sm:text-sm text-blue-700 font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Welcome to the Future of Innovation
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4">
                    {/* Makerspace Logo */}
                    <div className="relative group flex-shrink-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-200/50 group-hover:bg-white transition-all duration-300 group-hover:shadow-xl">
                        <Image
                          src="/makerspace logo.jpg"
                          alt="MAKERSPACE Logo"
                          width={100}
                          height={100}
                          className="object-contain transition-transform duration-300 group-hover:scale-105 sm:w-[120px] sm:h-[120px]"
                        />
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* MAKERSPACE Text */}
                    <span className="relative inline-block text-gray-900 text-center sm:text-left">
                      MAKERSPACE
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                    </span>
                  </div>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mt-4 text-2xl sm:text-4xl lg:text-5xl font-light text-center sm:text-left">
                    Where Ideas Come to Life
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-2xl leading-relaxed text-center sm:text-left">
                  Empowering students to create, innovate, and build the future through cutting-edge technology,
                  collaborative learning, and hands-on experimentation in robotics, AI, and IoT.
                </p>
                
                {/* University Department Info */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 max-w-2xl shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center border border-blue-200/50">
                        <Award className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">School of Engineering & Technology</h3>
                      <p className="text-sm text-gray-600">Advanced Research & Innovation Hub</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/gallery">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                    Explore the Lab
                  </Button>
                </Link>
              </div>
              
              {/* Stats Section */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Advanced Tools</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:justify-self-end mt-8 lg:mt-0">
              <div className="relative">
                {/* Floating Elements - Hidden on small screens for better performance */}
                <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl rotate-12 opacity-60 animate-float"></div>
                <div className="hidden sm:block absolute -bottom-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl -rotate-12 opacity-60 animate-float-delayed"></div>
                
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-200/50 relative z-10">
                  <Image
                    src="/Font.jpg"
                    alt="MAKERSPACE facility and equipment"
                    width={500}
                    height={400}
                    className="rounded-xl sm:rounded-2xl shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100 rounded-full text-blue-700 font-medium mb-6 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Our Facilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              State-of-the-Art 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Facilities</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Our makerspace is equipped with the latest technology and tools to support innovation across multiple
              disciplines, fostering creativity and hands-on learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">3D Printing & Fabrication</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional-grade 3D printers, laser cutters, and CNC machines for rapid prototyping and manufacturing.
              </p>
              <div className="mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Learn More →
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Electronics & IoT</h3>
              <p className="text-gray-600 leading-relaxed">
                Arduino, Raspberry Pi, sensors, and components for building smart connected devices and prototypes.
              </p>
              <div className="mt-6 text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                Learn More →
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Collaborative Spaces</h3>
              <p className="text-gray-600 leading-relaxed">
                Open workspaces, meeting rooms, and presentation areas designed for team projects and brainstorming.
              </p>
              <div className="mt-6 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Learn More →
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI & Robotics</h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance computing resources and robotics kits for artificial intelligence development and research.
              </p>
              <div className="mt-6 text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-medium mb-6 border border-blue-200/50 text-xs sm:text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Ready to Start?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Get Started 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Today</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our resources and join the innovation community where creativity meets technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link href="/events" className="group">
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
                  <p className="mb-6 text-blue-100 leading-relaxed">Join workshops, bootcamps, and competitions to enhance your skills and network with peers.</p>
                  <div className="flex items-center text-blue-200 group-hover:text-white font-semibold transition-colors">
                    View Events 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Project Gallery</h3>
                  <p className="mb-6 text-emerald-100 leading-relaxed">See amazing projects created by our talented student community and get inspired.</p>
                  <div className="flex items-center text-emerald-200 group-hover:text-white font-semibold transition-colors">
                    Browse Gallery 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">About the Lab</h3>
                  <p className="mb-6 text-violet-100 leading-relaxed">Learn about our mission, facilities, and how to get involved in our innovation ecosystem.</p>
                  <div className="flex items-center text-violet-200 group-hover:text-white font-semibold transition-colors">
                    Learn More 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
