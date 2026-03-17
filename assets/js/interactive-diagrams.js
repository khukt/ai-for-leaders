document.addEventListener('DOMContentLoaded', function () {
  var configs = {
    prompting: {
      name: 'Prompting and workflow design',
      bridge: 'The model stays general-purpose, but instructions, guardrails, and process design shape how it behaves in use.',
      outputTitle: 'Workflow assistant',
      outputCopy: 'Fastest route to a usable system for drafting, summarising, support, and low-risk productivity work.'
    },
    rag: {
      name: 'Retrieval and grounding',
      bridge: 'The model is paired with trusted internal context at run time so responses are anchored in current organisational knowledge.',
      outputTitle: 'Knowledge system',
      outputCopy: 'Useful when the answer depends more on current internal context than on the model alone.'
    },
    finetuning: {
      name: 'Fine-tuning and domain adaptation',
      bridge: 'The model itself is adapted to perform better in a narrow domain, language, or task pattern that generic prompting does not solve well.',
      outputTitle: 'Specialised domain model',
      outputCopy: 'Best when the workflow advantage is strong enough to justify higher data, evaluation, and operating costs.'
    },
    alignment: {
      name: 'Alignment and safety tuning',
      bridge: 'The system is tuned for refusal patterns, tone, escalation rules, and higher-confidence behaviour in sensitive settings.',
      outputTitle: 'Governed public-facing assistant',
      outputCopy: 'Most valuable where trust, safety, and policy consistency matter as much as raw capability.'
    },
    compression: {
      name: 'Compression and quantisation',
      bridge: 'The model is made smaller or lighter so it can run faster, cheaper, or closer to the point of use.',
      outputTitle: 'Edge-ready deployment',
      outputCopy: 'Often used when latency, cost, or deployment constraints matter more than maximum model breadth.'
    }
  };

  document.querySelectorAll('[data-interactive-diagram="foundation-models"]').forEach(function (diagram) {
    var tabs = diagram.querySelectorAll('[data-diagram-tab]');
    var panels = diagram.querySelectorAll('[data-diagram-panel]');
    var nameTarget = diagram.querySelector('[data-diagram-name]');
    var bridgeTarget = diagram.querySelector('[data-diagram-bridge]');
    var outputTitleTarget = diagram.querySelector('[data-diagram-output-title]');
    var outputCopyTarget = diagram.querySelector('[data-diagram-output-copy]');

    function activate(key) {
      var config = configs[key];
      if (!config) {
        return;
      }

      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-diagram-tab') === key;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach(function (panel) {
        var isActive = panel.getAttribute('data-diagram-panel') === key;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });

      nameTarget.textContent = config.name;
      bridgeTarget.textContent = config.bridge;
      outputTitleTarget.textContent = config.outputTitle;
      outputCopyTarget.textContent = config.outputCopy;
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
