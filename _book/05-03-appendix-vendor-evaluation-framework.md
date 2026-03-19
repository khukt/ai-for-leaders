---
layout: default
title: "Appendix C: Vendor Evaluation Framework"
redirect_from:
  - /book/20-appendix-vendor-evaluation-framework/
parent: "Appendices & References"
nav_order: 3
---

# Appendix C: Vendor Evaluation Framework

This framework is intended for procurement, legal, risk, and business teams evaluating AI suppliers whose systems may become material to operations or decision-making.

## Core Evaluation Questions

| Dimension | What to ask |
|---|---|
| Product clarity | What exactly does the AI system do, and what does it not do? |
| Transparency | What documentation is available on limitations, testing, and known failure modes? |
| Data handling | What data is collected, retained, reused, or exposed to model providers or subprocessors? |
| Security | How does the vendor handle access control, prompt injection, data leakage, and tool security? |
| Explainability | What level of explanation or traceability is available for important outputs? |
| Monitoring | What metrics, logs, alerts, or incident records can the customer access? |
| Change control | How are model, feature, and policy changes communicated? |
| Audit support | What evidence can the vendor provide for review, assurance, or regulatory response? |
| Responsibility | What contractual commitments exist for incident handling, remediation, and liability? |
| Exit risk | How difficult would it be to replace the supplier or recover data and process continuity? |

## Vendor Red Flags

- The vendor cannot explain what models are used or how they change over time.
- Documentation is limited to marketing claims and high-level security language.
- The supplier offers no practical route for audit, incident support, or change notification.
- Data rights, retention, or reuse terms are unclear.
- The product is being proposed for high-impact use without matching evidence or safeguards.

## Practical Rating Model

Use a simple `green / yellow / red` assessment across:

- transparency
- security
- data handling
- governance support
- contractual clarity
- operational dependency

Any `red` area in a high-impact use case should normally trigger escalation or delay rather than routine procurement.

---

[← Appendix B]({{ site.baseurl }}/book/05-02-appendix-ai-risk-assessment-template/) | [Next: Appendix D →]({{ site.baseurl }}/book/05-04-appendix-regulatory-comparison-table/)
