---
layout: default
title: "Designing an AI Roadmap"
parent: "Part II: Strategy & Value"
nav_order: 4
---

# Designing an AI Roadmap

AI ambition without sequencing usually produces scattered pilots, duplicated tools, and weak accountability. A roadmap turns ambition into a practical investment path with clear priorities, dependencies, and measures of success.

## Core Themes in This Chapter

- AI maturity levels
- Phased implementation strategy
- Investment prioritisation
- Measuring business impact

## A Three-Stage Roadmap

One of the clearest lessons from practical trustworthy-AI programs is that the order of adoption matters. Teams should constrain the task first, make the system governable next, and only then operate it as a managed capability at scale.[11]

### Stage 1. Constrain the Use Case

The first stage is to stop avoidable harm before the system becomes routine.

- Define what the AI is for, where it helps, and where it should not be used.
- Add confidence thresholds, refusal rules, and a fallback path when the system is uncertain.
- Require human review for risky, unusual, or low-confidence cases.
- Check that critical data is recent enough and fit for the task.

The key decision gate at this stage is simple: do not widen use until the system can fail safely and people can intervene.

### Stage 2. Make It Governable

The second stage is to turn ad hoc safeguards into repeatable operating rules.

- Name an accountable owner and define an escalation path for failures or exceptions.
- Keep records of model versions, approvals, key decisions, and exceptions.
- Run repeatable fairness, reliability, and documentation checks.
- Define who can approve changes, pauses, overrides, or rollback decisions.

Scaling should require evidence and named accountability, not optimism.

### Stage 3. Operate and Improve

The third stage is to treat AI as a live service rather than a one-time deployment.

- Monitor drift, complaints, overrides, incidents, and changes in operating context.
- Re-review the system when data, users, workflows, or legal obligations change.
- Use independent challenge for high-impact or high-sensitivity use cases.
- Feed lessons from failures, near misses, and audits back into controls and design.

If conditions change materially, the system should be adjusted, paused, or withdrawn rather than left to degrade quietly.[2], [11]

## Minimum Before Wider Rollout

Before an AI system is rolled out more broadly, leadership should expect five things to be in place:[11]

- **Clear scope**: the task, boundaries, fallback path, and non-approved uses are documented in plain language.
- **Named accountability**: one owner is answerable for the use case, even if several teams contribute controls.
- **Human intervention**: people can review, override, or stop the system when confidence is weak or context changes.
- **Evidence pack**: there is current evidence for reliability, fairness, data quality, and test conditions.
- **Monitoring and response**: logging, alerts, complaint handling, and incident escalation exist after launch, not only before it.

These are not bureaucratic extras. They are the minimum conditions for moving from a pilot to a governable service.

## Leadership Lens

A credible roadmap should connect use cases, capability building, governance controls, and change management. It should also distinguish between experiments, scalable deployments, and strategic platforms.

## Key Questions for Leaders

- What sequence of AI initiatives makes sense for our current maturity level?
- Which enabling capabilities need to be built before scale is realistic?
- How will we distinguish pilot activity from durable business impact?

---

[← Data as a Strategic Asset]({{ site.baseurl }}/book/08-data-as-a-strategic-asset/) | [Next: Establishing an AI Governance Framework →]({{ site.baseurl }}/book/10-establishing-an-ai-governance-framework/)
