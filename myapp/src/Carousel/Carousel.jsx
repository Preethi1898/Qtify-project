import { Navigation} from 'swiper/modules';
import CarouselLeftNavigation from './LeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './RightNavigation/CarouselRightNavigation';
import { Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from "swiper/react";
import styles from './Carousel.module.css';
import { useEffect } from 'react';

import 'swiper/css';

  const Carousel = ({ data,CardComponent }) => {
    const data1=[1,2,3,4,5];
    console.log(data);
    return (
      <div className={styles.wrapper}>
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
          
          <CarouselLeftNavigation/>
          {data1.map((item)=>{
              <SwiperSlide>Slide ${item}</SwiperSlide>
          })}
          <CarouselRightNavigation/>
        </Swiper>
      </div>
    );
  };
  
  export default Carousel;