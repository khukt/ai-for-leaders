---
layout: default
title: "Establishing an AI Governance Framework"
redirect_from:
  - /book/10-establishing-an-ai-governance-framework/
parent: "Part III: Governance, Risk & Leadership"
nav_order: 1
---

# Establishing an AI Governance Framework

AI governance is not a policy bundle at the edge of the organisation. It is the management system that decides who can approve AI use, what evidence is required, how risk is surfaced, and who remains accountable after deployment.[1], [2]

Many organisations now have AI principles or review documents. Far fewer have governance that reliably changes behaviour. That gap matters because AI exposure usually grows through ordinary operational decisions: procurement, workflow redesign, data reuse, automation, and exception handling.

The most useful way to read this chapter is through six questions:

1. Why is AI governance a management system, not a compliance side project?
2. What should governance decide first?
3. Why do governance frameworks fail in practice?
4. What operating components matter most?
5. How should vendor and board oversight fit into governance?
6. What does a credible minimum governance model look like?

## 1. Why Is AI Governance A Management System, Not A Compliance Side Project?

The practical definition is straightforward: AI governance is the set of policies, processes, roles, and accountability structures that determine how AI systems are approved, used, reviewed, and corrected over time.[1], [2]

That matters because governance is not there only to satisfy regulators. It exists to make consequential decisions visible before they become embedded in live operations. A system can be technically impressive and still be poorly governed if ownership is vague, intervention rights are weak, or deployment outruns the organisation's ability to review and respond.

For leadership teams, trustworthy AI is best understood as AI that the organisation can defend in real use because it is lawful, governed, dependable enough for its context, and subject to meaningful human control.[1], [2], [11], [12]

Across OECD, NIST, and European governance frameworks, the same practical tests recur:[1], [2], [12]

- **Reliable and robust**: the system behaves consistently enough for the context, and its limits are understood.
- **Safe and controllable**: safeguards exist, and people can interrupt, redirect, or constrain use when needed.
- **Fair**: material differences in treatment or outcome are examined rather than assumed away.
- **Transparent**: users and reviewers can see where AI is involved and how important outputs can be traced or challenged.
- **Accountable**: responsibility for approval, operation, review, and escalation is visible.
- **Well-governed data**: privacy, access, quality, and lifecycle management are built into the operating model.

The practical point is not to memorize the list. It is to use governance to force management decisions before reliance grows.

Two practical European tools deserve separate mention here. **ALTAI** stands for the **Assessment List for Trustworthy Artificial Intelligence**. It is a structured self-assessment tool derived from the EU trustworthy-AI work and is useful for testing whether governance is visible across reliability, oversight, privacy, transparency, fairness, and accountability.[12], [99] It is not binding law, but it is useful when teams need a structured internal challenge tool rather than another principles document. The **General-Purpose AI (GPAI) Code of Practice** is different again: it is a voluntary instrument designed mainly to help providers of general-purpose AI models implement and demonstrate alignment with the AI Act's GPAI obligations.[5], [100]

## 2. What Should Governance Decide First?

The first governance question is not `do we have a policy?` It is `which AI uses deserve which level of control?`

That means governance should decide at least four things early:

- which uses are low-stakes assistance and which are consequential decision supports
- which uses require formal approval before deployment
- what evidence is needed at each level of risk
- who can intervene when the system performs badly, drifts, or creates complaints

Without those decisions, governance remains too abstract to matter. Teams keep treating all AI as one category, low-risk uses get overburdened, and high-consequence uses can slip through under the same generic label.

For executives, the first governance screen is easiest to read through four lenses:

| Lens | What To Ask | Why It Matters |
|---|---|---|
| **Decision impact** | What important outcome or right can this system influence? | Consequence should determine governance effort |
| **Reliance level** | How much are people expected to trust or act on the output? | Higher reliance requires stronger evidence and intervention rights |
| **Human control** | Who can review, challenge, or stop the system in practice? | Control must be operational, not ceremonial |
| **Visibility** | Would failure stay local, or escalate into legal, reputational, or public exposure? | External visibility increases governance demands quickly |

