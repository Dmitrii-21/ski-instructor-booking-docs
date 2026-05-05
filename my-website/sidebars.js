// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/use-cases',
        'requirements/functional-requirements',
        'requirements/non-functional-requirements',
      ],
    },
    {
      type: 'category',
      label: 'Процессы и сценарии',
      items: [
        'processes/use-case-diagram',
        'processes/sequence-diagram',
        'processes/bpmn',
        'processes/dmn',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/api-overview',
        'api/backend-api-spec',
        'api/async-interaction',
        'api/interface-mockups',
      ],
    },
    {
      type: 'category',
      label: 'Хранение данных',
      items: [
        'storage/stored-entities',
        'storage/storage-choice',
      ],
    },
    {
      type: 'category',
      label: 'ERD',
      items: [
        'erd/conceptual-model',
        'erd/logical-model',
        'erd/physical-model',
      ],
    },
  ],
};

export default sidebars;