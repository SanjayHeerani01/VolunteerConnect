"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [selectedTab, setSelectedTab] = useState("volunteer")
  const router = useRouter()

  const handleVolunteerSignup = () => {
    router.push("/volunteer/signup")
  }

  const handleOrganizationSignup = () => {
    router.push("/organization/signup")
  }

  return (
    <div className="min-h-screen pt-16 pb-16 flex items-center justify-center bg-muted/30">
      <div className="container max-w-6xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Join VolunteerConnect</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose how you'd like to participate in our community of changemakers.
          </p>
        </div>

        <Tabs defaultValue="volunteer" value={selectedTab} onValueChange={setSelectedTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 w-full mb-8">
            <TabsTrigger value="volunteer">I want to volunteer</TabsTrigger>
            <TabsTrigger value="organization">I need volunteers</TabsTrigger>
          </TabsList>

          <TabsContent value="volunteer">
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-primary text-primary-foreground p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                    <h2 className="text-2xl font-bold mb-4">Volunteer with Your Skills</h2>
                    <p className="mb-6 opacity-90">
                      Share your expertise with organizations that need your help. Make a meaningful impact while
                      building your portfolio and network.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Create a profile showcasing your skills</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Get matched with organizations that need your expertise</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Choose projects that fit your schedule and interests</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Build your portfolio and receive reviews for your work</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-6">Ready to make a difference?</h3>

                    <Button size="lg" className="w-full mb-4 group" onClick={handleVolunteerSignup}>
                      Sign Up as a Volunteer
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/signin" className="text-primary hover:underline">
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organization">
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-primary text-primary-foreground p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                    <h2 className="text-2xl font-bold mb-4">Find Skilled Volunteers</h2>
                    <p className="mb-6 opacity-90">
                      Connect with skilled volunteers who can help your organization achieve its goals. Our platform
                      makes it easy to find the right talent.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Create a profile for your organization</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Describe your needs and the skills you're looking for</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Get matched with qualified volunteers</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>Collaborate with volunteers to achieve your goals</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-6">Ready to find skilled volunteers?</h3>

                    <Button size="lg" className="w-full mb-4 group" onClick={handleOrganizationSignup}>
                      Sign Up as an Organization
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/signin" className="text-primary hover:underline">
                        Sign In
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

