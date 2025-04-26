"use client";

import { ArrowRight, MessageSquare, Users, Zap, Award, CheckCircle, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";



export default function ServicesPage() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover how our AI-powered platform connects skilled volunteers
            with organizations in need.
          </p>
        </div>
      </section>

      {/* How the Chatbot Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Chatbot Works</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our intelligent matching system uses AI to connect the right
              volunteers with the right opportunities, making the process
              seamless for both parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Natural Conversation
              </h3>
              <p className="text-muted-foreground">
                Our chatbot uses natural language processing to understand your
                needs and preferences through simple conversation.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
              <p className="text-muted-foreground">
                Advanced algorithms analyze skills, experience, and project
                requirements to suggest the most compatible matches.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Profile Recommendations
              </h3>
              <p className="text-muted-foreground">
                Browse detailed volunteer profiles with ratings, reviews, and
                past project history to make informed decisions.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video ">
              {playVideo ? (
                  <video
                      src="/videov.mp4"
                      controls
                      autoPlay
                      className="object-cover w-full h-full"
                  />
              ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="gap-2" onClick={() => setPlayVideo(true)}>
                      <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                      >
                        <path
                            d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm3.5 10.7l-5 3A1 1 0 0 1 7 13V7a1 1 0 0 1 1.5-.7l5 3a1 1 0 0 1 0 1.4z"/>
                      </svg>
                      Watch Demo
                    </Button>
                  </div>
              )}
            </div>
          </div>




</div>
</section>

  {/* Volunteer Expertise Areas */
  }
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          Volunteer Expertise Areas
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our platform connects organizations with skilled volunteers across
          a wide range of disciplines and specialties.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground">
                Frontend, backend, full-stack development, and CMS
                implementation.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Graphic Design</h3>
              <p className="text-sm text-muted-foreground">
                Branding, illustration, UI/UX design, and print materials.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Content Creation</h3>
              <p className="text-sm text-muted-foreground">
                Copywriting, editing, translation, and content strategy.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Marketing</h3>
              <p className="text-sm text-muted-foreground">
                Digital marketing, social media, SEO, and campaign management.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Project Management</h3>
              <p className="text-sm text-muted-foreground">
                Planning, coordination, and execution of projects and
                initiatives.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">IT Support</h3>
              <p className="text-sm text-muted-foreground">
                Technical support, system administration, and cybersecurity.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Financial Services</h3>
              <p className="text-sm text-muted-foreground">
                Accounting, bookkeeping, financial planning, and grant writing.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Curriculum development, tutoring, workshop facilitation, and
                training.
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Button className="group">
              View All Expertise Areas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Real stories from volunteers and organizations who have connected
              through our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v5.jpg?height=192&width=384"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Website Redesign for Environmental Nonprofit
                </h3>
                <p className="text-muted-foreground mb-4">
                  A team of volunteer web developers created a modern,
                  accessible website for an environmental nonprofit, increasing
                  their online donations by 45%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-1" />
                    <span className="text-sm">Web Development</span>
                  </div>
                  <Link
                    href="/success-stories/1"
                    className="text-primary text-sm hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v8.jpg?height=192&width=384"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Marketing Campaign for Community Health Initiative
                </h3>
                <p className="text-muted-foreground mb-4">
                  Volunteer marketers developed a comprehensive campaign that
                  helped a community health initiative reach 200% more people in
                  underserved areas.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-1" />
                    <span className="text-sm">Marketing</span>
                  </div>
                  <Link
                    href="/success-stories/2"
                    className="text-primary text-sm hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v7.jpg?height=190&width=384"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Financial Strategy for Education Startup
                </h3>
                <p className="text-muted-foreground mb-4">
                  A volunteer financial advisor helped an education startup
                  secure funding and develop a sustainable financial model for
                  long-term growth.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-1" />
                    <span className="text-sm">Financial Services</span>
                  </div>
                  <Link
                    href="/success-stories/3"
                    className="text-primary text-sm hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="outline" className="group">
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Volunteer Signup Integration */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Become a Volunteer</h2>
              <p className="text-muted-foreground mb-6">
                Join our community of skilled volunteers and start making an
                impact today. The process is simple:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>
                    Create your profile highlighting your skills and experience
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>
                    Set your availability and preferences for volunteer work
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>
                    Get matched with organizations that need your specific
                    skills
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0" />
                  <span>Connect, collaborate, and make a difference</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" className="group">
                  Sign Up as a Volunteer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/v9?height=400&width=600"
                alt="Volunteer signup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Behind the Chatbot */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Technology Behind Our Platform
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our platform leverages cutting-edge technology to create seamless
              connections between volunteers and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">
                AI-Powered Matching
              </h3>
              <p className="text-muted-foreground mb-4">
                Our proprietary matching algorithm uses machine learning to
                understand the nuances of skills, experience, and project
                requirements, creating more meaningful connections.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BarChart className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>
                    Natural language processing for understanding user needs
                  </span>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Skill taxonomy mapping for precise matching</span>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>
                    Continuous learning from successful collaborations
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/v6.jpg?height=300&width=500"
                alt="AI technology"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/v10.avif?height=300&width=500"
                alt="Secure platform"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Secure and Scalable Platform
              </h3>
              <p className="text-muted-foreground mb-4">
                Built with security and scalability in mind, our platform
                ensures a safe and reliable experience for all users.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BarChart className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>End-to-end encryption for all communications</span>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>
                    Cloud-based infrastructure for reliability and performance
                  </span>
                </li>
                <li className="flex items-start">
                  <BarChart className="h-5 w-5 text-primary mr-2 shrink-0" />
                  <span>Regular security audits and compliance checks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join our platform today and be part of a community that's making a
            difference through skilled volunteering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Volunteer Sign Up
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              Organization Sign Up
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}