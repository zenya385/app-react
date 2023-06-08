import Painting from "../Painting";
import PropTypes from "prop-types";
// import "./PaintingList.css";
import style from "./PaintingList.module.css";

// const paintingListStyle = {
//   listStyle: "none",
//   textAlign: "center",
//   marginTop: 50,
// };

export default function PaintingList({ items }) {
  return (
    //*-- = Inline стилі==========

    // <ul
    //   style={{
    //     listStyle: "none",
    //     textAlign: "center",
    //     marginTop: "50px",
    //   }}
    // >

    //*-- = Вбудовані стилі==========
    // <ul style={paintingListStyle}>
    // <ul className="paint-list">
    <ul className={style.p_list}>
      {items.map((item) => (
        <li key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            price={item.price}
            authorUrl={item.author.url}
            authorTag={item.author.tag}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
