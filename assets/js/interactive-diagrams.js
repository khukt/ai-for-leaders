document.addEventListener('DOMContentLoaded', function () {
  var configs = {
    prompting: {
      method: 'Prompting',
      bridge: 'Use the same pretrained model, but guide it with instructions and workflow rules.',
      supportTitle: 'What gets added',
      supportCopy: 'Prompts, templates, and guardrails. The model itself is not retrained.',
      outputTitle: 'Drafting assistant',
      outputCopy: 'Useful when you want the base model to respond in a more directed way.',
      keyword: 'Prompting',
      keywordCopy: 'Giving instructions to the pretrained model without changing the model itself.',
      change: 'The instructions and surrounding workflow change, but the base model stays the same.',
      constant: 'The pretrained model remains the same general-purpose model trained beforehand.',
      decision: 'Use this when you mainly need clearer instructions, not new company knowledge or changed model behaviour.',
      rule: 'Rule of thumb: if you are only changing the instructions, you are still using the same pretrained model.'
    },
    rag: {
      method: 'RAG',
      bridge: 'Keep the same pretrained model, but give it external knowledge at run time before it answers.',
      supportTitle: 'What gets added',
      supportCopy: 'A retrieval layer and trusted documents or databases. The model still is not retrained.',
      outputTitle: 'Knowledge assistant',
      outputCopy: 'Useful when the answer depends on current company, policy, or research material.',
      keyword: 'RAG',
      keywordCopy: 'Retrieval-augmented generation: the model retrieves external information before generating the answer.',
      change: 'The model now receives extra context from outside itself at the moment it is used.',
      constant: 'The pretrained model is still the same base model. What changes is the context it sees.',
      decision: 'Use this when the model needs current or organisation-specific knowledge that was not in pretraining.',
      rule: 'Rule of thumb: if you are adding trusted documents at run time, you are doing RAG, not retraining the model.'
    },
    finetuning: {
      method: 'Fine-tuning',
      bridge: 'Change the model itself so it performs better in a narrower domain, task, or language pattern.',
      supportTitle: 'What gets added',
      supportCopy: 'Domain examples and training steps that alter the base model for a more specific use.',
      outputTitle: 'Specialised model',
      outputCopy: 'Useful when prompting alone is not enough and the narrower advantage is worth the extra effort.',
      keyword: 'Fine-tuning',
      keywordCopy: 'Further training a pretrained model so its behaviour improves on a specific kind of task.',
      change: 'The model itself changes, not just the prompt or the surrounding context.',
      constant: 'The starting point is still a pretrained model rather than a model built from scratch.',
      decision: 'Use this when you need persistent domain behaviour that simple prompting or retrieval cannot reliably deliver.',
      rule: 'Rule of thumb: if the model weights are being changed for your use case, you are moving from prompting into fine-tuning.'
    }
  };

  document.querySelectorAll('[data-interactive-diagram="pretrained-model"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-diagram-tab]');
    var methodTarget = diagram.querySelector('[data-diagram-method]');
    var bridgeTarget = diagram.querySelector('[data-diagram-bridge]');
    var supportTitleTarget = diagram.querySelector('[data-diagram-support-title]');
    var supportCopyTarget = diagram.querySelector('[data-diagram-support-copy]');
    var outputTitleTarget = diagram.querySelector('[data-diagram-output-title]');
    var outputCopyTarget = diagram.querySelector('[data-diagram-output-copy]');
    var keywordTarget = diagram.querySelector('[data-diagram-keyword]');
    var keywordCopyTarget = diagram.querySelector('[data-diagram-keyword-copy]');
    var changeTarget = diagram.querySelector('[data-diagram-change]');
    var constantTarget = diagram.querySelector('[data-diagram-constant]');
    var decisionTarget = diagram.querySelector('[data-diagram-decision]');
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

      methodTarget.textContent = config.method;
      bridgeTarget.textContent = config.bridge;
      supportTitleTarget.textContent = config.supportTitle;
      supportCopyTarget.textContent = config.supportCopy;
      outputTitleTarget.textContent = config.outputTitle;
      outputCopyTarget.textContent = config.outputCopy;
      keywordTarget.textContent = config.keyword;
      keywordCopyTarget.textContent = config.keywordCopy;
      changeTarget.textContent = config.change;
      constantTarget.textContent = config.constant;
      decisionTarget.textContent = config.decision;
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

    activate('prompting');
  });
});
