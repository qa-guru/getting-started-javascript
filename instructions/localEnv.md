# Настройка рабочего места

# Javascript
Нам потребуется установить платформу Node.JS для работы с JavaScript локально.

Удобнее всего воспользоваться готовым инсталлятором для вашей операционной системы [Node.js]. По умолчанию будет выбрана LTS (long time support), она нам и нужна.

При установке под Windows проверьте, что в инсталляторе выбраны компоненты (Node.js runtime, npm package manager и Add to PATH).

Для проверки корректности установки посмотрите в терминале результат выполнения команд.

```sh
node -v
npm -v
```
Если установка успешна, вы увидите версии NPM (менеждер управления пакетами) и Node.JS

# Редактор кода
Существует большое количество редакторов кода на любой вкус и цвет. В рамках курса мы будем использовать [Visual Studio Code] от Microsoft.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

# Playwright

Создайте каталог, откройте Visual Studio и через команду в меню Файл - Открыть папку, откройте ранее созданный каталог. В меню терминал выбрать Новый терминал.

Введите в терминале команду:

```sh
npm init playwright@latest
```

На предложенные инсталлятором вопросы выберите:
- Choose between TypeScript or JavaScript (default is TypeScript) - **JavaScript**
- Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project) - **оставляем tests**
- Add a GitHub Actions workflow to easily run tests on CI - **no**
- Install Playwright browsers (default is true) - **true**


Playwright устанавливает демо проект с примером тестов, запустить их можно с помощью команды

```
npx playwright test
```

Актуальная инструкция по установке [PW]


[Node.js]: <https://nodejs.org/en/download/prebuilt-installer>
[PW]: <https://playwright.dev/docs/intro>
[Visual Studio Code]: <https://visualstudio.microsoft.com/ru/>
