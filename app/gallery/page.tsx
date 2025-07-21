"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const galleryItems = [
    {
      id: 1,
      title: "Autonomous Drone Project",
      category: "Robotics",
      date: "2024-02-01",
      description: "Student-built autonomous drone with computer vision capabilities for environmental monitoring.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "3D Printed Prosthetic Hand",
      category: "3D Printing",
      date: "2024-01-28",
      description: "Functional prosthetic hand designed and printed by biomedical engineering students.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "IoT Smart Garden System",
      category: "IoT",
      date: "2024-01-25",
      description: "Automated plant monitoring and watering system using Arduino and various sensors.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Laser Cut Architectural Model",
      category: "Laser Cutting",
      date: "2024-01-22",
      description: "Detailed architectural scale model created using precision laser cutting techniques.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "AI-Powered Sorting Robot",
      category: "AI",
      date: "2024-01-20",
      description: "Machine learning-based robot that can identify and sort different types of objects.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Workshop: Arduino Basics",
      category: "Workshop",
      date: "2024-01-18",
      description: "Students learning the fundamentals of Arduino programming and circuit building.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "VR Headset Prototype",
      category: "VR/AR",
      date: "2024-01-15",
      description: "Custom VR headset prototype developed for educational applications.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Robotic Arm Assembly",
      category: "Robotics",
      date: "2024-01-12",
      description: "Students assembling and programming a 6-axis robotic arm for manufacturing tasks.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "PCB Design Workshop",
      category: "Electronics",
      date: "2024-01-10",
      description: "Hands-on workshop on printed circuit board design and fabrication.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Smart Home Automation",
      category: "IoT",
      date: "2024-01-08",
      description: "Complete home automation system with voice control and mobile app integration.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 11,
      title: "Competition Winning Robot",
      category: "Competition",
      date: "2024-01-05",
      description: "The robot that won first place in the Regional Autonomous Robotics Challenge.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 12,
      title: "3D Printed Art Installation",
      category: "3D Printing",
      date: "2024-01-03",
      description: "Large-scale art installation created using multiple 3D printing techniques.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = [
    "all",
    "Robotics",
    "3D Printing",
    "IoT",
    "AI",
    "Laser Cutting",
    "Electronics",
    "VR/AR",
    "Workshop",
    "Competition",
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredItems[newIndex].id)
  }

  const selectedItem = selectedImage ? galleryItems.find((item) => item.id === selectedImage) : null

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Robotics":
        return "bg-blue-100 text-blue-800"
      case "3D Printing":
        return "bg-green-100 text-green-800"
      case "IoT":
        return "bg-purple-100 text-purple-800"
      case "AI":
        return "bg-red-100 text-red-800"
      case "Laser Cutting":
        return "bg-orange-100 text-orange-800"
      case "Electronics":
        return "bg-yellow-100 text-yellow-800"
      case "VR/AR":
        return "bg-pink-100 text-pink-800"
      case "Workshop":
        return "bg-indigo-100 text-indigo-800"
      case "Competition":
        return "bg-emerald-100 text-emerald-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen pt-24 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the amazing projects, innovations, and activities from our Innovation Lab community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full capitalize"
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => openLightbox(item.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image and Details */}
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(selectedItem.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {selectedItem.category}
                        </div>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(selectedItem.category)}>{selectedItem.category}</Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
