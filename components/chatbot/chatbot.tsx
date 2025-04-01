"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChatMessage } from "./chat-message"
import { TypingIndicator } from "./typing-indicator"
import { SuggestionButton } from "./suggestion-button"
import { cn } from "@/lib/utils"

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
  fallback:
    "I'm not sure I understand. Could you rephrase your question? Or you can ask me about how to join as a volunteer or organization, how our platform works, or the benefits of using VolunteerConnect.",
}

// Suggestions for users to click on
const suggestions = [
  "How do I join as a volunteer?",
  "How do organizations sign up?",
  "How does the platform work?",
  "What are the benefits?",
  "Tell me about VolunteerConnect",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize chat with greeting when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: responses.greeting,
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, isMinimized])

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true)
      setIsMinimized(false)
    } else {
      setIsMinimized(!isMinimized)
    }
  }

  const closeChat = () => {
    setIsOpen(false)
  }

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
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-4 right-4 rounded-full p-3 shadow-lg z-50 transition-all duration-300 hover:scale-110",
          isOpen ? "bg-primary/90" : "bg-primary",
        )}
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-20 right-4 w-80 md:w-96 shadow-xl z-50 border-primary/20 overflow-hidden transition-all duration-300 transform",
            isMinimized ? "h-14" : "h-[500px] max-h-[80vh]",
            "animate-slide-up",
          )}
        >
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between bg-primary/5">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1 rounded-full">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium text-sm">VolunteerConnect Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleChat}>
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 hover:text-destructive" onClick={closeChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-0 overflow-y-auto h-[calc(100%-110px)]">
                <div className="flex flex-col">
                  {messages.map((message, index) => (
                    <ChatMessage
                      key={index}
                      message={message.text}
                      isUser={message.isUser}
                      timestamp={message.timestamp}
                    />
                  ))}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-3 border-t flex flex-col gap-3">
                <div className="flex flex-wrap gap-2 justify-center">
                  {messages.length <= 2 &&
                    suggestions.map((suggestion, index) => (
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
                    size="icon"
                    disabled={!input.trim()}
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}

