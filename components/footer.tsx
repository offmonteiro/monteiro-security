import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Image src="/monteiro.png" alt="Monteiro Logo" width={20} height={20} className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Monteiro Security</p>
              <p className="text-xs text-muted-foreground">Documenting the path to root</p>
            </div>
          </div>

          {/* Social Links */}

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Monteiro </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-end gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-dot-pulse" />
              Security is a process, not a product
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
