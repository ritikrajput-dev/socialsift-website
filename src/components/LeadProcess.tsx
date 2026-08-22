"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Search, Lightbulb, FileText, Handshake } from "lucide-react";

const processSteps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "You Tell Us About Your Business",
    desc: "Share your goals, current marketing activities, target audience and what you're trying to achieve. No commitment required at this stage.",
  },
  {
    num: "02",
    icon: Search,
    title: "We Review Your Current Growth Setup",
    desc: "We look at your existing campaigns, funnels, tracking and acquisition process to understand where things stand today.",
  },
  {
    num: "03",
    icon: Lightbulb,
    title: "We Identify Opportunities",
    desc: "Based on your business and market, we identify the most promising areas for improvement in your digital acquisition system.",
  },
  {
    num: "04",
    icon: FileText,
    title: "You Receive Practical Recommendations",
    desc: "We share specific, actionable insights about what could be improved, tested or built to move your growth forward.",
  },
  {
    num: "05",
    icon: Handshake,
    title: "We Discuss Whether SocialSift Is a Good Fit",
    desc: "If our approach makes sense for your business, we'll outline how we'd work together. No pressure, no hard sell.",
  },
];

export default function LeadProcess() {
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
      id="process"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">Free Growth Audit</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            What Happens When{" "}
            <span className="headline-gradient">You Reach Out?</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "500px", margin: "0 auto", fontSize: "16px" }}
          >
            The initial growth audit is completely free. Here&apos;s what the
            process looks like.
          </p>
        </div>

        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                display: "flex",
                gap: "24px",
                marginBottom: i < processSteps.length - 1 ? "8px" : "0",
              }}
            >
              {/* Left: number + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--accent-dim)";
                    el.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--bg-card)";
                    el.style.borderColor = "var(--border)";
                  }}
                >
                  <step.icon size={20} color="var(--accent-light)" />
                </div>
                {i < processSteps.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "60px",
                      background:
                        "linear-gradient(to bottom, rgba(99,102,241,0.3), transparent)",
                      margin: "8px 0",
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingTop: "12px", paddingBottom: "40px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--accent-light)",
                    marginBottom: "6px",
                  }}
                >
                  STEP {step.num}
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "16px",
            padding: "32px",
            background: "var(--accent-dim)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            maxWidth: "600px",
            margin: "16px auto 0",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            The Growth Audit Is Free.
          </p>
          <p style={{ fontSize: "14px", marginBottom: "24px" }}>
            No obligation. No sales pressure. Just an honest look at your current
            digital growth setup and where improvements can be made.
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            Request My Free Growth Audit
          </button>
        </div>
      </div>
    </section>
  );
}
