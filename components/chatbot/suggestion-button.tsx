"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SuggestionButtonProps {
  text: string
  onClick: (text: string) => void
  className?: string
}

export function SuggestionButton({ text, onClick, className }: SuggestionButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "rounded-full text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in",
        className,
      )}
      onClick={() => onClick(text)}
    >
      {text}
    </Button>
  )
}

