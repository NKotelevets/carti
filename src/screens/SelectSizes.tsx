import React, { FC, useState } from 'react';

import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Button } from '../components/Button';
import { Carousel, CarouselRef } from 'react-round-carousel';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';
import 'react-round-carousel/src/index.css';
import Sizes from '../assets/images/Sizes.png';
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
import { Close } from '../assets/svg';
import { useNavigate } from 'react-router-dom';

const sizes = [
  {
    label: 'XS',
  },
  {
    label: 'S',
  },
  {
    label: 'M',
  },
  {
    label: 'L',
  },
  {
    label: 'XL',
  },
  {
    label: '2XL',
  },
  {
    label: '3XL',
  },
  {
    label: '4XL',
  },
  {
    label: '5XL',
  },
];

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

export const SelectSizes: FC = () => {
  const carouselRef = React.createRef<CarouselRef>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  const handleChangeSize = (e: any) => {
    setSelectedSize(e.target.value);
  };

  const handleSelectSizesModal = () => {
    setIsOpenModal(!isOpenModal);
  };

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
          <Button flat textButton type="button" className="text-button" onClick={handleSelectSizesModal}>
            View sizing chart
          </Button>
        </div>

        <div className="select-sizes-container">
          <p>Select your size here</p>

          <Swiper
            slidesPerView={9}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {sizes.map((sizes) => (
              <SwiperSlide>
                <label
                  className={`select-size-options ${
                    selectedSize && selectedSize === sizes.label && 'selected-size-effect'
                  }`}
                  key={sizes.label}
                >
                  {sizes.label}
                  <input type="radio" name="sizes" id={sizes.label} value={sizes.label} onChange={handleChangeSize} />
                </label>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button onClick={() => navigate('/waiting-room')} transparent={true}>
            To waiting room
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

export default SelectSizes;
