import PropTypes from "prop-types";
import defaultImg from "../assets/defaultImg.jpg";

export default function Painting({
  imgUrl = defaultImg,
  title,
  price,
  authorUrl,
  authorTag = "невідомий",
  quantity,
}) {
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Ціна: {price}</p>
      <p>Доступність: {quantity < 10 ? "закінчуються" : "є у наявності"}</p>
      <button type="button">Добавити в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
