export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 p-4">
      <div className="flex space-x-1">
        <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
    </div>
  )
}

