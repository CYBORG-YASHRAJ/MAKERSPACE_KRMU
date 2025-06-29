import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Arduino Bootcamp for Beginners",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab - Room A",
      description: "Learn the basics of Arduino programming and build your first IoT project.",
      category: "Workshop",
      spots: "12 spots available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "3D Printing Masterclass",
      date: "2024-02-20",
      time: "10:00 AM - 4:00 PM",
      location: "Fabrication Lab",
      description: "Advanced techniques in 3D modeling and printing for complex projects.",
      category: "Masterclass",
      spots: "8 spots available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "AI & Machine Learning Hackathon",
      date: "2024-02-25",
      time: "9:00 AM - 9:00 PM",
      location: "Main Lab Space",
      description: "48-hour hackathon focused on developing AI solutions for sustainability.",
      category: "Competition",
      spots: "Teams of 4",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Robotics Competition Prep",
      date: "2024-03-01",
      time: "1:00 PM - 6:00 PM",
      location: "Robotics Arena",
      description: "Prepare for the upcoming inter-university robotics competition.",
      category: "Competition",
      spots: "20 spots available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "IoT Security Workshop",
      date: "2024-03-08",
      time: "3:00 PM - 6:00 PM",
      location: "Innovation Lab - Room B",
      description: "Learn about security best practices for IoT device development.",
      category: "Workshop",
      spots: "15 spots available",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Startup Pitch Night",
      date: "2024-03-15",
      time: "6:00 PM - 9:00 PM",
      location: "Presentation Hall",
      description: "Present your innovative projects to industry experts and investors.",
      category: "Networking",
      spots: "Open to all",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Laser Cutting Workshop",
      date: "2024-01-20",
      description: "Introduction to laser cutting design and safety protocols.",
      category: "Workshop",
      participants: "24 participants",
    },
    {
      id: 8,
      title: "VR Development Bootcamp",
      date: "2024-01-15",
      description: "Three-day intensive course on virtual reality application development.",
      category: "Bootcamp",
      participants: "16 participants",
    },
    {
      id: 9,
      title: "Innovation Showcase 2024",
      date: "2024-01-10",
      description: "Annual showcase of student projects and innovations.",
      category: "Showcase",
      participants: "200+ attendees",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop":
        return "bg-blue-100 text-blue-800"
      case "Masterclass":
        return "bg-purple-100 text-purple-800"
      case "Competition":
        return "bg-red-100 text-red-800"
      case "Networking":
        return "bg-green-100 text-green-800"
      case "Bootcamp":
        return "bg-orange-100 text-orange-800"
      case "Showcase":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Events & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community events, workshops, and competitions to enhance your skills and connect with fellow
            innovators.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{event.description}</p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.spots}
                    </div>
                  </div>

                  <Button className="w-full rounded-xl">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-0 shadow-md rounded-2xl">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge className={getCategoryColor(event.category)} variant="secondary">
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm">{event.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.participants}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
