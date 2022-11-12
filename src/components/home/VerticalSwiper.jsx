import { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import Intro from "../intro";
import Book from "../book/Book";
import { BookContext } from '../../context/bookContext';

const VerticalSwiper = () => {
  
  const { isFocus, isPrevAvailable, isNextAvailable } = useContext(BookContext);

  const onChange = (swiper) => {
    console.log('rerender');

    // check swiper active tab and get from Book if prev and next page available
    // in depend of page availability block swiping to the top or bottom
    // to block swiper it is necessary to check if mousewheel module is loaded
    // try to block prev and next or disable swiper at all
    
    console.log('isFocus -> ', isFocus);
    if ( swiper && swiper.mousewheel ) {
      if ( swiper.activeIndex === 1 && isFocus ) {
        swiper.allowSlidePrev = false;
        swiper.allowSlideNext = false;
      } else {
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
      }
    }
  }
  
  return (
    <Swiper
      modules={[Mousewheel]}
      mousewheel={true}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
      direction={'vertical'}
      onActiveIndexChange={onChange}
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <Book />
      </SwiperSlide>
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
    </Swiper>
  )
}

export default VerticalSwiper;