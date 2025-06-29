import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Innovation Lab
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Where Ideas Come to Life
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-2xl">
                  Empowering students to create, innovate, and build the future through cutting-edge technology,
                  collaborative learning, and hands-on experimentation in robotics, AI, and IoT.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-2xl">
                  Explore the Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-2xl"
                >
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Students working in the makerspace"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our makerspace is equipped with the latest technology and tools to support innovation across multiple
              disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3D Printing & Fabrication</h3>
              <p className="text-gray-600">
                Professional-grade 3D printers, laser cutters, and CNC machines for rapid prototyping.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Electronics & IoT</h3>
              <p className="text-gray-600">
                Arduino, Raspberry Pi, sensors, and components for building smart connected devices.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaborative Spaces</h3>
              <p className="text-gray-600">Open workspaces, meeting rooms, and presentation areas for team projects.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI & Robotics</h3>
              <p className="text-gray-600">
                High-performance computing resources and robotics kits for AI development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">Explore our resources and join the innovation community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/events" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
                <p className="mb-6">Join workshops, bootcamps, and competitions to enhance your skills.</p>
                <div className="flex items-center text-cyan-200 group-hover:text-white">
                  View Events <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">Project Gallery</h3>
                <p className="mb-6">See amazing projects created by our talented student community.</p>
                <div className="flex items-center text-green-200 group-hover:text-white">
                  Browse Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-4">About the Lab</h3>
                <p className="mb-6">Learn about our mission, facilities, and how to get involved.</p>
                <div className="flex items-center text-orange-200 group-hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
