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
      summary: 'The system should behave consistently enough for the real situations where people are expected to rely on it.',
      question: 'Is the system dependable enough across the situations where we expect people to rely on it?',
      lookFor: 'Task-specific testing, known limits, monitoring after deployment, and a clear view of when performance degrades.',
      weakSignal: 'The team can show a demo, but cannot show how the system behaves across edge cases, drift, or operational pressure.',
      managementMove: 'Narrow the use case, raise the evidence bar, and avoid dependence until reliability is proven in the real workflow.',
      rule: 'Key idea: reliability is not a claim about the model in general. It is evidence that the system performs well enough for this exact workflow.'
    },
    safe: {
      summary: 'The system should be surrounded by practical controls so weak, uncertain, or malicious outputs do not create avoidable harm.',
      question: 'What practical controls prevent weak or uncertain outputs from causing damage?',
      lookFor: 'Human approval points, rate limits, permissions, rollback, incident response, and clear stop conditions.',
      weakSignal: 'The system can trigger actions or influence decisions quickly, but nobody can show how harmful outputs are contained.',
      managementMove: 'Reduce autonomy, add guardrails, and make sure exceptions escalate before the system can create material consequences.',
      rule: 'Key idea: safety is about operating controls, not only model quality.'
    },
    fair: {
      summary: 'The organisation should test whether unjustified differences in treatment or outcomes could emerge for different groups, regions, or cases.',
      question: 'Where could unjustified differences in treatment or outcomes emerge?',
      lookFor: 'Bias review, representative data checks, subgroup testing, and a process for challenging problematic outcomes.',
      weakSignal: 'The team says the model is neutral because it does not use a protected field directly, but it has not examined proxies or outcome gaps.',
      managementMove: 'Pause broad rollout, test subgroup outcomes explicitly, and define what counts as an unacceptable disparity before scaling.',
      rule: 'Key idea: fairness usually has to be examined. It does not appear automatically just because a system feels objective.'
    },
    transparent: {
      summary: 'Users and reviewers should be able to tell when AI is involved and trace how important outputs were produced or supported.',
      question: 'Can users and reviewers tell when AI is involved and follow the decision trail?',
      lookFor: 'Clear disclosure, usable logs, source visibility, explanation where needed, and traceability from input to outcome.',
      weakSignal: 'People are expected to trust the output, but they cannot tell where AI entered the process or what evidence supported it.',
      managementMove: 'Add disclosure, logging, citations, and review records before the system becomes embedded in critical decisions.',
      rule: 'Key idea: transparency gives management, auditors, and affected people a way to inspect and challenge important outputs.'
    },
    accountable: {
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
      definition: 'The broad category covering systems used for prediction, classification, reasoning, perception, recommendation, or decision support.',
      relationship: 'AI is the umbrella. Machine learning and deep learning sit inside it, while generative AI is a capability that can be built on top of those methods.',
      question: 'What is this system actually doing in the workflow, and which kind of oversight follows from that?',
      rule: 'Key idea: AI is the umbrella term. The other terms narrow the method or capability, and those distinctions change cost, evidence, and governance questions.'
    },
    ml: {
      title: 'Machine Learning',
      definition: 'A subset of AI in which systems learn patterns from data instead of relying only on fixed hand-written rules.',
      relationship: 'Machine learning sits inside AI. Deep learning is one important family inside machine learning, but not all machine learning is deep learning.',
      question: 'What data is this system learning from, and how will we know whether those learned patterns remain dependable over time?',
      rule: 'Key idea: once the discussion moves from AI in general to machine learning, data quality and evaluation become much more central.'
    },
    dl: {
      title: 'Deep Learning',
      definition: 'A subset of machine learning built on multi-layer neural networks and enabled by larger datasets, more compute, and stronger training methods.',
      relationship: 'Deep learning sits inside machine learning. Many modern high-performing systems use it, but its complexity can raise explainability, cost, and deployment questions.',
      question: 'Does this use case justify the extra complexity, compute demand, and explainability trade-offs that often come with deep learning?',
      rule: 'Key idea: deep learning is powerful, but the leadership question is whether its extra complexity is justified in this workflow.'
    },
    genai: {
      title: 'Generative AI',
      definition: 'Systems that generate new content such as text, images, code, audio, or synthetic media.',
      relationship: 'Generative AI is not the whole of AI. It is a capability layer, often implemented with deep learning and frequently delivered through foundation-model architectures.',
      question: 'Are we trusting this system to create content, and what controls do we need around truthfulness, confidentiality, copyright, and misuse?',
      rule: 'Key idea: generative AI describes what a system does. It does not replace the need to ask which method, data, and controls sit underneath it.'
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
      summaryTarget.textContent = config.summary;
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
});
