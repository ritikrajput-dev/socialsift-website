"use client";

import { useEffect, useRef } from "react";
import { AlertCircle, TrendingDown, BellOff, EyeOff } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Expensive or Inconsistent Leads",
    desc: "Ad spend rises, but the volume of qualified enquiries doesn't keep pace.",
  },
  {
    icon: AlertCircle,
    title: "Low-Quality Enquiries",
    desc: "Contacts come in but most aren't ready to buy or aren't the right fit.",
  },
  {
    icon: BellOff,
    title: "Poor Follow-Up",
    desc: "Leads fall through the cracks without a system to respond and nurture them.",
  },
  {
    icon: EyeOff,
    title: "Marketing Without Clear Tracking",
    desc: "Budget is being spent but it's unclear which channels and campaigns actually drive results.",
  },
];

export default function ProblemSection() {
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
    <section id="problem" ref={sectionRef} className="section-pad">
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">The Problem</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            Getting Attention Isn&apos;t the Same{" "}
            <br />
            <span className="headline-gradient">as Getting Customers.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "560px", margin: "0 auto", fontSize: "16px" }}
          >
            Businesses spend money on ads, content and social media every
            day — but traffic alone doesn&apos;t create growth.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              className={`problem-card reveal reveal-delay-${i + 1}`}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}
              >
                <p.icon size={18} color="#f87171" />
              </div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            textAlign: "center",
            padding: "36px",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(129,140,248,0.04) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "16px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.6,
            }}
          >
            SocialSift connects acquisition, qualification, conversion and
            follow-up into{" "}
            <span style={{ color: "var(--accent-light)" }}>
              one integrated growth system.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
