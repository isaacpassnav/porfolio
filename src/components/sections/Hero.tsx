"use client"

import { motion, useInView, type Variants } from "motion/react"
import dynamic from "next/dynamic"
import { useRef } from "react"
import { ArrowDown, Mail, MapPin } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
)

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.12 },
  }),
}

const heroStats = [
  { target: 2, suffix: "+", label: "Years building" },
  { target: 8, suffix: "+", label: "Projects shipped" },
  { target: 40, suffix: "%", label: "Avg perf gain" },
  { target: 3, suffix: "",  label: "Languages spoken" },
]

function StatItem({ target, suffix, label, inView }: { target: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(target, inView, 1600)
  return (
    <div>
      <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-syne)", color: "var(--gold)" }}>
        {count}{suffix}
      </div>
      <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  )
}

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.8 })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0 opacity-70">
        <HeroScene />
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--bg-base) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Available badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border"
            style={{
              borderColor: "var(--border-gold)",
              backgroundColor: "var(--gold-glow)",
              color: "var(--gold)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Isaac
            <br />
            <span style={{ color: "var(--gold)" }}>Pasapera</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl font-light mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Full-Stack Developer{" "}
            <span style={{ color: "var(--violet)" }}>·</span>{" "}
            AI Integration
          </motion.p>

          {/* Location */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-1.5 text-sm mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            <MapPin size={14} />
            Lima, Peru — Remote / Open to relocation
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200"
              style={{
                backgroundColor: "var(--gold)",
                color: "#0C0A09",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border transition-all duration-200"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-gold)"
                e.currentTarget.style.color = "var(--gold)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)"
                e.currentTarget.style.color = "var(--text-secondary)"
              }}
            >
              <Mail size={15} />
              Get in touch
            </a>
            <a
              href="https://github.com/isaacpassnav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm border transition-all duration-200"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border)"
                e.currentTarget.style.color = "var(--text-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)"
                e.currentTarget.style.color = "var(--text-muted)"
              }}
            >
              <GithubIcon size={16} />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            ref={statsRef}
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-8"
          >
            {heroStats.map((s) => (
              <StatItem key={s.label} {...s} inView={statsInView} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "var(--text-faint)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  )
}
