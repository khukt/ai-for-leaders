---
layout: default
title: "Appendix F: AI Research Governance Checklist"
redirect_from:
  - /book/23-appendix-ai-research-governance-checklist/
parent: "Appendices & References"
nav_order: 6
---

# Appendix F: AI Research Governance Checklist

This checklist is intended for research leaders, laboratory heads, university administrators, principal investigators, and R&D governance teams using AI in discovery, analysis, writing, coding, simulation, or high-consequence experimentation.

The objective is not to slow legitimate research unnecessarily. It is to keep AI-assisted research credible, reproducible, reviewable, and proportionate to the sensitivity of the work.

## Core Research Governance Questions

| Area | What leaders should ask |
|---|---|
| Research purpose | What is AI being used for: literature review, coding, simulation, data analysis, drafting, design support, or experimental decision support? |
| Scientific fit | Does AI improve the research task meaningfully, or is it being used because it is available and fashionable? |
| Evidence standard | What validation is required before AI-assisted outputs are relied on in experiments, publications, or policy advice? |
| Accountability | Which person remains accountable for the integrity of the output, even if AI contributed to the workflow? |
| Disclosure | When must AI use be disclosed in publications, funding reports, code, or internal records? |
| Reproducibility | Can another researcher understand the tools, versions, prompts, datasets, and workflow choices that materially shaped the result? |
| Data sensitivity | Are clinical, proprietary, export-controlled, confidential, or otherwise restricted datasets being exposed to external models or vendors? |
| Compute and access | Who is allowed to use which models or compute resources, under what budget, security, and data-handling rules? |
| Dual-use risk | Could this work materially increase misuse potential in cyber, biosecurity, surveillance, weapons, or other high-consequence domains? |
| Review path | Which uses require routine approval, elevated review, or formal restriction before continuing? |

## Minimum Disclosure Standard

For research settings using AI materially, leaders should usually expect a basic disclosure record that answers:

- which AI system or model was used
- what role it played in the workflow
- whether its output was edited, verified, or experimentally validated by humans
- whether restricted data, unpublished material, or proprietary information was exposed to the system
- what use restrictions or policy conditions applied

Disclosure rules do not need to be identical for every task. Internal brainstorming support is different from AI-assisted statistical interpretation, code generation for experimental pipelines, or text included in a publication. The point is to avoid hidden AI contribution where traceability or attribution matters.

## Minimum Reproducibility Record

Where AI materially affects a research output, the record should usually capture:

- model or tool name and version
- date range of use
- key prompts, workflow instructions, or system settings when they affected substantive results
- linked datasets, preprocessing steps, or retrieval sources
- major human review or correction steps
- known limitations, uncertainty, or failure observations discovered during use

The standard should be proportionate. Not every exploratory interaction needs a full dossier. But research that informs publication, regulated work, safety decisions, or external advice should not depend on unrecorded AI use.

## Dual-Use and Sensitive-Research Screen

Research leaders should escalate work when one or more of the following is true:

- the research could materially enable harmful biological, cyber, or physical misuse
- the work combines AI with sensitive experimental protocols, restricted datasets, or critical infrastructure knowledge
- the output may be used by third parties in ways the institution cannot easily supervise
- the capability being developed lowers the barrier to harmful action, not only to beneficial research
- existing ethics, biosafety, export-control, or security review processes do not clearly cover the AI-related risk

In these cases, AI governance should connect to existing institutional review channels rather than sit outside them.

## Research Red Flags

- Researchers cannot explain which AI tools shaped an important output.
- A publication or funding deliverable includes AI-assisted material with no disclosure rule.
- Generated citations, code, or analytical claims are being accepted without substantive verification.
- Sensitive data is being entered into public or poorly governed tools.
- Lab-level experimentation is outpacing institutional policy, procurement, or security review.
- Compute access is unmanaged, leading to cost sprawl, inconsistent controls, or unfair access between teams.
- Dual-use concerns are discussed informally but not routed into a defined review process.

## Practical Approval Tiers

Use a simple three-tier model:

| Tier | Typical use | Governance expectation |
|---|---|---|
| **Tier 1: Low sensitivity** | Brainstorming, generic literature search support, drafting internal notes | Local guidance, basic disclosure expectations, no restricted data exposure |
| **Tier 2: Managed research use** | Coding assistance, data analysis support, simulation help, publication drafting with review | Named accountability, disclosure rule, reproducibility record, governed model/data access |
| **Tier 3: High-consequence research use** | Clinical, security-sensitive, dual-use, policy-critical, export-controlled, or safety-relevant work | Formal review, stronger documentation, sensitive-data controls, escalation and stop authority |

The purpose of tiers is not bureaucracy for its own sake. It is to stop institutions from treating low-risk drafting support and high-consequence research assistance as if they were the same category of use.

## What Good Looks Like

A credible research AI governance model should be able to say:

- we know where AI is materially used in research workflows
- we can tell when disclosure is required
- we can reproduce important AI-assisted steps well enough for review
- we protect sensitive data and compute access proportionately
- we escalate dual-use and high-consequence work before exposure grows

That is the difference between AI-enabled research and research that quietly weakens its own integrity.

---

[← Appendix E]({{ site.baseurl }}/book/05-05-appendix-glossary-of-key-terms/) | [Next: Bibliography →]({{ site.baseurl }}/book/05-07-bibliography/)
