import React, { FC } from 'react';

import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Button } from '../components/Button';
import { Carousel, CarouselRef } from 'react-round-carousel';
import 'react-round-carousel/src/index.css';

import Image_1 from '../assets/images/1.png';
import Image_2 from '../assets/images/2.png';
import Image_3 from '../assets/images/3.png';
import Image_4 from '../assets/images/4.png';
import Image_5 from '../assets/images/5.png';
import Image_6 from '../assets/images/6.png';
import Image_7 from '../assets/images/7.png';
import Image_8 from '../assets/images/8.png';
import Image_9 from '../assets/images/9.png';
import Image_10 from '../assets/images/10.png';
import Image_11 from '../assets/images/11.png';
import Image_12 from '../assets/images/12.png';

const items = [
  {
    alt: 'Photo',
    image: Image_1,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_2,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_3,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_4,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_5,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_6,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_7,
    content: '',
  },

  {
    alt: 'Photo',
    image: Image_8,
    content: '',
  },
  {
    alt: 'Photo',
    image: Image_6,
    content: '',
  },
];

export const ProductsList: FC = () => {
  const carouselRef = React.createRef<CarouselRef>();

  return (
    <StyledProductScreens>
      <div className="column image-container">
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Image_9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_12} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="column description-product">
        <Carousel ref={carouselRef} items={items} slideOnClick />
        <div className="description-container">
          <h2 className="name-product">NOCTA TECH FLEECE CREW</h2>
          <p className="price-product">$ 5.100</p>
          <p className="description-product">
            This straight velvet coat combines the elegance of classic fashion with the contemporary attitude. It has a
            slim fit, enhanced with wide lapels and flap pockets. The embroidered logo adds an iconic finishing touch.
          </p>
          <Button flat textButton type="button" className="text-button">
            View sizing chart
          </Button>
        </div>
      </div>
    </StyledProductScreens>
  );
};

export default ProductsList;
