import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Innovation Lab Wins National Makerspace Excellence Award",
      excerpt:
        "Our lab has been recognized for outstanding contribution to student innovation and technology education.",
      content:
        "We are thrilled to announce that our Innovation Lab has been awarded the prestigious National Makerspace Excellence Award for 2024. This recognition highlights our commitment to providing cutting-edge facilities and fostering a culture of innovation among students.",
      date: "2024-02-10",
      author: "Dr. Sarah Chen",
      category: "Achievement",
      featured: true,
    },
    {
      id: 2,
      title: "New AI Computing Cluster Now Available",
      excerpt:
        "High-performance computing resources for machine learning and AI research projects are now accessible to all students.",
      content:
        "We've installed a new high-performance computing cluster specifically designed for AI and machine learning workloads. The cluster features the latest GPUs and is available for student research projects.",
      date: "2024-02-08",
      author: "Mike Rodriguez",
      category: "Equipment",
      featured: false,
    },
    {
      id: 3,
      title: "Student Team Places First in Regional Robotics Competition",
      excerpt: "Team 'RoboInnovators' from our lab secured first place in the Regional Autonomous Robotics Challenge.",
      content:
        "Congratulations to our student team 'RoboInnovators' for their outstanding performance in the Regional Autonomous Robotics Challenge. Their innovative approach to autonomous navigation impressed judges and competitors alike.",
      date: "2024-02-05",
      author: "Emma Thompson",
      category: "Achievement",
      featured: true,
    },
    {
      id: 4,
      title: "Spring 2024 Workshop Series Announced",
      excerpt:
        "Registration is now open for our comprehensive spring workshop series covering IoT, 3D printing, and more.",
      content:
        "We're excited to announce our Spring 2024 workshop series, featuring sessions on IoT development, advanced 3D printing techniques, laser cutting, and electronics prototyping. Registration is now open for all students.",
      date: "2024-02-01",
      author: "Lab Team",
      category: "Announcement",
      featured: false,
    },
    {
      id: 5,
      title: "Partnership with Local Tech Companies Established",
      excerpt:
        "New partnerships will provide internship opportunities and real-world project collaborations for students.",
      content:
        "We've established partnerships with several local technology companies to provide students with internship opportunities and collaborative project experiences. These partnerships bridge the gap between academic learning and industry practice.",
      date: "2024-01-28",
      author: "Dr. Sarah Chen",
      category: "Partnership",
      featured: false,
    },
    {
      id: 6,
      title: "Lab Safety Protocols Updated",
      excerpt: "Important updates to lab safety procedures and equipment usage guidelines for all users.",
      content:
        "We've updated our lab safety protocols to ensure the highest standards of safety for all users. Please review the new guidelines before your next visit to the lab.",
      date: "2024-01-25",
      author: "Mike Rodriguez",
      category: "Safety",
      featured: false,
    },
    {
      id: 7,
      title: "Innovation Showcase 2024 Highlights",
      excerpt: "Recap of the amazing projects and innovations presented at our annual showcase event.",
      content:
        "Our annual Innovation Showcase was a tremendous success, featuring over 50 student projects ranging from IoT solutions to robotics applications. The event attracted industry professionals and academic leaders from across the region.",
      date: "2024-01-20",
      author: "Emma Thompson",
      category: "Event",
      featured: false,
    },
    {
      id: 8,
      title: "New Laser Cutting Equipment Installed",
      excerpt: "State-of-the-art laser cutting and engraving equipment is now available for student projects.",
      content:
        "We've installed new high-precision laser cutting and engraving equipment in our fabrication lab. The new machines offer improved accuracy and expanded material compatibility for student projects.",
      date: "2024-01-15",
      author: "Mike Rodriguez",
      category: "Equipment",
      featured: false,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Achievement":
        return "bg-green-100 text-green-800"
      case "Equipment":
        return "bg-blue-100 text-blue-800"
      case "Announcement":
        return "bg-purple-100 text-purple-800"
      case "Partnership":
        return "bg-orange-100 text-orange-800"
      case "Safety":
        return "bg-red-100 text-red-800"
      case "Event":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const featuredNews = newsItems.filter((item) => item.featured)
  const regularNews = newsItems.filter((item) => !item.featured)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and announcements from our Innovation Lab.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured News</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card
                  key={item.id}
                  className="border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
                    <Badge className="bg-white/20 text-white mb-4">{item.category}</Badge>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-blue-100">{item.excerpt}</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {item.author}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular News */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <Card key={item.id} className="border-0 shadow-md rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(item.category)} variant="secondary">
                      {item.category}
                    </Badge>
                    <div className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </div>
                    <Link href={`/news/${item.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Read More
                    </Link>
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
