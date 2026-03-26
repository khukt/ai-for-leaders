---
layout: default
title: "Build, Buy, or Partner"
redirect_from:
  - /book/07-build-buy-or-partner/
parent: "Part II: Strategy & Value"
nav_order: 2
---

# Build, Buy, or Partner

The sourcing question is not a technical side issue. It is one of the main ways leaders determine the organisation's pace of adoption, dependency profile, cost structure, and degree of control.

Most organisations do not need the same sourcing strategy for every AI capability. Some use cases justify internal development because they depend on proprietary data, distinctive workflows, or demanding assurance requirements. Others are better addressed through external vendors or partnerships that reduce time to value or bring access to scarce capability.[2], [32], [68]

The most useful way to read this chapter is through six questions:

1. Why is sourcing a strategic choice, not just a procurement choice?
2. When does building create more value than buying?
3. When is buying the smarter option?
4. When does partnering make more sense than either build or buy?
5. What costs and dependencies do leaders usually underestimate?
6. What evidence should leaders demand before approving a sourcing path?

## 1. Why Is Sourcing A Strategic Choice, Not Just A Procurement Choice?

The real question is rarely `should we build or buy AI?` in the abstract. The real question is which capabilities are strategic enough to justify control, which are commoditised enough to externalise, and which require shared delivery because no single organisation can carry the full capability or risk burden alone.[68], [70], [71]

That means sourcing should follow, not replace, strategy. If the use case is weak, faster procurement does not fix it. If the value depends on unique data, workflow fit, or regulatory assurance, a cheap external tool may become expensive once it has to be adapted, governed, or replaced.

For executives, the sourcing decision is easiest to read through four lenses:

| Lens | What To Ask | Why It Matters |
|---|---|---|
| **Control** | How much discretion, visibility, and change authority do we need? | Sourcing changes who can shape the capability over time |
| **Specificity** | How dependent is success on our own data, workflow, and context? | High specificity weakens off-the-shelf fit |
| **Dependency** | What platform, vendor, or ecosystem risk are we taking on? | External convenience can harden into strategic dependence |
| **Operating burden** | Can we actually sustain the capability we are choosing? | Internal control is worthless without internal operating discipline |

{% include interactive-sourcing-paths.html %}

## 2. When Does Building Create More Value Than Buying?

Building is strongest when the capability sits close to core differentiation, core public-service delivery, or a workflow whose value depends heavily on local context, proprietary data, or demanding assurance standards.[2], [68], [70], [71]

Build is often more defensible when:

- the use case depends on workflow logic that cannot be bought cleanly off the shelf
- the organisation has a real data or process advantage worth protecting
- regulatory, security, or traceability demands require tighter control
- the capability may become part of long-term competitive or institutional resilience

But internal development is not only a software choice. It means operating a capability: evaluation, monitoring, incident handling, model or prompt change management, access control, integration, and user support. If the organisation cannot sustain that operating model, an internal build may create fragility rather than strategic strength.[2], [32], [34]

The practical mistake is to romanticise control. Build is not the premium option by default. It is justified only when the need for control is both real and operationally supportable.

## 3. When Is Buying The Smarter Option?

Buying is often the right answer when the capability is common, time to value matters, internal AI capacity is limited, and the use case does not depend on highly distinctive workflow logic or proprietary adaptation.[68], [69]

Buy is often stronger when:

- the use case is useful but not strategically differentiating
- the market already offers credible tools with acceptable transparency and support
- the organisation needs a faster route to managed adoption
- the capability should remain replaceable rather than becoming a core internal platform

This is especially true for many productivity tools, general-purpose copilots, and workflow components that benefit more from disciplined vendor management than from internal reinvention.

The practical mistake is to treat buying as low-governance. Bought AI still needs review of data handling, security, evaluation evidence, change notification, portability, and accountability. Buying reduces build effort; it does not remove oversight.[2], [3], [32], [34]

## 4. When Does Partnering Make More Sense Than Either Build Or Buy?

Partnering is most useful when the capability problem crosses organisational boundaries or when no single organisation should carry the full cost, risk, or learning burden alone.[21], [72]

Partnerships are often strongest when:

- sector-specific tooling or infrastructure would be too expensive to build alone
- shared innovation is needed across hospitals, municipalities, research consortia, cooperatives, or smaller firms
- the value depends on complementary assets held by more than one party
- the capability sits inside a broader ecosystem rather than inside one firm boundary.[72]

But partnership only works if governance is designed up front. Shared decision rights, data terms, IP boundaries, operating roles, dispute resolution, and exit conditions cannot be left implicit.

The practical mistake is to treat partnership as a softer version of procurement. It is usually harder to govern than buying because coordination, accountability, and value capture are distributed rather than centralised.

