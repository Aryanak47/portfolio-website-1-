"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, BookOpen } from "lucide-react"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  status: "completed" | "in-progress"
  description?: string
  achievements?: string[]
}

const educationData: Education[] = [
  {
    id: "1",
    institution: "Lambton College",
    degree: "Postgraduate Diploma",
    field: "Full Stack Software Development",
    location: "Toronto, Canada",
    startDate: "2023",
    endDate: "January 2026",
    status: "in-progress",
    description: "Advanced postgraduate program focusing on modern full-stack development technologies and industry best practices.",
    achievements: [
      "Comprehensive study of modern web technologies",
      "Hands-on experience with industry-standard development tools",
      "Real-world project development and deployment"
    ]
  },
  {
    id: "2",
    institution: "Herald College Kathmandu",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Kathmandu, Nepal",
    startDate: "2017",
    endDate: "January 2021",
    status: "completed",
    description: "Comprehensive computer science education covering programming fundamentals, algorithms, software engineering, and computer systems.",
    achievements: [
      "Strong foundation in computer science principles",
      "Practical experience in software development",
      "Project-based learning and team collaboration"
    ]
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in computer science and software development.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education) => (
            <Card
              key={education.id}
              className={`group cursor-default transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                education.status === "in-progress" ? "ring-2 ring-accent/20 bg-accent/5" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                        {education.degree}
                        {education.status === "in-progress" && (
                          <Badge className="bg-accent text-accent-foreground text-xs">In Progress</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-accent">
                        {education.field}
                      </CardDescription>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">{education.institution}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{education.startDate} - {education.endDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">{education.description}</p>

                {education.achievements && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-accent" />
                      Key Learning Areas
                    </h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4">
                <GraduationCap className="h-10 w-10 text-accent" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    Strong academic foundation combined with practical industry experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}