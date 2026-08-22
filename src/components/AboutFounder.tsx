"use client";

import { useEffect, useRef } from "react";
import { Globe, MapPin, ArrowRight } from "lucide-react";

export default function AboutFounder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) =>
              el.classList.add("revealed")
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "rgba(99,102,241,0.06)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container-ss" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left: founder card */}
          <div className="reveal">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top gradient bar */}
              <div
                style={{
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)",
                }}
              />

              <div style={{ padding: "40px" }}>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "20px",
                    boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                  }}
                >
                  R
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  Ritik Rajput
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--accent-light)",
                    fontWeight: 600,
                    marginBottom: "24px",
                  }}
                >
                  Founder, SocialSift
                </p>

                <div className="divider" style={{ marginBottom: "24px" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={14} color="var(--accent-light)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>Based In</div>
                      <div style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 600 }}>India</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Globe size={14} color="var(--accent-light)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>Serving</div>
                      <div style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 600 }}>Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="section-label reveal">The Founder</div>
            <h2
              className="reveal reveal-delay-1"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", marginBottom: "24px" }}
            >
              Built by{" "}
              <span className="headline-gradient">Ritik Rajput.</span>
            </h2>

            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}
            >
              SocialSift was founded by Ritik Rajput with a simple goal: help
              businesses turn digital attention into measurable growth.
            </p>

            <p
              className="reveal reveal-delay-3"
              style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "36px" }}
            >
              Based in India and built for a global market, SocialSift
              combines performance marketing, lead generation, conversion
              systems and automation to help businesses acquire customers more
              effectively — regardless of industry or geography.
            </p>

            <p
              className="reveal reveal-delay-4"
              style={{ fontSize: "15px", lineHeight: 1.8, marginBottom: "36px", color: "var(--text-secondary)" }}
            >
              The agency is structured around a simple belief: marketing
              should be measurable, accountable and directly tied to business
              outcomes. Not vanity metrics. Not impressions. Real customers.
            </p>

            <div className="reveal reveal-delay-5">
              <button className="btn-primary" onClick={scrollToContact}>
                Work With SocialSift
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container-ss > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
