"use client"

import { motion, useInView, type Variants } from "motion/react"
import { useRef, useState } from "react"
import { ArrowUpRight, Zap } from "lucide-react"
import { projects } from "@/lib/data"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.09 },
  }),
}

const typeColors: Record<string, string> = {
  "E-commerce":    "#34D399",
  "Booking System":"#3ABFF8",
  "AI Integration":"#F471B5",
  "CMS":           "var(--gold)",
  "Backend":       "#7C6AFF",
  "Data Systems":  "#FB923C",
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0]
  index: number
  featured?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const color = typeColors[project.type] ?? "var(--gold)"

  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        border: `1px solid ${hovered ? color + "55" : "var(--border)"}`,
        backgroundColor: hovered ? "var(--bg-elevated)" : "var(--bg-overlay)",
        padding: featured ? "32px" : "24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 40px ${color}18` : "none",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Top bar accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${color}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s ease",
          borderRadius: "16px 16px 0 0",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {/* Type badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color,
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            <span
              style={{
                width: 5, height: 5, borderRadius: "50%",
                backgroundColor: color, flexShrink: 0,
              }}
            />
            {project.type}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: featured ? 22 : 18,
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
        </div>

        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: `1px solid ${hovered ? color : "var(--border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
            color: hovered ? color : "var(--text-muted)",
          }}
        >
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: "var(--text-muted)",
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Metric */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          padding: "4px 10px",
          borderRadius: 6,
          backgroundColor: `${color}10`,
          border: `1px solid ${color}30`,
          width: "fit-content",
        }}
      >
        <Zap size={10} style={{ color }} />
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color,
            fontFamily: "var(--font-jetbrains)",
          }}
        >
          {project.metrics}
        </span>
      </div>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              padding: "3px 8px",
              borderRadius: 4,
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  // First project is featured (takes 2 cols), rest in 3-col grid
  const [featured, ...rest] = projects

  return (
    <section
      id="projects"
      ref={ref}
      className="section px-6"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          03 — Projects
        </motion.p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Things I've<br />
            <span style={{ color: "var(--gold)" }}>shipped.</span>
          </motion.h2>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-sm max-w-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {projects.length} projects across full-stack, AI integration, and backend engineering.
          </motion.p>
        </div>

        {/* Featured row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          <div className="lg:col-span-2">
            <ProjectCard project={featured} index={3} featured />
          </div>
          <ProjectCard project={rest[0]} index={4} />
        </div>

        {/* Rest grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.slice(1).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={5 + i} />
          ))}
        </div>
      </div>
    </section>
  )
}