## 5. What Costs And Dependencies Do Leaders Usually Underestimate?

From a leadership perspective, AI cost is rarely limited to the price of model access or software licensing. Many initiatives look attractive at pilot stage and then weaken economically once integration, oversight, infrastructure, and change costs become visible.

Leaders should expect to account for at least six cost layers:

- **Model access cost**: API charges, token usage, licensing fees, subscriptions, or platform commitments
- **Infrastructure cost**: compute, storage, networking, deployment environment, and in some cases specialised hardware
- **Adaptation cost**: prompting design, retrieval setup, fine-tuning, evaluation, and safety controls
- **Operational cost**: monitoring, human review, incident handling, retraining, and vendor management
- **Change cost**: process redesign, training, governance, legal review, and organisational adjustment
- **Exit cost**: migration difficulty, switching vendors, replacing embedded dependencies, and restoring continuity

Leaders also tend to underestimate dependency in four places:

- pricing changes after the tool becomes embedded
- model or product changes outside the organisation's control
- subcontractors, hosting terms, or platform restrictions hidden below the top-level supplier
- the difficulty of leaving once prompts, workflows, data flows, and approvals are built around one provider.[24], [32], [34], [72]

For many organisations, the key question is not whether AI works in principle. It is whether the use case remains attractive after all six cost layers and the likely dependency profile are included.

## 6. What Evidence Should Leaders Demand Before Approving A Sourcing Path?

Before approval, leadership teams should expect evidence on at least the following points:

- **Purpose and scope**: what the system is designed to do, what it should not be used for, and the main failure conditions.[34]
- **Data handling**: what data is stored, retained, logged, used for further training, or shared with subcontractors.
- **Security and access control**: how access is managed, how environments are separated, and what happens in the event of compromise.[3], [34]
- **Evaluation evidence**: how the provider or internal team tests performance, reliability, and known limitations for the relevant use case.[2], [32]
- **Change management**: how model updates, feature changes, or policy changes are communicated and governed.
- **Accountability model**: who handles incidents, complaints, escalations, and remediation.
- **Portability and exit**: what data, prompts, configurations, logs, and interfaces can be exported if the organisation needs to leave.
- **Intellectual property and rights**: who owns inputs, outputs, adaptations, and derived assets, and what indemnities or exclusions apply.

The exact threshold differs by sector, but the principle is stable: leaders should not approve a material AI dependency they do not understand well enough to govern.

## Comparative View

| Approach | When it fits | Main risks |
|---|---|---|
| **Build** | Core capability, unique workflows, proprietary data advantage | Cost, complexity, talent constraints |
| **Buy** | Common capability, faster deployment, limited internal AI capacity | Vendor dependency, weak transparency, limited customisation |
| **Partner** | Shared innovation, sector collaboration, capability gaps | Governance complexity, IP ambiguity, slower coordination |

## Leadership Context

- **SMEs** should usually prefer buying or light partnership models unless the use case depends on a distinctive data advantage or regulatory constraint they can defend economically.[16], [17]
- **Large enterprises** should separate commodity productivity tools from strategically differentiated systems. The former are often bought; the latter may justify controlled internal capability.
- **Research institutions** should be cautious about suppliers whose terms weaken reproducibility, access control, or publication integrity.
- **Public institutions** should treat procurement, accountability, and continuity as strategic concerns, not just commercial ones.[21], [34]
- **Cooperatives and mutuals** should test sourcing choices against member trust, shared governance, and long-term bargaining power.

## Final Perspective

The sourcing question is not `which option is cheapest today?` It is `which governance form gives us the right balance of control, speed, dependency, and operating burden over time?`

After reading this chapter, a leadership team should be more disciplined in four ways:

- make sourcing follow strategy rather than letting procurement substitute for it
- distinguish control that is truly necessary from control that is only aspirational
- treat partner and vendor dependency as part of the business case, not as a side issue
- demand better evidence on operating burden, portability, and exit before approval

The practical change is to stop treating build, buy, and partner as simple delivery options. They are different long-term commitments with different control, cost, and dependency consequences.

## Key Questions for Leaders

- Which AI capabilities are genuinely strategic, and which are becoming commodities?
- What evidence do we require from vendors before procurement or renewal?
- Are we underestimating integration, change, and exit costs?
- What dependency are we creating if this tool becomes embedded in a critical workflow?

---

[← Where AI Creates Organizational Value]({{ site.baseurl }}/book/02-01-where-ai-creates-organizational-value/) | [Next: Data as a Strategic Asset →]({{ site.baseurl }}/book/02-03-data-as-a-strategic-asset/)
