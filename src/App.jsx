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
      <Painting
        imgUrl={data[1].url}
        title={data[1].title}
        price={data[1].price}
        authorUrl={data[1].author.url}
        authorTag={data[1].author.tag}
      />
      <Painting
        imgUrl={data[2].url}
        title={data[2].title}
        price={data[2].price}
        authorUrl={data[2].author.url}
        authorTag={data[2].author.tag}
      />
    </>
  );
}

export default App;
