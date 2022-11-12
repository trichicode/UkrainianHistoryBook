import { useState } from 'react';
import { useSwiper } from 'swiper/react';
import './index.scss';

const Intro = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const swiper = useSwiper();

  const clickHandler = () => {
    swiper.slideNext(1000);
  }

  if (isFirstLoad) {
    return (
      <div className="wrapper">
        <div className="image-container">
          <img className="image" src="./assets/imgs/repin-zaporozhcy.jpg" alt="bg"/>
        </div>
        <div className="container">
          <h1> UKRAINIAN HISTORY BOOK</h1>
        </div>
        <div className="desc-container">
          <h1>
          • the book was created by amateurs and does not position itself as a 100% source of
            information
          </h1>
          <img width={25} height={20} src="./assets/imgs/scroll.svg" onClick={clickHandler}/>
        </div>
      </div>
    );
  } else return <></>;
};

export default Intro;
