"use client";

import { useEffect, useRef } from "react";
import {
  Monitor,
  Search,
  CirclePlay,
  Users,
  LayoutTemplate,
  Database,
  MessageCircle,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  Share2,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Meta Ads",
    desc: "Reach the right audiences across Facebook and Instagram with performance-focused campaigns.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting"],
  },
  {
    icon: Search,
    title: "Google Ads",
    desc: "Capture high-intent demand when potential customers are actively searching.",
    tags: ["Search", "Display", "Remarketing"],
  },
  {
    icon: CirclePlay,
    title: "YouTube Ads",
    desc: "Build awareness and generate demand through targeted video campaigns.",
    tags: ["Video Ads", "Brand Awareness", "Demand Gen"],
  },
  {
    icon: Users,
    title: "Lead Generation",
    desc: "Create campaigns and funnels designed to generate qualified enquiries.",
    tags: ["Lead Funnels", "Lead Forms", "Qualification"],
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Turn advertising traffic into action with conversion-focused landing pages.",
    tags: ["High-Converting", "Campaign-Specific", "CRO"],
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    desc: "Track, organize and manage every lead through the sales journey.",
    tags: ["CRM Setup", "Pipeline", "Follow-Up Systems"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    desc: "Improve response and follow-up with automated communication workflows.",
    tags: ["Lead Alerts", "Auto Follow-Up", "Workflows"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Setting",
    desc: "Turn qualified enquiries into booked conversations and opportunities.",
    tags: ["Qualification", "Booking", "Sales Pipeline"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    desc: "Identify where prospects drop off and improve the customer journey.",
    tags: ["Funnel Audit", "Landing Page CRO", "Lead Quality"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Know what is working, what isn't, and where to optimize.",
    tags: ["Campaign Reports", "Attribution", "Recommendations"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a consistent digital presence that supports long-term growth.",
    tags: ["Strategy", "Content", "Organic Growth"],
  },
];

export default function ServicesSection() {
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
      { threshold: 0.08 }
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
    <section id="services" ref={sectionRef} className="section-pad">
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">What We Do</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            Everything You Need{" "}
            <span className="headline-gradient">to Grow Online.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "520px", margin: "0 auto", fontSize: "16px" }}
          >
            A complete digital growth ecosystem — from the first ad click to
            the closed customer.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`card-ss reveal reveal-delay-${(i % 5) + 1}`}
              style={{ cursor: "default" }}
            >
              <div className="service-icon-wrap">
                <service.icon size={20} color="var(--accent-light)" />
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  color: "var(--text-primary)",
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, marginBottom: "16px" }}>
                {service.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: "var(--text-muted)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "4px",
                      padding: "3px 8px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "56px" }}>
          <p style={{ fontSize: "15px", marginBottom: "24px", color: "var(--text-secondary)" }}>
            Not sure which services fit your business? Let&apos;s find out together.
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            Get a Free Growth Audit
          </button>
        </div>
      </div>
    </section>
  );
}
