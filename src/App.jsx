import React from "react";
// import ReactDOM from "react-dom";
import Painting from "./components/Painting";
import data from "../src/paintings.json";

function App() {
  return (
    <>
      <Painting
        imgUrl={data[0].url}
        title={data[0].title}
        price={data[0].price}
        authorUrl={data[0].author.url}
        authorTag={data[0].author.tag}
      />
    </>
  );
}

export default App;
