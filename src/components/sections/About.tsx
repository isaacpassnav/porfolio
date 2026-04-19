"use client"

import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"
import { useCountUp } from "@/hooks/useCountUp"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
}

const traits = [
  { icon: "🎻", label: "Violinist", sub: "8+ years · Orchestra" },
  { icon: "🏔️", label: "Climber", sub: "Open water · Mountains" },
  { icon: "🌍", label: "Multilingual", sub: "ES · EN · FR" },
  { icon: "🤖", label: "AI Builder", sub: "Claude · OpenAI APIs" },
]

const aboutStats = [
  { target: 8, suffix: "+", label: "Projects shipped" },
  { target: 40, suffix: "%", label: "Avg perf improvement" },
  { target: 3, suffix: "", label: "Languages spoken" },
]

function AboutStatItem({ target, suffix, label, inView }: { target: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(target, inView, 1400)
  return (
    <div className="text-center">
      <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-syne)", color: "var(--gold)" }}>
        {count}{suffix}
      </div>
      <div className="text-xs mt-1 leading-tight" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  )
}

export function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const metricsRef = useRef<HTMLDivElement>(null)
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.9 })

  return (
    <section id="about" ref={ref} className="section px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          01 — About
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Building things
              <br />
              <span style={{ color: "var(--gold)" }}>that work.</span>
            </motion.h2>

            <div className="space-y-5">
              {[
                "I'm Isaac — a Full-Stack Developer from Lima, Peru, focused on building web applications that perform. I work across the entire stack: REST APIs, databases, React frontends, and AI integrations using Claude and OpenAI.",
                "Currently at Springboard, I review and optimize AI-generated code for international teams across the Americas, Europe, and Asia. Before that, I shipped 8+ client projects at Dacreaciones — e-commerce systems, booking platforms, CMS solutions.",
                "Outside the terminal: I've played violin for 8+ years and performed in orchestras. I climb mountains and swim in open water. I think building software and building physical endurance share the same core skill — persistence.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Open to work */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-xl border"
              style={{
                borderColor: "var(--border-gold)",
                backgroundColor: "var(--gold-glow)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Open to remote roles or relocation —{" "}
                <span style={{ color: "var(--gold)" }}>UTC-5, flexible hours</span>
              </span>
            </motion.div>
          </div>

          {/* Right — traits + numbers */}
          <div className="space-y-8">

            {/* Trait cards */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3"
            >
              {traits.map(({ icon, label, sub }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border transition-colors duration-200 group"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-surface)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-gold)"
                    e.currentTarget.style.backgroundColor = "var(--bg-elevated)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)"
                    e.currentTarget.style.backgroundColor = "var(--bg-surface)"
                  }}
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {sub}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Metrics */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl border space-y-4"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-surface)",
              }}
            >
              <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                By the numbers
              </p>
              <div ref={metricsRef} className="grid grid-cols-3 gap-4">
                {aboutStats.map((s) => (
                  <AboutStatItem key={s.label} {...s} inView={metricsInView} />
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
            >
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                Education & Certifications
              </p>

              {/* Scrollable list */}
              <div
                style={{
                  maxHeight: 220,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  scrollbarWidth: "thin",
                  scrollbarColor: "var(--border) transparent",
                }}
              >
                {[
                  {
                    title: "B.S. Software Development",
                    org: "BYU-Idaho · BYU-Pathway Worldwide",
                    year: "2026 — In Progress",
                    badge: "Degree",
                    color: "var(--gold)",
                  },
                  {
                    title: "Associate of Science",
                    org: "BYU-Idaho · BYU-Pathway Worldwide",
                    year: "2025",
                    badge: "Associate",
                    color: "#7C6AFF",
                  },
                  {
                    title: "Web Development Certificate",
                    org: "BYU-Idaho · BYU-Pathway Worldwide",
                    year: "2025",
                    badge: "Certificate",
                    color: "#3ABFF8",
                  },
                  {
                    title: "Web & Computer Programming Certificate",
                    org: "BYU-Idaho · BYU-Pathway Worldwide",
                    year: "2025",
                    badge: "Certificate",
                    color: "#3ABFF8",
                  },
                  {
                    title: "English B1 Preliminary Program",
                    org: "Cumorah Academy · Prague, Czech Republic",
                    year: "2026",
                    badge: "Language",
                    color: "#34D399",
                  },
                  {
                    title: "Leadership & Personal Development",
                    org: "Cumorah Academy · Prague, Czech Republic",
                    year: "2026",
                    badge: "Leadership",
                    color: "#F471B5",
                  },
                ].map((item, i, arr) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: 12,
                      padding: "10px 0",
                      borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    {/* Left dot + line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 3 }}>
                      <div
                        style={{
                          width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
                          backgroundColor: item.color,
                          boxShadow: `0 0 5px ${item.color}`,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>
                          {item.title}
                        </p>
                        <span
                          style={{
                            fontSize: 9, fontWeight: 700, letterSpacing: "0.08em",
                            textTransform: "uppercase", color: item.color,
                            backgroundColor: `${item.color}15`,
                            border: `1px solid ${item.color}40`,
                            borderRadius: 4, padding: "1px 5px", flexShrink: 0,
                            fontFamily: "var(--font-jetbrains)",
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                        {item.org}
                      </p>
                      <p style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 1, fontFamily: "var(--font-jetbrains)" }}>
                        {item.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
