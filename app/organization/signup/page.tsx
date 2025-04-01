"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, CheckCircle, Building, Mail, Lock, FileText, User, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedBackground } from "@/components/animated-background"

export default function OrganizationSignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    contactPosition: "",
    email: "",
    password: "",
    description: "",
    website: "",
    termsAccepted: false,
  })
  const [animateSuccess, setAnimateSuccess] = useState(false)
  const router = useRouter()

  // Animation states
  const [animateForm, setAnimateForm] = useState(false)

  useEffect(() => {
    // Trigger initial animations
    setAnimateForm(true)

    // Add parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".parallax-card")
      const moveX = (e.clientX - window.innerWidth / 2) / 50
      const moveY = (e.clientY - window.innerHeight / 2) / 50

      cards.forEach((card) => {
        ;(card as HTMLElement).style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Initialize count-up animation
    const countElements = document.querySelectorAll(".animate-count-up")
    countElements.forEach((element) => {
      const target = Number.parseInt(element.getAttribute("data-target") || "0", 10)
      let count = 0
      const duration = 2000 // 2 seconds
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      const increment = target / totalFrames

      const counter = setInterval(() => {
        count += increment
        if (count >= target) {
          element.textContent = target.toString()
          clearInterval(counter)
        } else {
          element.textContent = Math.floor(count).toString()
        }
      }, frameDuration)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate account creation with success animation
    setTimeout(() => {
      setAnimateSuccess(true)

      setTimeout(() => {
        setIsLoading(false)
        router.push("/organization/dashboard")
      }, 1500)
    }, 1500)
  }

  // Animated background gradient colors
  const gradientColors = [
    "from-blue-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-pink-600 to-orange-600",
    "from-orange-600 to-yellow-600",
  ]

  const [currentGradient, setCurrentGradient] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradientColors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen pt-16 pb-16 flex items-center justify-center overflow-hidden relative">
      {/* Animated background */}
      <AnimatedBackground className="opacity-20" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-muted/30">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientColors[currentGradient]} opacity-10 transition-opacity duration-3000`}
          style={{ animation: "pulse 15s infinite" }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container max-w-5xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-3xl font-bold mb-6 animate-fade-in relative">
                Join as an Organization
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full animate-slide-right"></span>
              </h1>
              <p className="text-muted-foreground mb-6 animate-fade-in-delay">
                Connect with skilled volunteers who can help your organization achieve its goals. Our platform makes it
                easy to find the right talent.
              </p>

              <div className="space-y-4 animate-fade-in-delay-2">
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span>Create a profile for your organization</span>
                </div>
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div
                    className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span>Describe your needs and the skills you're looking for</span>
                </div>
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div
                    className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span>Get matched with qualified volunteers</span>
                </div>
                <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <div
                    className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span>Collaborate with volunteers to achieve your goals</span>
                </div>
              </div>

              {/* Animated stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg shadow-md border border-border/50 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-1 animate-count-up" data-target="1200">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">Organizations</div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md border border-border/50 transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-1 animate-count-up" data-target="4500">
                    0
                  </div>
                  <div className="text-sm text-muted-foreground">Volunteers Available</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Card className="border-none shadow-lg hover-lift transition-all duration-300 parallax-card backdrop-blur-sm bg-background/80">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 animate-gradient-shift"></div>
                <CardTitle className="relative z-10">Create Organization Account</CardTitle>
                <CardDescription className="relative z-10">
                  Fill out the form below to create your organization account
                </CardDescription>

                {/* Step indicator */}
                <div className="flex justify-center mt-4 relative z-10">
                  {[0, 1].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                        formStep === step ? "bg-primary scale-125" : "bg-muted"
                      }`}
                    ></div>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSignUp}
                  className={`space-y-4 transition-all duration-500 ${animateForm ? "opacity-100" : "opacity-0 translate-y-4"}`}
                >
                  {formStep === 0 ? (
                    <>
                      <div className="space-y-2 group">
                        <Label htmlFor="orgName" className="group-hover:text-primary transition-colors">
                          Organization Name
                        </Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <Input
                            id="orgName"
                            name="orgName"
                            value={formData.orgName}
                            onChange={handleInputChange}
                            placeholder="Community Health Initiative"
                            required
                            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 group">
                          <Label htmlFor="contactName" className="group-hover:text-primary transition-colors">
                            Contact Person
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <Input
                              id="contactName"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleInputChange}
                              placeholder="Jane Smith"
                              required
                              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 group">
                          <Label htmlFor="contactPosition" className="group-hover:text-primary transition-colors">
                            Position
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <Input
                              id="contactPosition"
                              name="contactPosition"
                              value={formData.contactPosition}
                              onChange={handleInputChange}
                              placeholder="Volunteer Coordinator"
                              required
                              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="group-hover:text-primary transition-colors">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="contact@organization.org"
                            required
                            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="password" className="group-hover:text-primary transition-colors">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <Input
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            required
                            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="button"
                        className="w-full hover-lift transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
                        onClick={nextStep}
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2 group">
                        <Label htmlFor="description" className="group-hover:text-primary transition-colors">
                          Organization Description
                        </Label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Tell us about your organization's mission and the type of work you do..."
                            className="min-h-[100px] pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="website" className="group-hover:text-primary transition-colors">
                          Website (optional)
                        </Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <Input
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            type="url"
                            placeholder="https://www.yourorganization.org"
                            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary border-muted-foreground/20 group-hover:border-primary"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 group">
                        <Checkbox
                          id="terms"
                          required
                          checked={formData.termsAccepted}
                          onCheckedChange={handleCheckboxChange}
                          className="data-[state=checked]:bg-primary data-[state=checked]:animate-pulse-once"
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group-hover:text-primary transition-colors"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 hover-lift transition-all duration-300"
                          onClick={prevStep}
                        >
                          Back
                        </Button>

                        <Button
                          type="submit"
                          className={`flex-1 hover-lift transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 ${
                            animateSuccess ? "bg-green-600 hover:bg-green-700" : ""
                          }`}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              {animateSuccess ? "Success!" : "Creating Account..."}
                            </>
                          ) : (
                            <>
                              Create Organization Account
                              <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
                            </>
                          )}
                        </Button>
                      </div>
                    </>
                  )}

                  <div className="text-center text-sm text-muted-foreground mt-6">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-primary hover:underline relative group">
                      Sign In
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

