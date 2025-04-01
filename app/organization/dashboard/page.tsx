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
  CheckCircle,
  XCircle,
  BarChart,
  Users,
  FileText,
  Building,
  PlusCircle,
  Briefcase,
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

export default function OrganizationDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const organizationProfile = {
    name: "Community Health Initiative",
    logo: "/placeholder.svg?height=128&width=128",
    description: "Non-profit organization focused on providing healthcare services to underserved communities.",
    location: "San Francisco, CA",
    website: "www.communityhealth.org",
    foundedYear: 2015,
    projectsPosted: 24,
    projectsCompleted: 18,
    volunteersEngaged: 42,
  }

  const activeProjects = [
    {
      id: 1,
      title: "Mobile App Development",
      skills: ["React Native", "JavaScript", "UI/UX Design"],
      startDate: "2023-02-15",
      deadline: "2023-05-20",
      progress: 45,
      applicants: 8,
      assignedVolunteers: 3,
    },
    {
      id: 2,
      title: "Website Redesign",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"],
      startDate: "2023-03-01",
      deadline: "2023-04-30",
      progress: 75,
      applicants: 12,
      assignedVolunteers: 2,
    },
  ]

  const pendingApplications = [
    {
      id: 1,
      project: "Social Media Campaign",
      volunteer: "Alex Johnson",
      skills: ["Social Media Marketing", "Content Creation"],
      appliedDate: "2023-03-18",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      project: "Database Migration",
      volunteer: "Maria Garcia",
      skills: ["SQL", "Database Design", "Data Migration"],
      appliedDate: "2023-03-15",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const topVolunteers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Web Developer",
      projectsCompleted: 5,
      rating: 4.9,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "David Chen",
      title: "Graphic Designer",
      projectsCompleted: 3,
      rating: 4.7,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Content Writer",
      projectsCompleted: 4,
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
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
                  src={organizationProfile.logo || "/placeholder.svg"}
                  alt={organizationProfile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium truncate">{organizationProfile.name}</span>
                <span className="text-xs text-muted-foreground">Organization</span>
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
                    <SidebarMenuButton isActive={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "volunteers"} onClick={() => setActiveTab("volunteers")}>
                      <Users className="h-4 w-4 mr-2" />
                      <span>Volunteers</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "applications"}
                      onClick={() => setActiveTab("applications")}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Applications</span>
                      {pendingApplications.length > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {pendingApplications.length}
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
                      <Building className="h-4 w-4 mr-2" />
                      <span>Organization Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
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
              <h1 className="text-3xl font-bold animate-fade-in">Organization Dashboard</h1>
              <p className="text-muted-foreground animate-fade-in-delay">Welcome back, {organizationProfile.name}!</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full max-w-md animate-slide-up">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="hover-lift transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Projects Posted</p>
                          <h3 className="text-2xl font-bold">{organizationProfile.projectsPosted}</h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full animate-pulse-effect">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Projects Completed</p>
                          <h3 className="text-2xl font-bold">{organizationProfile.projectsCompleted}</h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full animate-pulse-effect">
                          <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Volunteers Engaged</p>
                          <h3 className="text-2xl font-bold">{organizationProfile.volunteersEngaged}</h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full animate-pulse-effect">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                          <h3 className="text-2xl font-bold">
                            {Math.round(
                              (organizationProfile.projectsCompleted / organizationProfile.projectsPosted) * 100,
                            )}
                            %
                          </h3>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full animate-pulse-effect">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Active Projects */}
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {activeProjects.length > 0 ? (
                      <div className="space-y-6">
                        {activeProjects.map((project) => (
                          <div
                            key={project.id}
                            className="border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h4 className="font-semibold">{project.title}</h4>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {project.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
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
                              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                <div className="flex items-center">
                                  <Users className="h-3 w-3 mr-1" />
                                  <span>Volunteers: {project.assignedVolunteers}</span>
                                </div>
                                <div className="flex items-center">
                                  <MessageSquare className="h-3 w-3 mr-1" />
                                  <span>Applicants: {project.applicants}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">You don't have any active projects at the moment.</p>
                        <Button variant="outline" className="mt-4 hover-lift transition-all duration-300">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create New Project
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Pending Applications */}
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Pending Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pendingApplications.length > 0 ? (
                      <div className="space-y-4">
                        {pendingApplications.map((application) => (
                          <div
                            key={application.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={application.avatar || "/placeholder.svg"}
                                  alt={application.volunteer}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{application.volunteer}</h4>
                                <p className="text-sm text-muted-foreground">Project: {application.project}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {application.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 hover-lift transition-all duration-300"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
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
                        <p className="text-muted-foreground">You don't have any pending applications at the moment.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Top Volunteers */}
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Top Volunteers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {topVolunteers.length > 0 ? (
                      <div className="space-y-4">
                        {topVolunteers.map((volunteer) => (
                          <div
                            key={volunteer.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={volunteer.avatar || "/placeholder.svg"}
                                  alt={volunteer.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{volunteer.name}</h4>
                                <p className="text-sm text-muted-foreground">{volunteer.title}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center justify-end">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(volunteer.rating)
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                                <span className="ml-1 text-sm">{volunteer.rating}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {volunteer.projectsCompleted} projects completed
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No volunteer data available yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>All Projects</CardTitle>
                    <Button size="sm" className="hover-lift transition-all duration-300">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Project
                    </Button>
                  </CardHeader>
                  <CardContent>
                    {activeProjects.length > 0 ? (
                      <div className="space-y-6">
                        {activeProjects.map((project) => (
                          <div
                            key={project.id}
                            className="border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h4 className="font-semibold">{project.title}</h4>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {project.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
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
                        <p className="text-muted-foreground">You don't have any projects yet.</p>
                        <Button variant="outline" className="mt-4 hover-lift transition-all duration-300">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create New Project
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="volunteers" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Volunteer Directory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {topVolunteers.length > 0 ? (
                      <div className="space-y-4">
                        {topVolunteers.map((volunteer) => (
                          <div
                            key={volunteer.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={volunteer.avatar || "/placeholder.svg"}
                                  alt={volunteer.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{volunteer.name}</h4>
                                <p className="text-sm text-muted-foreground">{volunteer.title}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center justify-end">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(volunteer.rating)
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                                <span className="ml-1 text-sm">{volunteer.rating}</span>
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-2 hover-lift transition-all duration-300"
                              >
                                View Profile
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No volunteers have worked with your organization yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Volunteer Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pendingApplications.length > 0 ? (
                      <div className="space-y-4">
                        {pendingApplications.map((application) => (
                          <div
                            key={application.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={application.avatar || "/placeholder.svg"}
                                  alt={application.volunteer}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{application.volunteer}</h4>
                                <p className="text-sm text-muted-foreground">Project: {application.project}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Applied: {new Date(application.appliedDate).toLocaleDateString()}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {application.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 hover-lift transition-all duration-300"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
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
                        <p className="text-muted-foreground">You don't have any pending applications at the moment.</p>
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

