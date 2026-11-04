"use client";
import { motion, useReducedMotion } from "motion/react";
import { skillCategories } from "@/data/skills";
export default function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="section-padding skills-editorial">
      <div className="container-shell">
        <div className="section-index">
          <span>02</span>
          <span className="eyebrow">MY TOOLKIT</span>
          <span className="index-rule" />
        </div>
        <div className="skills-heading">
          <h2 className="font-display">
            Things I <em>work with.</em>
          </h2>
          <p>Tools, technologies, and the little details that bring an idea to life.</p>
        </div>
        <div className="skills-mosaic">
          {skillCategories.map((c, i) => (
            <motion.article
              key={c.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`skill-tile skill-tile-${i + 1}`}
            >
              <div className="skill-tile-top">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>✳</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="skill-tags">
                {c.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
