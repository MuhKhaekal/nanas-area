"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, UsersRound, Images } from "lucide-react";

import { organizationExperiences, type OrganizationPhoto } from "@/data/organizations";

export default function OrganizationExperience() {
  const reduce = useReducedMotion();

  const items = organizationExperiences.filter((item) => item.status === "published");

  return (
    <section id="organizations" className="section-padding organization-editorial">
      <div className="container-shell">
        <div className="section-index">
          <span>04</span>
          <span className="eyebrow">PEOPLE & PURPOSE</span>
          <span className="index-rule" />
        </div>

        <div className="organization-heading">
          <h2 className="font-display">
            Better <em>together.</em>
          </h2>

          <p>Places where I learned that leadership is about listening, showing up, and growing with others.</p>
        </div>

        {items.length > 0 ? (
          <div className="organization-stack">
            {items.map((item, index) => (
              <motion.article
                key={item.id}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="organization-card"
              >
                <div className="organization-mark">
                  <UsersRound size={24} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="organization-details">
                  <span className="organization-period">{item.period}</span>

                  <h3>{item.role}</h3>

                  <p className="organization-name">{item.organization}</p>

                  <p>{item.description}</p>

                  {item.organizationUrl && (
                    <a href={item.organizationUrl} target="_blank" rel="noreferrer">
                      Discover more
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {/* Documentation Gallery */}
                  {item.images && item.images.length > 0 && (
                    <div className="organization-gallery-wrap">
                      <div className="organization-gallery-heading">
                        <Images size={15} />
                        <span>ACTIVITY HIGHLIGHTS</span>

                        <span className="organization-gallery-count">{String(item.images.length).padStart(2, "0")} PHOTOS</span>
                      </div>

                      <div className="organization-gallery">
                        {item.images.map((photo: OrganizationPhoto, photoIndex: number) => (
                          <a key={`${item.id}-photo-${photoIndex}`} className="organization-photo" href={photo.src} target="_blank" rel="noreferrer" aria-label={`Open documentation: ${photo.caption || item.organization}`}>
                            <img src={photo.src} alt={photo.caption || `Documentation ${photoIndex + 1} - ${item.organization}`} loading="lazy" />

                            {photo.caption && <span>{photo.caption}</span>}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <span className="organization-decoration">✳</span>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            Pengalaman organisasi belum dipublikasikan. Tambahkan data di <code>src/data/organizations.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
