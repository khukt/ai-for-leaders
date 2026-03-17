---
layout: default
title: "Compliance and Audit Readiness"
parent: "Part III: Governance, Risk & Leadership"
nav_order: 3
---

# Compliance and Audit Readiness

As AI use matures, leaders need more than policy statements. They need evidence. Compliance and audit readiness depend on whether the organisation can show how systems were classified, tested, approved, monitored, and corrected over time.

## Core Themes in This Chapter

- Documentation requirements
- Risk classification processes
- Third-party assessments
- Explainability evidence for review and challenge
- Continuous monitoring and reporting

## What Audit Readiness Actually Requires

For leadership teams, audit readiness is not the same thing as having a policy document. It means the organisation can produce a coherent evidence trail showing what system was used, why it was approved, what controls were applied, how it was monitored, and what happened when issues emerged.

In practice, this means being able to answer five questions:

- What is the system, and what decision or workflow does it affect?
- How was the risk level determined?
- What evidence supported approval or deployment?
- What monitoring, escalation, and change controls exist after launch?
- What records would we show to an auditor, regulator, or board committee tomorrow?

## Minimum Evidence Pack

Most organisations should expect a minimum evidence pack for material AI systems. The contents may vary by sector and risk level, but the pack should usually include:

- **System record**: owner, purpose, version, vendor status, affected process, and deployment context
- **Risk record**: classification rationale, affected stakeholders, key failure modes, and residual risk
- **Testing record**: reliability checks, fairness checks where relevant, data quality checks, and known limitations
- **Approval record**: who approved deployment, under what conditions, and with what restrictions
- **Monitoring record**: metrics, alert thresholds, complaints, overrides, incidents, and review dates
- **Change log**: model updates, policy changes, retraining events, vendor changes, and temporary exceptions

Without this kind of evidence pack, a governance program is difficult to defend under audit even if the organisation believes it is acting responsibly.[2], [3]

## Risk Classification and Approval Records

Audit readiness depends heavily on whether risk classification is documented rather than assumed. For each system, leaders should expect a short written record covering:

- what the system does
- who is affected
- what can go wrong
- why the current level of oversight is considered proportionate
- what controls are mandatory before scale or continued use

This record matters because audit and regulatory review usually focus less on whether management claimed to be careful and more on whether the organisation can show how judgment was exercised.

## Explainable AI in Audit Readiness

For many higher-impact systems, audit readiness depends partly on whether the organisation can explain how outputs are generated, what limitations are known, and how humans are expected to review or override those outputs.

This does not always require deep technical transparency. It does require enough evidence to show that the system's behavior is understood well enough to be governed responsibly.

## Third-Party Assurance

Many important AI systems are supplied by vendors. That does not remove the customer's need for evidence. For third-party systems, organisations should expect at least:

- vendor documentation describing system purpose, limitations, and update practices
- evidence of testing, assurance, or independent review where the use case is material
- contractual clarity on incident response, data handling, and change notification
- a realistic answer to what the organisation can and cannot verify itself

Where vendor opacity is high, management should be explicit about compensating controls rather than pretending assurance exists when it does not.

## Continuous Monitoring and Reporting

Audit readiness is not frozen at the moment of approval. It depends on whether evidence remains current after deployment. A practical monitoring regime should capture:

- performance drift
- material complaints or challenges
- overrides and human interventions
- incidents and near misses
- changes in context, law, data, or workflow

For higher-impact systems, those signals should feed a periodic review process that can tighten controls, pause deployment, or withdraw the system if the original assumptions no longer hold.[2]

## A Board-Ready Test

A simple executive test is this: could management brief the board or a regulator on one important AI system using current documents rather than retrospective reconstruction?

If the answer is no, then the organisation is not audit-ready in a meaningful sense.

## Leadership Lens

In practice, many governance programs fail not because the organisation had no policy, but because it cannot produce the records, ownership trail, and control evidence needed to defend its decisions.

## Key Questions for Leaders

- Could we explain our AI controls to a regulator, auditor, or board committee?
- What documentation is mandatory for internal assurance and external review?
- How do we verify third-party systems that are material to our operations?

---

[← Managing AI Risk]({{ site.baseurl }}/book/11-managing-ai-risk/) | [Next: Leading Organizational Transformation →]({{ site.baseurl }}/book/13-leading-organizational-transformation/)
