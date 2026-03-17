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

- Set the approved purpose of the system in plain language, including the boundaries of acceptable use.
- Establish operating thresholds, refusal conditions, and a safe fallback when confidence weakens.
- Route unusual, high-consequence, or low-confidence cases to human review.
- Confirm that the underlying data is sufficiently current and operationally fit.

The key decision gate at this stage is simple: do not widen use until the system can fail safely and people can intervene.

### Stage 2. Make It Governable

The second stage is to turn ad hoc safeguards into repeatable operating rules.

- Assign one accountable owner and document how incidents or exceptions escalate.
- Maintain a controlled record of versions, approvals, major decisions, and deviations.
- Introduce repeatable review routines for performance, fairness where relevant, and documentation quality.
- Clarify who is allowed to approve changes, temporary overrides, pauses, and rollback actions.

Scaling should require evidence and named accountability, not optimism.

### Stage 3. Operate and Improve

The third stage is to treat AI as a live service rather than a one-time deployment.

- Track model drift, stakeholder complaints, overrides, incidents, and material context changes.
- Trigger fresh review when the data, user base, workflow, or legal environment changes meaningfully.
- Use independent challenge where the system affects sensitive or high-impact decisions.
- Convert lessons from incidents, near misses, and audits into stronger controls and design updates.

If conditions change materially, the system should be adjusted, paused, or withdrawn rather than left to degrade quietly.[2], [11]

## Minimum Before Wider Rollout

Before an AI system is rolled out more broadly, leadership should expect five things to be in place:[11]

- **Clear scope**: the intended task, operational boundaries, fallback arrangements, and excluded uses are written down plainly.
- **Named accountability**: one accountable owner remains answerable even when several teams support the controls.
- **Human intervention**: staff can challenge, override, or suspend the system when conditions deteriorate or confidence falls.
- **Evidence pack**: current evidence exists for performance, fairness where needed, data quality, and test assumptions.
- **Monitoring and response**: logging, alerts, complaint review, and escalation procedures remain active after go-live.

These are not bureaucratic extras. They are the minimum conditions for moving from a pilot to a governable service.

## Cost Checkpoints Before Scale

Roadmaps fail when scale economics are treated as an afterthought. A use case that works technically may still fail commercially if inference cost, review burden, integration effort, or vendor dependency increase faster than value.

Before scaling an AI system, leadership should ask:

- what does the system cost per meaningful transaction, case, or user interaction?
- how does cost change as usage volume grows?
- how much human review is still required after deployment?
- what infrastructure or vendor commitments increase as the use case scales?
- what cost would we incur if we had to pause, replace, or migrate the system?
- how exposed are we to a stronger general model making this custom investment economically obsolete?

The practical decision standard is simple: do not move from pilot to scale unless the economics remain defensible after compute, integration, oversight, and change costs are included.

## Leadership Lens

A credible roadmap should connect use cases, capability building, governance controls, and change management. It should also distinguish between experiments, scalable deployments, and strategic platforms.

## Key Questions for Leaders

- What sequence of AI initiatives makes sense for our current maturity level?
- Which enabling capabilities need to be built before scale is realistic?
- How will we distinguish pilot activity from durable business impact?

---

[← Data as a Strategic Asset]({{ site.baseurl }}/book/08-data-as-a-strategic-asset/) | [Next: Establishing an AI Governance Framework →]({{ site.baseurl }}/book/10-establishing-an-ai-governance-framework/)
