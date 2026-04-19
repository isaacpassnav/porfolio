"use client"

import { motion, useInView, type Variants } from "motion/react"
import { useRef, useState } from "react"
import { experience } from "@/lib/data"

const slideIn: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
}

function ExperienceCard({
  item,
  index,
  isLast,
}: {
  item: (typeof experience)[0]
  index: number
  isLast: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={slideIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ display: "flex", gap: 0, position: "relative" }}
    >
      {/* Timeline column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 32,
          flexShrink: 0,
          paddingTop: 4,
        }}
      >
        {/* Node */}
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: `2px solid ${item.current ? "var(--gold)" : "var(--border)"}`,
            backgroundColor: item.current ? "var(--gold)" : "var(--bg-base)",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
            boxShadow: item.current ? "0 0 10px var(--gold-glow)" : "none",
          }}
        >
          {item.current && (
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                opacity: 0.4,
                animation: "ping 2s ease-in-out infinite",
              }}
            />
          )}
        </div>

        {/* Connecting line */}
        {!isLast && (
          <div
            style={{
              width: 1,
              flex: 1,
              minHeight: 24,
              background: "linear-gradient(to bottom, var(--border), transparent)",
              marginTop: 6,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          marginLeft: 16,
          marginBottom: isLast ? 0 : 20,
          borderRadius: 14,
          border: `1px solid ${hovered ? "var(--border-gold)" : "var(--border)"}`,
          backgroundColor: hovered ? "var(--bg-elevated)" : "var(--bg-surface)",
          padding: "20px 24px",
          transition: "border-color 0.2s ease, background-color 0.2s ease",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 10 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                }}
              >
                {item.role}
              </h3>
              {item.current && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    backgroundColor: "var(--gold-glow)",
                    border: "1px solid var(--border-gold)",
                    borderRadius: 4,
                    padding: "2px 6px",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  <span
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      backgroundColor: "var(--gold)",
                    }}
                  />
                  Current
                </span>
              )}
            </div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: hovered ? "var(--gold)" : "var(--text-secondary)",
                marginTop: 3,
                transition: "color 0.2s ease",
              }}
            >
              {item.company}
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                fontFamily: "var(--font-jetbrains)",
                whiteSpace: "nowrap",
              }}
            >
              {item.period}
            </p>
            <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
              {item.type}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "var(--border)", marginBottom: 12 }} />

        {/* Highlights */}
        <ul style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
          {item.highlights.map((h) => (
            <li
              key={h}
              style={{
                display: "flex",
                gap: 8,
                fontSize: 12,
                color: "var(--text-muted)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }}>›</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {item.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 10,
                padding: "2px 7px",
                borderRadius: 4,
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="section px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <style>{`
        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%       { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          04 — Experience
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Where I've<br />
            <span style={{ color: "var(--gold)" }}>worked.</span>
          </motion.h2>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-sm max-w-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {experience.filter((e) => e.current).length} active roles ·{" "}
            {experience.length} total positions
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experience.map((item, i) => (
            <ExperienceCard
              key={item.company + item.role}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
