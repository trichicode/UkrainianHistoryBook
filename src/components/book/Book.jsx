import {useEffect, useState, useContext} from "react";
import Page from "./page/Page";
import { useSwiper } from 'swiper/react';
import "./Book.scss";

import { FlippingPages } from "flipping-pages";
import "flipping-pages/dist/style.css";

import { BOOK_DATA } from "../../constants/bookData";
import { BookContext } from "../../context/bookContext";

const Book = () => {
  const { isPrevAvailable, isNextAvailable, setIsFocus, setIsPrevAvailable, setIsNextAvailable } = useContext(BookContext);

  const [selected, setSelected] = useState(0);

  const prev = () => {
    setSelected((selected) => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, BOOK_DATA.length - 1));
  };

  useEffect(() => {
    if ( selected === 0 ) {
      setIsPrevAvailable(false);
    } else {
      setIsPrevAvailable(true);
    }

    if ( selected === BOOK_DATA.length - 1 ) {
      setIsNextAvailable(false);
    } else {
      setIsNextAvailable(true);
    }
  }, [selected]);

  return (
    <div className="wrapper-pages">

      <button onClick={prev}>
        <img
          width={27}
          height={25}
          className={isPrevAvailable ? 'arrow_enabled' : 'arrow_disabled' }
          style={{rotate: '180deg'}}
          src="./assets/imgs/arrow.svg"
          alt="prev-arrow"
        />
      </button>

      <div
        className="container-pages"
        onMouseEnter={() => setIsFocus(true) }
        onMouseLeave={() => setIsFocus(false) }
        onWheel={(e) => {
          e.deltaY > 0 ? next() : prev();
        }}
      >
         <FlippingPages
          direction="right-to-left"
          animationDuration={800}
          onSwipeEnd={setSelected}
          selected={selected}
        >
          {BOOK_DATA.map((content, index) => (
            <Page
              key={index}
              data={content}
            />
          ))}
        </FlippingPages>

      </div>

      <button onClick={next}>
        <img
          width={27}
          height={25}
          className={isNextAvailable ? 'arrow_enabled' : 'arrow_disabled' }
          src="./assets/imgs/arrow.svg"
          alt="next-arrow"
        />
      </button>
    </div>
  );
};

export default Book;