## 3. Why Do Governance Frameworks Fail In Practice?

Many governance efforts fail for ordinary organisational reasons rather than conceptual ones. Common failure patterns include:

- **Governance as paperwork**: the policy exists, but operating teams do not use it in real decisions.
- **Governance as a gate**: review becomes a bottleneck without improving clarity, evidence, or control.
- **Governance without coverage**: high-profile systems are reviewed, but the long tail of AI tools and automations remains largely invisible.
- **Governance without ownership**: legal, security, data, and delivery teams all touch the system, but no one is clearly answerable for outcomes.
- **Governance without intervention**: issues can be identified, but nobody is empowered to pause, narrow, or stop the use.

The deeper issue is that many organisations mistake documentation for governance. Real governance changes what teams are allowed to do, what they have to show, and who remains accountable after launch.

## Trust Compass

One practical way to use this standard is as a compact governance screen before an organisation relies on an AI system in policy, operations, or service delivery.[11]

The five questions below matter because they force leadership teams to test trustworthiness as an operating condition, not as branding language:

- **Reliable**: is the system dependable enough across the situations where people are expected to rely on it?
- **Safe**: what practical controls prevent weak or uncertain outputs from causing damage?
- **Fair**: where could unjustified differences in treatment or outcomes emerge?
- **Transparent**: can users and reviewers tell when AI is involved and follow the decision trail?
- **Accountable**: which person or function owns the outcome and can step in when necessary?

If one direction is weak or unclear, the usual response should not be faster scaling. It should be stronger safeguards, clearer ownership, or a narrower use case.

{% include interactive-trust-compass.html %}

## 4. What Operating Components Matter Most?

A credible governance framework usually needs five operating components:

### 1. Inventory and Classification

You cannot govern what you cannot see. The organisation needs visibility over what AI systems exist, who owns them, what data they rely on, and what risk category or consequence level applies.

### 2. Risk-Based Review

Not all systems need the same level of scrutiny. Governance should distinguish between lightweight assistance tools and systems that affect consequential decisions, service access, or public exposure.

### 3. Human Oversight and Intervention

Oversight should be meaningful, not ceremonial. People need defined points where they can review, challenge, override, or halt use when confidence falls or conditions change.

### 4. Monitoring, Incidents, and Auditability

Governance does not end at approval. Data changes, models drift, vendors update products, and user behaviour shifts. Monitoring, incident review, and usable records are what make post-launch governance real.[2], [32]

### 5. Accountability Structure

Someone must remain answerable after the project team moves on. In practice, that usually means:

- a **business owner** responsible for the use case and its consequences
- a **technical or delivery owner** responsible for system performance and change handling
- a **governance function** responsible for standards, review discipline, and escalation paths

The relevant test is not whether the organisation has many governance artefacts. It is whether these five components alter behaviour in the systems that matter.

### Governance Tools That Are Useful But Not The Same Thing As Law

Leaders often collapse statutes, governance frameworks, and voluntary tools into one bucket. That creates confusion. They serve different purposes.

| Instrument | What It Is | Who It Matters To Most | What It Is For |
|---|---|---|---|
| **AI Act** | Binding EU law | Providers, deployers, importers, distributors, product and compliance teams | Defines legal obligations, prohibited uses, risk-based duties, GPAI obligations, and enforcement routes |
| **GPAI Code of Practice** | A voluntary implementation tool for **general-purpose AI** obligations under the AI Act | Providers of general-purpose AI models and buyers performing vendor diligence | Helps translate GPAI duties into more operational expectations and evidence[100] |
| **ALTAI** | The **Assessment List for Trustworthy Artificial Intelligence**, a voluntary self-assessment tool from the EU trustworthy-AI work | Governance leads, review boards, and teams building internal controls | Helps test whether trustworthy-AI criteria are visible in practice, even where the law is less specific[12], [99] |
| **NIST AI RMF** | Voluntary risk-management framework | Organisations building or governing AI across sectors | Provides a lifecycle structure for governing risk, controls, monitoring, and accountability[2], [32] |

