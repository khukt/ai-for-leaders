---
layout: default
title: "Compliance and Audit Readiness"
redirect_from:
  - /book/12-compliance-and-audit-readiness/
parent: "Part III: Governance, Risk & Leadership"
nav_order: 3
---

# Compliance and Audit Readiness

Compliance and audit readiness are not about producing a polished policy folder after the fact. They are about whether the organisation can show, with current evidence, how an AI system was classified, tested, approved, monitored, changed, and challenged over time.[2], [3], [5], [32], [81], [83], [84]

That standard is becoming harder to avoid. The NIST AI RMF and Playbook emphasize lifecycle governance, documentation, monitoring, and accountability.[2], [32] The EU AI Act makes documentation, record-keeping, human oversight, logging, and post-market monitoring more explicit for higher-risk systems.[4], [5] Internal-control and assurance disciplines add the management implication: if evidence only appears after an incident, complaint, or audit request, then the organisation was not ready.[81], [82], [83], [84]

The most useful way to read this chapter is through six questions:

1. Why is audit readiness an operating capability, not a documentation exercise?
2. What evidence should already exist before anyone asks for it?
3. How should evidence hold up across the system lifecycle?
4. Who provides challenge and assurance, and what should they test?
5. Why is third-party AI still your evidence problem?
6. What makes a system board-ready, regulator-ready, or audit-ready in practice?

## 1. Why Is Audit Readiness An Operating Capability, Not A Documentation Exercise?

The leadership mistake is to treat compliance as a set of statements and audit readiness as a future clean-up task. That is too late. Audit readiness is really an operating capability: the ability to show, on demand, what controls were required, who exercised judgment, what evidence supported deployment, and what happened after the system entered live use.[2], [5], [81], [83], [84]

This matters because most organisations can describe their principles more easily than they can defend one live system. The pressure usually appears in one of four moments:

- a regulator asks how a material system was classified and monitored
- internal audit asks where the evidence trail actually lives
- a board committee asks whether management can defend a deployment decision
- an incident, complaint, or public challenge forces retrospective reconstruction

When the organisation depends on email archaeology, slide decks, or supplier assurances gathered after the event, the control model is weaker than management thinks.

The first screen is easiest to read through four lenses:

| Lens | What To Ask | Why It Matters |
|---|---|---|
| **Traceability** | Can we show what system was used, by whom, for what purpose, and under which version or vendor arrangement? | Audit begins with being able to identify the governed system |
| **Decision record** | Can we show how approval, restriction, and escalation decisions were made? | Auditors test judgment, not just policy language |
| **Control evidence** | Can we show that required controls actually operated in practice? | A control that cannot be evidenced is weak under review |
| **Change visibility** | Can we show what changed after launch and what that changed in turn required? | Many compliance failures emerge after deployment, not before |

## 2. What Evidence Should Already Exist Before Anyone Asks For It?

For a material AI system, audit readiness means the evidence pack already exists before an auditor, regulator, customer, or board committee asks for it. The exact contents vary by sector and risk level, but leadership should expect at least five visible records:

- **System record**: owner, purpose, workflow, affected stakeholders, model or vendor status, version, and excluded uses
- **Risk record**: risk classification, rationale, key failure modes, consequences, and residual risk
- **Control record**: testing performed, thresholds used, human oversight design, exceptions granted, and restrictions imposed
- **Approval record**: who approved the system, under what conditions, with what review cadence, and with what kill or pause criteria
- **Monitoring record**: complaints, overrides, incidents, drift signals, change events, vendor updates, and periodic review decisions

The practical question is not whether documentation exists somewhere. It is whether the organisation can produce a coherent evidence trail quickly enough to support review and challenge.[2], [3], [5], [32], [81], [84], [85], [86]

This is also where explainability becomes a compliance issue rather than only a technical preference. The organisation may not need full model interpretability, but it does need enough explanation to support review, contestability, and defensible human oversight where the use case requires it.[52], [60], [63]

For product-facing AI, the evidence burden can widen further. If the AI system sits inside a CE-marked or otherwise conformity-assessed product pathway, audit readiness becomes product-readiness too. The organisation may need technical documentation, conformity-assessment records, declaration-of-conformity evidence, post-market monitoring records, and, where applicable, notified-body interaction records in addition to its internal governance pack.[5], [42], [101]

## 3. How Should Evidence Hold Up Across The System Lifecycle?

One of the most common control failures is to treat evidence as a one-time approval artifact. Real audit readiness is lifecycle readiness. It should survive deployment, change, challenge, and incident review.[2], [3], [5], [32], [82], [86]

### Before Deployment

The organisation should usually be able to show:

- intended purpose and excluded uses
- risk classification and rationale
- testing assumptions, limits, and approval conditions
- required human review, fallback, and escalation rules
- for product-facing or CE-marked uses, the conformity route, required technical documentation, and product-compliance responsibilities as well[5], [42], [101]

### During Live Use

The organisation should usually be able to show:

- current owner and operating context
- active restrictions and compensating controls
- monitoring thresholds and review cadence
- current version, vendor status, and integration footprint

### After Change, Challenge, Or Incident

The organisation should usually be able to show:

