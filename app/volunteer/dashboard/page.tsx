"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock,
  Award,
  Star,
  MessageSquare,
  Edit,
  CheckCircle,
  XCircle,
  ArrowRight,
  BarChart,
  Users,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
} from "@/components/ui/sidebar"

export default function VolunteerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const volunteerProfile = {
    name: "Sarah Johnson",
    title: "Web Developer",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "Full-stack developer with 5 years of experience. Passionate about using technology to help non-profits achieve their mission.",
    skills: ["JavaScript", "React", "Node.js", "UI/UX Design", "WordPress"],
    rating: 4.8,
    reviewCount: 24,
    completedProjects: 18,
    hoursVolunteered: 156,
    impactScore: 87,
  }

  const pendingRequests = [
    {
      id: 1,
      organization: "Environmental Action Network",
      project: "Website Redesign",
      requestDate: "2023-03-15",
      status: "pending",
    },
    {
      id: 2,
      organization: "Community Health Initiative",
      project: "Mobile App Development",
      requestDate: "2023-03-12",
      status: "pending",
    },
  ]

  const activeProjects = [
    {
      id: 1,
      organization: "Education For All",
      project: "Learning Management System",
      startDate: "2023-02-10",
      deadline: "2023-04-20",
      progress: 65,
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  const completedProjects = [
    {
      id: 1,
      organization: "Animal Rescue Foundation",
      project: "Donation Platform",
      completionDate: "2023-01-15",
      rating: 5,
      review:
        "Sarah did an amazing job creating our donation platform. She was professional, responsive, and delivered exactly what we needed.",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      organization: "Youth Mentorship Program",
      project: "Website Development",
      completionDate: "2022-11-20",
      rating: 4.5,
      review: "Great work on our website. Sarah was easy to work with and understood our needs perfectly.",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "2023-03-25",
      time: "2:00 PM - 4:00 PM",
      type: "Virtual",
    },
    {
      id: 2,
      title: "Volunteer Recognition Event",
      date: "2023-04-10",
      time: "6:00 PM - 8:00 PM",
      type: "In-Person",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={volunteerProfile.avatar || "/placeholder.svg"}
                  alt={volunteerProfile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{volunteerProfile.name}</span>
                <span className="text-xs text-muted-foreground">{volunteerProfile.title}</span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
                      <BarChart className="h-4 w-4 mr-2" />
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "profile"} onClick={() => setActiveTab("profile")}>
                      <Users className="h-4 w-4 mr-2" />
                      <span>My Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "requests"} onClick={() => setActiveTab("requests")}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span>Requests</span>
                      {pendingRequests.length > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {pendingRequests.length}
                        </Badge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Account Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Sign Out</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="px-3 py-2">
              <div className="text-xs text-muted-foreground">
                <p>
                  Need help?{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Volunteer Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {volunteerProfile.name}!</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Projects Completed</p>
                          <h3 className="text-2xl font-bold">{volunteerProfile.completedProjects}</h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Hours Volunteered</p>
                          <h3 className="text-2xl font-bold">{volunteerProfile.hoursVolunteered}</h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Rating</p>
                          <div className="flex items-center">
                            <h3 className="text-2xl font-bold mr-2">{volunteerProfile.rating}</h3>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(volunteerProfile.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Impact Score</p>
                          <h3 className="text-2xl font-bold">{volunteerProfile.impactScore}</h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Active Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {activeProjects.length > 0 ? (
                      <div className="space-y-6">
                        {activeProjects.map((project) => (
                          <div key={project.id} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                  <Image
                                    src={project.logo || "/placeholder.svg"}
                                    alt={project.organization}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold">{project.project}</h4>
                                  <p className="text-sm text-muted-foreground">{project.organization}</p>
                                </div>
                              </div>
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You don't have any active projects at the moment.</p>
                        <Button variant="outline" className="mt-4">
                          Find Opportunities
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Pending Requests */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pendingRequests.length > 0 ? (
                      <div className="space-y-4">
                        {pendingRequests.map((request) => (
                          <div key={request.id} className="flex items-center justify-between border rounded-lg p-4">
                            <div>
                              <h4 className="font-semibold">{request.project}</h4>
                              <p className="text-sm text-muted-foreground">{request.organization}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Requested on {new Date(request.requestDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Decline
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You don't have any pending requests at the moment.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Recent Reviews */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {completedProjects.length > 0 ? (
                      <div className="space-y-6">
                        {completedProjects.slice(0, 2).map((project) => (
                          <div key={project.id} className="border rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={project.logo || "/placeholder.svg"}
                                  alt={project.organization}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{project.organization}</h4>
                                <p className="text-sm text-muted-foreground">{project.project}</p>
                              </div>
                              <div className="ml-auto flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(project.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm italic">"{project.review}"</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              Completed on {new Date(project.completionDate).toLocaleDateString()}
                            </p>
                          </div>
                        ))}

                        <div className="text-center">
                          <Button variant="outline" className="group" onClick={() => setActiveTab("projects")}>
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You don't have any reviews yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>My Profile</CardTitle>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src={volunteerProfile.avatar || "/placeholder.svg"}
                            alt={volunteerProfile.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{volunteerProfile.name}</h3>
                        <p className="text-muted-foreground">{volunteerProfile.title}</p>

                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(volunteerProfile.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                            />
                          ))}
                          <span className="ml-2 text-sm">({volunteerProfile.reviewCount} reviews)</span>
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold mb-2">About Me</h4>
                            <p className="text-muted-foreground">{volunteerProfile.bio}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {volunteerProfile.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Stats</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div className="bg-muted/50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold">{volunteerProfile.completedProjects}</p>
                                <p className="text-xs text-muted-foreground">Projects Completed</p>
                              </div>
                              <div className="bg-muted/50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold">{volunteerProfile.hoursVolunteered}</p>
                                <p className="text-xs text-muted-foreground">Hours Volunteered</p>
                              </div>
                              <div className="bg-muted/50 p-3 rounded-lg text-center">
                                <p className="text-2xl font-bold">{volunteerProfile.impactScore}</p>
                                <p className="text-xs text-muted-foreground">Impact Score</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {activeProjects.length > 0 ? (
                      <div className="space-y-6">
                        {activeProjects.map((project) => (
                          <div key={project.id} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                  <Image
                                    src={project.logo || "/placeholder.svg"}
                                    alt={project.organization}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-semibold">{project.project}</h4>
                                  <p className="text-sm text-muted-foreground">{project.organization}</p>
                                </div>
                              </div>
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You don't have any active projects at the moment.</p>
                        <Button variant="outline" className="mt-4">
                          Find Opportunities
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Completed Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {completedProjects.length > 0 ? (
                      <div className="space-y-6">
                        {completedProjects.map((project) => (
                          <div key={project.id} className="border rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={project.logo || "/placeholder.svg"}
                                  alt={project.organization}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{project.organization}</h4>
                                <p className="text-sm text-muted-foreground">{project.project}</p>
                              </div>
                              <div className="ml-auto flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(project.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm italic">"{project.review}"</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              Completed on {new Date(project.completionDate).toLocaleDateString()}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You haven't completed any projects yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requests" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pendingRequests.length > 0 ? (
                      <div className="space-y-4">
                        {pendingRequests.map((request) => (
                          <div key={request.id} className="flex items-center justify-between border rounded-lg p-4">
                            <div>
                              <h4 className="font-semibold">{request.project}</h4>
                              <p className="text-sm text-muted-foreground">{request.organization}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Requested on {new Date(request.requestDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Decline
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You don't have any pending requests at the moment.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

