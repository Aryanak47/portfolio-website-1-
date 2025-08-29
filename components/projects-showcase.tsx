"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  githubUrl: string
  liveUrl: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "VerifyWise - AI Governance Platform",
    description:
      "Open source AI governance platform providing compliance tracking, risk assessment, and ethics monitoring for AI systems in enterprise environments.",
    image: "/verifywise-p.png",
    technologies: ["React", "TypeScript", "Node.js", "AI/ML", "Compliance", "Open Source"],
    category: "Web Apps",
    githubUrl: "https://github.com/bluewave-labs/verifywise",
    liveUrl: "https://app.verifywise.ai/",
    featured: true,
  },
  {
    id: "2",
    title: "Clever Brain - AI Face Recognition App (2020)",
    description:
      "Intelligent face detection application with user ranking system and real-time processing using Clarifai API for image recognition.",
    image: "/clever-brain-ai-app.png",
    technologies: ["JavaScript", "HTML", "CSS", "Clarifai API", "Face Recognition"],
    category: "Web Apps",
    githubUrl: "https://github.com/Aryanak47/Clever-Brain",
    liveUrl: "https://github.com/Aryanak47/Clever-Brain",
  },
  {
    id: "3",
    title: "Remittance Platform - Hamro Patro (Corporate Project)",
    description:
      "In-house remittance platform developed during my tenure at Hamro Patro Inc., replacing costly third-party APIs and achieving 60% cost savings for 100K+ daily users with secure US-to-Nepal money transfers.",
    image: "/remittance-platform-dashboard.png",
    technologies: ["Java", "Spring Boot", "AWS", "PostgreSQL", "React", "Payment Integration"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://hamropatro.com",
    featured: true,
  },
  {
    id: "4",
    title: "Ramailo Ghar - Earning App (2020)",
    description:
      "Android earning application where users earn money by liking, creating, sharing posts, watching YouTube videos and ads. Features real-time authentication, dynamic content, and earnings tracking system.",
    image: "/andriodapplicationramailoghar-p.jpg",
    technologies: ["Java", "Android", "Firebase Realtime Database", "Node.js", "Gradle"],
    category: "Applications",
    githubUrl: "https://github.com/Aryanak47/Ramailo-Ghar-Earning-App-",
    liveUrl: "https://github.com/Aryanak47/Ramailo-Ghar-Earning-App-",
  },
  {
    id: "5",
    title: "Hamro Learning (Corporate Project)",
    description:
      "Educational platform developed during my internship at Hamro Patro Inc. Delivered before deadline with additional features that impressed the team, leading to my full-time position.",
    image: "/hamrolearning-p.jpg",
    technologies: ["React", "Node.js", "Firebase", "Material Design", "Educational Technology"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://learn.hamropatro.com/",
  },
  {
    id: "6",
    title: "Hamro Remittance Web (Corporate Project)",
    description:
      "Web dashboard for the remittance platform developed during my tenure at Hamro Patro Inc., enabling secure money transfers with enhanced user experience and administrative controls.",
    image: "/hamroremittance-p.jpg",
    technologies: ["React", "Node.js", "REST API", "Security", "Payment Integration", "Dashboard"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "https://remit.hamropatro.com/dashboard",
    featured: true,
  },
  {
    id: "7",
    title: "Hamro Pay - Digital Wallet (Corporate Project)",
    description:
      "Nepal's emerging digital wallet and payment platform developed at Hamro Patro Inc., designed to make financial transactions simple, secure, and seamless. Features bill payments, fund transfers, and expense management for a hassle-free financial journey.",
    image: "/wallet-p.jpg",
    technologies: ["React", "Node.js", "Payment Gateway", "Digital Wallet", "Security", "FinTech", "Mobile Banking"],
    category: "Web Apps",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "8",
    title: "MyTour - Tourism Guide",
    description:
      "Tourism web application providing comprehensive travel guides, location services, and interactive features for travelers exploring destinations.",
    image: "/tour-p.png",
    technologies: ["React", "JavaScript", "Google Maps API", "Location Services", "Travel Technology"],
    category: "Web Apps",
    githubUrl: "https://github.com/Aryanak47/MyTour",
    liveUrl: "https://github.com/Aryanak47/MyTour",
  },
  {
    id: "9",
    title: "Claude AI Futures Trading System (2025)",
    description:
      "Sophisticated full-stack AI-powered futures trading platform using Claude AI for fundamental market analysis, featuring real-time data, technical indicators (RSI, MACD, EMA), and intelligent market insights.",
    image: "/trade-p.png",
    technologies: ["React 18", "Node.js", "Express.js", "PostgreSQL", "Claude AI", "Material-UI", "WebSocket", "Recharts"],
    category: "Web Apps",
    githubUrl: "https://github.com/Aryanak47/trade",
    liveUrl: "https://github.com/Aryanak47/trade",
    featured: true,
  },
  {
    id: "10",
    title: "Twitter Clone (2021)",
    description:
      "Social media web application replicating core Twitter functionality with user interactions, built using modern web technologies and templating engine.",
    image: "/twitter-clone-p.jpg",
    technologies: ["JavaScript", "Node.js", "Pug", "CSS", "HTML", "Social Media"],
    category: "Web Apps",
    githubUrl: "https://github.com/Aryanak47/twitter-clone",
    liveUrl: "https://github.com/Aryanak47/twitter-clone",
  },
  {
    id: "11",
    title: "ThreatScope - OSINT Security Platform (2025)",
    description:
      "Professional OSINT and breach monitoring security platform with comprehensive threat detection capabilities. Features modern UI, role-based access control, JWT authentication, and real-time monitoring dashboard.",
    image: "/threatscope-p.png",
    technologies: ["Next.js 14", "TypeScript", "Java", "Spring Boot", "Tailwind CSS", "Docker", "PostgreSQL", "JWT"],
    category: "Web Apps",
    githubUrl: "https://github.com/Aryanak47/frontend-threatscope",
    liveUrl: "https://github.com/Aryanak47/frontend-threatscope",
    featured: true,
  },
]

const categories = ["All", "Web Apps", "DevOps", "Applications"]

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = (
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  ).sort((a, b) => {
    // Sort featured projects first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in FinTech, security systems, AI applications, and scalable backend architectures.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full ${
                project.featured ? "ring-2 ring-accent/20" : ""
              } ${hoveredProject === project.id ? "scale-105" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-1 bg-muted text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4">
                {project.githubUrl !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button 
                  size="sm" 
                  className={`${project.githubUrl === "#" ? "w-full" : "flex-1"} bg-accent hover:bg-accent/90 text-accent-foreground`} 
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            asChild
          >
            <a href="https://github.com/Aryanak47" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
