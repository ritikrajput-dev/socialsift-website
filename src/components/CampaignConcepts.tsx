"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Building2, Wrench, ShoppingBag } from "lucide-react";

const concepts = [
  {
    icon: Building2,
    industry: "Real Estate",
    title: "Real Estate Lead Generation",
    objective: "Generate qualified property enquiries from buyers and investors within a defined geography.",
    strategy:
      "Targeted Meta Ads campaigns using interest, behavioral and lookalike audiences, supported by a conversion-focused landing page with a strong lead form.",
    mechanism:
      "Enquiry leads captured through landing page form, instantly notified via WhatsApp automation with follow-up sequence activated.",
    optimization:
      "Lead quality scoring to identify high-intent enquiries, audience refinement based on conversion data, and cost-per-lead optimization over time.",
  },
  {
    icon: Wrench,
    industry: "Local Services",
    title: "Local Service Lead Generation",
    objective: "Drive qualified service enquiries from local audiences for a professional services provider.",
    strategy:
      "Google Search Ads targeting high-intent keywords combined with a streamlined landing page designed for immediate enquiry or call action.",
    mechanism:
      "Click-to-call and lead form capture, with CRM integration to track every enquiry through the sales process.",
    optimization:
      "Keyword-level performance analysis, negative keyword refinement, landing page A/B testing and conversion rate optimization.",
  },
  {
    icon: ShoppingBag,
    industry: "E-commerce",
    title: "E-commerce Customer Acquisition",
    objective: "Acquire first-time customers profitably and build a scalable retargeting system.",
    strategy:
      "Meta Ads prospecting campaigns targeting cold audiences with strong creative, paired with a structured retargeting campaign for website visitors and cart abandoners.",
    mechanism:
      "Full pixel tracking and conversion event setup, product catalogue ads, and automated retargeting sequences based on user behavior.",
    optimization:
      "ROAS-focused optimization, creative testing, audience exclusions to avoid wasted spend, and sequential retargeting based on engagement depth.",
  },
];

export default function CampaignConcepts() {
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
    <section
      id="work"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">Our Thinking</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            How We Think{" "}
            <span className="headline-gradient">About Campaigns.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "540px", margin: "0 auto", fontSize: "16px" }}
          >
            Selected campaign concepts illustrating our strategic approach
            across different business types.
          </p>
          <div
            className="reveal reveal-delay-3"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "16px",
              padding: "8px 16px",
              background: "rgba(251,191,36,0.08)",
              border: "1px solid rgba(251,191,36,0.2)",
              borderRadius: "8px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#fbbf24", fontWeight: 600 }}>
              ⚠ These are strategic concepts demonstrating our approach — not historical client results.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {concepts.map((c, i) => (
            <div
              key={i}
              className={`card-ss reveal reveal-delay-${i + 1}`}
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                    }}
                  >
                    <c.icon size={18} color="var(--accent-light)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "2px" }}>
                      {c.industry}
                    </div>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {c.title}
                    </h3>
                  </div>
                </div>
                <span className="demo-badge">DEMO</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1 }}>
                {[
                  { label: "Business Objective", value: c.objective },
                  { label: "Campaign Strategy", value: c.strategy },
                  { label: "Lead / Conversion Mechanism", value: c.mechanism },
                  { label: "Optimization Approach", value: c.optimization },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--accent-light)",
                        marginBottom: "5px",
                      }}
                    >
                      {item.label}
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.65 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "52px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            Want a campaign built for your business?
          </p>
          <p style={{ fontSize: "14px", marginBottom: "28px" }}>
            Every business is different. Let&apos;s build a strategy around your specific objectives.
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            Get a Free Growth Audit
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
