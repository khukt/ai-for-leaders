document.addEventListener('DOMContentLoaded', function () {
  var iconMarkup = {
    data: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M8 12h8M10 17h4"/></svg>',
    model: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8l6-4 6 4-6 4-6-4Zm0 8 6-4 6 4-6 4-6-4Zm0-8v8m12-8v8"/></svg>',
    direct: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    knowledge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h9l3 3v11H6z"/><path d="M15 5v4h4M9 12h6M9 16h4"/></svg>',
    tune: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h9M4 17h16M15 7l2-2 2 2M10 17l2 2 2-2"/></svg>',
    prompt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v9H9l-4 3V6z"/></svg>',
    database: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="17" r="2"/></svg>',
    reliable: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l4 4 10-10"/><path d="M4 12a8 8 0 1 1 16 0"/></svg>',
    safe: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.4-2.9 8.4-7 10-4.1-1.6-7-5.6-7-10V6l7-3Z"/><path d="M9.5 12.5 11 14l3.5-4"/></svg>',
    fair: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M7 7h10"/><path d="M7 7 4 12h6L7 7Zm10 0-3 5h6l-3-5Z"/><path d="M5 18h14"/></svg>',
    transparent: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/></svg>',
    accountable: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.7-3 4.2-4.5 7-4.5s5.3 1.5 7 4.5"/><path d="M19 6v4M17 8h4"/></svg>',
    ai: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
    ml: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16 9 10l4 3 7-6"/><path d="M4 20h16"/></svg>',
    dl: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="8" r="1.7"/><circle cx="6" cy="16" r="1.7"/><circle cx="12" cy="6" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="18" r="1.7"/><circle cx="18" cy="9" r="1.7"/><circle cx="18" cy="15" r="1.7"/><path d="M7.7 8 10.3 6.5M7.7 16 10.3 17.5M12 7.7v2.6m0 3.4v2.6m1.5-5.2 2.8-1.3m-2.8 4.2 2.8 1.3"/></svg>',
    genai: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18V7a2 2 0 0 1 2-2h5l5 5v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M13 5v5h5M9 14c1.5-1.3 4.5-1.3 6 0M10 17h4"/></svg>',
    output: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h11M11 5l7 7-7 7"/></svg>',
    score: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h14M7 16l3-4 3 2 4-6"/></svg>'
  };

  function renderIcon(target, key) {
    if (!target || !iconMarkup[key]) {
      return;
    }
    target.innerHTML = iconMarkup[key];
  }

  var configs = {
    direct: {
      taskIcon: 'direct',
      changeIcon: 'prompt',
      taskName: 'Use the model directly',
      taskCopy: 'The base model is used as-is with prompts, workflow rules, and human review.',
      changeTitle: 'Prompts and workflow design',
      changeCopy: 'You shape how the model is used, but you do not retrain it.',
      staysSame: 'The pretrained model itself stays unchanged.',
      hearThis: 'When teams want a fast assistant for drafting, summarising, search, or general reasoning.',
      leadershipQuestion: 'What guardrails, approvals, and human review sit around this model before people rely on it?',
      rule: 'Key idea: using a pretrained model directly means the model stays the same. You are changing the instructions, workflow, and oversight around it.'
    },
    rag: {
      taskIcon: 'knowledge',
      changeIcon: 'database',
      taskName: 'Add company knowledge with RAG',
      taskCopy: 'The base model stays in place, but the system now retrieves documents or records at runtime before generating an answer.',
      changeTitle: 'Knowledge access around the model',
      changeCopy: 'You add retrieval, search, permissions, and document pipelines around the pretrained model.',
      staysSame: 'The pretrained model itself still stays unchanged.',
      hearThis: 'When teams want the model to answer with internal policies, contracts, manuals, research, or other company knowledge.',
      leadershipQuestion: 'Who controls the source documents, permissions, freshness, and citations that the model relies on at runtime?',
      rule: 'Key idea: RAG usually does not retrain the model. It adds external knowledge around the pretrained model at runtime.'
    },
    'fine-tune': {
      taskIcon: 'tune',
      changeIcon: 'sliders',
      taskName: 'Fine-tune the model itself',
      taskCopy: 'The pretrained model is further trained for a narrower task, style, or domain after the original broad training stage.',
      changeTitle: 'The model weights themselves',
      changeCopy: 'You are changing the model, not only the instructions or surrounding system.',
      staysSame: 'It still starts from a pretrained base rather than from scratch.',
      hearThis: 'When teams need stronger specialization, more consistent outputs, or performance on a narrow recurring task.',
      leadershipQuestion: 'What evidence shows that changing the model is worth the extra cost, testing burden, and lock-in risk?',
      rule: 'Key idea: fine-tuning changes the pretrained model itself. That is different from prompting or RAG, which usually keep the base model unchanged.'
    }
  };

  var trustCompassConfigs = {
    reliable: {
      centerSummary: 'Shows repeatable performance in live conditions.',
      summary: 'The system should behave consistently enough for the real situations where people are expected to rely on it.',
      question: 'Is the system dependable enough across the situations where we expect people to rely on it?',
      lookFor: 'Task-specific testing, known limits, monitoring after deployment, and a clear view of when performance degrades.',
      weakSignal: 'The team can show a demo, but cannot show how the system behaves across edge cases, drift, or operational pressure.',
      managementMove: 'Narrow the use case, raise the evidence bar, and avoid dependence until reliability is proven in the real workflow.',
      rule: 'Key idea: reliability is not a claim about the model in general. It is evidence that the system performs well enough for this exact workflow.'
    },
    safe: {
      centerSummary: 'Has practical controls around errors and harm.',
      summary: 'The system should be surrounded by practical controls so weak, uncertain, or malicious outputs do not create avoidable harm.',
      question: 'What practical controls prevent weak or uncertain outputs from causing damage?',
      lookFor: 'Human approval points, rate limits, permissions, rollback, incident response, and clear stop conditions.',
      weakSignal: 'The system can trigger actions or influence decisions quickly, but nobody can show how harmful outputs are contained.',
      managementMove: 'Reduce autonomy, add guardrails, and make sure exceptions escalate before the system can create material consequences.',
      rule: 'Key idea: safety is about operating controls, not only model quality.'
    },
    fair: {
      centerSummary: 'Tests for unjustified outcome differences.',
      summary: 'The organisation should test whether unjustified differences in treatment or outcomes could emerge for different groups, regions, or cases.',
      question: 'Where could unjustified differences in treatment or outcomes emerge?',
      lookFor: 'Bias review, representative data checks, subgroup testing, and a process for challenging problematic outcomes.',
      weakSignal: 'The team says the model is neutral because it does not use a protected field directly, but it has not examined proxies or outcome gaps.',
      managementMove: 'Pause broad rollout, test subgroup outcomes explicitly, and define what counts as an unacceptable disparity before scaling.',
      rule: 'Key idea: fairness usually has to be examined. It does not appear automatically just because a system feels objective.'
    },
    transparent: {
      centerSummary: 'Makes AI involvement and decision trails visible.',
      summary: 'Users and reviewers should be able to tell when AI is involved and trace how important outputs were produced or supported.',
      question: 'Can users and reviewers tell when AI is involved and follow the decision trail?',
      lookFor: 'Clear disclosure, usable logs, source visibility, explanation where needed, and traceability from input to outcome.',
      weakSignal: 'People are expected to trust the output, but they cannot tell where AI entered the process or what evidence supported it.',
      managementMove: 'Add disclosure, logging, citations, and review records before the system becomes embedded in critical decisions.',
      rule: 'Key idea: transparency gives management, auditors, and affected people a way to inspect and challenge important outputs.'
    },
    accountable: {
      centerSummary: 'Keeps clear human ownership and intervention rights.',
      summary: 'Responsibility for approval, operation, review, and escalation should remain visible even when AI is heavily involved.',
      question: 'Which person or function owns the outcome and can step in when necessary?',
      lookFor: 'A named business owner, escalation paths, review rights, vendor accountability boundaries, and a clear incident owner.',
      weakSignal: 'Several functions touch the system, but nobody is clearly answerable for outcomes or authorised to halt use.',
      managementMove: 'Assign one accountable owner, define intervention rights, and make escalation real before the system scales further.',
      rule: 'Key idea: AI can inform or automate work, but accountability still has to sit with named people and functions.'
    }
  };

  var taxonomyConfigs = {
    ai: {
      title: 'Artificial Intelligence',
      kind: 'Broad system category',
      definition: 'A broad class of machine-based systems that infer from inputs how to generate outputs such as predictions, content, recommendations, or decisions.',
      relationship: 'AI is broader than machine learning. Some AI is rule-based or search-based; much modern AI uses machine learning; deep learning is one family within machine learning; generative AI names a kind of output behavior rather than the whole field.',
      question: 'What is this system actually doing in the workflow, and which kind of oversight follows from that?',
      rule: 'Key idea: AI is the broadest category, but the other labels are not all subcategories of the same kind.'
    },
    ml: {
      title: 'Machine Learning',
      kind: 'Technical approach',
      definition: 'A family of methods in which models learn statistical relationships from data rather than relying only on explicit hand-written rules.',
      relationship: 'Machine learning is one major way to build AI systems, but it is not all of AI. Deep learning sits within machine learning, while many recommendation, forecasting, and classification systems use other ML methods.',
      question: 'What data is this system learning from, and how will we know whether those learned patterns remain dependable over time?',
      rule: 'Key idea: once the discussion moves from AI in general to machine learning, data quality, drift, and evaluation become central.'
    },
    dl: {
      title: 'Deep Learning',
      kind: 'Technical approach within ML',
      definition: 'A family of machine-learning methods based on multi-layer neural networks that learn representations from large amounts of data.',
      relationship: 'Deep learning sits inside machine learning. Many modern vision, speech, and foundation-model systems use it, but many deep-learning systems are predictive rather than generative.',
      question: 'Does this use case justify the extra complexity, compute demand, and explainability trade-offs that often come with deep learning?',
      rule: 'Key idea: deep learning is powerful, but leaders should separate model capability from the cost, opacity, and infrastructure burden that often come with it.'
    },
    genai: {
      title: 'Generative AI',
      kind: 'Output-oriented system class',
      definition: 'AI systems designed to generate novel content such as text, images, audio, video, or code in response to prompts or other inputs.',
      relationship: 'Generative AI is defined by what the system produces, not by one single architecture. In current practice, most mainstream generative AI is built with deep-learning-based foundation models, but the term names the task, not the whole technical stack.',
      question: 'Are we trusting this system to create content, and what controls do we need around truthfulness, confidentiality, copyright, and misuse?',
      rule: 'Key idea: generative AI describes output behavior. It does not tell you, by itself, which model architecture, data pipeline, or controls sit underneath it.'
    }
  };

  var learningTypeConfigs = {
    supervised: {
      stageTitle: 'Labelled examples',
      stageCopy: 'The system learns from examples where the desired answer or category is already known.',
      outputTitle: 'Prediction or classification',
      outputCopy: 'Teams often use it for forecasting, scoring, routing, or deciding which class an item belongs to.',
      evalTitle: 'Compare outputs to known answers',
      evalCopy: 'Performance is checked against labelled test data and task-specific error metrics.',
      bestUse: 'Prediction and classification tasks where the outcome is already defined clearly enough to label examples.',
      dataNeed: 'High-quality labelled data that is relevant to the real task and population.',
      watchout: 'Bad labels, skewed training data, and hidden outcome bias can make a model look precise while still producing harmful decisions.',
      question: 'Do we trust the labels and outcome definitions enough for people to rely on this model in real decisions?',
      rule: 'Key idea: supervised learning depends heavily on label quality. If the labels are weak, the evidence will be weaker than the metrics suggest.'
    },
    unsupervised: {
      stageTitle: 'Unlabelled data',
      stageCopy: 'The system looks for structure, segments, clusters, or anomalies without being told in advance what the right answer is.',
      outputTitle: 'Patterns, clusters, or outliers',
      outputCopy: 'Teams often use it to find customer segments, operational anomalies, or hidden structure in messy data.',
      evalTitle: 'Judge usefulness and stability',
      evalCopy: 'Evaluation is less about one right answer and more about whether the discovered patterns are stable, interpretable, and operationally useful.',
      bestUse: 'Segmentation, anomaly detection, and pattern discovery where labels are absent or too expensive to create upfront.',
      dataNeed: 'Broad, representative unlabelled data and a clear plan for interpreting what the discovered patterns actually mean.',
      watchout: 'Teams can mistake statistical structure for business meaning and scale weak clusters into misleading decisions.',
      question: 'If this system finds a pattern, how will we know that pattern is real, useful, and not just a modeling artifact?',
      rule: 'Key idea: unsupervised learning can surface useful structure, but leaders should ask who validates that the pattern means something in the real business context.'
    },
    reinforcement: {
      stageTitle: 'Actions plus feedback',
      stageCopy: 'The system learns by trying actions, receiving feedback or rewards, and improving over repeated interaction with an environment.',
      outputTitle: 'Policy for choosing actions',
      outputCopy: 'It is most relevant when the goal is to optimize sequences of decisions over time rather than make one static prediction.',
      evalTitle: 'Measure reward over time',
      evalCopy: 'Evaluation depends on long-run outcomes, safe experimentation, and whether the reward function actually reflects what the organisation wants.',
      bestUse: 'Repeated decision environments such as dynamic control, resource allocation, robotics, or optimization under changing conditions.',
      dataNeed: 'A safe environment for exploration, a well-designed reward signal, and strong controls on what the system is allowed to try.',
      watchout: 'If the reward function is poorly designed, the system can learn to optimize the wrong behavior very effectively.',
      question: 'What is the system being rewarded for, and could that reward signal drive harmful or distorted behavior at scale?',
      rule: 'Key idea: reinforcement learning is governed as much by incentives and control boundaries as by model performance.'
    }
  };

  var readinessConfigs = {
    access: {
      stageLabel: 'Access Stage',
      title: 'We can use a capable model',
      summary: 'The organisation can reach a model or tool quickly through a vendor, API, or packaged product.',
      proves: 'Capability is available and experimentation can begin quickly.',
      misses: 'Nothing yet about workflow fit, controls, reliability, or accountability.',
      move: 'Allow limited exploration, but create visibility over who is using what and for which tasks.',
      question: 'Who is using this already, with what data, and under which rules?',
      rule: 'Key idea: access is the starting point. Readiness exists only when evidence, controls, ownership, and fallback are all visible in the real workflow.'
    },
    demo: {
      stageLabel: 'Demo Stage',
      title: 'It works in a controlled example',
      summary: 'A team or vendor can show the system producing impressive output under chosen conditions.',
      proves: 'The use case may be technically possible and worth further testing.',
      misses: 'How the system behaves on your data, your edge cases, and your operational constraints.',
      move: 'Do not approve scale from a demo. Ask what fails, what was excluded, and what evidence comes next.',
      question: 'What happens when the input is messy, incomplete, contested, or high-stakes?',
      rule: 'Key idea: a demo proves possibility, not operational trustworthiness.'
    },
    pilot: {
      stageLabel: 'Pilot Stage',
      title: 'It can work in a limited workflow',
      summary: 'The system shows promise in a bounded setting with a smaller user group, narrower scope, or temporary controls.',
      proves: 'There may be local value and a plausible path to workflow fit.',
      misses: 'Whether the system remains dependable at scale, under drift, across teams, or after rollout discipline weakens.',
      move: 'Treat the pilot as evidence gathering. Measure failure modes, override patterns, user behavior, and ownership gaps before expansion.',
      question: 'What did the pilot reveal about failure, escalation, and human behavior that the demo hid?',
      rule: 'Key idea: a pilot should reduce uncertainty. If it only proves enthusiasm, it has not done its job.'
    },
    readiness: {
      stageLabel: 'Readiness Stage',
      title: 'We can trust it in this workflow',
      summary: 'The organisation has evidence that the system performs well enough in context and is surrounded by clear controls, ownership, and fallback.',
      proves: 'Task fit, operational control, visible accountability, and a credible plan for when the system is wrong.',
      misses: 'Nothing essential for launch, though monitoring and adjustment still continue after deployment.',
      move: 'Approve use only within defined boundaries, with monitoring, escalation rights, and periodic review already in place.',
      question: 'If this system is wrong tomorrow, how quickly will we know and who can intervene?',
      rule: 'Key idea: readiness is not confidence in the model. It is confidence in the managed workflow around it.'
    }
  };

  var aiValueConfigs = {
    personal: {
      stageLabel: 'Often Overread',
      title: 'Personal productivity is real, but it is usually the weakest value signal',
      summary: 'Individuals save time on familiar tasks, but the workflow, economics, and decision structure may remain unchanged.',
      looksLike: 'Drafting, summarisation, search, note preparation, coding assistance, and quicker first-pass analysis.',
      misread: 'Leaders often overread local time savings as transformation even when the operating model is still unchanged.',
      change: 'Baseline measurement, basic usage rules, and a clear choice about whether this remains a tool or becomes a managed workflow.',
      fund: 'Fund cautiously unless the gain can be shown to change a workflow, risk profile, or economic outcome that actually matters.',
      rule: 'Key idea: personal productivity can be useful, but it is usually the weakest sign of strategic value.'
    },
    workflow: {
      stageLabel: 'Operational Gain',
      title: 'Workflow value appears when work actually moves differently',
      summary: 'The organisation gains when routing, review, triage, exception handling, or service delivery improves inside a managed process.',
      looksLike: 'Better case routing, faster review cycles, stronger exception handling, lower rework, improved throughput, or fewer avoidable errors.',
      misread: 'Leaders sometimes underfund this stage because it looks less exciting than frontier use, even though this is where durable operational value often appears first.',
      change: 'Process redesign, role clarity, metrics, user adoption, and visible accountability for how the workflow is run.',
      fund: 'Fund when the workflow matters enough to justify redesign and when the gain can be measured in production.',
      rule: 'Key idea: workflow value is often the first place where AI becomes economically meaningful.'
    },
    strategic: {
      stageLabel: 'Highest Payoff',
      title: 'Strategic value changes economics, resilience, or service position',
      summary: 'This is where AI affects an important system outcome rather than only helping a local team work faster.',
      looksLike: 'Service models improve, resilience increases, quality becomes harder for competitors to match, or economics change across an important operating area.',
      misread: 'Teams often label a use case strategic too early, before they can show that the value survives integration, governance, and adoption cost.',
      change: 'Cross-functional ownership, platform thinking, durable data and sourcing choices, and evidence that the gain matters beyond one team.',
      fund: 'Fund deeply only when the use case is important enough, measurable enough, and defensible enough to justify long-term commitment.',
      rule: 'Key idea: strategic value is not a larger pilot. It is a different level of organizational effect.'
    },
    false: {
      stageLabel: 'Stop Here',
      title: 'False value happens when visible activity is mistaken for durable gain',
      summary: 'Demos, adoption volume, or employee enthusiasm can all look impressive without improving an important workflow or outcome.',
      looksLike: 'High usage, attractive examples, isolated time savings, or publicity around AI adoption without measurable improvement in economics, quality, or resilience.',
      misread: 'Leaders may approve more investment because the activity is visible, even though the underlying problem, workflow, or business case is still weak.',
      change: 'Stronger kill criteria, better baseline measurement, comparison to simpler alternatives, and more skepticism about what the pilot actually proved.',
      fund: 'Do not scale. Either narrow the use case until the value is real or stop funding it.',
      rule: 'Key idea: visible AI activity can still be real work and still be the wrong investment.'
    }
  };

  var dataRoleConfigs = {
    operational: {
      stageLabel: 'Core Records',
      title: 'Operational data determines whether the workflow reflects reality',
      summary: 'These are the records the organisation already relies on to run work. If they are fragmented or weak, AI inherits the same weakness.',
      contribution: 'Workflow context, business records, entity histories, and the operational reality the system is supposed to support.',
      failure: 'Predictions, summaries, routing, and decisions reflect stale or fragmented records instead of live conditions.',
      miss: 'Model access cannot compensate for operational fields that are missing, poorly defined, or disconnected from the real workflow.',
      question: 'Are the records behind this use case current, complete, and close enough to real work to support dependable outputs?',
      rule: 'Key idea: operational data is where many AI systems inherit the strengths and weaknesses of the organisation itself.'
    },
    training: {
      stageLabel: 'Model Adaptation',
      title: 'Training or tuning data shapes what the model learns to do well',
      summary: 'Examples used for training, fine-tuning, evaluation, or calibration determine how the model specializes and what errors it repeats.',
      contribution: 'Task-specific examples, labels, calibration signals, and narrower patterns that help a model adapt to a specific job.',
      failure: 'Weak labels, skewed samples, or narrow examples make specialized performance look better in testing than it behaves in practice.',
      miss: 'Teams often focus on model choice and underinvest in labels, representativeness, and maintenance of the datasets used to adapt the model.',
      question: 'Do we trust the examples and labels strongly enough for the model behavior we want to embed in a live workflow?',
      rule: 'Key idea: when tuning data is weak, the model learns the wrong lesson more efficiently.'
    },
    retrieval: {
      stageLabel: 'Runtime Grounding',
      title: 'Retrieval data determines what generative systems can ground themselves in',
      summary: 'Documents, policies, manuals, research outputs, and knowledge bases shape what the system can cite or retrieve at runtime.',
      contribution: 'Fresh context, source visibility, workflow-specific knowledge, and a path to more trustworthy answers without retraining the base model.',
      failure: 'Answers become stale, thinly grounded, or permissionally risky when the source corpus is outdated, noisy, or poorly scoped.',
      miss: 'Leaders often treat retrieval as easy because the base model already exists, even though permissions, source quality, and freshness now matter more.',
      question: 'Who owns the source corpus, who can change it, and how quickly would we notice if the retrieval base became stale or unreliable?',
      rule: 'Key idea: in many generative systems, the strategic data asset sits in the retrieval layer rather than in model weights.'
    },
    feedback: {
      stageLabel: 'Live Signals',
      title: 'Feedback data shows whether the system is still working after launch',
      summary: 'Overrides, complaints, user behavior, quality checks, and outcome review reveal whether the system performs well enough in real use.',
      contribution: 'Evidence about drift, misuse, failure patterns, user trust, and whether the workflow is improving or quietly degrading.',
      failure: 'The system appears stable while errors accumulate because nobody is collecting or reviewing the signals that show deterioration.',
      miss: 'Teams often budget for launch and not for the data needed to learn from exceptions, corrections, and changing conditions.',
      question: 'What signals would tell us early that this system is degrading, being misused, or creating rework we did not expect?',
      rule: 'Key idea: feedback data is what turns a launch into a managed capability instead of a one-time deployment.'
    },
    evidence: {
      stageLabel: 'Oversight Trail',
      title: 'Evidence data makes the system governable, reviewable, and defensible',
      summary: 'Logs, approvals, lineage records, test results, and change histories are what allow important AI use to be reviewed and defended later.',
      contribution: 'Traceability for audit, incident response, legal review, internal oversight, and disciplined improvement over time.',
      failure: 'Governance becomes slow and defensive because the organisation cannot reconstruct what was used, changed, approved, or monitored.',
      miss: 'Evidence work is often treated as bureaucracy until the first complaint, audit, or major failure makes the missing record painfully visible.',
      question: 'If this system were challenged tomorrow, could we produce a credible record of purpose, data, testing, ownership, and change history?',
      rule: 'Key idea: evidence data is what allows trust claims to survive scrutiny.'
    }
  };

  var dataPositionConfigs = {
    accumulation: {
      stageLabel: 'Looks Strong',
      title: 'Accumulation is not the same as advantage',
      summary: 'Large volumes of records can look impressive while still being fragmented, weakly governed, and difficult to reuse in a live workflow.',
      looksLike: 'Large stores of records, documents, logs, or reports that exist across systems but are hard to combine, explain, or operationalize.',
      misread: 'Volume is often mistaken for strength even when rights, quality, and workflow fit are still weak.',
      means: 'The organisation may have raw material, but not yet a reusable capability.',
      action: 'Prioritize access, definitions, lineage, and workflow relevance before claiming strategic advantage.',
      rule: 'Key idea: stored information is not yet a strategic asset if nobody can reuse it with confidence.'
    },
    foundation: {
      stageLabel: 'Usable Base',
      title: 'A usable foundation exists when access and stewardship start to work together',
      summary: 'This is the stage where information becomes easier to reach, define, and reuse across real workflows.',
      looksLike: 'Named ownership, basic metadata, cleaner access paths, better definitions, and use-case-linked quality work.',
      misread: 'Leaders sometimes underrate this stage because it looks operational, even though this is where scale becomes possible.',
      means: 'The organisation is building the conditions for governed reuse and more reliable deployment.',
      action: 'Keep funding the enabling work that reduces fragmentation and improves workflow readiness.',
      rule: 'Key idea: a usable foundation is often the highest-return investment before larger AI scale.'
    },
    advantage: {
      stageLabel: 'Harder To Copy',
      title: 'Data advantage appears when the data improves a workflow that matters',
      summary: 'The data is relevant, governable, maintainable, and specific enough to make the organisation meaningfully better at an important task.',
      looksLike: 'Workflow-linked data, strong rights clarity, maintainable lineage, and feedback loops that keep the capability improving.',
      misread: 'Leaders can label something an advantage too early, before showing that it remains valuable after governance and operating costs are counted.',
      means: 'The organisation has a defensible capability, not only a dataset.',
      action: 'Protect the operating model around the data, not just the records themselves.',
      rule: 'Key idea: data advantage is durable only when stewardship, rights, and workflow integration hold together over time.'
    },
    debt: {
      stageLabel: 'Slows Scale',
      title: 'Data debt is what makes promising AI systems hard to trust later',
      summary: 'Weak labels, stale records, undocumented changes, and missing provenance compound into slower deployment and weaker confidence.',
      looksLike: 'Manual workarounds, brittle joins, unexplained fields, noisy labels, and teams arguing over whose data is right.',
      misread: 'Because the system may still demo well, leaders often underestimate how quickly debt turns into delay, rework, or risk.',
      means: 'The organisation is carrying hidden cost and hidden fragility inside its information base.',
      action: 'Fix the narrow debt that blocks high-value workflows first rather than launching broad cleanup programs with weak business ties.',
      rule: 'Key idea: the first visible AI gain can still conceal deeper data debt underneath it.'
    }
  };

  var sourcingPathConfigs = {
    build: {
      stageLabel: 'Highest Control',
      title: 'Build when control is genuinely strategic and operationally supportable',
      summary: 'Building makes sense when success depends heavily on proprietary context, internal differentiation, or assurance requirements you cannot comfortably externalize.',
      bestFit: 'Core capabilities, distinctive workflows, proprietary data advantage, or uses with demanding assurance and control needs.',
      gain: 'Greater control over adaptation, standards, governance, and long-term capability development.',
      risk: 'Building is not only software creation. It is an ongoing operating commitment across evaluation, monitoring, incident handling, staffing, and change control.',
      check: 'Verify that the need for control is real, the use case matters enough, and the organisation can support the capability after launch.',
      rule: 'Key idea: build is justified when control is strategic and the operating burden is supportable.'
    },
    buy: {
      stageLabel: 'Fastest Adoption',
      title: 'Buy when speed matters more than deep internal control',
      summary: 'Buying is usually strongest when the capability is useful, common enough to externalize, and not central to long-term differentiation.',
      bestFit: 'General-purpose tools, common workflow components, or cases where fast deployment matters more than bespoke adaptation.',
      gain: 'Faster time to value, lower initial development burden, and access to external capability that can be governed rather than built.',
      risk: 'Leaders often underestimate vendor dependency, weak transparency, hidden platform constraints, and how hard exit becomes after embedding the tool.',
      check: 'Check portability, data terms, evaluation evidence, change-notification rights, and whether the tool can remain replaceable over time.',
      rule: 'Key idea: buying reduces build effort, but it does not remove governance or dependency risk.'
    },
    partner: {
      stageLabel: 'Shared Capability',
      title: 'Partner when the value sits across organizational boundaries',
      summary: 'Partnerships make sense when capability, infrastructure, or sector value depends on complementary assets held by more than one party.',
      bestFit: 'Shared infrastructure, sector-specific tools, research consortia, municipalities, hospitals, cooperatives, or other cross-boundary capability problems.',
      gain: 'Shared cost, broader capability access, and the ability to solve problems no single organization should or can carry alone.',
      risk: 'Leaders often underestimate governance complexity, slower coordination, blurred accountability, and disputes over data, IP, or value capture.',
      check: 'Agree decision rights, operating roles, data terms, IP boundaries, dispute resolution, and exit conditions before delivery starts.',
      rule: 'Key idea: partnership is not lighter governance. It usually requires more deliberate governance than buying.'
    }
  };

  var globalShiftConfigs = {
    access: {
      eyebrow: 'Access Shift',
      title: 'Access has expanded faster than organisational readiness',
      summary: 'General-purpose AI reached users faster than policy, training, procurement, and internal governance could catch up.',
      why: 'Leaders are dealing with AI as a fast-moving exposure rather than a centrally sequenced rollout.',
      change: 'The harder task is no longer only tool selection. It is gaining visibility and control over use that may already be spreading.',
      risk: 'Leaders often discover AI use late, after teams, vendors, and habits are already embedded.',
      move: 'Build visibility quickly: who is using what, for which tasks, under which controls, and with which dependencies.',
      rule: 'Key idea: easier access means experimentation spreads faster than formal governance.'
    },
    diffusion: {
      eyebrow: 'Diffusion Shift',
      title: 'The real race is diffusion, not just frontier performance',
      summary: 'Strategic advantage depends on whether AI reaches real workflows, institutions, and business models rather than who watches the best demos first.',
      why: 'Value appears when tools are adopted in consequential work and supported by process redesign, data, and trust.',
      change: 'The harder task is operational absorption: redesigning work, incentives, and controls so value actually appears.',
      risk: 'Leaders often overfocus on model headlines and underinvest in adoption capacity, training, workflow fit, and operating discipline.',
      move: 'Track where AI is actually being embedded in work, what is changing operationally, and where adoption is stalling.',
      rule: 'Key idea: frontier capability matters, but diffusion into real work is what turns capability into advantage.'
    },
    infrastructure: {
      eyebrow: 'Infrastructure Shift',
      title: 'AI is becoming strategic infrastructure',
      summary: 'Compute, cloud platforms, chips, and deployment environments increasingly shape who can train, adapt, and run AI at meaningful scale.',
      why: 'Vendor choice now affects resilience, bargaining power, data location, continuity, and geopolitical exposure.',
      change: 'The harder task is dependency management: choices that look operational can harden into strategic constraints.',
      risk: 'Leaders often treat infrastructure dependence as a technical detail until pricing, resilience, or access becomes a board issue.',
      move: 'Map which providers, platforms, and deployment constraints sit underneath your AI ambitions before dependence hardens.',
      rule: 'Key idea: AI capability depends on underlying infrastructure, not just on model quality.'
    },
    policy: {
      eyebrow: 'Policy Shift',
      title: 'Policy is proliferating without fully converging',
      summary: 'More jurisdictions are creating AI rules, guidance, standards, and industrial policy, but not from one single playbook.',
      why: 'Multinational firms and regulated institutions are more likely to face overlapping expectations than one decisive rule.',
      change: 'The harder task is coordination across legal, procurement, labour, sector, and public-accountability expectations at once.',
      risk: 'Leaders often wait for one definitive rulebook and miss exposure building through several smaller channels.',
      move: 'Monitor how legal, standards, procurement, labour, and sector-specific expectations are evolving across your footprint.',
      rule: 'Key idea: the policy landscape is expanding fast, but it is not becoming simple or uniform.'
    },
    incidents: {
      eyebrow: 'Incident Shift',
      title: 'Incidents and hazards are becoming part of the market landscape',
      summary: 'As deployment grows, failures become visible to journalists, regulators, customers, workers, and boards rather than staying inside technical teams.',
      why: 'Public evidence of what goes wrong shapes which sectors come under pressure first and how trust in AI is judged.',
      change: 'The harder task is external readiness: failures now create reputational and regulatory consequences beyond the technical team.',
      risk: 'Leaders often underestimate how quickly isolated incidents can travel into politics, regulation, workforce trust, and customer confidence.',
      move: 'Prepare for external visibility: incident response, governance records, review rights, and clear communication matter before a failure happens.',
      rule: 'Key idea: once incidents become visible, AI risk becomes part of the external operating environment.'
    }
  };

  var legalExposureConfigs = {
    'use-case': {
      eyebrow: 'Use Case Exposure',
      title: 'Exposure starts with what the system is being asked to do',
      summary: 'Legal burden changes sharply when AI affects consequential decisions rather than low-stakes drafting or support work.',
      trigger: 'Hiring, pricing, access, eligibility, safety, and rights-affecting decisions create much higher legal sensitivity.',
      miss: 'Teams often treat all AI use as one category and miss how quickly obligations change when the workflow becomes consequential.',
      check: 'Ask which rights, decisions, or business outcomes the system can influence and whether that use has been formally approved.',
      move: 'Separate low-stakes assistance from high-impact decision support before governance, procurement, and review all blur together.',
      rule: 'Key idea: legal exposure often begins with the use case itself, not with the later arrival of a regulator.'
    },
    data: {
      eyebrow: 'Data Exposure',
      title: 'Exposure accelerates when the system touches sensitive or regulated data',
      summary: 'Personal data, sensitive data, and cross-border movement can create obligations before model quality is even discussed.',
      trigger: 'Training, prompts, retrieval, logs, and outputs can all involve personal or regulated data in ways teams under-map.',
      miss: 'Leaders often focus on the model and overlook where data enters, where it is stored, and what rights attach to it.',
      check: 'Map what data the system receives, generates, stores, transfers, and exposes to vendors or downstream users.',
      move: 'Treat data mapping and lawful basis review as an early gate, not as a later compliance clean-up task.',
      rule: 'Key idea: many AI legal issues start as data-governance issues before they become model-governance issues.'
    },
    vendor: {
      eyebrow: 'Vendor Exposure',
      title: 'Buying the system does not transfer the legal burden',
      summary: 'Third-party AI can reduce development effort while leaving the organisation responsible for deployment, supervision, and claims.',
      trigger: 'Dependence on a model provider, platform, or packaged tool creates accountability questions around selection, use, and oversight.',
      miss: 'Leaders often mistake vendor capability or contractual language for transferred accountability.',
      check: 'Review who owns testing, monitoring, incident handling, data terms, and customer-facing claims when the tool fails.',
      move: 'Run vendor AI through governance and evidence review, not only procurement and contract review.',
      rule: 'Key idea: vendor convenience can lower build effort without lowering accountability.'
    },
    documentation: {
      eyebrow: 'Documentation Exposure',
      title: 'Weak records become a legal weakness quickly',
      summary: 'When the organisation cannot show what was approved, tested, monitored, and escalated, defense becomes much harder.',
      trigger: 'Missing assessments, unclear ownership, vague approval trails, and poor monitoring records undermine legal and audit response.',
      miss: 'Teams often assume compliance exists because sensible work happened informally, even when nothing usable was recorded.',
      check: 'Ask whether you can produce a credible record of purpose, owner, testing, limits, incidents, and review decisions.',
      move: 'Make documentation part of the operating model before the system scales and the record has to be reconstructed later.',
      rule: 'Key idea: if you cannot show how the system was governed, it becomes harder to defend how it was used.'
    },
    'public-impact': {
      eyebrow: 'Public Impact Exposure',
      title: 'Exposure rises when people outside the project team feel the consequences',
      summary: 'Customer-facing, employee-facing, and high-visibility uses draw more complaints, scrutiny, and escalation than back-office experimentation.',
      trigger: 'Systems that affect customers, applicants, workers, or public claims create more visible harm pathways and reputational pressure.',
      miss: 'Leaders often underestimate how quickly a local issue can turn into media, workforce, regulator, or board attention.',
      check: 'Identify who can be affected, how they can challenge outcomes, and what happens if the issue becomes public quickly.',
      move: 'Add escalation routes, communications discipline, and human review before high-visibility use creates a broader trust problem.',
      rule: 'Key idea: public impact turns technical or legal weaknesses into organisational exposure much faster.'
    }
  };

  var euAiActConfigs = {
    unacceptable: {
      eyebrow: 'Unacceptable Risk',
      title: 'Some AI uses are prohibited outright',
      summary: 'The AI Act bans certain uses because the risk is considered incompatible with EU law and values rather than something to be managed through controls alone.',
      examples: 'Social scoring, certain manipulative uses, and several prohibited biometric practices.',
      effect: 'The right response is not stronger documentation. It is to avoid the prohibited practice.',
      needs: 'Clear screening of use cases before deployment and a process to escalate anything that may fall into a banned category.',
      question: 'Are we trying to govern something that the Act treats as impermissible in the first place?',
      rule: 'Key idea: some uses are prohibited, so governance starts with screening out banned practices before discussing controls.'
    },
    high: {
      eyebrow: 'High Risk',
      title: 'High-risk systems must carry a real governance burden',
      summary: 'High-risk AI uses are allowed only with stronger controls around risk management, documentation, data governance, logging, and human oversight.',
      examples: 'Hiring tools, credit scoring, certain education uses, critical infrastructure, medical uses, and some law-enforcement uses.',
      effect: 'Use is conditional on evidence, system controls, and the ability to show regulators how the system is governed.',
      needs: 'Documentation, testing, oversight, monitoring, and clear accountability for how the system is deployed and reviewed.',
      question: 'Do we have the evidence pack and operating controls needed to defend this deployment under scrutiny?',
      rule: 'Key idea: high-risk AI is not just a product choice. It is an operating-model commitment.'
    },
    limited: {
      eyebrow: 'Limited / Transparency Risk',
      title: 'Some uses mainly trigger disclosure and transparency duties',
      summary: 'Where people could be misled about AI involvement or synthetic content, the Act leans on transparency obligations rather than full high-risk governance.',
      examples: 'Chatbots, deepfakes, and some AI-generated public-facing content.',
      effect: 'The organisation needs to disclose AI involvement or synthetic content clearly enough for users to understand what they are seeing or interacting with.',
      needs: 'Plain disclosure, content labelling where required, and review of customer-facing touchpoints.',
      question: 'Would a user clearly understand where AI is involved, or could the presentation create misleading confidence?',
      rule: 'Key idea: limited-risk uses are lighter than high-risk uses, but transparency is still a legal requirement, not just a design choice.'
    },
    minimal: {
      eyebrow: 'Minimal Risk',
      title: 'Most low-risk uses do not face specific AI Act duties',
      summary: 'Many ordinary low-risk systems fall outside the heavier AI Act burden, though other laws and internal controls may still matter.',
      examples: 'Spam filters, AI in video games, and many low-stakes convenience features.',
      effect: 'The AI Act does not impose the same specific obligations here, but privacy, consumer, contract, and sector rules can still apply.',
      needs: 'Basic governance, sensible monitoring, and a check that the use case is truly low-stakes and does not drift into a regulated category.',
      question: 'Are we treating a seemingly low-risk use as harmless without checking whether its context makes it more sensitive?',
      rule: 'Key idea: minimal-risk does not mean no governance. It means the AI Act burden is lighter, while other obligations may still apply.'
    }
  };

  document.querySelectorAll('[data-interactive-diagram="pretrained-model"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-diagram-tab]');
    var dataIconTarget = diagram.querySelector('[data-diagram-data-icon]');
    var dataCopyTarget = diagram.querySelector('[data-diagram-data-copy]');
    var modelIconTarget = diagram.querySelector('[data-diagram-model-icon]');
    var modelNameTarget = diagram.querySelector('[data-diagram-model-name]');
    var modelCopyTarget = diagram.querySelector('[data-diagram-model-copy]');
    var taskIconTarget = diagram.querySelector('[data-diagram-task-icon]');
    var taskNameTarget = diagram.querySelector('[data-diagram-task-name]');
    var taskCopyTarget = diagram.querySelector('[data-diagram-task-copy]');
    var changeIconTarget = diagram.querySelector('[data-diagram-change-icon]');
    var changeTitleTarget = diagram.querySelector('[data-diagram-change-title]');
    var changeCopyTarget = diagram.querySelector('[data-diagram-change-copy]');
    var staysSameTarget = diagram.querySelector('[data-diagram-stays-same]');
    var hearThisTarget = diagram.querySelector('[data-diagram-hear-this]');
    var leadershipQuestionTarget = diagram.querySelector('[data-diagram-leadership-question]');
    var ruleTarget = diagram.querySelector('[data-diagram-rule]');

    function activate(key) {
      var config = configs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-diagram-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      renderIcon(dataIconTarget, 'data');
      dataCopyTarget.textContent = 'Large datasets teach general patterns before your company-specific use case begins.';
      renderIcon(modelIconTarget, 'model');
      modelNameTarget.textContent = 'Pretrained base model';
      modelCopyTarget.textContent = 'The model already knows broad patterns. That is what "pretrained" means.';
      renderIcon(taskIconTarget, config.taskIcon);
      taskNameTarget.textContent = config.taskName;
      taskCopyTarget.textContent = config.taskCopy;
      renderIcon(changeIconTarget, config.changeIcon);
      changeTitleTarget.textContent = config.changeTitle;
      changeCopyTarget.textContent = config.changeCopy;
      staysSameTarget.textContent = config.staysSame;
      hearThisTarget.textContent = config.hearThis;
      leadershipQuestionTarget.textContent = config.leadershipQuestion;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-diagram-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-diagram-tab'));
      });
    });

    activate('direct');
  });

  document.querySelectorAll('[data-interactive-diagram="trust-compass"]').forEach(function (diagram) {
    var points = diagram.querySelectorAll('[data-trust-point]');
    var pointIcons = diagram.querySelectorAll('[data-trust-point-icon]');
    var titleTarget = diagram.querySelector('[data-trust-selected-title]');
    var summaryTarget = diagram.querySelector('[data-trust-selected-summary]');
    var questionTarget = diagram.querySelector('[data-trust-question]');
    var lookForTarget = diagram.querySelector('[data-trust-look-for]');
    var weakSignalTarget = diagram.querySelector('[data-trust-weak-signal]');
    var managementMoveTarget = diagram.querySelector('[data-trust-management-move]');
    var ruleTarget = diagram.querySelector('[data-trust-rule]');
    var order = ['reliable', 'transparent', 'safe', 'fair', 'accountable'];

    pointIcons.forEach(function (target) {
      renderIcon(target, target.getAttribute('data-trust-point-icon'));
    });

    function activate(key) {
      var config = trustCompassConfigs[key];
      if (!config) {
        return;
      }

      points.forEach(function (point) {
        var isActive = point.getAttribute('data-trust-point') === key;
        point.classList.toggle('is-active', isActive);
        point.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        point.tabIndex = isActive ? 0 : -1;
      });

      titleTarget.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      summaryTarget.textContent = config.centerSummary || config.summary;
      questionTarget.textContent = config.question;
      lookForTarget.textContent = config.lookFor;
      weakSignalTarget.textContent = config.weakSignal;
      managementMoveTarget.textContent = config.managementMove;
      ruleTarget.textContent = config.rule;
    }

    points.forEach(function (point) {
      point.addEventListener('click', function () {
        activate(point.getAttribute('data-trust-point'));
      });

      point.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
          return;
        }

        event.preventDefault();

        var index = order.indexOf(point.getAttribute('data-trust-point'));
        var nextIndex = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? index - 1 : index + 1;

        if (nextIndex < 0) {
          nextIndex = order.length - 1;
        }
        if (nextIndex >= order.length) {
          nextIndex = 0;
        }

        var nextPoint = diagram.querySelector('[data-trust-point="' + order[nextIndex] + '"]');
        if (!nextPoint) {
          return;
        }

        nextPoint.focus();
        activate(order[nextIndex]);
      });
    });

    activate('reliable');
  });

  document.querySelectorAll('[data-interactive-diagram="taxonomy"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-taxonomy-tab]');
    var layers = diagram.querySelectorAll('[data-taxonomy-layer]');
    var iconTargets = diagram.querySelectorAll('[data-taxonomy-icon]');
    var selectedLayerTarget = diagram.querySelector('[data-taxonomy-selected-layer]');
    var kindTarget = diagram.querySelector('[data-taxonomy-kind]');
    var definitionTarget = diagram.querySelector('[data-taxonomy-definition]');
    var relationshipTarget = diagram.querySelector('[data-taxonomy-relationship]');
    var questionTarget = diagram.querySelector('[data-taxonomy-question]');
    var ruleTarget = diagram.querySelector('[data-taxonomy-rule]');

    iconTargets.forEach(function (target) {
      renderIcon(target, target.getAttribute('data-taxonomy-icon'));
    });

    function activate(key) {
      var config = taxonomyConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-taxonomy-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      layers.forEach(function (layer) {
        layer.classList.toggle('is-active', layer.getAttribute('data-taxonomy-layer') === key);
      });

      selectedLayerTarget.textContent = config.title;
      kindTarget.textContent = config.kind;
      definitionTarget.textContent = config.definition;
      relationshipTarget.textContent = config.relationship;
      questionTarget.textContent = config.question;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-taxonomy-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-taxonomy-tab'));
      });
    });

    activate('ai');
  });

  document.querySelectorAll('[data-interactive-diagram="learning-types"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-learning-tab]');
    var stageIcon = diagram.querySelector('[data-learning-icon="data"]');
    var outputIcon = diagram.querySelector('[data-learning-icon="output"]');
    var scoreIcon = diagram.querySelector('[data-learning-icon="score"]');
    var stageTitleTarget = diagram.querySelector('[data-learning-stage-title]');
    var stageCopyTarget = diagram.querySelector('[data-learning-stage-copy]');
    var outputTitleTarget = diagram.querySelector('[data-learning-output-title]');
    var outputCopyTarget = diagram.querySelector('[data-learning-output-copy]');
    var evalTitleTarget = diagram.querySelector('[data-learning-eval-title]');
    var evalCopyTarget = diagram.querySelector('[data-learning-eval-copy]');
    var bestUseTarget = diagram.querySelector('[data-learning-best-use]');
    var dataNeedTarget = diagram.querySelector('[data-learning-data-need]');
    var watchoutTarget = diagram.querySelector('[data-learning-watchout]');
    var questionTarget = diagram.querySelector('[data-learning-question]');
    var ruleTarget = diagram.querySelector('[data-learning-rule]');

    renderIcon(stageIcon, 'data');
    renderIcon(outputIcon, 'output');
    renderIcon(scoreIcon, 'score');

    function activate(key) {
      var config = learningTypeConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-learning-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      stageTitleTarget.textContent = config.stageTitle;
      stageCopyTarget.textContent = config.stageCopy;
      outputTitleTarget.textContent = config.outputTitle;
      outputCopyTarget.textContent = config.outputCopy;
      evalTitleTarget.textContent = config.evalTitle;
      evalCopyTarget.textContent = config.evalCopy;
      bestUseTarget.textContent = config.bestUse;
      dataNeedTarget.textContent = config.dataNeed;
      watchoutTarget.textContent = config.watchout;
      questionTarget.textContent = config.question;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-learning-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-learning-tab'));
      });
    });

    activate('supervised');
  });

  document.querySelectorAll('[data-interactive-diagram="readiness"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-readiness-tab]');
    var stageLabelTarget = diagram.querySelector('[data-readiness-stage-label]');
    var titleTarget = diagram.querySelector('[data-readiness-title]');
    var summaryTarget = diagram.querySelector('[data-readiness-summary]');
    var provesTarget = diagram.querySelector('[data-readiness-proves]');
    var missesTarget = diagram.querySelector('[data-readiness-misses]');
    var moveTarget = diagram.querySelector('[data-readiness-move]');
    var questionTarget = diagram.querySelector('[data-readiness-question]');
    var ruleTarget = diagram.querySelector('[data-readiness-rule]');

    function activate(key) {
      var config = readinessConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-readiness-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      stageLabelTarget.textContent = config.stageLabel;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      provesTarget.textContent = config.proves;
      missesTarget.textContent = config.misses;
      moveTarget.textContent = config.move;
      questionTarget.textContent = config.question;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-readiness-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-readiness-tab'));
      });
    });

    activate('access');
  });

  document.querySelectorAll('[data-interactive-diagram="ai-value"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-ai-value-tab]');
    var stageLabelTarget = diagram.querySelector('[data-ai-value-stage-label]');
    var titleTarget = diagram.querySelector('[data-ai-value-title]');
    var summaryTarget = diagram.querySelector('[data-ai-value-summary]');
    var looksLikeTarget = diagram.querySelector('[data-ai-value-looks-like]');
    var misreadTarget = diagram.querySelector('[data-ai-value-misread]');
    var changeTarget = diagram.querySelector('[data-ai-value-change]');
    var fundTarget = diagram.querySelector('[data-ai-value-fund]');
    var ruleTarget = diagram.querySelector('[data-ai-value-rule]');

    function activate(key) {
      var config = aiValueConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-ai-value-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      stageLabelTarget.textContent = config.stageLabel;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      looksLikeTarget.textContent = config.looksLike;
      misreadTarget.textContent = config.misread;
      changeTarget.textContent = config.change;
      fundTarget.textContent = config.fund;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-ai-value-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-ai-value-tab'));
      });
    });

    activate('personal');
  });

  document.querySelectorAll('[data-interactive-diagram="data-roles"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-data-role-tab]');
    var stageLabelTarget = diagram.querySelector('[data-data-role-stage-label]');
    var titleTarget = diagram.querySelector('[data-data-role-title]');
    var summaryTarget = diagram.querySelector('[data-data-role-summary]');
    var contributionTarget = diagram.querySelector('[data-data-role-contribution]');
    var failureTarget = diagram.querySelector('[data-data-role-failure]');
    var missTarget = diagram.querySelector('[data-data-role-miss]');
    var questionTarget = diagram.querySelector('[data-data-role-question]');
    var ruleTarget = diagram.querySelector('[data-data-role-rule]');

    function activate(key) {
      var config = dataRoleConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-data-role-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      stageLabelTarget.textContent = config.stageLabel;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      contributionTarget.textContent = config.contribution;
      failureTarget.textContent = config.failure;
      missTarget.textContent = config.miss;
      questionTarget.textContent = config.question;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-data-role-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        var currentIndex = Array.prototype.indexOf.call(tabs, tab);
        var direction = event.key === 'ArrowRight' ? 1 : -1;
        var nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
        event.preventDefault();
        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-data-role-tab'));
      });
    });

    if (tabs.length) {
      activate(tabs[0].getAttribute('data-data-role-tab'));
    }
  });

  document.querySelectorAll('[data-interactive-diagram="data-position"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-data-position-tab]');
    var stageLabelTarget = diagram.querySelector('[data-data-position-stage-label]');
    var titleTarget = diagram.querySelector('[data-data-position-title]');
    var summaryTarget = diagram.querySelector('[data-data-position-summary]');
    var looksLikeTarget = diagram.querySelector('[data-data-position-looks-like]');
    var misreadTarget = diagram.querySelector('[data-data-position-misread]');
    var meansTarget = diagram.querySelector('[data-data-position-means]');
    var actionTarget = diagram.querySelector('[data-data-position-do]');
    var ruleTarget = diagram.querySelector('[data-data-position-rule]');

    function activate(key) {
      var config = dataPositionConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-data-position-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      stageLabelTarget.textContent = config.stageLabel;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      looksLikeTarget.textContent = config.looksLike;
      misreadTarget.textContent = config.misread;
      meansTarget.textContent = config.means;
      actionTarget.textContent = config.action;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-data-position-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        var currentIndex = Array.prototype.indexOf.call(tabs, tab);
        var direction = event.key === 'ArrowRight' ? 1 : -1;
        var nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
        event.preventDefault();
        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-data-position-tab'));
      });
    });

    if (tabs.length) {
      activate(tabs[0].getAttribute('data-data-position-tab'));
    }
  });

  document.querySelectorAll('[data-interactive-diagram="sourcing-paths"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-sourcing-path-tab]');
    var stageLabelTarget = diagram.querySelector('[data-sourcing-path-stage-label]');
    var titleTarget = diagram.querySelector('[data-sourcing-path-title]');
    var summaryTarget = diagram.querySelector('[data-sourcing-path-summary]');
    var bestFitTarget = diagram.querySelector('[data-sourcing-path-best-fit]');
    var gainTarget = diagram.querySelector('[data-sourcing-path-gain]');
    var riskTarget = diagram.querySelector('[data-sourcing-path-risk]');
    var checkTarget = diagram.querySelector('[data-sourcing-path-check]');
    var ruleTarget = diagram.querySelector('[data-sourcing-path-rule]');

    function activate(key) {
      var config = sourcingPathConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-sourcing-path-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      stageLabelTarget.textContent = config.stageLabel;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      bestFitTarget.textContent = config.bestFit;
      gainTarget.textContent = config.gain;
      riskTarget.textContent = config.risk;
      checkTarget.textContent = config.check;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-sourcing-path-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-sourcing-path-tab'));
      });
    });

    activate('build');
  });

  document.querySelectorAll('[data-interactive-diagram="global-shift"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-global-shift-tab]');
    var eyebrowTarget = diagram.querySelector('[data-global-shift-eyebrow]');
    var titleTarget = diagram.querySelector('[data-global-shift-title]');
    var summaryTarget = diagram.querySelector('[data-global-shift-summary]');
    var whyTarget = diagram.querySelector('[data-global-shift-why]');
    var changeTarget = diagram.querySelector('[data-global-shift-change]');
    var riskTarget = diagram.querySelector('[data-global-shift-risk]');
    var moveTarget = diagram.querySelector('[data-global-shift-move]');
    var ruleTarget = diagram.querySelector('[data-global-shift-rule]');

    function activate(key) {
      var config = globalShiftConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-global-shift-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      eyebrowTarget.textContent = config.eyebrow;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      whyTarget.textContent = config.why;
      changeTarget.textContent = config.change;
      riskTarget.textContent = config.risk;
      moveTarget.textContent = config.move;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-global-shift-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-global-shift-tab'));
      });
    });

    activate('access');
  });

  document.querySelectorAll('[data-interactive-diagram="legal-exposure"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-legal-exposure-tab]');
    var eyebrowTarget = diagram.querySelector('[data-legal-exposure-eyebrow]');
    var titleTarget = diagram.querySelector('[data-legal-exposure-title]');
    var summaryTarget = diagram.querySelector('[data-legal-exposure-summary]');
    var triggerTarget = diagram.querySelector('[data-legal-exposure-trigger]');
    var missTarget = diagram.querySelector('[data-legal-exposure-miss]');
    var checkTarget = diagram.querySelector('[data-legal-exposure-check]');
    var moveTarget = diagram.querySelector('[data-legal-exposure-move]');
    var ruleTarget = diagram.querySelector('[data-legal-exposure-rule]');

    function activate(key) {
      var config = legalExposureConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-legal-exposure-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      eyebrowTarget.textContent = config.eyebrow;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      triggerTarget.textContent = config.trigger;
      missTarget.textContent = config.miss;
      checkTarget.textContent = config.check;
      moveTarget.textContent = config.move;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-legal-exposure-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-legal-exposure-tab'));
      });
    });

    activate('use-case');
  });

  document.querySelectorAll('[data-interactive-diagram="eu-ai-act"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-eu-ai-act-tab]');
    var eyebrowTarget = diagram.querySelector('[data-eu-ai-act-eyebrow]');
    var titleTarget = diagram.querySelector('[data-eu-ai-act-title]');
    var summaryTarget = diagram.querySelector('[data-eu-ai-act-summary]');
    var examplesTarget = diagram.querySelector('[data-eu-ai-act-examples]');
    var effectTarget = diagram.querySelector('[data-eu-ai-act-effect]');
    var needsTarget = diagram.querySelector('[data-eu-ai-act-needs]');
    var questionTarget = diagram.querySelector('[data-eu-ai-act-question]');
    var ruleTarget = diagram.querySelector('[data-eu-ai-act-rule]');

    function activate(key) {
      var config = euAiActConfigs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-eu-ai-act-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      eyebrowTarget.textContent = config.eyebrow;
      titleTarget.textContent = config.title;
      summaryTarget.textContent = config.summary;
      examplesTarget.textContent = config.examples;
      effectTarget.textContent = config.effect;
      needsTarget.textContent = config.needs;
      questionTarget.textContent = config.question;
      ruleTarget.textContent = config.rule;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-eu-ai-act-tab'));
      });

      tab.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
          return;
        }

        event.preventDefault();

        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;

        if (nextIndex < 0) {
          nextIndex = tabs.length - 1;
        }
        if (nextIndex >= tabs.length) {
          nextIndex = 0;
        }

        tabs[nextIndex].focus();
        activate(tabs[nextIndex].getAttribute('data-eu-ai-act-tab'));
      });
    });

    activate('unacceptable');
  });
});
