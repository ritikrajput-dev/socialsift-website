"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your business, audience, offer and current acquisition process.",
  },
  {
    num: "02",
    title: "Build",
    desc: "We create the campaign, funnel and tracking system tailored to your goals.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "We launch targeted campaigns and begin collecting real performance data.",
  },
  {
    num: "04",
    title: "Optimize",
    desc: "We analyze lead quality, conversion data and campaign performance to improve results.",
  },
  {
    num: "05",
    title: "Scale",
    desc: "We increase investment in what works and continuously improve the system over time.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">The Process</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            A Simple{" "}
            <span className="headline-gradient">Growth Process.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "500px", margin: "0 auto", fontSize: "16px" }}
          >
            Five clear stages designed to build, launch and improve your
            digital acquisition system.
          </p>
        </div>

        {/* Desktop: horizontal steps */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            position: "relative",
            marginBottom: "64px",
          }}
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "28px",
              left: "10%",
              right: "10%",
              height: "1px",
              background:
                "linear-gradient(90deg, var(--accent) 0%, rgba(99,102,241,0.2) 100%)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "0 12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step circle */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background:
                    i === 0
                      ? "var(--accent)"
                      : "var(--bg-card)",
                  border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--accent)";
                  el.style.borderColor = "var(--accent)";
                  el.style.boxShadow = "0 0 20px rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = i === 0 ? "var(--accent)" : "var(--bg-card)";
                  el.style.borderColor = i === 0 ? "var(--accent)" : "var(--border)";
                  el.style.boxShadow = "none";
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "var(--text-primary)",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="mobile-steps" style={{ display: "none" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: i === 0 ? "var(--accent)" : "var(--bg-card)",
                    border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "12px", fontWeight: 800, color: "#fff" }}>
                    {step.num}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flexGrow: 1,
                      background: "var(--border)",
                      margin: "8px 0",
                      minHeight: "32px",
                    }}
                  />
                )}
              </div>
              <div style={{ paddingTop: "8px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center" }}>
          <button className="btn-primary" onClick={scrollToContact}>
            Get Your Free Growth Audit
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-steps { display: none !important; }
          .mobile-steps { display: block !important; }
        }
      `}</style>
    </section>
  );
}
