"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChatMessage } from "@/components/chatbot/chat-message"
import { TypingIndicator } from "@/components/chatbot/typing-indicator"
import { SuggestionButton } from "@/components/chatbot/suggestion-button"
import Link from "next/link"

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

// Predefined responses for common questions
const responses: Record<string, string> = {
  greeting: "👋 Hello! I'm the VolunteerConnect assistant. How can I help you today?",
  about:
    "VolunteerConnect is a platform that connects skilled volunteers with organizations in need. Our mission is to make volunteering more accessible, efficient, and impactful for everyone.",
  volunteer:
    "To join as a volunteer, click the 'Sign Up as Volunteer' button on the homepage. You'll create a profile showcasing your skills, and then you can browse and apply for volunteer opportunities that match your interests and expertise.",
  organization:
    "Organizations can join by clicking the 'Sign Up as Organization' button. You'll create a profile for your organization, describe your needs, and then you can post volunteer opportunities and connect with skilled volunteers.",
  howItWorks:
    "Our platform uses AI-powered matching to connect volunteers with organizations. Volunteers create profiles with their skills, organizations post opportunities, and our system suggests the best matches. You can also use our chatbot to find opportunities or volunteers.",
  benefits:
    "For volunteers, you can build your portfolio, gain experience, and make a difference. For organizations, you get access to skilled volunteers without the cost, helping you achieve your mission more effectively.",
  skills:
    "Volunteers can offer a wide range of skills including web development, graphic design, content writing, marketing, project management, IT support, financial services, and many more. When you sign up, you'll be able to select your skills from a comprehensive list.",
  opportunities:
    "We have opportunities in various categories such as education, healthcare, environment, technology, and community development. You can filter opportunities based on your interests, skills, and availability.",
  remote:
    "Yes! Many of our opportunities are remote, allowing you to volunteer from anywhere in the world. You can filter opportunities based on your location preferences.",
  time: "The time commitment varies by project. You can set your availability preferences and choose opportunities that match your schedule, whether that's a few hours a week or a longer-term commitment.",
  impact:
    "Since our launch, we've facilitated over 10,000 successful project completions, connecting more than 5,000 volunteers with 1,200+ organizations worldwide, resulting in an estimated $15 million in pro-bono services.",
  fallback:
    "I'm not sure I understand. Could you rephrase your question? Or you can ask me about how to join as a volunteer or organization, how our platform works, or the benefits of using VolunteerConnect.",
}

// Suggestions for users to click on
const suggestions = [
  "How do I join as a volunteer?",
  "How do organizations sign up?",
  "How does the platform work?",
  "What skills are needed?",
  "Can I volunteer remotely?",
  "How much time do I need to commit?",
  "What impact has the platform made?",
  "Tell me about VolunteerConnect",
]

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize chat with greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          text: responses.greeting,
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }
  }, [messages.length])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Focus input when page loads
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }, [])

  const handleSendMessage = (text: string = input) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking and typing
    setTimeout(() => {
      const botResponse = getBotResponse(text)
      setIsTyping(false)

      setMessages((prev) => [
        ...prev,
        {
          text: botResponse,
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }, 1500)
  }

  const getBotResponse = (text: string): string => {
    const lowerText = text.toLowerCase()

    if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
      return responses.greeting
    } else if (lowerText.includes("about") || lowerText.includes("what is")) {
      return responses.about
    } else if (
      lowerText.includes("volunteer") &&
      (lowerText.includes("join") || lowerText.includes("sign") || lowerText.includes("how"))
    ) {
      return responses.volunteer
    } else if (
      (lowerText.includes("organization") || lowerText.includes("company") || lowerText.includes("nonprofit")) &&
      (lowerText.includes("join") || lowerText.includes("sign") || lowerText.includes("how"))
    ) {
      return responses.organization
    } else if (lowerText.includes("how") && lowerText.includes("work")) {
      return responses.howItWorks
    } else if (lowerText.includes("benefit")) {
      return responses.benefits
    } else if (lowerText.includes("skill")) {
      return responses.skills
    } else if (lowerText.includes("opportunit") || lowerText.includes("project")) {
      return responses.opportunities
    } else if (lowerText.includes("remote") || lowerText.includes("location") || lowerText.includes("anywhere")) {
      return responses.remote
    } else if (lowerText.includes("time") || lowerText.includes("commit") || lowerText.includes("hours")) {
      return responses.time
    } else if (lowerText.includes("impact") || lowerText.includes("success") || lowerText.includes("achievement")) {
      return responses.impact
    } else {
      return responses.fallback
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleSuggestionClick = (text: string) => {
    handleSendMessage(text)
  }

  return (
    <div className="min-h-screen pt-16 pb-16 flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="flex items-center mb-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="flex-1 flex flex-col overflow-hidden shadow-lg border-primary/20 animate-fade-in">
          <CardHeader className="p-4 border-b flex flex-row items-center gap-2 bg-primary/5">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">VolunteerConnect Assistant</h2>
              <p className="text-sm text-muted-foreground">Ask me anything about our platform</p>
            </div>
          </CardHeader>

          <CardContent className="p-0 overflow-y-auto flex-1">
            <div className="flex flex-col">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message.text} isUser={message.isUser} timestamp={message.timestamp} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="p-4 border-t flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map((suggestion, index) => (
                <SuggestionButton
                  key={index}
                  text={suggestion}
                  onClick={handleSuggestionClick}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
            <div className="flex w-full gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage()}
                size="sm"
                disabled={!input.trim()}
                className="transition-all duration-300 hover:scale-105"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

