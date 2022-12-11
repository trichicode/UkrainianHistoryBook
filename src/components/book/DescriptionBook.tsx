import { useEffect, useContext } from 'react';
import DescriptionPage from './pages/DescriptionPage';
import { useSwiper } from 'swiper/react';
import './DescriptionBook.scss';

import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';

import { BOOK_DATA } from '../../constants/bookData';
import { BookContext } from '../../context/bookContext';
import Timeline from './Timeline';

const DescriptionBook = () => {
  const {
    isFocus,
    isPrevAvailable,
    isNextAvailable,
    currentPage,
    setCurrentPage,
    setIsFocus,
    setIsPrevAvailable,
    setIsNextAvailable,
  } = useContext(BookContext);
  const swiper = useSwiper();

  const prev = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  const next = () => {
    setCurrentPage(Math.min(currentPage + 1, BOOK_DATA.length - 1));
  };

  useEffect(() => {
    if (currentPage === 0) {
      setIsPrevAvailable(false);
    } else {
      setIsPrevAvailable(true);
    }

    if (currentPage === BOOK_DATA.length - 1) {
      setIsNextAvailable(false);
    } else {
      setIsNextAvailable(true);
    }
  }, [currentPage]);

  useEffect(() => {
    if (swiper && swiper.mousewheel && swiper.activeIndex === 1 && isFocus) {
      swiper.disable();
    } else if (swiper && swiper.mousewheel && swiper.activeIndex === 1) {
      swiper.enable();
    }
  });

  return (
      <div className="wrapper-pages-description">
        <button onClick={prev}>
          <img
              width={27}
              height={25}
              className={isPrevAvailable ? 'arrow_enabled' : 'arrow_disabled'}
              style={{ rotate: '180deg' }}
              src="./assets/imgs/arrow.svg"
              alt="prev-arrow"
          />
        </button>

        <div className="container-wrapper-pages-description">
          <div
              className="container-pages-description"
              onMouseEnter={() => setIsFocus(true)}
              onMouseLeave={() => setIsFocus(false)}
              onWheel={(e) => {
                e.deltaY > 0 ? next() : prev();
              }}>
            <Timeline />
            <FlippingPages
                direction="right-to-left"
                animationDuration={800}
                onSwipeEnd={setCurrentPage}
                selected={currentPage}>
              {BOOK_DATA.map((content, index) => (
                  <DescriptionPage key={index} data={content} />
              ))}
            </FlippingPages>
          </div>
        </div>

        <button onClick={next}>
          <img
              width={27}
              height={25}
              className={isNextAvailable ? 'arrow_enabled' : 'arrow_disabled'}
              src="./assets/imgs/arrow.svg"
              alt="next-arrow"
          />
        </button>
      </div>
  );
};

export default DescriptionBook;
