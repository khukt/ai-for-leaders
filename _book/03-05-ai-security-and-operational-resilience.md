---
layout: default
title: "AI Security and Operational Resilience"
parent: "Part III: Governance, Risk & Leadership"
nav_order: 5
---

# AI Security and Operational Resilience

AI security is not only a technical concern for specialists. It is a leadership concern because insecure AI systems can create business interruption, data exposure, unsafe automation, vendor compromise, and public trust failure at the same time.[3], [8], [9], [10], [29], [92]

Many organisations still hide AI security inside general cyber or model-risk discussion. That is no longer enough. Once AI systems can retrieve information, use tools, connect to workflows, or influence decisions at speed, the security question becomes broader: not only `can the system be attacked?` but also `what can it be induced to do, reveal, trigger, or disrupt?`

The most useful way to read this chapter is through six questions:

1. Why is AI security different from ordinary application security?
2. Which threats matter most in practice: prompt injection, tool abuse, data leakage, poisoning, or model misuse?
3. How do access control, logging, and red teaming change the security standard?
4. Why do vendor, plugin, and supply-chain dependencies widen AI exposure?
5. What makes AI operationally resilient after attack, failure, or degraded mode?
6. What should boards and executive teams expect to see before approving wider deployment?

## 1. Why Is AI Security Different From Ordinary Application Security?

The common error is to treat AI security as ordinary application security with a new interface. That is too narrow. AI systems introduce new attack surfaces and new failure paths because they often:

- accept untrusted natural-language input
- retrieve or expose sensitive information
- connect to tools, APIs, or downstream actions
- behave probabilistically rather than deterministically
- change in capability or behavior through model, prompt, retrieval, or vendor updates

This means the security problem is not limited to keeping intruders out. It includes preventing manipulation of the model's behavior, stopping unsafe output from becoming unsafe action, and making sure the organisation can still contain damage when the system behaves unexpectedly.[3], [8], [9], [10], [92]

The first security screen is easiest to read through four lenses:

| Lens | What To Ask | Why It Matters |
|---|---|---|
| **Exposure** | What can this system access, reveal, or trigger if manipulated? | AI risk depends on connected permissions, not only model quality |
| **Abuse path** | How could an attacker or careless user change the system's behavior? | Many AI failures begin with ordinary input channels |
| **Containment** | If the system behaves unsafely, how quickly can the organisation limit harm? | Containment separates weak events from major incidents |
| **Recoverability** | Can the service continue safely after attack, outage, or degradation? | Resilience matters as much as prevention |

## 2. Which Threats Matter Most In Practice?

Leaders do not need an exhaustive attack taxonomy, but they do need a practical threat view. The most recurring categories are:

- **prompt injection and instruction override**: inputs manipulate the system into ignoring intended controls or exposing unsafe behavior.[8], [9]
- **improper output handling**: downstream systems or staff act on outputs without enough validation.[3], [8]
- **sensitive information disclosure**: the system reveals personal, confidential, or proprietary information through prompting, retrieval, or logs.[3], [8], [10]
- **tool abuse and excessive agency**: connected plugins, APIs, or automations widen the harm the system can cause.[8], [9], [10]
- **data poisoning and retrieval corruption**: training, fine-tuning, or retrieval sources are manipulated so system behavior degrades or becomes misleading.[8], [9]
- **supply-chain and vendor weakness**: exposure enters through hosted models, libraries, platforms, or hidden third-party dependencies.[8], [9], [92]

The leadership mistake is to treat these as separate niche technical problems. In practice, they often combine. Prompt injection may trigger unsafe tool use. Weak output handling may turn a model mistake into a data or contract problem. Vendor opacity may slow incident response when time matters most. That is why leaders should read AI security as a chain of exposure, not a list of isolated threats.

## 3. How Do Access Control, Logging, And Red Teaming Change The Security Standard?

AI security is weak when organisations focus only on the model and ignore the surrounding control environment.

Three controls matter especially:

### Access Control

The system should not have broader data or tool permissions than the use case requires. A model with wide access and vague task boundaries can turn a small prompt problem into a major exposure.

### Logging And Visibility

