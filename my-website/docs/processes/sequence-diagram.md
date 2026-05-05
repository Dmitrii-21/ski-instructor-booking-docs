---
title: Диаграмма последовательности
sidebar_position: 2
description: Sequence-диаграмма уведомления участников о новой записи на занятие.
---

# Диаграмма последовательности

Ниже представлена sequence-диаграмма сценария уведомления участников о новой записи на занятие.

```plantuml
@startuml
title Уведомление участников о новой записи на занятие

actor Клиент as Client
participant "ИС онлайн-записи" as BookingSystem
participant "Сервис уведомлений" as NotificationService
participant "Система управления\nрасписанием" as ScheduleSystem
participant "Мобильное приложение\nинструктора" as InstructorApp
actor Инструктор as Instructor

Client -> BookingSystem : Оформить запись на занятие
activate BookingSystem

BookingSystem -> BookingSystem : Сохранить запись на занятие

par Параллельная передача данных
  BookingSystem -> NotificationService : Передать данные для SMS клиенту
  activate NotificationService
  NotificationService -> Client: Отправить SMS\nо подтверждении записи
  deactivate NotificationService
else
  BookingSystem -> ScheduleSystem : Передать данные о новой записи
  activate ScheduleSystem
  ScheduleSystem -> ScheduleSystem : Создать запись\nв расписании инструктора
  ScheduleSystem -> InstructorApp : Отправить push-уведомление
  activate InstructorApp
  InstructorApp -> Instructor: Показать уведомление\nо новой записи
  deactivate InstructorApp
  deactivate ScheduleSystem
end

BookingSystem --> Client: Запись успешно оформлена
deactivate BookingSystem
@enduml
```

## Краткое описание

После оформления записи система онлайн-записи сохраняет информацию о занятии и инициирует два параллельных действия:

- отправляет данные в сервис уведомлений для SMS клиенту;
- передает данные в систему управления расписанием, где создается запись в расписании инструктора;
- отправляет push-уведомление в мобильное приложение инструктора.

В результате клиент получает подтверждение записи, а инструктор — уведомление о новом занятии.
