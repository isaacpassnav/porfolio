"use client"

import { motion, useInView, type Variants } from "motion/react"
import { useRef, useState } from "react"
import Image from "next/image"
import { techStack, skills } from "@/lib/data"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: i * 0.07 },
  }),
}

const orbits = [
  { id: 1, radius: 90,  duration: 18, size: 40 },
  { id: 2, radius: 150, duration: 30, size: 36 },
  { id: 3, radius: 214, duration: 46, size: 32 },
]

const categoryMeta: Record<string, { label: string; color: string }> = {
  backend:   { label: "Backend",    color: "var(--gold)" },
  frontend:  { label: "Frontend",   color: "#7C6AFF" },
  databases: { label: "Database",   color: "#3ABFF8" },
  ai:        { label: "AI & APIs",  color: "#F471B5" },
  devops:    { label: "DevOps",     color: "#34D399" },
  tools:     { label: "Tools",      color: "#FB923C" },
}

function TechIcon({
  item, orbitRadius, duration, size, initialAngle,
}: {
  item: (typeof techStack)[0]
  orbitRadius: number
  duration: number
  size: number
  initialAngle: number
}) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        ["--start-angle" as string]: `${initialAngle}deg`,
        animation: `orbit-spin ${duration}s linear infinite`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          ["--ty" as string]: `calc(-50% - ${orbitRadius}px)`,
          transform: `translateX(-50%) translateY(calc(-50% - ${orbitRadius}px))`,
          animation: `counter-spin ${duration}s linear infinite`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            border: hovered ? "1.5px solid var(--gold)" : "1.5px solid var(--border)",
            backgroundColor: hovered ? "var(--bg-overlay)" : "var(--bg-elevated)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "default",
            transition: "all 0.2s ease",
            boxShadow: hovered ? "0 0 14px var(--gold-glow)" : "none",
            position: "relative",
          }}
        >
          {!imgError ? (
            <Image
              src={item.logo}
              alt={item.name}
              width={size * 0.54}
              height={size * 0.54}
              style={{
                objectFit: "contain",
                filter: item.logo.includes("github") || item.logo.includes("nextjs")
                  ? "invert(1)" : "none",
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span style={{ fontSize: 10, fontWeight: 700, color: "var(--gold)" }}>
              {item.name.slice(0, 2).toUpperCase()}
            </span>
          )}

          {hovered && (
            <div
              style={{
                position: "absolute",
                top: -30,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "var(--bg-overlay)",
                border: "1px solid var(--border-gold)",
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: 10,
                fontWeight: 600,
                color: "var(--gold)",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                zIndex: 20,
              }}
            >
              {item.name}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function OrbitRing({ radius }: { radius: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: radius * 2,
        height: radius * 2,
        marginTop: -radius,
        marginLeft: -radius,
        borderRadius: "50%",
        border: "1px dashed var(--border)",
        opacity: 0.35,
        pointerEvents: "none",
      }}
    />
  )
}

function SkillChip({ name, color, delay }: { name: string; color: string; delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.span
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 10px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 500,
        border: `1px solid ${hovered ? color : "var(--border)"}`,
        backgroundColor: hovered ? `${color}12` : "var(--bg-elevated)",
        color: hovered ? color : "var(--text-secondary)",
        transition: "all 0.18s ease",
        cursor: "default",
        fontFamily: "var(--font-jetbrains)",
      }}
    >
      {name}
    </motion.span>
  )
}

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const orbitCanvas = 480

  const categoryEntries = Object.entries(skills) as [keyof typeof skills, string[]][]

  return (
    <section
      id="skills"
      ref={ref}
      className="section px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(var(--start-angle, 0deg)); }
          to   { transform: rotate(calc(var(--start-angle, 0deg) + 360deg)); }
        }
        @keyframes counter-spin {
          from { transform: translateX(-50%) translateY(var(--ty, 0px)) rotate(0deg); }
          to   { transform: translateX(-50%) translateY(var(--ty, 0px)) rotate(-360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px var(--gold-glow), 0 0 60px var(--gold-glow); }
          50%       { box-shadow: 0 0 50px var(--gold-glow), 0 0 100px var(--gold-glow); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — text + skill categories */}
          <div>
            <motion.p
              custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-xs font-mono tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              02 — Skills
            </motion.p>

            <motion.h2
              custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              The stack I<br />
              <span style={{ color: "var(--gold)" }}>work with.</span>
            </motion.h2>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-sm mb-10 max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Hover any orbit icon to identify it. Hover chips to highlight by category.
            </motion.p>

            {/* Skill categories */}
            <div className="flex flex-col gap-5">
              {categoryEntries.map(([key, items], catIdx) => {
                const meta = categoryMeta[key]
                return (
                  <motion.div
                    key={key}
                    custom={catIdx + 3}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        style={{
                          width: 6, height: 6, borderRadius: "50%",
                          backgroundColor: meta.color, flexShrink: 0,
                          boxShadow: `0 0 6px ${meta.color}`,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 10, fontWeight: 600, letterSpacing: "0.12em",
                          textTransform: "uppercase", color: meta.color,
                          fontFamily: "var(--font-jetbrains)",
                        }}
                      >
                        {meta.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((name, i) => (
                        <SkillChip
                          key={name}
                          name={name}
                          color={meta.color}
                          delay={(catIdx + 3 + i * 0.3)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — orbit solar system */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] as [number, number, number, number], delay: 0.2 }}
            className="flex justify-center items-center"
          >
            {/* Outer glow ring for depth */}
            <div style={{ position: "relative" }}>
              {/* Background atmospheric glow */}
              <div
                style={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse at center, rgba(232,160,48,0.06) 0%, rgba(124,106,255,0.04) 40%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  width: orbitCanvas,
                  height: orbitCanvas,
                  maxWidth: "100%",
                  zIndex: 1,
                }}
              >
                {/* Orbit dashed rings */}
                {orbits.map((o) => <OrbitRing key={o.id} radius={o.radius} />)}

                {/* Tech icons */}
                {orbits.map((orbit) => {
                  const items = techStack.filter((t) => t.orbit === orbit.id)
                  return items.map((item) => (
                    <TechIcon
                      key={item.name}
                      item={item}
                      orbitRadius={orbit.radius}
                      duration={orbit.duration}
                      size={orbit.size}
                      initialAngle={item.angle}
                    />
                  ))
                })}

                {/* Center — IP monogram with pulse */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    border: "2px solid var(--border-gold)",
                    backgroundColor: "var(--bg-overlay)",
                    animation: "pulse-glow 3s ease-in-out infinite",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--gold)",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    IP
                  </span>
                </div>

                {/* Radial glow behind center */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile fallback — simple tag list */}
        <div className="lg:hidden mt-10 flex flex-wrap gap-2 justify-center">
          {techStack.map((t) => (
            <span
              key={t.name}
              className="px-3 py-1.5 rounded-lg text-xs border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-elevated)",
                color: "var(--text-secondary)",
              }}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
