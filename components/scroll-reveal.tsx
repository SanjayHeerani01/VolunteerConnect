"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "reveal"
      case "down":
        return "reveal-down"
      case "left":
        return "reveal-left"
      case "right":
        return "reveal-right"
      case "none":
        return "reveal-opacity"
      default:
        return "reveal"
    }
  }

  return (
    <div ref={ref} className={`${getDirectionClass()} ${className}`}>
      {children}
    </div>
  )
}

