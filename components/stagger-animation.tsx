"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface StaggerAnimationProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
}

export function StaggerAnimation({
  children,
  className = "",
  staggerDelay = 100,
  initialDelay = 0,
  threshold = 0.1,
}: StaggerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target
            const items = Array.from(container.querySelectorAll(".stagger-item"))

            items.forEach((item, index) => {
              setTimeout(
                () => {
                  item.classList.add("animate-slide-up", "opacity-100")
                },
                initialDelay + index * staggerDelay,
              )
            })

            observer.unobserve(container)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [staggerDelay, initialDelay, threshold])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

