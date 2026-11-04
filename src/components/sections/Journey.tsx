"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, BookOpen, BriefcaseBusiness, Sparkles } from "lucide-react";

import { journeyItems } from "@/data/journey";

const meta = {
  education: {
    label: "Education",
    icon: BookOpen,
  },
  experience: {
    label: "Work experience",
    icon: BriefcaseBusiness,
  },
  learning: {
    label: "Independent learning",
    icon: Sparkles,
  },
} as const;

function Logo({ src, organization }: { src?: string; organization: string }) {
  const [failed, setFailed] = useState(false);

  const initials = organization
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0])
    .join("")
    .toUpperCase();

  return <div className="journey-logo">{src && !failed ? <img src={src} alt={`${organization} logo`} onError={() => setFailed(true)} /> : <span>{initials || "✳"}</span>}</div>;
}

export default function Journey() {
  const reduce = useReducedMotion();

  const items = journeyItems.filter((item) => item.status === "published");

  return (
    <section id="journey" className="section-padding journey-editorial">
      <div className="container-shell">
        {/* Section Heading */}
        <div className="section-index">
          <span>03</span>
          <span className="eyebrow">THE JOURNEY SO FAR</span>
          <span className="index-rule" />
        </div>

        <div className="journey-heading">
          <h2 className="font-display">
            Every chapter
            <br />
            <em>shapes the story.</em>
          </h2>

          <p>Experiences that have taught me to think differently, collaborate better, and keep moving forward.</p>
        </div>

        {/* Timeline */}
        {items.length > 0 ? (
          <div className="journey-timeline">
            {items.map((item, index) => {
              const currentMeta = meta[item.type];
              const Icon = currentMeta.icon;

              return (
                <motion.article
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: reduce ? 0 : Math.min(index * 0.04, 0.2),
                  }}
                  className={`journey-timeline-item ${index % 2 === 0 ? "is-left" : "is-right"}`}
                >
                  {/* Timeline Point */}
                  <span className="journey-timeline-dot" aria-hidden="true" />

                  {/* Period */}
                  <div className="journey-timeline-date">{item.date}</div>

                  {/* Experience Card */}
                  <div className="journey-timeline-card">
                    <div className="journey-card-meta">
                      <span className="journey-kind">
                        <Icon size={13} />
                        {currentMeta.label}
                      </span>

                      <span className="journey-card-index">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="journey-card-main">
                      <Logo src={item.logo} organization={item.organization} />

                      <div>
                        <h3>{item.title}</h3>

                        <p className="journey-org">{item.organization}</p>

                        <p className="journey-description">{item.description}</p>
                        {item.images && item.images.length > 0 && (
                          <div className="journey-gallery">
                            {item.images.map((photo, photoIndex) => (
                              <figure key={`${item.id}-photo-${photoIndex}`} className="journey-gallery-item text-xs text-gray-400">
                                <img src={photo.src} loading="lazy" />

                                {photo.caption && <figcaption>{photo.caption}</figcaption>}
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <p className="empty-state">
            Belum ada riwayat yang dipublikasikan. Perbarui <code>src/data/journey.ts</code> dan ubah status menjadi <code>published</code>.
          </p>
        )}
      </div>
    </section>
  );
}
