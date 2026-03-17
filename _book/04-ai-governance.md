---
layout: default
title: "AI Governance"
nav_order: 5
---

# AI Governance

## What AI Governance Is

AI governance is the set of policies, processes, roles, and accountability structures that ensure AI systems are developed and used responsibly.[1], [2]

It is not only a compliance exercise. It is a management discipline for allocating responsibility, making risk visible, and ensuring that AI systems remain aligned with legal obligations, business objectives, and human oversight.

## Why Governance Fails

Many organisations now have some form of AI governance on paper. Far fewer have governance that reliably changes behaviour. Common failure modes include:

- **Governance as paperwork**: Policies exist but are not embedded in how teams actually work.
- **Governance as a gate**: Reviews slow down delivery without adding value.
- **Governance without teeth**: Issues are identified but not escalated or resolved.
- **Governance without coverage**: High-profile systems are reviewed; the long tail of AI tools and automations is not.

Another common failure is **governance without ownership**: teams assume responsibility sits with legal, security, or data science, while operational decisions continue without a clear accountable owner.

## The Components of Effective AI Governance

### 1. Inventory and Classification
You cannot govern what you cannot see. Effective AI governance starts with knowing what AI systems exist, who is responsible for them, and what risk category they fall into.

### 2. Risk Assessment
Not all AI systems require the same level of oversight. A risk-based approach focuses governance effort where it matters most:
- What decisions does this system influence?
- Who is affected, and how?
- What is the consequence of failure?

### 3. Human Oversight
High-risk AI systems should have defined points at which humans review, challenge, or override AI outputs. Oversight should be meaningful — not a checkbox that people skip when under pressure.

### 4. Monitoring and Audit
AI systems change over time — data drifts, models degrade, the world changes. Governance requires ongoing monitoring, not just one-time approval.[2]

### 5. Accountability Structures
Someone must be accountable for each AI system's performance and compliance. This typically requires:
- A **technical owner** responsible for system performance
- A **business owner** responsible for use and outcomes
- A **governance function** that sets standards and conducts reviews

## A Minimal Governance Operating Model

For most organisations, a workable starting point includes:

- **An AI inventory** with owner, purpose, vendor, data used, and risk level
- **A tiered review model** so low-risk systems are not treated like high-risk ones
- **Standard evidence requirements** for testing, approval, monitoring, and incident escalation
- **A board or executive reporting rhythm** for material AI risks, incidents, and remediation

The objective is not bureaucratic perfection. It is consistent control over the systems that matter.[1], [2]

## Vendor Oversight

Most organisations use AI systems built by third parties. Vendor oversight is a critical but often neglected part of AI governance.

Key questions for vendor oversight:
- What AI is embedded in our vendor's products and services?
- What access do we have to model cards, testing results, and incident reports?
- Who is contractually responsible when the vendor's AI causes harm?

Vendor review should also ask whether the supplier can support audit, change notification, data handling restrictions, and meaningful incident response. If a vendor cannot explain how its system is updated, evaluated, and governed, the customer inherits uncertainty it may not be able to manage.

## The Board's Role

AI governance is increasingly a board-level responsibility. Boards should expect:
- Regular reporting on AI risk exposure
- Clear escalation paths for significant AI failures
- Evidence that management has an adequate governance framework in place

Boards do not need to review every model. They do need confidence that management can identify material AI use, distinguish low-risk from high-risk deployments, and intervene when systems create unacceptable legal, operational, or ethical exposure.[1], [2]

## Reliability Notes

- Governance practices should be adapted to the organisation's size, sector, and risk profile.
- International frameworks such as NIST AI RMF and OECD principles are useful anchors, but they still require local implementation choices.[1], [2]
- Governance quality should be judged by decision quality and accountability, not by the volume of policy documents.

## Key Questions for Leaders

- Do we have a complete inventory of AI systems in use across our organisation?
- Is accountability for each AI system clearly assigned?
- How do we oversee AI systems provided by third-party vendors?
- When did our board last receive a report on AI risk?


---

[← AI Strategy]({{ site.baseurl }}/book/03-ai-strategy/) | [Next: Bibliography →]({{ site.baseurl }}/book/05-bibliography/)
