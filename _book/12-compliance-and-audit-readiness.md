---
layout: default
title: "Compliance and Audit Readiness"
parent: "Part III: Governance, Risk & Leadership"
nav_order: 3
---

# Compliance and Audit Readiness

As AI use matures, leaders need more than policy statements. They need evidence. Compliance and audit readiness depend on whether the organisation can show how systems were classified, tested, approved, monitored, and corrected over time.

That expectation is becoming clearer across official frameworks. NIST's AI RMF and Playbook both emphasise systematic documentation, monitoring, and governance practices across the lifecycle of an AI system.[2], [32] The EU AI Act raises the stakes further for higher-risk systems through obligations tied to documentation, record-keeping, logging, human oversight, and post-market monitoring.[4], [5] The management implication is straightforward: if evidence only exists after an incident, then the organisation is not audit-ready in a meaningful sense.

## Core Themes in This Chapter

- Documentation requirements
- Risk classification processes
- Third-party assessments
- Explainability evidence for review and challenge
- Continuous monitoring and reporting

## From Policy to Evidence

Many organisations now have AI principles, guidance notes, or internal policies. Fewer can show what those commitments looked like in operation on one real system.

For leadership teams, audit readiness should mean being able to answer three practical questions on demand:

- what controls did we say were required?
- where is the evidence that those controls were applied?
- what happened after the system was deployed, changed, challenged, or escalated?

If those answers depend on email archaeology or retrospective reconstruction, the governance model is weaker than management believes.

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

## Evidence Across the Lifecycle

Audit readiness improves when leaders stop treating documentation as a one-time approval artifact and instead view it across three phases:

### Before Deployment

The organisation should usually be able to show:

- intended purpose and excluded uses
- risk classification and rationale
- testing assumptions, limitations, and approval conditions
- required human oversight and escalation rules

### During Deployment

The organisation should usually be able to show:

- current owner and operating context
- active monitoring thresholds
- version and vendor status
- current restrictions, exceptions, or compensating controls

### After Change or Incident

The organisation should usually be able to show:

- what changed and why
- who approved the change
- whether the evidence pack was refreshed
- what happened after complaints, incidents, overrides, or control breaches

This lifecycle view matters because many audit failures happen after launch, not before it.

## Risk Classification and Approval Records

Audit readiness depends heavily on whether risk classification is documented rather than assumed. For each system, leaders should expect a short written record covering:

- what the system does
- who is affected
- what can go wrong
- why the current level of oversight is considered proportionate
- what controls are mandatory before scale or continued use

This record matters because audit and regulatory review usually focus less on whether management claimed to be careful and more on whether the organisation can show how judgment was exercised.

## Internal Assurance and Independent Challenge

For higher-impact systems, organisations should also define who performs internal challenge. In practice, that may involve legal, risk, security, compliance, internal audit, or a dedicated governance function depending on organisational size.

The important point is not the department name. It is that someone independent of day-to-day delivery can test whether:

- the classification is still proportionate
- the evidence pack is current
- exceptions are accumulating
- monitoring is producing usable signals
- management can defend the deployment to an auditor, regulator, or board committee

Without independent challenge, organisations often mistake familiarity with a system for control over it.

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

In practice, third-party audit readiness often turns on one uncomfortable question: what do we actually know ourselves, and what are we merely repeating from a supplier? Leaders should be explicit about that boundary.

## Continuous Monitoring and Reporting

Audit readiness is not frozen at the moment of approval. It depends on whether evidence remains current after deployment. A practical monitoring regime should capture:

- performance drift
- material complaints or challenges
- overrides and human interventions
- incidents and near misses
- changes in context, law, data, or workflow

For higher-impact systems, those signals should feed a periodic review process that can tighten controls, pause deployment, or withdraw the system if the original assumptions no longer hold.[2]

## A Board-Ready System Brief

A useful management discipline is to maintain a short current brief for each material AI system. If leadership had to discuss one important system with a regulator, board committee, auditor, or public authority tomorrow, the brief should already exist.

That brief should usually cover:

- what the system does and where it is used
- who owns it
- why the current risk rating is justified
- what evidence supported approval
- what has changed since approval
- what incidents, complaints, overrides, or open control issues exist now

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
