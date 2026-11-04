"use client";
import { motion, useReducedMotion } from "motion/react";
import { Braces, Database, LayoutTemplate } from "lucide-react";
const focusAreas = [
  { number: "01", title: "Data Entry", description: "Building thoughtful web experiences with clear structure, intuitive flows, and real user needs in mind.", icon: LayoutTemplate },
  { number: "02", title: "Data Administrator", description: "Creating reliable application logic, APIs, and data processes that make digital products work beautifully.", icon: Braces },
  { number: "03", title: "Database design", description: "Organizing information into meaningful structures that remain consistent, scalable, and easy to maintain.", icon: Database },
];
export default function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="section-padding about-editorial">
      <div className="container-shell">
        <div className="section-index">
          <span>01</span>
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <span className="index-rule" />
        </div>
        <div className="about-editorial-grid">
          <div className="about-heading-col">
            <p className="script-note">A little note about who I am</p>
            <h2 className="font-display about-title">
              More than
              <br />
              what <em>I do.</em>
            </h2>
            <div className="about-quote">“Good work comes from curiosity, empathy, and the courage to keep learning.”</div>
          </div>
          <div className="about-content-col">
            <p className="about-lead">I believe meaningful work begins with curiosity, empathy, and the willingness to keep learning.</p>
            <p className="text-muted leading-8">
              I enjoy turning ideas into thoughtful solutions that make everyday experiences better. Every project, collaboration, and new challenge is an opportunity to grow both personally and professionally.
            </p>
            <div className="focus-list">
              {focusAreas.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.article key={a.number} initial={reduce ? false : { opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="focus-item">
                    <span className="focus-number">{a.number}</span>
                    <span className="focus-icon">
                      <Icon size={19} />
                    </span>
                    <div>
                      <h3>{a.title}</h3>
                      <p>{a.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
