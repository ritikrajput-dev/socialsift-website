"use client";

import { TrendingUp, Target, BarChart2, Database, Zap } from "lucide-react";

const items = [
  { icon: Target, label: "Performance Marketing" },
  { icon: TrendingUp, label: "Lead Generation" },
  { icon: BarChart2, label: "Conversion Optimization" },
  { icon: Database, label: "CRM & Automation" },
  { icon: Zap, label: "Data-Driven Growth" },
];

export default function TrustStrip() {
  return (
    <section id="trust-strip">
      <div
        style={{
          borderTop: "1px solid rgba(99,102,241,0.08)",
          borderBottom: "1px solid rgba(99,102,241,0.08)",
          background: "rgba(13,13,26,0.6)",
          padding: "22px 0",
          overflow: "hidden",
        }}
      >
        <div
          className="container-ss"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div className="strip-item">
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
                  <item.icon size={14} color="var(--accent-light)" />
                </div>
                {item.label}
              </div>
              {i < items.length - 1 && <span className="strip-dot" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
