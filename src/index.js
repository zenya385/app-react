import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</StrictMode> 
);

//* ===================================
// const elem1 = React.createElement("span", { className: "span" }, "Hello");
// const elem2 = React.createElement("span", { className: "span" }, "world!");

// const jsxelem1 = <span>Hello</span>;
// const jsxelem2 = <span> word!</span>;

// const elem = React.createElement("div", { a: 5, b: 10 }, "Привіт", " ", "світ");
// const elem = React.createElement("div", {
//   id: "elem-id",
//   className: "wrap",
//   children: [elem1, " ", elem2],
// });

// const jsxElem = (
//   <div>
//     {jsxelem1}
//     {jsxelem2}
//   </div>
// );

// console.log("jsxElem:>>", jsxElem);

// ReactDOM.render(jsxElem, document.querySelector("#root"));
// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

// function Painting(props) {
//   return (
//     <div>
//       <img src={data.url} alt={data.title} width="480" />
//       <h2>{data.title}</h2>
//       <p>
//         Автор: <a href={data.author.url}>{data.author.tag}</a>
//       </p>
//       <p>Цена: {data.price}</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.querySelector("#root")
// );

//* ====================================================
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
