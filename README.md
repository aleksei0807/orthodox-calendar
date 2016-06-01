# Компонент "Православный календарь" на React.js

Демо: [http://aleksei0807.github.io/orthodox-calendar/](http://aleksei0807.github.io/orthodox-calendar/)

[![NPM](https://nodei.co/npm/orthodox-calendar.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/orthodox-calendar/)

# Инструкция по использованию

## Установка

`npm i orthodox-calendar --save`

## Запуск сервера

Чтобы, забирались данные из внешнего апи необходимо стартануть сервер:

`npm run start`

Сервер стартует на порту `3333`. Если необходимо, то можно поменять его в файле `server/index.js`.

Можно также запустить на другом порту (например, 3434) следующим образом:

`PORT=3434 npm run start`

## Подключение компонента

### Со стандартными настройками (без параметров)

```javascript
import React, { Component } from 'react';
import OrthodoxCalendar from 'orthodox-calendar';

export default class MyComponent extends Component {
	render() {
		return (
			<OrthodoxCalendar />
		);
	}
}
```

### С включенными картинками

```javascript
import React, { Component } from 'react';
import OrthodoxCalendar from 'orthodox-calendar';

export default class MyComponent extends Component {
	render() {
		return (
			<OrthodoxCalendar dayicon={true} trapeza_img={true} />
		);
	}
}
```

## Параметры

- `day` {boolean} default `true`
- `dayicon` {boolean} default `false`
- `ned` {boolean} default `true`
- `trapeza_txt` {boolean} default `true`
- `trapeza_img` {boolean} default `false`
- `para` {boolean} default `true`
- `chten` {boolean} default `true`
- `loading` {string | React Component} default `"Загрузка..."`
- `server` {string} default 'http://localhost:3333' (путь к серверу)
