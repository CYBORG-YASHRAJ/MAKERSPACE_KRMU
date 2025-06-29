import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Lightbulb, Users, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Our Innovation Lab</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A cutting-edge makerspace dedicated to fostering creativity, innovation, and hands-on learning in technology
            and engineering.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower students with the tools, knowledge, and collaborative environment needed to transform
                innovative ideas into reality. We bridge the gap between theoretical learning and practical application
                through hands-on experimentation and project-based learning.
              </p>
              <p className="text-lg text-gray-600">
                Our lab serves as a catalyst for interdisciplinary collaboration, bringing together students from
                engineering, computer science, design, and business to create solutions for real-world challenges.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Students collaborating in the lab"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">Encouraging creative thinking and breakthrough solutions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-600">Building strong teams and fostering knowledge sharing</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hands-on Learning</h3>
                <p className="text-gray-600">Learning by doing and building real projects</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">Striving for quality in every project and initiative</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facilities & Tools */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Facilities & Equipment</h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Digital Fabrication</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Professional 3D printers (FDM, SLA, and industrial-grade)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Laser cutting and engraving machines</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>CNC milling machines and routers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Vinyl cutters and heat presses</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Electronics & Computing</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Arduino and Raspberry Pi development kits</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Sensors, actuators, and IoT components</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>High-performance computing clusters for AI/ML</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Soldering stations and electronic testing equipment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Robotics & AI</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Industrial robotic arms and mobile platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Computer vision and machine learning frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Drone development and testing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>VR/AR development stations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Collaboration Spaces</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Open workbenches and project areas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Meeting rooms with presentation equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Quiet study and design thinking spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Event and workshop areas</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Lab Director"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Chen</h3>
                <p className="text-gray-600 mb-4">Lab Director</p>
                <p className="text-sm text-gray-500">
                  PhD in Robotics Engineering with 15+ years of experience in innovation labs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Technical Manager"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">Mike Rodriguez</h3>
                <p className="text-gray-600 mb-4">Technical Manager</p>
                <p className="text-sm text-gray-500">
                  Expert in digital fabrication and electronics with industry experience
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Student Coordinator"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">Emma Thompson</h3>
                <p className="text-gray-600 mb-4">Student Coordinator</p>
                <p className="text-sm text-gray-500">Graduate student specializing in AI and community engagement</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
