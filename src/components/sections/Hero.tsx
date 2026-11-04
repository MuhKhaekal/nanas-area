"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="hero-editorial relative isolate overflow-hidden">
      <div className="container-shell hero-editorial-inner">
        <div className="hero-kicker">
          <span className="eyebrow">PORTFOLIO · PERSONAL JOURNAL</span>
          <span className="hero-kicker-line" />
        </div>
        <div className="hero-editorial-grid">
          <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="hero-pretitle">
              <Sparkles size={15} /> A story of curiosity & becoming
            </p>
            <h1 id="hero-heading" className="font-display hero-title">
              Hello,
              <br />
              I’m <em>{siteConfig.name.split(" ")[0]}.</em>
            </h1>
            <div className="hero-intro-row">
              <span className="hero-side-number">01 / INTRODUCTION</span>
              <div>
                <p className="hero-role">{siteConfig.role}</p>
                <p className="hero-description">A curious mind with a thoughtful approach to creating meaningful digital experiences, building connections, and growing through every opportunity.</p>
                <div className="hero-actions">
                  <a href="#projects" className="hero-primary">
                    Explore my work <ArrowUpRight size={17} />
                  </a>
                  <a href="#about" className="hero-text-link">
                    Get to know me <ArrowDown size={15} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="hero-portrait-wrap" initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="hero-portrait-frame">
              <Image src="/images/profile/profile-nanas3.webp" alt={`Foto profil ${siteConfig.name}`} fill priority sizes="(max-width: 760px) 88vw, 42vw" className="object-cover object-center" />
              <div className="hero-photo-caption">
                <span>THE PERSON BEHIND THE WORK</span>
                <span>✳</span>
              </div>
            </div>
            <div className="hero-stamp">
              <span>CREATIVE</span>
              <span>·</span>
              <span>CURIOUS</span>
              <span>·</span>
              <span>DRIVEN</span>
            </div>
            <div className="hero-portrait-note">
              <span className="note-star">✳</span>
              <span>
                A little bit of everything,
                <br />
                always becoming more.
              </span>
            </div>
          </motion.div>
        </div>
        <div className="hero-bottomline">
          <span>BASED IN INDONESIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>01 — 06</span>
        </div>
      </div>
    </section>
  );
}
