import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import Intro from "../intro";
import ImageBook from "../book/ImageBook";
import DescriptionBook from "../book/DescriptionBook";

const VerticalSwiper = () => {
  return (
    <Swiper
      id="app-contains"
      modules={[Mousewheel]}
      mousewheel={true}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
      direction={'vertical'}
    >
      <SwiperSlide>
        <Intro />
      </SwiperSlide>
      <SwiperSlide>
        <ImageBook />
      </SwiperSlide>
      <SwiperSlide>
        <DescriptionBook />
      </SwiperSlide>
    </Swiper>
  )
}

export default VerticalSwiper;