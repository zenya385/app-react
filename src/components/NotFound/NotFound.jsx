import errImg from '../../assets/errImg.jpg';

export default function NotFound({urlImg=errImg}) {
  return <div><h1> Помилка! Такого шляху не існує!!! 404</h1>
  <img src={urlImg} alt="qwertyu" />
  </div>
};
