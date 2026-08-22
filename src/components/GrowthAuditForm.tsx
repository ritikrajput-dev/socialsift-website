"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

// ============================================================
// FORM CONFIGURATION
// ============================================================
// The form submits to the Next.js API route /api/growth-audit
// which stores submissions in the database AND optionally
// forwards to FORM_ENDPOINT_URL (set in .env).
//
// To connect to an external service:
//   - Formspree: Set FORM_ENDPOINT_URL=https://formspree.io/f/YOUR_ID
//   - Google Sheets: Set FORM_ENDPOINT_URL=https://script.google.com/...
//   - Make.com webhook: Set FORM_ENDPOINT_URL=https://hook.make.com/...
// ============================================================

const serviceOptions = [
  "Meta Ads",
  "Google Ads",
  "YouTube Ads",
  "Lead Generation",
  "Landing Pages",
  "CRM & Lead Management",
  "WhatsApp Automation",
  "Appointment Setting",
  "Conversion Optimization",
  "Analytics & Reporting",
  "Social Media Marketing",
  "Not Sure Yet",
];

const budgetOptions = [
  "Under $500/month",
  "$500–$1,000/month",
  "$1,000–$3,000/month",
  "$3,000–$10,000/month",
  "$10,000+/month",
  "Not Sure Yet",
];

const industryOptions = [
  "Real Estate",
  "E-commerce",
  "SaaS / Tech",
  "Professional Services",
  "Local Business",
  "Coaching / Consulting",
  "Healthcare",
  "Education",
  "Hospitality",
  "Finance",
  "Other",
];

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  whatsappPhone: string;
  website: string;
  industry: string;
  servicesInterested: string[];
  monthlyBudget: string;
  monthlyLeads: string;
  biggestChallenge: string;
  desiredResult: string;
  additionalMessage: string;
}

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  businessEmail: "",
  whatsappPhone: "",
  website: "",
  industry: "",
  servicesInterested: [],
  monthlyBudget: "",
  monthlyLeads: "",
  biggestChallenge: "",
  desiredResult: "",
  additionalMessage: "",
};

