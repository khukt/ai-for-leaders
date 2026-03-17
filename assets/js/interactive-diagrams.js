document.addEventListener('DOMContentLoaded', function () {
  var iconMarkup = {
    data: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M8 12h8M10 17h4"/></svg>',
    model: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8l6-4 6 4-6 4-6-4Zm0 8 6-4 6 4-6 4-6-4Zm0-8v8m12-8v8"/></svg>',
    direct: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    knowledge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h9l3 3v11H6z"/><path d="M15 5v4h4M9 12h6M9 16h4"/></svg>',
    tune: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h9M4 17h16M15 7l2-2 2 2M10 17l2 2 2-2"/></svg>',
    prompt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v9H9l-4 3V6z"/></svg>',
    database: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="17" r="2"/></svg>'
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
});
