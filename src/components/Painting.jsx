// import data from "../paintings.json";
import defaultImg from "../assets/defaultImg.jpg";

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

export default function Painting({
  imgUrl = defaultImg,
  title,
  price,
  authorUrl,
  authorTag,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Ціна: {price}</p>
      <p>Доступність: Редер по умові</p>
      <button type="button">Добавити в корзину</button>
    </div>
  );
}