- what changed and why
- who approved the change
- whether the evidence pack was refreshed
- what happened after complaints, overrides, control breaches, or incidents

That lifecycle view is critical because many audit failures do not come from the original approval. They come from drift, scope expansion, silent vendor updates, temporary exceptions that never close, or a system being reused in a context its original evidence did not support.

## 4. Who Provides Challenge And Assurance, And What Should They Test?

Audit readiness is weak when the same team that wants deployment is also the only team declaring the system controlled. Higher-impact AI systems need independent challenge, even if the organisation is too small to build a large formal structure.[81], [83], [84], [87]

In practice, challenge may sit with legal, risk, security, compliance, internal audit, or a dedicated governance office. The important point is not the function name. It is that someone with enough independence can test whether:

- the classification is still proportionate
- the evidence pack is current and complete
- exceptions are accumulating faster than controls are improving
- monitoring is producing usable signals rather than symbolic reporting
- management could defend the use to an auditor, regulator, or board committee tomorrow

This is where the assurance model matters. Governance decides what should happen. Compliance checks whether required obligations are visible. Internal audit asks whether the control system is designed and operating well enough to rely on.[83], [84], [87]

## Assurance View

| Assurance Layer | Leadership Question | What Good Looks Like |
|---|---|---|
| **Line management** | Does the owning team maintain current evidence for this system? | Ownership, records, and monitoring are visible and current |
| **Second-line challenge** | Are risk, legal, compliance, or security requirements actually being applied? | Independent review can test classification, controls, and exceptions |
| **Internal audit** | Would the control environment withstand structured assurance review? | Evidence, accountability, and control operation are defensible |
| **Board or committee oversight** | Could leadership explain the current state of this system without reconstruction? | A short, current brief exists for material systems |

## 5. Why Is Third-Party AI Still Your Evidence Problem?

Many important AI systems are bought, licensed, embedded, or consumed through external vendors. That does not transfer the evidence burden. It only changes what the organisation can verify directly and what it must manage through contract, due diligence, and compensating controls.[5], [32], [64], [81], [82]

For third-party systems, leadership should expect at least:

- vendor documentation on intended purpose, limits, update practices, and known failure modes
- contractual clarity on incident response, data handling, logging, and change notification
- a practical answer to what the organisation can test itself and what it cannot
- explicit compensating controls where vendor opacity remains high

The key question is uncomfortable but necessary: what do we actually know, and what are we merely repeating from a supplier? That boundary often determines whether an organisation is genuinely audit-ready or just procurement-ready.

## 6. What Makes A System Board-Ready, Regulator-Ready, Or Audit-Ready In Practice?

A useful discipline is to maintain a short current brief for every material AI system. If management had to discuss one important system with the board, internal audit, a regulator, or a public authority tomorrow, the brief should already exist.

That brief should usually cover:

- what the system does and where it is used
- who owns it
- why the current risk rating is justified
- what evidence supported approval
- what changed after approval
- what complaints, incidents, overrides, or unresolved control issues exist now

The board-ready test is simple: could management explain one live AI system using current records rather than retrospective reconstruction?

If the answer is no, the organisation may have policy language, but it does not yet have meaningful audit readiness.

## Audit Readiness View

| Readiness Area | Weak Signal | Strong Signal |
|---|---|---|
| **Documentation** | Policies exist, but system-level records are incomplete or stale | Current system, risk, approval, and monitoring records exist |
| **Control evidence** | Controls are described, but operating proof is missing | Testing, oversight, and review evidence can be shown quickly |
| **Lifecycle discipline** | Evidence is refreshed only after problems occur | Change, incident, and periodic review processes update the record |
| **Third-party assurance** | Supplier claims stand in for internal understanding | Vendor reliance boundaries and compensating controls are explicit |
| **Product compliance evidence** | Market-access and CE-marking duties are handled outside the AI record | Product-pathway evidence sits alongside governance evidence where required |
| **Board readiness** | Management needs reconstruction before briefing | A current one-system brief is always available for material uses |

## Final Perspective

Compliance and audit readiness are not about sounding careful. They are about being able to show, under pressure, how control was exercised over one real system.

After reading this chapter, a leadership team should be more disciplined in four ways:

- treat evidence as an operating requirement, not a paperwork exercise
- require a current evidence pack for every material AI system
- separate ownership, challenge, and assurance instead of collapsing them together
- treat third-party AI as a documentation and control problem, not a responsibility transfer

The practical change is to stop asking `do we have an AI policy?` and start asking `could we defend one live AI system tomorrow with current evidence?`

## Key Questions for Leaders

- Could we explain one material AI system to a regulator, auditor, or board committee using current records?
- Where does our evidence trail break: classification, approval, monitoring, change control, or vendor oversight?
- Who independently challenges whether our controls are still proportionate?
- Which third-party systems are still running on supplier assurances we could not defend ourselves?

---

[← Managing AI Risk]({{ site.baseurl }}/book/03-02-managing-ai-risk/) | [Next: Information Governance, Privacy, and IP in AI Use →]({{ site.baseurl }}/book/03-04-information-governance-privacy-and-ip-in-ai-use/)
