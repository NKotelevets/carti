import React, { FC, useState } from 'react';

import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Button } from '../components/Button';
import { Carousel, CarouselRef } from 'react-round-carousel';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';
import 'react-round-carousel/src/index.css';
import Sizes from '../assets/images/Sizes.png';
import Image_1 from '../assets/images/joshua/product_1_1.png';
import Image_2 from '../assets/images/joshua/product_2_1.png';
import Image_3 from '../assets/images/joshua/product_3_1.png';
import Image_4 from '../assets/images/joshua/product_4_1.png';
import Image_6 from '../assets/images/joshua/product_1_3.png';
import Image_7 from '../assets/images/joshua/product_1_4.png';
import Image_8 from '../assets/images/joshua/product_1_5.png';

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
            <img src={Image_1} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Image_5} />
          </SwiperSlide> */}
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
          <h2 className="name-product">AJBXING Olympic Jacket</h2>
          <p className="price-product">$169</p>
          <p className="description-product">
            Description: Adidas 2012 Olympic Mens Large Track Jacket Team GB Great Britain London Games
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
