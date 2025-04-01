"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<"volunteer" | "organization" | "admin" | null>(null)
  const { setTheme } = useTheme()
  const pathname = usePathname()

  // Demo function to simulate login - in a real app, this would check auth state
  useEffect(() => {
    // This is just for demonstration - replace with actual auth check
    const checkLoginStatus = () => {
      // For demo purposes, we'll consider the user logged in if on certain paths
      if (
        pathname.includes("/volunteer/dashboard") ||
        pathname.includes("/organization/dashboard") ||
        pathname.includes("/admin/dashboard")
      ) {
        setIsLoggedIn(true)
        if (pathname.includes("/volunteer")) {
          setUserType("volunteer")
        } else if (pathname.includes("/organization")) {
          setUserType("organization")
        } else if (pathname.includes("/admin")) {
          setUserType("admin")
        }
      } else {
        setIsLoggedIn(false)
        setUserType(null)
      }
    }

    checkLoginStatus()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Chatbot", path: "/chatbot" },
  ]

  // Conditional links based on login status
  const conditionalLinks = isLoggedIn
    ? userType === "volunteer"
      ? [{ name: "Dashboard", path: "/volunteer/dashboard" }]
      : userType === "organization"
        ? [
            { name: "Dashboard", path: "/organization/dashboard" },
            { name: "Pending Requests", path: "/organization/requests" },
            { name: "Chatbot", path: "/chatbot" },
          ]
        : userType === "admin"
          ? [
              { name: "Admin Dashboard", path: "/admin/dashboard" },
              { name: "System Settings", path: "/admin/settings" },
            ]
          : []
    : []

  const allLinks = [...navLinks, ...conditionalLinks]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-bold text-xl md:text-2xl flex items-center">
            <span className="text-primary">Volunteer</span>
            <span>Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {allLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover-lift transition-all duration-300">
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isLoggedIn ? (
              <Button
                variant="ghost"
                onClick={() => {
                  // In a real app, this would be a logout function
                  setIsLoggedIn(false)
                  setUserType(null)
                }}
                className="hover-lift transition-all duration-300"
              >
                Sign Out
              </Button>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" className="hover-lift transition-all duration-300">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="hover-lift transition-all duration-300">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover-lift transition-all duration-300">
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover-lift transition-all duration-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t animate-slide-down">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t my-2 pt-2">
                {isLoggedIn ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover-lift transition-all duration-300"
                    onClick={() => {
                      // In a real app, this would be a logout function
                      setIsLoggedIn(false)
                      setUserType(null)
                      closeMenu()
                    }}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Link href="/signin" onClick={closeMenu}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start mb-2 hover-lift transition-all duration-300"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={closeMenu}>
                      <Button className="w-full hover-lift transition-all duration-300">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

