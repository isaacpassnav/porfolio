"use client"

import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"
import { Mail, MapPin } from "lucide-react"
import { profile } from "@/lib/data"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.09 },
  }),
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const socials = [
  { label: "GitHub",    href: profile.github,    Icon: GithubIcon,    hover: "var(--text-primary)" },
  { label: "LinkedIn",  href: profile.linkedin,  Icon: LinkedInIcon,  hover: "#0A66C2" },
  { label: "Instagram", href: profile.instagram, Icon: InstagramIcon, hover: "#E1306C" },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="section px-6"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          05 — Contact
        </motion.p>

        {/* Centered CTA block */}
        <div className="max-w-2xl">
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let's build<br />
            <span style={{ color: "var(--gold)" }}>something.</span>
          </motion.h2>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-base leading-relaxed mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            Open to full-time roles, freelance projects, and AI integration work.
            Remote-first — open to relocation for the right opportunity.
          </motion.p>

          {/* Big email CTA */}
          <motion.a
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            href={`mailto:${profile.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              borderRadius: 14,
              background: "linear-gradient(135deg, var(--gold) 0%, #c47a15 100%)",
              color: "#0C0A09",
              fontFamily: "var(--font-syne)",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.15s ease, opacity 0.15s ease",
              marginBottom: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.opacity = "0.92" }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.opacity = "1" }}
          >
            <Mail size={18} />
            {profile.email}
          </motion.a>

          {/* Details row */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 40, marginTop: 14 }}
          >
            <MapPin size={12} style={{ color: "var(--text-muted)" }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Lima, Peru · UTC-5 · Flexible hours</span>
          </motion.div>

          {/* Divider */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ height: 1, backgroundColor: "var(--border)", marginBottom: 32 }}
          />

          {/* Social links */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <p className="text-xs font-mono tracking-widest uppercase mb-5" style={{ color: "var(--text-muted)" }}>
              Find me on
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {socials.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 18px", borderRadius: 10,
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-muted)",
                    fontSize: 13, fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = hover
                    e.currentTarget.style.color = hover
                    e.currentTarget.style.backgroundColor = "var(--bg-elevated)"
                    e.currentTarget.style.transform = "translateY(-1px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)"
                    e.currentTarget.style.color = "var(--text-muted)"
                    e.currentTarget.style.backgroundColor = "var(--bg-surface)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
