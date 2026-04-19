"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "motion/react"
import { cn } from "@/lib/utils"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 40))
  }, [scrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    links.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] font-800 text-lg tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          IP<span style={{ color: "var(--gold)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-1",
                  active === href.slice(1)
                    ? "text-[var(--gold)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                )}
              >
                {label}
                {active === href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--gold)]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border"
          style={{
            borderColor: "var(--border-gold)",
            color: "var(--gold)",
            backgroundColor: "var(--gold-glow)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--gold)"
            e.currentTarget.style.color = "#0C0A09"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--gold-glow)"
            e.currentTarget.style.color = "var(--gold)"
          }}
        >
          Hire me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md"
          style={{ color: "var(--text-muted)" }}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-3 h-px bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "var(--bg-surface)" }}
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm py-2"
              style={{
                color: active === href.slice(1) ? "var(--gold)" : "var(--text-secondary)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-lg text-sm font-medium text-center"
            style={{ backgroundColor: "var(--gold)", color: "#0C0A09" }}
          >
            Hire me
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
