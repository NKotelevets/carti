import React, { FC, useState } from 'react';

import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Button } from '../components/Button';
import { Carousel, CarouselRef } from 'react-round-carousel';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';
import 'react-round-carousel/src/index.css';
import Sizes from '../assets/images/Sizes.png';
import Image_1 from '../assets/images/Lando/product_1_1.png';
import Image_2 from '../assets/images/Lando/product_2_1.png';
import Image_3 from '../assets/images/Lando/product_3_1.png';
import Image_4 from '../assets/images/Lando/product_4_1.png';
import Image_5 from '../assets/images/Lando/product_1_2.png';
import Image_6 from '../assets/images/Lando/product_1_3.png';
import Image_7 from '../assets/images/Lando/product_1_4.png';
import Image_8 from '../assets/images/Lando/product_1_5.png';

import { Close } from '../assets/svg';

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
];

export const ProductsList: FC = () => {
  const carouselRef = React.createRef<CarouselRef>();
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSelectSizesModal() {
    setIsOpenModal(!isOpenModal);
  }
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
            <img src={Image_5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_8} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="column description-product">
        <Carousel ref={carouselRef} items={items} slideOnClick />
        <div className="description-container">
          <h2 className="name-product">1:2 SCALE 2023 'TRIPLE CROWN' MINI HELMET</h2>
          <p className="price-product">£179.00</p>
          <p className="description-product">
            A special race deserves a special helmet, and Lando understood the assignment. A nod to McLaren's success in
            Monaco, this helmet brings the old-school vibes to celebrate their historic Triple Crown achievement. The
            helmet design is inspired by McLaren's iconic 1984 Monaco Grand Prix winning livery, but with a Lando Norris
            twist. The same Triple Crown logo that is on the special McLaren livery sits on the back of the helmet,
            alongside all of Lando's usual logos that have been given a retro look.
          </p>
          <Button flat textButton type="button" className="text-button" onClick={handleSelectSizesModal}>
            View sizing chart
          </Button>
        </div>
      </div>

      <StyledProductSizingChart
        isOpen={isOpenModal}
        onBackgroundClick={handleSelectSizesModal}
        onEscapeKeydown={handleSelectSizesModal}
      >
        <button className="close-button" onClick={handleSelectSizesModal}>
          <Close />
        </button>
        <h3>sizing chart</h3>
        <p>Choose your size according the information below</p>
        <img src={Sizes} alt="sizes" />
      </StyledProductSizingChart>
    </StyledProductScreens>
  );
};

export default ProductsList;
