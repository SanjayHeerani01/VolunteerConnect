"use client"

import { useState } from "react"
import Image from "next/image"
import {
  BarChart,
  Users,
  Building,
  FileText,
  Settings,
  Shield,
  Bell,
  Search,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  PlusCircle,
  Download,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const stats = {
    totalUsers: 5842,
    totalOrganizations: 1247,
    totalVolunteers: 4595,
    totalProjects: 3128,
    completedProjects: 2456,
    pendingApprovals: 24,
  }

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      type: "volunteer",
      requestDate: "2023-03-15",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Community Health Initiative",
      email: "contact@chi.org",
      type: "organization",
      requestDate: "2023-03-14",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.c@example.com",
      type: "volunteer",
      requestDate: "2023-03-12",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Education For All",
      email: "info@educationforall.org",
      type: "organization",
      requestDate: "2023-03-10",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pendingApprovals = [
    {
      id: 1,
      name: "Youth Empowerment Network",
      email: "contact@youthempowerment.org",
      type: "organization",
      requestDate: "2023-03-18",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Environmental Action Group",
      email: "info@environmentalaction.org",
      type: "organization",
      requestDate: "2023-03-16",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentReports = [
    {
      id: 1,
      title: "Inappropriate Content",
      reportedUser: "John Smith",
      reportedBy: "Community Health Initiative",
      date: "2023-03-17",
      status: "pending",
    },
    {
      id: 2,
      title: "Spam Messages",
      reportedUser: "Marketing Bot",
      reportedBy: "Sarah Johnson",
      date: "2023-03-15",
      status: "pending",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Admin Panel</span>
                <span className="text-xs text-muted-foreground">VolunteerConnect</span>
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
                    <SidebarMenuButton isActive={activeTab === "users"} onClick={() => setActiveTab("users")}>
                      <Users className="h-4 w-4 mr-2" />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeTab === "organizations"}
                      onClick={() => setActiveTab("organizations")}
                    >
                      <Building className="h-4 w-4 mr-2" />
                      <span>Organizations</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "approvals"} onClick={() => setActiveTab("approvals")}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Approvals</span>
                      {pendingApprovals.length > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {pendingApprovals.length}
                        </Badge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "reports"} onClick={() => setActiveTab("reports")}>
                      <Bell className="h-4 w-4 mr-2" />
                      <span>Reports</span>
                      {recentReports.length > 0 && (
                        <Badge variant="secondary" className="ml-auto">
                          {recentReports.length}
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
                      <Settings className="h-4 w-4 mr-2" />
                      <span>System Settings</span>
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
                <p>Admin Panel v1.0</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold animate-fade-in">Admin Dashboard</h1>
              <p className="text-muted-foreground animate-fade-in-delay">
                Manage users, organizations, and platform activity
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid grid-cols-6 w-full max-w-3xl animate-slide-up">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="organizations">Organizations</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="approvals">Approvals</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="hover-lift transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                          <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {stats.totalVolunteers} Volunteers
                            </Badge>
                            <Badge variant="secondary" className="text-xs ml-2">
                              {stats.totalOrganizations} Organizations
                            </Badge>
                          </div>
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
                          <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                          <h3 className="text-2xl font-bold">{stats.totalProjects}</h3>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {stats.completedProjects} Completed
                            </Badge>
                            <Badge variant="secondary" className="text-xs ml-2">
                              {stats.totalProjects - stats.completedProjects} Active
                            </Badge>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full animate-pulse-effect">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                          <h3 className="text-2xl font-bold">{stats.pendingApprovals}</h3>
                          <div className="flex items-center mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {pendingApprovals.length} Organizations
                            </Badge>
                            <Badge variant="secondary" className="text-xs ml-2">
                              {recentReports.length} Reports
                            </Badge>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full animate-pulse-effect">
                          <Bell className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Users */}
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Recent Users</CardTitle>
                    <CardDescription>Recently registered users and organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                              <Image
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{user.name}</h4>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                              <div className="flex items-center mt-1">
                                <Badge
                                  variant={user.type === "volunteer" ? "secondary" : "outline"}
                                  className="text-xs"
                                >
                                  {user.type === "volunteer" ? "Volunteer" : "Organization"}
                                </Badge>
                                <span className="text-xs text-muted-foreground ml-2">
                                  Joined: {new Date(user.requestDate).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="hover-lift transition-all duration-300">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            {user.status === "pending" ? (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 hover-lift transition-all duration-300"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="sr-only">Approve</span>
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                                >
                                  <XCircle className="h-4 w-4" />
                                  <span className="sr-only">Reject</span>
                                </Button>
                              </>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" className="hover-lift transition-all duration-300">
                        View All Users
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Pending Approvals */}
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Pending Approvals</CardTitle>
                    <CardDescription>Organizations waiting for approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {pendingApprovals.length > 0 ? (
                      <div className="space-y-4">
                        {pendingApprovals.map((org) => (
                          <div
                            key={org.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={org.avatar || "/placeholder.svg"}
                                  alt={org.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{org.name}</h4>
                                <p className="text-sm text-muted-foreground">{org.email}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Requested: {new Date(org.requestDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 hover-lift transition-all duration-300"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No pending approvals at the moment.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Recent Reports */}
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                    <CardDescription>User reports that need attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentReports.length > 0 ? (
                      <div className="space-y-4">
                        {recentReports.map((report) => (
                          <div
                            key={report.id}
                            className="border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold">{report.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {report.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Reported User:</span> {report.reportedUser}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Reported By:</span> {report.reportedBy}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Date: {new Date(report.date).toLocaleDateString()}
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline" className="hover-lift transition-all duration-300">
                                Review
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Dismiss
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No reports at the moment.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>All Users</CardTitle>
                        <CardDescription>Manage all users on the platform</CardDescription>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search users..."
                            className="pl-8 w-full sm:w-[250px] hover-lift transition-all duration-300"
                          />
                        </div>
                        <Button variant="outline" size="icon" className="hover-lift transition-all duration-300">
                          <Filter className="h-4 w-4" />
                          <span className="sr-only">Filter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="hover-lift transition-all duration-300">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                        <Button className="hover-lift transition-all duration-300">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Add User
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                        >
                          <div className="flex items-center">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                              <Image
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{user.name}</h4>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                              <div className="flex items-center mt-1">
                                <Badge
                                  variant={user.type === "volunteer" ? "secondary" : "outline"}
                                  className="text-xs"
                                >
                                  {user.type === "volunteer" ? "Volunteer" : "Organization"}
                                </Badge>
                                <Badge
                                  variant={user.status === "active" ? "outline" : "secondary"}
                                  className={`text-xs ml-2 ${
                                    user.status === "active" ? "text-green-600 border-green-600" : "text-yellow-600"
                                  }`}
                                >
                                  {user.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="hover-lift transition-all duration-300">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="organizations" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Organizations</CardTitle>
                        <CardDescription>Manage all organizations on the platform</CardDescription>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search organizations..."
                            className="pl-8 w-full sm:w-[250px] hover-lift transition-all duration-300"
                          />
                        </div>
                        <Button variant="outline" size="icon" className="hover-lift transition-all duration-300">
                          <Filter className="h-4 w-4" />
                          <span className="sr-only">Filter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="hover-lift transition-all duration-300">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers
                        .filter((user) => user.type === "organization")
                        .concat(pendingApprovals)
                        .map((org) => (
                          <div
                            key={org.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={org.avatar || "/placeholder.svg"}
                                  alt={org.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{org.name}</h4>
                                <p className="text-sm text-muted-foreground">{org.email}</p>
                                <Badge
                                  variant={org.status === "active" ? "outline" : "secondary"}
                                  className={`text-xs mt-1 ${
                                    org.status === "active" ? "text-green-600 border-green-600" : "text-yellow-600"
                                  }`}
                                >
                                  {org.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="hover-lift transition-all duration-300">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              {org.status === "pending" ? (
                                <>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 hover-lift transition-all duration-300"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Approve
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Reject
                                  </Button>
                                </>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Delete
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>Manage all projects on the platform</CardDescription>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search projects..."
                            className="pl-8 w-full sm:w-[250px] hover-lift transition-all duration-300"
                          />
                        </div>
                        <Button variant="outline" size="icon" className="hover-lift transition-all duration-300">
                          <Filter className="h-4 w-4" />
                          <span className="sr-only">Filter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="hover-lift transition-all duration-300">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">Project management interface will be displayed here.</p>
                      <Button className="mt-4 hover-lift transition-all duration-300">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add Sample Projects
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="approvals" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Pending Approvals</CardTitle>
                    <CardDescription>Organizations waiting for approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {pendingApprovals.length > 0 ? (
                      <div className="space-y-4">
                        {pendingApprovals.map((org) => (
                          <div
                            key={org.id}
                            className="flex items-center justify-between border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                  src={org.avatar || "/placeholder.svg"}
                                  alt={org.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold">{org.name}</h4>
                                <p className="text-sm text-muted-foreground">{org.email}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Requested: {new Date(org.requestDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="hover-lift transition-all duration-300">
                                View Details
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700 hover-lift transition-all duration-300"
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No pending approvals at the moment.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <Card className="hover-lift transition-all duration-300">
                  <CardHeader>
                    <CardTitle>User Reports</CardTitle>
                    <CardDescription>Reports that need attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentReports.length > 0 ? (
                      <div className="space-y-4">
                        {recentReports.map((report) => (
                          <div
                            key={report.id}
                            className="border rounded-lg p-4 hover-scale transition-all duration-300"
                          >
                            <div className="flex justify-between mb-2">
                              <h4 className="font-semibold">{report.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {report.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Reported User:</span> {report.reportedUser}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Reported By:</span> {report.reportedBy}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Date: {new Date(report.date).toLocaleDateString()}
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline" className="hover-lift transition-all duration-300">
                                Review
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 hover-lift transition-all duration-300"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Dismiss
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">No reports at the moment.</p>
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

