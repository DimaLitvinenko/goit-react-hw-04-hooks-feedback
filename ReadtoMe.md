# Создать(Инициализировать) React App.

_Создает React приложение в текущей папке:_

```bash
npx create-react-app .
```

_Создает React приложение в папке my-app:_

```bash
npx create-react-app my-app
```

# Настройка pre-commit хуков

## 1 - Установка зависимостей

Установить в проект следующие пакеты.

```bash
npm install --save-dev prettier eslint
```

**В случае ошибки установить явно указать 7-ую версию: eslintv7.11.0 --->>**

```bash
npm i -D prettier eslint@7.11.0
```

## 2 - Инициализация lint-staged и husky

Пользователям **MacOS** и **Linux** систем необходимо выполнить в терминале
следующую команду. Она установит и настроит `husky` и `lint-staged` в
зависимости от инструментов качества кода из зависимостей проекта в
`package.json`.

```bash
npx mrm lint-staged
```

_Пользователям **Windows** необходимо выполнить следующую команду. Она делает
тоже самое:_

```bash
npx mrm@2 lint-staged
```

## 3 - Установка дополнительных зависимостей (npm-пакетов):

### -Classnames

Простая утилита JavaScript для условного объединения classNames вместе.

```bash
npm i -S classnames
```

### -Babel

```bash
npm i -D babel-eslint
```

### -Config React

Этот пакет включает общую конфигурацию ESLint, используемую приложением Create
React.

```bash
npm i -D eslint-config-react-app
```

### -Prop-types

Проверка типа во время выполнения для свойств React и подобных объектов.

```bash
npm i -D prop-types
```

### -Modern-normalize

```bash
npm i -S modern-normalize
```

## 4 - Добавить npm скрипты в файл package.json:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    "prepare": "husky install",
    "clean": "gh-pages-clean"
  },
```

## 5 - Интерграция плагинов

Ссылки на документацию по интеграции плагинов в популярные редакторы.

- [Prettier editor integration](https://prettier.io/docs/en/editors.html)
- [ESLint editor integration](https://eslint.org/docs/user-guide/integrations)

## 6 - Настройки VSCode

Для комфортной работы, после установки плагинов, нужно добавить несколько
настроек редактора для автосохранения и форматирования файлов.

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 7 - Deployment на GitHub Pages

```bash
npm i -S gh-pages
```

**package.json**

```json
"homepage": "https://имя-профиля.github.io/имя-репозитория",
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
},
```

_"homepage": "https://DimaLitvinenko.github.io/goit-react-hw-02-feedback",_
