"use client";

import { useEffect, useRef } from "react";
import { BarChart2, Target, GitMerge, TrendingUp } from "lucide-react";

const differentiators = [
  {
    num: "01",
    icon: BarChart2,
    title: "Performance First",
    desc: "Marketing decisions are based on measurable performance — not vanity metrics. Every campaign is tracked, analyzed and optimized against real business outcomes.",
  },
  {
    num: "02",
    icon: Target,
    title: "Lead Quality Matters",
    desc: "Generating leads is only the first step. We focus on attracting prospects who can actually become customers — through targeting, messaging and qualification.",
  },
  {
    num: "03",
    icon: GitMerge,
    title: "Full-Funnel Thinking",
    desc: "Advertising, landing pages, qualification, follow-up and conversion work together as a single integrated system — not as isolated tactics.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "Campaigns and systems are designed to improve over time rather than simply run ads. As data accumulates, performance compounds.",
  },
];

export default function WhySocialSift() {
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

  return (
    <section
      id="why"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-ss">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: heading */}
          <div style={{ position: "sticky", top: "120px" }}>
            <div className="section-label reveal">Why SocialSift</div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                marginBottom: "24px",
                lineHeight: 1.15,
              }}
            >
              Built Around{" "}
              <span className="headline-gradient">Business Outcomes.</span>
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: "16px", lineHeight: 1.75, marginBottom: "36px" }}
            >
              SocialSift is designed for businesses that want more than just
              traffic — they want customers. Every decision we make points
              toward measurable acquisition results.
            </p>
            <div
              className="reveal reveal-delay-3"
              style={{
                padding: "20px 24px",
                background: "var(--accent-dim)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--accent-light)",
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                &ldquo;We help businesses generate leads, acquire customers, and grow
                online through performance marketing and digital growth systems.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: differentiators */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {differentiators.map((d, i) => (
              <div
                key={i}
                className={`card-ss reveal reveal-delay-${i + 1}`}
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "48px",
                    fontWeight: 900,
                    color: "rgba(99,102,241,0.06)",
                    lineHeight: 1,
                    fontFamily: "monospace",
                  }}
                >
                  {d.num}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <d.icon size={18} color="var(--accent-light)" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        marginBottom: "8px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.7 }}>{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #why .container-ss > div {
            grid-template-columns: 1fr !important;
          }
          #why .container-ss > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
