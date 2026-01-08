"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Writeups", href: "#writeups" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 animate-border-glow">
                <Image src="/monteiro.png" alt="Monteiro Logo" width={20} height={20} className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Monteiro Security
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                Security Research
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">{navLinks.map((link) => null)}</nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