export default function GrowthAuditForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/growth-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to submit. Please try again or contact us at socialsift.agency@gmail.com"
      );
    }
  };

  if (status === "success") {
    return (
      <section id="contact" ref={sectionRef} className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-ss">
          <div className="success-state">
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <CheckCircle size={36} color="#4ade80" />
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                marginBottom: "16px",
                color: "var(--text-primary)",
              }}
            >
              Request Received!
            </h2>
            <p
              style={{
                fontSize: "16px",
                maxWidth: "480px",
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              Thanks! Your request has been received. We&apos;ll review your
              information and contact you shortly.
            </p>
            <button
              className="btn-secondary"
              onClick={() => setStatus("idle")}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-label reveal">Free Growth Audit</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px" }}
          >
            Get Your{" "}
            <span className="headline-gradient">Free Growth Audit</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "500px", margin: "0 auto", fontSize: "16px" }}
          >
            Tell us a little about your business and we&apos;ll review your current
            growth opportunities — at no cost.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "clamp(28px, 5vw, 52px)",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {/* Row 1: Full Name + Company */}
            <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="form-label" htmlFor="fullName">
                  Full Name <span>*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && (
                  <p style={{ fontSize: "12px", color: "#f87171", marginTop: "4px" }}>
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div>
                <label className="form-label" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className="form-input"
                  placeholder="Your company or brand name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="form-label" htmlFor="businessEmail">
                  Business Email <span>*</span>
                </label>
                <input
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  className="form-input"
                  placeholder="you@company.com"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required
                />
                {errors.businessEmail && (
                  <p style={{ fontSize: "12px", color: "#f87171", marginTop: "4px" }}>
                    {errors.businessEmail}
                  </p>
                )}
              </div>
              <div>
                <label className="form-label" htmlFor="whatsappPhone">
                  WhatsApp / Phone
                </label>
                <input
                  id="whatsappPhone"
                  name="whatsappPhone"
                  type="tel"
                  className="form-input"
                  placeholder="+1 234 567 8900"
                  value={formData.whatsappPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row 3: Website + Industry */}
            <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="form-label" htmlFor="website">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  className="form-input"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="industry">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="form-input"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">Select your industry</option>
                  {industryOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services */}
            <div style={{ marginBottom: "16px" }}>
              <label className="form-label">Services Interested In</label>
              <div className="checkbox-grid">
                {serviceOptions.map((service) => (
                  <label key={service} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={formData.servicesInterested.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            {/* Row 4: Budget + Monthly Leads */}
            <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label className="form-label" htmlFor="monthlyBudget">
                  Monthly Marketing Budget
                </label>
                <select
                  id="monthlyBudget"
                  name="monthlyBudget"
                  className="form-input"
                  value={formData.monthlyBudget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label" htmlFor="monthlyLeads">
                  Approx. Monthly Leads / Customers
                </label>
                <input
                  id="monthlyLeads"
                  name="monthlyLeads"
                  type="text"
                  className="form-input"
                  placeholder="e.g. 50–100 leads/month"
                  value={formData.monthlyLeads}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Biggest Challenge */}
            <div style={{ marginBottom: "16px" }}>
              <label className="form-label" htmlFor="biggestChallenge">
                Biggest Marketing Challenge
              </label>
              <textarea
                id="biggestChallenge"
                name="biggestChallenge"
                className="form-input"
                placeholder="What's the main obstacle to your growth right now?"
                rows={3}
                value={formData.biggestChallenge}
                onChange={handleChange}
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Desired Result */}
            <div style={{ marginBottom: "16px" }}>
              <label className="form-label" htmlFor="desiredResult">
                What Result Are You Looking For?
              </label>
              <textarea
                id="desiredResult"
                name="desiredResult"
                className="form-input"
                placeholder="Describe the outcome you're aiming to achieve."
                rows={3}
                value={formData.desiredResult}
                onChange={handleChange}
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Additional Message */}
            <div style={{ marginBottom: "28px" }}>
              <label className="form-label" htmlFor="additionalMessage">
                Additional Message
              </label>
              <textarea
                id="additionalMessage"
                name="additionalMessage"
                className="form-input"
                placeholder="Anything else you'd like us to know?"
                rows={3}
                value={formData.additionalMessage}
                onChange={handleChange}
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "14px 16px",
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <AlertCircle size={16} color="#f87171" style={{ flexShrink: 0, marginTop: "1px" }} />
                <p style={{ fontSize: "13px", color: "#f87171", margin: 0 }}>
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "loading"}
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "15px",
                padding: "15px 24px",
                opacity: status === "loading" ? 0.7 : 1,
                cursor: status === "loading" ? "not-allowed" : "pointer",
              }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                  Sending Your Request...
                </>
              ) : (
                <>
                  Request My Free Growth Audit
                  <Send size={16} />
                </>
              )}
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "var(--text-muted)",
                marginTop: "16px",
                lineHeight: 1.6,
              }}
            >
              By submitting, you agree that SocialSift may contact you about
              your growth audit request. No spam. No obligation.
            </p>
          </form>
        </div>

        {/* Contact info below form */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            maxWidth: "820px",
            margin: "24px auto 0",
          }}
        >
          {[
            {
              label: "Email",
              value: "socialsift.agency@gmail.com",
              href: "mailto:socialsift.agency@gmail.com",
            },
            {
              label: "WhatsApp",
              value: "+91 92440 16653",
              href: "https://wa.me/919244016653?text=Hi%20SocialSift%2C%20I%20want%20to%20learn%20more.",
            },
            {
              label: "Service Area",
              value: "Worldwide",
              href: null,
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "18px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, marginBottom: "6px", letterSpacing: "0.08em" }}>
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--accent-light)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.value}
                </a>
              ) : (
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)" }}>
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
