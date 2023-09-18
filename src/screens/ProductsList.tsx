import React, { FC } from 'react';

import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Image_1 from '../assets/images/1.png';
import Image_2 from '../assets/images/2.png';
import Image_3 from '../assets/images/3.png';
import Image_4 from '../assets/images/4.png';
import Image_5 from '../assets/images/4.png';
import Image_6 from '../assets/images/4.png';
import Image_7 from '../assets/images/4.png';
import Image_8 from '../assets/images/4.png';
import { Button } from '../components/Button';
import { Carousel, CarouselRef } from 'react-round-carousel';
import 'react-round-carousel/src/index.css';

const items = [
  {
    alt: 'Photo',
    image: Image_1,
  },
  {
    alt: 'Photo',
    image: Image_2,
  },
  {
    alt: 'Photo',
    image: Image_3,
  },
  {
    alt: 'Photo',
    image: Image_4,
  },
  {
    alt: 'Photo',
    image: Image_5,
  },
  {
    alt: 'Photo',
    image: Image_6,
  },
  {
    alt: 'Photo',
    image: Image_7,
  },

  {
    alt: 'Photo',
    image: Image_8,
  },
  {
    alt: 'Photo',
    image: Image_6,
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
            <img src={Image_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_4} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="column description-product">
        <Carousel ref={carouselRef} items={items} slideOnClick />
        <div>
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
