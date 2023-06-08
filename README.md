# Getting Started with Create React App

Цей проект був завантажений за допомогою [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

<!-- У каталозі проекту ви можете запустити: -->

### `npm start`

Runs the app in the development mode.\

<!-- Запускає програму в режимі розробки.\ -->

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<!-- Сторінка перезавантажиться, коли ви внесете зміни.\ -->
<!-- Ви також можете побачити помилки у консолі. -->

### `npm test`

Launches the test runner in the interactive watch mode.\

<!-- Запускає програму тестування в інтерактивному режимі годинника.\ -->

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

<!-- Збирає програму для виробництва в папку `build`.\
Він правильно поєднує React у робочому режимі та оптимізує збірку для найкращої продуктивності. -->

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

<!-- Збірку мінімізовано, а імена файлів містять хеші.\
Ваш додаток готовий до розгортання! -->

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

<!-- Якщо ви не задоволені інструментом збирання та вибором конфігурації, ви можете `вилучити` будь-коли. Ця команда видалить одну залежність збірки з вашого проекту. -->

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

<!-- Натомість він скопіює всі конфігураційні файли та транзитивні залежності (webpack, Babel, ESLint тощо) прямо у ваш проект, щоб ви мали повний контроль над ними. Усі команди, крім `eject`, працюватимуть, але вони вказуватимуть на скопійовані сценарії, щоб ви могли їх налаштувати. У цей момент ви самі по собі. -->

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

<!-- Вам не потрібно ніколи використовувати `eject`. Підібраний набір функцій підходить для невеликих і середніх розгортань, і ви не повинні відчувати себе зобов’язаними використовувати цю функцію. Однак ми розуміємо, що цей інструмент не буде корисним, якщо ви не зможете налаштувати його, коли будете готові до цього. -->

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```html
<div>
  <img src="" alt="" width="480" />
  <h2></h2>
  <p>Автор: <a href=""></a></p>
  <p>Цена: кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
</div>
```

<!--* ============= стилізація ================================== -->
<!--* ============= Вбудовані стилі ================================== -->

style={{ listStyle: "none", textAlign: "center" }}

======================================
const paintingListStyle = {
listStyle: "none",
textAlign: "center",
padding: "20px",
};

   <ul style={paintingListStyle}>

<!--* ============= Ванільний CSS ================================== -->

src/components/PaintingList/PaintingList.css

.p-list {
list-style: none;
text-align: center;
padding: 20px;
}

src/components/PaintingList/PaintingList.jsx

import "./PaintingList.css";

  <ul className="p-list">

<!--* ============= CSS-модулі ================================== -->

src/components/PaintingList/PaintingList.module.css (name file + .module.css)

.p-list {
list-style: none;
text-align: center;
padding: 20px;
}

src/components/PaintingList/PaintingList.jsx

import style from "./PaintingList.module.css"

  <ul className={style.p-list}>
