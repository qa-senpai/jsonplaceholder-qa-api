# jsonplaceholder.qa.api

##

```bash
git init
git commit -m "first commit"
git branch -M main
git remote add origin {{посилання на ваш репозиторій}}
git push -u origin main
```

## Про репозиторій

Цей репозиторій містить набір автоматизованих тестів API для **JSONPlaceholder** — публічного API для тестування та прототипування. Проект призначений для практики в автоматизації тестування REST API за допомогою Postman колекцій та Newman.

### Що тестується?

Проект тестує наступні функціональності JSONPlaceholder API:

- Операції зі постами (GET, POST, PUT, DELETE)
- Операції з користувачами
- Операції з коментарями
- Операції з альбомами та фотографіями

---

## Передумови

Для роботи проекту потрібно мати встановлені:

- **Node.js** (рекомендується v14+)
- **npm** (входить до складу Node.js)

---

## Встановлення

1. Клонуйте репозиторій:

```bash
git clone https://github.com/qa-senpai/jsonplaceholder-qa-api.git
cd qa-dojo-9-java-script
```

2. Встановіть залежності:

```bash
npm install
```

Це встановить Newman — інструмент для запуску Postman колекцій з командного рядка.

---

## Запуск тестів

### Базовий запуск (виведення в консоль)

```bash
newman run tests/jsonPlaceholder.postman.json
```

### Запуск з HTML звітом

Для створення HTML звіту про результати тестування:

```bash
newman run tests/jsonPlaceholder.postman.json -r html
```

HTML звіт буде збережено в папці `newman/` з назвою виду `newman-run-report-YYYY-MM-DD-HH-MM-SS-MS-[number].html`

### Запуск з декількома форматами звітів

Для збереження результатів у форматах JSON та HTML:

```bash
newman run tests/jsonPlaceholder.postman.json -r json,html
```

### Запуск з додатковими параметрами

Встановлення кількості повторень тесту:

```bash
newman run tests/jsonPlaceholder.postman.json -n 2
```

Встановлення затримки між запитами (у мілісекундах):

```bash
newman run tests/jsonPlaceholder.postman.json -d 100
```

---

## Структура проекту

```
qa-dojo-9-java-script/
├── README.md                          # Цей файл
├── package.json                       # Конфігурація проекту та залежності
├── gitcommands.txt                    # Команди для git
├── tests/
│   └── jsonPlaceholder.postman.json   # Postman колекція з тестами
└── newman/
    └── newman-run-report-*.html       # Згенеровані HTML звіти
```

---

## Корисні команди Newman

| Команда                        | Опис                                   |
| ------------------------------ | -------------------------------------- |
| `newman run <collection.json>` | Запустити колекцію                     |
| `-r, --reporters <format>`     | Формати звітів: `cli`, `json`, `html`  |
| `-n, --iteration-count <num>`  | Кількість повторень колекції           |
| `-d, --delay-request <ms>`     | Затримка між запитами (мс)             |
| `--environment <file>`         | Використовувати Postman Environment    |
| `--globals <file>`             | Використовувати глобальні змінні       |
| `--bail`                       | Зупинити тестування при першій помилці |

---

## Приклади запуску

**Запустити тести з HTML звітом:**

```bash
npm run test
# або
newman run tests/jsonPlaceholder.postman.json -r html
```

**Запустити тести з затримкою 200мс та збереженням всіх типів звітів:**

```bash
newman run tests/jsonPlaceholder.postman.json -d 200 -r cli,json,html
```

**Запустити тести 3 рази:**

```bash
newman run tests/jsonPlaceholder.postman.json -n 3 -r html
```

---

## Перегляд результатів

Після запуску з флагом `-r html`, HTML звіт буде знаходитися в папці `newman/`. Відкрийте HTML файл у браузері для детального перегляду результатів тестування.

---

## Посилання

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Newman Документація](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)
- [Postman Документація](https://learning.postman.com/docs/getting-started/introduction/)

---

## Автор

**Pavlo Safonov**

---

## Ліцензія

ISC
