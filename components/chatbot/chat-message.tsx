import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"

interface ChatMessageProps {
  message: string
  isUser: boolean
  avatar?: string
  timestamp?: Date
}

export function ChatMessage({ message, isUser, avatar, timestamp = new Date() }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full gap-3 p-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <Avatar className="h-8 w-8 bg-primary/10 flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary" />
        </Avatar>
      )}

      <div
        className={cn(
          "flex flex-col gap-1 max-w-[80%] rounded-lg p-3",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted",
        )}
      >
        <p className="text-sm">{message}</p>
        <span className="text-xs opacity-70 self-end">
          {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      {isUser && (
        <Avatar className="h-8 w-8 bg-primary flex items-center justify-center">
          <User className="h-4 w-4 text-primary-foreground" />
        </Avatar>
      )}
    </div>
  )
}

