"use client";

import { useEffect, useRef } from "react";
import {
  Radio,
  Megaphone,
  UserCheck,
  Filter,
  Bell,
  Calendar,
  Star,
} from "lucide-react";

const funnelSteps = [
  { icon: Radio, label: "TRAFFIC", color: "#818cf8" },
  { icon: Megaphone, label: "ADVERTISING", color: "#a78bfa" },
  { icon: UserCheck, label: "LEAD", color: "#c084fc" },
  { icon: Filter, label: "QUALIFICATION", color: "#e879f9" },
  { icon: Bell, label: "FOLLOW-UP", color: "#f472b6" },
  { icon: Calendar, label: "APPOINTMENT", color: "#fb7185" },
  { icon: Star, label: "CUSTOMER", color: "#4ade80" },
];

export default function SolutionSection() {
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
      id="solution"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">Our Solution</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            One System.{" "}
            <span className="headline-gradient">From Click to Customer.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "540px", margin: "0 auto", fontSize: "16px" }}
          >
            We don&apos;t focus only on generating clicks. We build systems designed
            to turn digital attention into measurable business opportunities.
          </p>
        </div>

        {/* Funnel visual */}
        <div className="reveal" style={{ maxWidth: "520px", margin: "0 auto" }}>
          {funnelSteps.map((step, i) => (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "16px 24px",
                  background: "rgba(13,13,26,0.8)",
                  border: `1px solid ${step.color}30`,
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${step.color}80`;
                  (e.currentTarget as HTMLElement).style.background = `${step.color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${step.color}30`;
                  (e.currentTarget as HTMLElement).style.background = "rgba(13,13,26,0.8)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${step.color}18`,
                    border: `1px solid ${step.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <step.icon size={20} color={step.color} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: step.color,
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {i === funnelSteps.length - 1 && (
                  <div
                    style={{
                      marginLeft: "auto",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#4ade80",
                      background: "rgba(74,222,128,0.1)",
                      border: "1px solid rgba(74,222,128,0.2)",
                      borderRadius: "6px",
                      padding: "3px 10px",
                    }}
                  >
                    GOAL
                  </div>
                )}
              </div>
              {i < funnelSteps.length - 1 && (
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: `linear-gradient(to bottom, ${step.color}60, ${funnelSteps[i + 1].color}30)`,
                    margin: "0 auto",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
