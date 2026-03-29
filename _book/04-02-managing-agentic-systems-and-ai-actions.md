---
layout: default
title: "Managing Agentic Systems and AI Actions"
parent: "Part IV: Future Organizations"
nav_order: 2
---

# Managing Agentic Systems and AI Actions

The next step after human-AI collaboration is not always higher autonomy in one leap. It is often the rise of agentic systems: AI that can plan across multiple steps, use tools, call services, retrieve information, trigger workflows, and act with limited human intervention. That changes the management question from `what does the model say?` to `what is the system allowed to do?`[3], [40], [90], [91]

That shift matters because errors compound differently in agentic systems. A weak answer is one thing. A weak sequence of actions, tool calls, permissions, or delegated decisions is another. Once systems can act, not only advise, governance has to move closer to permission design, supervision, and containment. That is the chapter's main distinction from the previous one: 04-01 is about authority and oversight across human-AI configurations. This chapter is about delegated action once the system can actually execute work.

The most useful way to read this chapter is through six questions:

1. What makes an AI system agentic rather than merely assistive?
2. Why do tool use and action permissions change the governance model?
3. What approval chains, action limits, and sandboxing are required before use?
4. How should leaders think about multi-step errors and hidden delegated actions?
5. When is agentic design worth the added risk and complexity?
6. What does credible supervision look like for AI that can actually do things?

## 1. What Makes An AI System Agentic Rather Than Merely Assistive?

An assistive system produces information for people to evaluate. An agentic system can do more: it can break a task into steps, select tools, retrieve information, trigger actions, and continue operating across a sequence with partial independence.

The distinction is practical, not philosophical. Leaders should ask:

- can the system call tools or APIs?
- can it take action without separate human approval at each step?
- can it persist across a workflow rather than answer one prompt?
- can it change what happens downstream in systems, records, or customer experience?

If the answer to those questions is yes, the governance problem has changed. The issue is no longer only output quality. It is delegated action authority.

## 2. Why Do Tool Use And Action Permissions Change The Governance Model?

The core risk in agentic systems is not only that they can be wrong. It is that they can be wrong while connected to something that matters.

Tool use changes the governance model because it widens what the system can:

- access
- modify
- send
- trigger
- approve

This is why permissions matter more than general excitement about autonomy. A weak agent with no real permissions is mostly a nuisance. A moderately capable agent with broad permissions can become a serious control problem very quickly.[3], [8], [9], [10]

The practical question is not `is the agent smart?` It is `what can it touch if it is wrong?`

The first agentic screen is easiest to read through four lenses:

| Lens | What To Ask | Why It Matters |
|---|---|---|
| **Action scope** | What can the system actually do besides generate text? | Tool power determines consequence |
| **Permission depth** | Which systems, records, or services can it access or change? | Wide permissions turn small failures into large ones |
| **Approval structure** | Which steps require human confirmation and which do not? | Approval design defines real authority |
| **Containment** | Can the system be narrowed, sandboxed, or stopped quickly? | Agentic systems need stronger boundaries than chat tools |

## 3. What Approval Chains, Action Limits, And Sandboxing Are Required Before Use?

Before an agentic system is allowed into real workflows, leaders should expect at least three visible controls.

### Approval Chains

Some actions should require explicit human confirmation. Others may be safe enough for bounded automation. The key is that the organisation decides this deliberately, not by accident.

### Action Limits

The system should have hard limits on what it may retrieve, send, change, or execute. These should be based on task scope, not only broad user role assumptions.

### Sandboxing

Agentic systems should often be tested and initially deployed inside limited environments where they can act without creating irreversible consequence. Sandboxing is not caution theater. It is how organisations learn whether a system is safe enough for wider authority.

## Agentic View

| Agentic Layer | Leadership Question | What Good Looks Like |
|---|---|---|
| **Planning** | Can the system sequence work without drifting into unsafe goals? | Tasks are bounded and success criteria are explicit |
| **Tool use** | Which tools may it call, and under what conditions? | Tool permissions are narrow and auditable |
| **Approval** | Which actions need human confirmation? | High-consequence steps are not silently automated |
| **Supervision** | Can people see and interrupt what the agent is doing? | Logs, review, and stop rights are real |

## 4. How Should Leaders Think About Multi-Step Errors And Hidden Delegated Actions?

Agentic systems create a different failure pattern from ordinary assistants. Errors can accumulate across steps:

- the system interprets the task poorly
- retrieves the wrong information
- chooses the wrong tool
- takes an action based on weak or stale context
- continues the sequence as if the earlier step were sound

This is why leaders should worry about hidden delegated action. A system may appear to be doing one thing while quietly creating records, changing settings, contacting customers, escalating tickets, moving money, or triggering other systems in the background.

The management question is not only `could one output be wrong?` It is `how would a weak chain of actions travel through the workflow before anyone notices?`

## 5. When Is Agentic Design Worth The Added Risk And Complexity?

Agentic design is not automatically the next maturity stage for every organisation.

It becomes more defensible when:

- the task is repetitive but multi-step
- action boundaries can be made explicit
- approvals can be inserted at high-consequence points
- the workflow is otherwise slowed by coordination friction rather than substantive judgment

It becomes less defensible when:

- the task depends heavily on changing context or tacit judgment
- errors are hard to reverse
- the downstream systems are sensitive
- oversight would be mostly ceremonial

The leadership mistake is to assume that because an agent can technically complete a workflow, it should be allowed to own that workflow.

## 6. What Does Credible Supervision Look Like For AI That Can Actually Do Things?

Credible supervision for agentic systems requires more than a dashboard. Leaders should expect:

- visible task and action logs
- clear review ownership
- stop, rollback, and fallback procedures
- periodic review of agent permissions
- tighter incident thresholds than for ordinary assistive systems

The standard should rise as the system moves closer to money, rights, contracts, public communication, or irreversible operational change.

The practical test is simple: if the agent takes a wrong action at 3 a.m., can the organisation see it, stop it, explain it, and recover from it without improvising?

## Final Perspective

Agentic systems are not just stronger chat tools. They are workflow actors. That is why the main executive question is not `how capable is the model?` but `how much action authority are we prepared to give it?`

After reading this chapter, a leadership team should be more disciplined in four ways:

- govern agentic systems through permissions and approvals, not only performance claims
- separate assistive use from action-taking use clearly
- design containment and supervision before expansion
- treat multi-step failure as a workflow risk, not only an output risk

The practical change is to stop talking about agents as if they were simply more advanced assistants and start governing them as systems that can alter the world around them.

---

[← Human-AI Collaboration and Autonomous Systems]({{ site.baseurl }}/book/04-01-human-ai-collaboration-and-autonomous-systems/) | [Next: AI in Smart Industry and Critical Infrastructure →]({{ site.baseurl }}/book/04-03-ai-in-smart-industry-and-critical-infrastructure/)
