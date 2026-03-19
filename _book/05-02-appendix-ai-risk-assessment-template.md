---
layout: default
title: "Appendix B: AI Risk Assessment Template"
permalink: /book/19-appendix-ai-risk-assessment-template/
parent: "Appendices & References"
nav_order: 2
---

# Appendix B: AI Risk Assessment Template

This template is intended to help leadership teams, risk functions, and governance reviewers assess whether an AI use case is proportionate, governable, and ready for deployment.

## Basic Record

| Field | Prompt |
|---|---|
| Use case name | What is the system called internally? |
| Business owner | Who is accountable for the use case? |
| Technical owner | Who maintains the model or system? |
| Purpose | What is the system intended to do? |
| Deployment context | Where is it used, by whom, and in what workflow? |
| Vendor status | Built internally, bought, or partnered? |

## Risk Assessment Questions

| Area | Prompt |
|---|---|
| Decision impact | What decisions or actions does the system influence? |
| Affected parties | Who may be helped, harmed, delayed, or excluded? |
| Failure modes | What are the most important ways the system could fail? |
| Data dependencies | What data quality, freshness, privacy, or traceability issues matter most? |
| Explainability need | Who needs to understand or challenge outputs, and at what level? |
| Human oversight | Where can a person review, override, pause, or stop the system? |
| Monitoring need | What must be watched after deployment? |
| Escalation path | Who is notified when thresholds are breached or incidents occur? |

## Simple Residual Risk Rating

Use a practical three-part judgment:

- **Impact**: low, medium, or high consequence if the system fails
- **Likelihood**: low, medium, or high probability of material error or misuse
- **Control strength**: weak, moderate, or strong current safeguards

Then record an overall residual risk view:

- **Low**: controls are proportionate and material harm is unlikely
- **Medium**: use is acceptable with monitoring and clear intervention rules
- **High**: deployment should be restricted, delayed, or escalated for deeper review

## Approval Decision

Record one of the following:

- approve for current scope
- approve with conditions
- defer pending stronger controls
- reject for this context

## Review Triggers

Reassess the use case when:

- data sources change materially
- the workflow or user group changes
- the model or vendor is updated
- complaints or incidents increase
- regulatory obligations change

---

[← Appendix A]({{ site.baseurl }}/book/18-appendix-ai-governance-checklist-for-boards/) | [Next: Appendix C →]({{ site.baseurl }}/book/20-appendix-vendor-evaluation-framework/)
