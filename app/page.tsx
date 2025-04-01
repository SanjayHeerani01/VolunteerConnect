"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, MessageSquare, ChevronDown, MessageCircle, Bot, User, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerAnimation } from "@/components/stagger-animation"
import { AnimatedBackground } from "@/components/animated-background"
import { Input } from "@/components/ui/input"

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Counter animation for stats
    const animateValue = (obj: HTMLElement, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = Math.floor(progress * (end - start) + start)
        obj.innerHTML = value.toString() + (obj.dataset.suffix || "")
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll("[data-counter]")
            counters.forEach((counter) => {
              const target = counter as HTMLElement
              const end = Number.parseInt(target.dataset.counter || "0", 10)
              animateValue(target, 0, end, 2000)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AnimatedBackground className="opacity-30" />

      {/* Hero Section with Animated Background */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>

        {/* Background image with parallax effect */}
        <div className="absolute inset-0 w-full h-full animate-zoom-out">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Volunteers in action"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 animate-typing"
            style={{ maxWidth: "15ch", margin: "0 auto 1.5rem" }}
          >
            Connect. Volunteer. <span className="text-primary animate-pulse-effect">Impact.</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 animate-fade-in-delay">
            Bringing together volunteers and organizations to create meaningful change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="group hover-lift">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover-glow"
            >
              Learn More
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-background relative">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Our Mission
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                We connect skilled volunteers with organizations in need, creating a platform where expertise meets
                opportunity. Our goal is to make volunteering accessible, efficient, and impactful.
              </p>
            </div>

            <StaggerAnimation className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stagger-item">
                <Card className="border-none shadow-lg hover-lift transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 animate-float">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">For Volunteers</h3>
                    <p className="text-muted-foreground mb-4">
                      Share your skills, make an impact, and build your portfolio while helping organizations in need.
                    </p>
                    <Link
                      href="/volunteer/signup"
                      className="text-primary font-medium inline-flex items-center hover:underline group"
                    >
                      Sign up as a volunteer
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="stagger-item">
                <Card className="border-none shadow-lg hover-lift transition-all duration-300">
                  <CardContent className="pt-6">
                    <div
                      className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 animate-float"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">For Organizations</h3>
                    <p className="text-muted-foreground mb-4">
                      Find skilled volunteers to help with your projects and initiatives, completely free of charge.
                    </p>
                    <Link
                      href="/organization/signup"
                      className="text-primary font-medium inline-flex items-center hover:underline group"
                    >
                      Sign up as an organization
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="stagger-item">
                <Card className="border-none shadow-lg hover-lift transition-all duration-300">
                  <CardContent className="pt-6">
                    <div
                      className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 animate-float"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                    <p className="text-muted-foreground mb-4">
                      Our AI-powered chatbot helps match the right volunteers with the right opportunities.
                    </p>
                    <Link
                      href="/services"
                      className="text-primary font-medium inline-flex items-center hover:underline group"
                    >
                      Learn how it works
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </StaggerAnimation>
          </div>
        </ScrollReveal>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary/5 relative overflow-hidden" ref={statsRef}>
        <div className="absolute inset-0 animate-shimmer opacity-30"></div>
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 hover-scale">
                <div className="text-4xl font-bold text-primary mb-2" data-counter="5000" data-suffix="+">
                  0+
                </div>
                <div className="text-muted-foreground">Active Volunteers</div>
              </div>
              <div className="p-6 hover-scale">
                <div className="text-4xl font-bold text-primary mb-2" data-counter="1200" data-suffix="+">
                  0+
                </div>
                <div className="text-muted-foreground">Organizations</div>
              </div>
              <div className="p-6 hover-scale">
                <div className="text-4xl font-bold text-primary mb-2" data-counter="10000" data-suffix="+">
                  0+
                </div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6 hover-scale">
                <div className="text-4xl font-bold text-primary mb-2" data-counter="50" data-suffix="+">
                  0+
                </div>
                <div className="text-muted-foreground">Countries Reached</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background relative">
        <ScrollReveal direction="up">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="left" delay={200}>
                <Card className="border-none shadow-lg hover-lift transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 animate-pulse-effect">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Volunteer"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">Web Developer Volunteer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I've been able to use my web development skills to help three non-profits build websites they
                      couldn't otherwise afford. The platform made it easy to find opportunities that matched my
                      skills."
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={400}>
                <Card className="border-none shadow-lg hover-lift transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 animate-pulse-effect">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Organization"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">Michael Chen</h4>
                        <p className="text-sm text-muted-foreground">Community Outreach Organization</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "As a small non-profit, we couldn't afford professional design services. Through this platform, we
                      connected with amazing designers who transformed our brand identity."
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="group hover-lift">
                View More Success Stories
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 animate-gradient-shift"></div>
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  AI-Powered Assistance
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our intelligent chatbot is here to help you navigate the platform, answer your questions, and provide
                  guidance on how to make the most of VolunteerConnect.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect">
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Get instant answers to your questions about the platform</span>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Learn how to join as a volunteer or organization</span>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="bg-primary/10 rounded-full p-2 mr-3 mt-0.5 animate-pulse-effect"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>Discover the benefits of using our platform</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/chatbot">
                    <Button size="lg" className="group hover-lift">
                      Chat with Assistant
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative order-1 md:order-2">
                <div className="relative rounded-lg overflow-hidden shadow-xl border border-primary/10 animate-float">
                  <div className="bg-card p-4 border-b flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">VolunteerConnect Assistant</h3>
                  </div>
                  <div className="p-4 bg-background">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-primary/10 rounded-full p-1 flex items-center justify-center h-8 w-8">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          👋 Hello! I'm the VolunteerConnect assistant. How can I help you today?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end mb-4">
                      <div className="bg-primary rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm text-primary-foreground">How do I join as a volunteer?</p>
                      </div>
                      <div className="bg-primary rounded-full p-1 flex items-center justify-center h-8 w-8">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-primary/10 rounded-full p-1 flex items-center justify-center h-8 w-8">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          To join as a volunteer, click the 'Sign Up as Volunteer' button on the homepage. You'll create
                          a profile showcasing your skills, and then you can browse and apply for volunteer
                          opportunities that match your interests and expertise.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="bg-muted text-xs py-1 px-3 rounded-full">How do organizations sign up?</span>
                      <span className="bg-muted text-xs py-1 px-3 rounded-full">How does the platform work?</span>
                      <span className="bg-muted text-xs py-1 px-3 rounded-full">What are the benefits?</span>
                    </div>
                  </div>
                  <div className="p-4 border-t bg-card flex gap-2">
                    <Input placeholder="Type your message..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-effect"></div>
                <div
                  className="absolute -left-4 -top-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse-effect"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient"></div>
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-slide-up">
              Ready to Make a Difference?
            </h2>
            <p
              className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join our community today and start connecting with opportunities to create positive change.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/volunteer/signup">
                <Button size="lg" variant="secondary" className="group hover-lift">
                  Volunteer Sign Up
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/organization/signup">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover-glow">
                  Organization Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

