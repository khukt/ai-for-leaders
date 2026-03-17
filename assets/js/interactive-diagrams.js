document.addEventListener('DOMContentLoaded', function () {
  var iconMarkup = {
    text: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M8 12h8M10 17h4"/></svg>',
    transformer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8l6-4 6 4-6 4-6-4Zm0 8 6-4 6 4-6 4-6-4Zm0-8v8m12-8v8"/></svg>',
    qa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18h.01M9.1 9a2.9 2.9 0 1 1 5.3 1.6c-.7.9-1.4 1.3-1.9 1.9-.3.4-.5.8-.5 1.5"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"/></svg>',
    image: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m7 15 3-3 2 2 4-4 3 5"/><circle cx="9" cy="9" r="1.3"/></svg>',
    cnn: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M10 7h4M7 10v4m10-4v4"/></svg>',
    classify: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h8M5 12h14M5 17h10"/><circle cx="18" cy="7" r="2"/></svg>',
    detect: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>',
    box: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9z"/></svg>'
  };

  function renderIcon(target, key) {
    if (!target || !iconMarkup[key]) {
      return;
    }
    target.innerHTML = iconMarkup[key];
  }

  var configs = {
    bert: {
      dataIcon: 'text',
      modelIcon: 'transformer',
      taskIcon: 'qa',
      architectureIcon: 'transformer',
      dataCopy: 'Large text collections are used to teach general language patterns.',
      modelName: 'Pretrained BERT model',
      modelCopy: 'BERT is pretrained before the downstream NLP task starts, so later teams reuse a model that already knows broad language structure.',
      taskName: 'Fine-tuned for classification or question answering',
      taskCopy: 'The pretrained model is adapted for a narrower NLP task after the initial training stage.',
      architecture: 'Transformer encoder',
      architectureCopy: 'One model family used in language systems.',
      pretrainedOn: 'Broad text corpora to learn general language representations.',
      adaptation: 'Fine-tune the model for tasks like sentiment analysis, classification, or question answering.',
      foundation: 'Yes, in the sense that it is a broadly trained reusable base model for many NLP tasks.',
      rule: 'Key idea: BERT is pretrained first, then adapted. The word "pretrained" describes the training stage, not the fact that it is a transformer.'
    },
    resnet: {
      dataIcon: 'image',
      modelIcon: 'cnn',
      taskIcon: 'classify',
      architectureIcon: 'cnn',
      dataCopy: 'Large labeled image datasets are used to teach reusable visual features.',
      modelName: 'Pretrained ResNet model',
      modelCopy: 'ResNet can be pretrained on a broad image dataset such as ImageNet before being reused in a new vision task.',
      taskName: 'Reused as a feature extractor or fine-tuned for a new image task',
      taskCopy: 'Teams often start from the pretrained vision model instead of training a new one from scratch.',
      architecture: 'Convolutional neural network',
      architectureCopy: 'A classic vision architecture family, not a transformer.',
      pretrainedOn: 'Large image datasets that teach general visual patterns such as edges, textures, and object features.',
      adaptation: 'Use it as a fixed feature extractor or fine-tune it for classification in a new domain.',
      foundation: 'Usually no. It is pretrained and reusable, but not usually described as a modern foundation model.',
      rule: 'Key idea: ResNet shows that pretrained does not mean transformer. A CNN can also be pretrained and reused.'
    },
    yolo: {
      dataIcon: 'detect',
      modelIcon: 'detect',
      taskIcon: 'box',
      architectureIcon: 'detect',
      dataCopy: 'Large vision and detection datasets are used to teach the model how to localise and classify objects.',
      modelName: 'Pretrained YOLO model',
      modelCopy: 'YOLO can start from pretrained detection weights before being adapted for a custom object-detection task.',
      taskName: 'Adapted for custom object detection',
      taskCopy: 'The pretrained detector is then trained further on the organisation’s own object categories or environment.',
      architecture: 'Object detection model',
      architectureCopy: 'Built for detection rather than language generation.',
      pretrainedOn: 'Detection-oriented vision datasets and pretrained weights that give it a starting point for localisation and recognition.',
      adaptation: 'Train further on a custom detection dataset for factory items, vehicles, medical images, or other target objects.',
      foundation: 'No. It is a pretrained task-specific model, not a general foundation model in the broad cross-domain sense.',
      rule: 'Key idea: YOLO shows that pretrained models also exist in task-specific systems such as object detection.'
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
    var architectureIconTarget = diagram.querySelector('[data-diagram-architecture-icon]');
    var architectureTarget = diagram.querySelector('[data-diagram-architecture]');
    var architectureCopyTarget = diagram.querySelector('[data-diagram-architecture-copy]');
    var pretrainedOnTarget = diagram.querySelector('[data-diagram-pretrained-on]');
    var adaptationTarget = diagram.querySelector('[data-diagram-adaptation]');
    var foundationTarget = diagram.querySelector('[data-diagram-foundation]');
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

      renderIcon(dataIconTarget, config.dataIcon);
      dataCopyTarget.textContent = config.dataCopy;
      renderIcon(modelIconTarget, config.modelIcon);
      modelNameTarget.textContent = config.modelName;
      modelCopyTarget.textContent = config.modelCopy;
      renderIcon(taskIconTarget, config.taskIcon);
      taskNameTarget.textContent = config.taskName;
      taskCopyTarget.textContent = config.taskCopy;
      renderIcon(architectureIconTarget, config.architectureIcon);
      architectureTarget.textContent = config.architecture;
      architectureCopyTarget.textContent = config.architectureCopy;
      pretrainedOnTarget.textContent = config.pretrainedOn;
      adaptationTarget.textContent = config.adaptation;
      foundationTarget.textContent = config.foundation;
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

    activate('bert');
  });
});
