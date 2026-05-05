---
title: Логическая модель
sidebar_position: 2
description: Логическая модель данных системы онлайн-записи.
---

# Логическая модель

Логическая модель уточняет состав сущностей, их атрибуты и связи без привязки к конкретной СУБД.

## Основные сущности

| Сущность | Основные атрибуты |
|---|---|
| `client` | id, full_name, phone, email, age, skill_level, created_at |
| `administrator` | id, full_name, login, email, is_active |
| `instructor_category` | id, code, name |
| `instructor` | id, full_name, category_id, access_level, is_active, phone, email |
| `service` | id, name, lesson_type, description, is_active |
| `lesson_option` | id, service_id, duration_minutes, participants_count, price, skill_level |
| `instructor_service` | id, instructor_id, service_id, assigned_at |
| `schedule_slot` | id, instructor_id, start_at, end_at, status, block_reason |
| `booking` | id, client_id, instructor_id, slot_id, lesson_option_id, admin_id, status, source, people_count, total_price, created_at, expires_at, agreement_accepted_at, cancel_reason |
| `payment` | id, booking_id, amount, status, method, external_payment_id, payment_url, created_at, paid_at, failed_reason |
| `notification` | id, booking_id, recipient_type, recipient_id, channel, status, sent_at, error_text |

## Обоснование ключевых решений

Связь **«Инструктор — Услуга»** раскрыта через промежуточную сущность **`instructor_service`**, так как один инструктор может проводить несколько услуг, а одна услуга может быть доступна у разных инструкторов.

**Услуга** отделена от **варианта занятия**, чтобы отдельно хранить тип занятия и его параметры: длительность, количество участников, цену и уровень катания.

Центральной сущностью остаётся **`booking`** — запись на занятие. Она связывает клиента, инструктора, слот, вариант занятия, оплату и уведомления.

Необязательные поля отражают данные, которые появляются не сразу или не всегда:

- `email` клиента может отсутствовать;
- `paid_at` появляется только после успешной оплаты;
- `failed_reason` появляется только при ошибке оплаты;
- `cancel_reason` появляется только при отмене записи;
- `error_text` появляется только при ошибке отправки уведомления.

## Уникальные ограничения

В логической модели предусмотрены ограничения для защиты от дублей:

- нельзя создать одинаковые варианты занятия для одной услуги;
- нельзя повторно назначить одну и ту же услугу одному инструктору;
- нельзя создать два одинаковых слота одного инструктора на одно и то же время;
- нельзя использовать один внешний идентификатор оплаты для разных платежей.