The management lesson is simple: the law tells the organisation what it must do, but governance tools help it decide how to operationalise that duty before a regulator, customer, or auditor forces the issue.

## 5. How Should Vendor And Board Oversight Fit Into Governance?

Most organisations rely on third-party AI somewhere in the stack. That means vendor oversight is not separate from governance. It is one of its main practical tests.

Vendor review should ask:

- what AI is embedded in the product or service
- what evidence exists on testing, updates, incidents, and limits
- what data handling, subcontracting, and change-notification terms apply
- who is responsible when the system causes harm, failure, or dispute

If a supplier cannot explain how the system is updated, evaluated, and governed, the customer inherits uncertainty it may not be able to manage.

Board oversight sits one level above this. Boards do not need to review every model, but they do need confidence that management can:

- identify material AI use
- distinguish low-risk from higher-consequence deployments
- escalate significant failures or incidents
- show that governance is changing behaviour rather than sitting on paper[1], [2]

The board question is not `which model are we using?` It is `can management show control over the uses that matter?`

## 6. What Does A Credible Minimum Governance Model Look Like?

For most organisations, a workable starting model is smaller than teams expect. It usually includes:

- an **AI inventory** with purpose, owner, vendor, data, and consequence level
- a **tiered review model** so routine tools are not treated like high-consequence uses
- **standard evidence requirements** for approval, deployment, monitoring, and escalation
- **clear intervention rights** so someone can narrow, suspend, or stop use when conditions worsen
- a **reporting rhythm** for material AI risks, incidents, remediation, and lessons learned

## Governance View

| Governance Layer | Leadership Question | What Good Looks Like |
|---|---|---|
| **Visibility** | What AI do we actually have in use? | A usable inventory rather than fragmented local knowledge |
| **Review** | Which systems deserve which level of scrutiny? | Tiered review tied to consequence, not hype |
| **Control** | Who can intervene when the system weakens? | Real override, escalation, and narrowing rights |
| **Evidence** | What must be shown before and after deployment? | Clear standards for testing, monitoring, incidents, and records |
| **Accountability** | Who remains answerable after launch? | Named owners that survive beyond the pilot or procurement phase |

## Leadership Context

- **SMEs** usually need a short rule set, visible ownership, a clear vendor screen, and explicit limits on sensitive uses. Lightweight governance is acceptable if visibility and accountability are real.
- **Large enterprises** need tiered governance with clear decision rights across functions because the main challenge is fragmentation, not absence of policy language.
- **Research institutions** need stronger standards for disclosure, reproducibility, sensitive-data use, compute access, and dual-use review because credibility depends on methodological integrity as much as on operational control.
- **Public institutions** need stronger documentation, explainability, procurement discipline, and challenge paths because AI use may affect rights, access, and public legitimacy.[21], [23], [34]
- **Cooperatives and mutuals** often need stronger transparency, fairness review, and stakeholder communication because legitimacy depends on member trust, not only operational efficiency.
- **National leadership and central government** need governance that joins policy with execution: regulatory design, procurement, sovereign dependency analysis, security review, and national accountability should not sit in isolated silos.

## Final Perspective

The governance question is not `do we have an AI policy?` It is `can we show who approved this use, what evidence supported it, who can intervene now, and who is accountable if it goes wrong?`

After reading this chapter, a leadership team should be more disciplined in four ways:

- treat governance as a management system rather than a compliance annex
- classify AI uses by consequence and reliance, not by technical prestige
- make intervention rights and accountability visible before deployment
- judge governance by decision quality and control, not by document volume

The practical change is to stop asking whether the organisation has governance on paper and start asking whether governance is changing live operational behaviour.

## Key Questions for Leaders

- Do we have visibility over the AI systems actually in use across the organisation?
- Which uses require formal approval, stronger evidence, or tighter intervention rights?
- Who remains accountable for each material AI system after launch?
- Could the board or leadership team explain how governance actually changes what teams are allowed to do?

---

[← Designing an AI Roadmap]({{ site.baseurl }}/book/02-04-designing-an-ai-roadmap/) | [Next: Managing AI Risk →]({{ site.baseurl }}/book/03-02-managing-ai-risk/)
