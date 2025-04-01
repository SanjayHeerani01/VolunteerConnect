import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About VolunteerConnect</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're on a mission to make volunteering more accessible, efficient, and impactful for everyone.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our mission is to bridge the gap between skilled volunteers and organizations in need, creating a
                  platform where expertise meets opportunity.
                </p>
                <p className="text-muted-foreground">
                  We envision a world where everyone can contribute their skills to meaningful causes, regardless of
                  location or time constraints.
                </p>
                <p className="text-muted-foreground">
                  By leveraging technology, we aim to remove barriers to volunteering and create a global community of
                  changemakers.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Volunteers working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <p>
                VolunteerConnect was founded in 2020 by a group of tech professionals who saw a disconnect between
                organizations needing skilled help and volunteers wanting to make an impact.
              </p>
              <p>
                During the global pandemic, we witnessed how technology could bring people together despite physical
                distance. We realized that the same approach could revolutionize volunteering.
              </p>
              <p>
                What started as a small project connecting web developers with non-profits has grown into a
                comprehensive platform serving thousands of volunteers and organizations across multiple sectors and
                countries.
              </p>
              <p>
                Today, VolunteerConnect continues to grow and evolve, guided by our founding principle: everyone has
                something valuable to contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe volunteering should be accessible to everyone, regardless of location, schedule, or
                background.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                We focus on creating meaningful connections that lead to tangible results for organizations and
                communities.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new technologies and approaches to make volunteering more effective and
                engaging.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                We foster a supportive community where volunteers and organizations can learn, grow, and collaborate.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We maintain open communication and accountability in all our operations and partnerships.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-muted-foreground">
                We welcome diversity in all forms and strive to create an inclusive platform for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">Organizations Register</h3>
                    <p className="text-muted-foreground">
                      Organizations create profiles detailing their mission, needs, and the specific skills they're
                      looking for.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold order-1 md:order-2 mb-4 md:mb-0">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 order-3"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:pr-8 order-2 md:order-1"></div>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold order-1 md:order-2 mb-4 md:mb-0">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3">
                    <h3 className="text-xl font-semibold mb-2">Volunteers Join</h3>
                    <p className="text-muted-foreground">
                      Volunteers create profiles highlighting their skills, experience, and availability for projects.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
                    <p className="text-muted-foreground">
                      Our intelligent chatbot helps match volunteers with organizations based on skills, interests, and
                      needs.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold order-1 md:order-2 mb-4 md:mb-0">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 order-3"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:pr-8 order-2 md:order-1"></div>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold order-1 md:order-2 mb-4 md:mb-0">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3">
                    <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                    <p className="text-muted-foreground">
                      Organizations and volunteers connect, discuss projects, and establish working relationships.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
                    <p className="text-muted-foreground">
                      Both parties can track progress, provide feedback, and measure the impact of their collaboration.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold order-1 md:order-2 mb-4 md:mb-0">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Volunteer impact" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Global Reach</h3>
              <p className="text-muted-foreground mb-4">
                Since our launch, we've expanded to over 50 countries, connecting volunteers with organizations across
                six continents.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Over 10,000 successful project completions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>More than 5,000 active volunteers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Supporting 1,200+ organizations worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>An estimated $15 million in pro-bono services provided</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">Sector Impact</h3>
              <p className="text-muted-foreground mb-4">
                Our volunteers have contributed to projects across multiple sectors, creating lasting change in
                communities around the world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">2,500+ educational resources created</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Healthcare</h4>
                  <p className="text-sm text-muted-foreground">1,800+ health initiatives supported</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Environment</h4>
                  <p className="text-sm text-muted-foreground">3,200+ environmental projects</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Technology</h4>
                  <p className="text-sm text-muted-foreground">4,100+ tech solutions developed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image src="/placeholder.svg?height=400&width=600" alt="Sector impact" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Whether you're looking to volunteer your skills or find skilled volunteers for your organization, we're here
            to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Volunteer Sign Up
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              Organization Sign Up
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

