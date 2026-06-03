"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Headphones,
  Mail,
  MapPin,
  Mic2,
  Music2,
  Play,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type WorkType = "Audio Editing" | "Mixing" | "Production" | "Dubbing";

type MediaKind = "audio" | "video";

type WorkItem = {
  title: string;
  type: WorkType;
  description: string;
  src: string;
  mediaKind: MediaKind;
  mimeType: string;
  accent: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path: string) => `${basePath}${path}`;

const workItems: WorkItem[] = [
  {
    title: "Foley",
    type: "Production",
    description:
      "A foley production sample highlighting sound effects, movement support, timing, and scene realism.",
    src: assetPath("/media/video/foley.mp4"),
    mediaKind: "video",
    mimeType: "video/mp4",
    accent: "green",
  },
  {
    title: "Masterpiece",
    type: "Audio Editing",
    description:
      "An audio editing sample focused on arrangement, clean sequencing, musical polish, and presentation quality.",
    src: assetPath("/media/audio/masterpiece.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "amber",
  },
  {
    title: "Audio Mix",
    type: "Mixing",
    description:
      "A compact audio mix demonstrating balance, leveling, rhythm control, and smooth overall playback.",
    src: assetPath("/media/audio/audio-mix.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "cyan",
  },
  {
    title: "Remix",
    type: "Mixing",
    description:
      "A creative remix sample focused on timing, transitions, energy control, and clean audio balancing.",
    src: assetPath("/media/audio/remix.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "violet",
  },
  {
    title: "Medley",
    type: "Audio Editing",
    description:
      "A connected medley edit that highlights sequencing, pacing, song flow, and smooth transition work.",
    src: assetPath("/media/audio/medley.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "cyan",
  },
  {
    title: "Mash Up",
    type: "Mixing",
    description:
      "A mash-up sample built around beat alignment, layering, arrangement, and creative sound blending.",
    src: assetPath("/media/audio/mashup.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "pink",
  },
  {
    title: "Dubbing",
    type: "Dubbing",
    description:
      "A dubbing production sample showing voice timing, character delivery, syncing, and scene support.",
    src: assetPath("/media/video/dubbing.mp4"),
    mediaKind: "video",
    mimeType: "video/mp4",
    accent: "amber",
  },
  {
    title: "Dialogue",
    type: "Production",
    description:
      "Dialogue-focused work demonstrating clarity, voice placement, audio cleanup, and production polish.",
    src: assetPath("/media/audio/dialogue.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "green",
  },
  {
    title: "Cut Up",
    type: "Audio Editing",
    description:
      "A cut-up editing sample emphasizing rhythm, arrangement, precise cuts, and movement between sections.",
    src: assetPath("/media/audio/cut-up.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "blue",
  },
  {
    title: "Beat Matching",
    type: "Mixing",
    description:
      "A beat-matching sample focused on tempo control, transitions, cue accuracy, and mix continuity.",
    src: assetPath("/media/audio/beat-matching.mp3"),
    mediaKind: "audio",
    mimeType: "audio/mpeg",
    accent: "red",
  },
];

const services = [
  {
    icon: SlidersHorizontal,
    title: "Mixing & Audio Balance",
    copy:
      "Leveling, EQ direction, transitions, and clean arrangement decisions for school, portfolio, and multimedia projects.",
  },
  {
    icon: Mic2,
    title: "Dubbing & Dialogue",
    copy:
      "Voice timing, dialogue clarity, sync checking, and scene support for video-based outputs.",
  },
  {
    icon: Sparkles,
    title: "Creative Sound Design",
    copy:
      "Sound choices that add texture, mood, motion, and personality to visual storytelling.",
  },
];

const workflowSteps = ["Listen", "Edit", "Balance", "Polish", "Present"];
const filters = ["All", "Mixing", "Audio Editing", "Dubbing", "Production"] as const;

export default function HomePage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const filteredWork = useMemo(() => {
    return activeFilter === "All"
      ? workItems
      : workItems.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <header className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Claire Goce Audio home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>{siteConfig.name}</span>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-cta" href={`mailto:${siteConfig.email}`}>
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-bg" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="wave-lines">
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.12}s` }}
                />
              ))}
            </div>
          </div>

          <div className="hero-content">
            <p className="eyebrow">Audio Engineering • Sound Design • Dubbing</p>
            <h1>Creative sound with clean, expressive production.</h1>
            <p className="hero-copy">
              I’m Claire Anne Maxine T. Goce, a Multimedia Arts and Animation
              student building audio work that feels polished, playful, and full
              of personality.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                <Play size={18} /> Listen to my work
              </a>
              <a className="button secondary" href={`mailto:${siteConfig.email}`}>
                Start a project <ArrowRight size={18} />
              </a>
            </div>

            <div className="hero-stats" aria-label="Portfolio highlights">
              <div>
                <strong>10</strong>
                <span>Work samples</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Audio categories</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Creative focus</span>
              </div>
            </div>
          </div>

          <div className="studio-card" aria-label="Audio interface visual">
            <div className="meter-row">
              {Array.from({ length: 20 }).map((_, index) => (
                <span
                  key={index}
                  style={{ height: `${20 + ((index * 17) % 70)}%` }}
                />
              ))}
            </div>

            <div className="now-playing">
              <Headphones size={30} />
              <div>
                <span>Now shaping</span>
                <strong>voice, rhythm, mood, and motion</strong>
              </div>
            </div>

            <div className="knob-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section id="work" className="work section-shell">
          <div className="section-heading">
            <p className="eyebrow">Selected Portfolio</p>
            <h2>Listen-ready work samples</h2>
            <p>
              Each card opens a clean preview player so visitors can review the
              project without leaving the portfolio experience.
            </p>
          </div>

          <div className="filter-bar" role="list" aria-label="Work filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filteredWork.map((item, index) => (
              <article className={`work-card accent-${item.accent}`} key={item.title}>
                <div className="work-art" aria-hidden="true">
                  <Music2 />
                  <div className="mini-wave">
                    {Array.from({ length: 16 }).map((_, waveIndex) => (
                      <span
                        key={waveIndex}
                        style={{
                          height: `${18 + ((waveIndex * 11 + index * 7) % 62)}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="work-card-body">
                  <span className="pill">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="card-actions">
                    <button type="button" onClick={() => setSelectedWork(item)}>
                      <Play size={17} /> Preview
                    </button>
                    <a href={item.src} target="_blank" rel="noopener noreferrer">
                      Open file
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="services section-shell">
          <div className="section-heading narrow">
            <p className="eyebrow">What I Do</p>
            <h2>Audio support for creative multimedia projects</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <service.icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process section-shell" aria-label="Creative process">
          <div className="process-card">
            <div>
              <p className="eyebrow">Workflow</p>
              <h2>From rough sound to portfolio-ready output</h2>
            </div>

            <ol>
              {workflowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="about section-shell">
          <figure className="portrait-card">
            <img
              src={assetPath("/images/claire-goce-profile.jpg")}
              alt="Claire Anne Maxine T. Goce"
            />
          </figure>

          <div className="about-copy">
            <p className="eyebrow">About Me</p>
            <h2>Claire Anne Maxine T. Goce</h2>
            <p>
              I am a 3rd Year Bachelor of Science in Information Technology
              student specializing in Multimedia Arts and Animation. My work
              connects technical editing with creative storytelling, especially
              in mixing, dubbing, dialogue editing, and sound design.
            </p>
            <p>
              I enjoy shaping audio that supports visuals, strengthens emotion,
              and makes every project feel more engaging, polished, and
              intentional.
            </p>

            <div className="contact-list">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={18} /> {siteConfig.email}
              </a>
              <span>
                <MapPin size={18} /> {siteConfig.location}
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Let’s Connect</p>
              <h2>
                Need audio work for a class, video, portfolio, or creative
                project?
              </h2>
              <p>
                Send a message and include the project type, deadline, and the
                kind of sound you want to achieve.
              </p>
            </div>

            <a
              className="button primary"
              href={`mailto:${siteConfig.email}?subject=Audio%20Portfolio%20Inquiry`}
            >
              <Mail size={18} /> Email Claire
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </p>
        <div>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </div>
      </footer>

      {selectedWork && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedWork.title} preview`}
        >
          <div className="modal-card">
            <div className="modal-header">
              <div>
                <span>{selectedWork.type}</span>
                <h3>{selectedWork.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                aria-label="Close preview"
              >
                <X size={22} />
              </button>
            </div>

            <div className="modal-player">
              {selectedWork.mediaKind === "audio" ? (
                <audio controls preload="metadata" key={selectedWork.src}>
                  <source src={selectedWork.src} type={selectedWork.mimeType} />
                  Your browser does not support the audio player.
                </audio>
              ) : (
                <video controls preload="metadata" key={selectedWork.src}>
                  <source src={selectedWork.src} type={selectedWork.mimeType} />
                  Your browser does not support the video player.
                </video>
              )}
            </div>

            <p className="modal-note">
              This sample is stored directly inside the website, so it can play
              without opening Google Drive.
            </p>
          </div>
        </div>
      )}
    </>
  );
}