If the organisation cannot see key prompts, actions, overrides, tool calls, and failures, it cannot investigate or govern the system properly. Logging is not only for engineers. It is part of incident evidence and board-level assurance.[3], [29]

### Red Teaming And Adversarial Testing

Normal functional testing is not enough. Leaders should expect testing that asks how the system fails under adversarial, ambiguous, or high-pressure conditions, especially when connected tools or sensitive information are in scope.[3], [8], [9]

The practical change is to stop asking only whether the tool works in a demo and start asking how it behaves when people misuse it, attack it, or push it outside intended boundaries.

## Security View

| Security Layer | Leadership Question | What Good Looks Like |
|---|---|---|
| **Permissions** | Does the system have only the access it actually needs? | Data and tool access are bounded and role-appropriate |
| **Monitoring** | Can we see misuse, drift, and unsafe actions quickly enough? | Logs, alerts, and review ownership are real |
| **Testing** | Have we tested the system against adversarial and off-nominal behavior? | Red teaming complements ordinary validation |
| **Containment** | Can we isolate, narrow, or stop the system before harm spreads? | Intervention rights and fallback paths work in practice |

## 4. Why Do Vendor, Plugin, And Supply-Chain Dependencies Widen Exposure?

Many organisations do not build AI systems from scratch. They rely on hosted models, cloud services, vector stores, orchestration layers, connectors, plugins, and specialist vendors. That creates layered exposure.

The risk is not just that one supplier may fail. It is that:

- critical behavior depends on third-party systems the customer cannot fully inspect
- model or policy updates can change risk without much warning
- hidden subprocessors or libraries widen the attack surface
- incident response becomes harder because accountability is distributed

This is why AI security and vendor governance should be treated together. Procurement, legal, security, and operations need a shared view of change notification, logging access, incident obligations, fallback rights, and dependency concentration before a provider becomes embedded in a critical workflow.[10], [29], [92]

## 5. What Makes AI Operationally Resilient After Attack, Failure, Or Degraded Mode?

Security is not only about preventing compromise. It is also about maintaining safe and governable operation when prevention fails.

Operational resilience depends on whether the organisation can answer five questions:

- how will we detect that the system is behaving unsafely?
- who can pause or narrow its use?
- what fallback process exists if the AI service is unavailable or untrusted?
- what dependencies must still function for safe degraded operation?
- how will we preserve evidence and learn from the event?

This matters because many AI systems fail awkwardly rather than cleanly. They do not always crash. They may continue producing plausible but unsafe output while the surrounding context has changed. Resilience therefore includes degraded-mode design, not only outage recovery.[3], [29], [92]

## 6. What Should Boards And Executive Teams Expect Before Approving Wider Deployment?

Boards and executive teams should not approve wider AI deployment on the basis of general confidence that the vendor is strong or the technical team is capable. They should expect visible answers to six questions:

- what are the most important AI-specific attack and misuse paths?
- what permissions does the system have to data, tools, and downstream actions?
- what adversarial or red-team testing has been done?
- what logging and incident evidence will be available if something goes wrong?
- how will the organisation contain damage and continue safely in degraded mode?
- which vendor dependencies could widen security exposure or slow response?

In practical terms, that means leadership should be able to see whether the system is permission-bounded, adversarially tested, monitored in production, and linked to a real fallback plan rather than a generic assurance statement.

## Final Perspective

AI security is not a specialist annex to AI strategy. It is one of the ways strategy fails when exposure grows faster than control.

After reading this chapter, a leadership team should be more disciplined in four ways:

- treat AI security as a distinct operating topic, not a footnote inside generic cyber language
- judge systems by what they can access, trigger, or reveal under misuse
- require adversarial testing, bounded permissions, and visible containment paths
- connect security, resilience, vendor governance, and incident readiness into one view

The practical change is to stop asking only whether AI systems are innovative or useful and start asking whether they are defensible when users, attackers, vendors, and operating conditions push them off the happy path.

---

[← Information Governance, Privacy, and IP in AI Use]({{ site.baseurl }}/book/03-04-information-governance-privacy-and-ip-in-ai-use/) | [Next: Crisis Leadership for AI Failures →]({{ site.baseurl }}/book/03-06-crisis-leadership-for-ai-failures/)
