# ski-instructor-booking-docs

Техническая документация проекта **«Информационная система управления расписанием, услугами и онлайн-записью службы инструкторов горнолыжного курорта»**.

## Ссылки

- GitHub Pages: https://dmitrii-21.github.io/ski-instructor-booking-docs/
- Исходные файлы документации: `my-website/docs`
- OpenAPI-спецификация: `my-website/api_specs/backend-openapi.yaml`
- AsyncAPI-спецификация: `my-website/static/api/asyncapi.yaml`

## Подход

Документация ведется по подходу **Docs-as-Code**:

- хранится в GitHub;
- пишется в Markdown;
- публикуется через Docusaurus;
- деплоится на GitHub Pages;
- включает OpenAPI, AsyncAPI, PlantUML и изображения диаграмм.

## Структура документации

```text
my-website/
├── docs/
│   ├── intro.md
│   ├── requirements/
│   ├── processes/
│   ├── api/
│   ├── storage/
│   └── erd/
├── api_specs/
│   └── backend-openapi.yaml
├── static/
│   ├── api/
│   │   └── asyncapi.yaml
│   └── img/
└── docusaurus.config.js# ski-instructor-booking-docs
Техническая документация проекта онлайн-записи к службе инструкторов
