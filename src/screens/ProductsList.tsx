import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { CarouselRef } from 'react-round-carousel';
import { Button } from '../components/Button';
import RoundedSlider from '../components/RoundedSlider';

import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';
import { Close } from '../assets/svg';

import Sizes from '../assets/images/Sizes.png';
import Image_1 from '../assets/images/carti/product_1_1.png';
import Image_2 from '../assets/images/carti/product_2_1.png';
import Image_3 from '../assets/images/carti/product_3_1.png';
import Image_4 from '../assets/images/carti/product_4_1.jpg';
import Image_6 from '../assets/images/carti/product_1_2.png';

const items = [
  {
    alt: 'Photo',
    image: Image_1,
  },
  {
    alt: 'Photo',
    image: Image_2,
    checked: true,
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
];

export const ProductsList: FC = () => {
  const carouselRef = React.createRef<CarouselRef>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 965);
  const navigate = useNavigate();
  function handleSelectSizesModal() {
    setIsOpenModal(!isOpenModal);
  }

  const listenWidth = () => {
    const width = window.innerWidth;

    if (width < 965) {
      !isMobile && // to limit setting state only the first time
        setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', listenWidth);
    return () => window.removeEventListener('resize', listenWidth);
  }, [listenWidth]);

  return (
    <StyledProductScreens>
      {isMobile && (
        <div className="rounded-slider-container">
          <RoundedSlider
            ref={carouselRef}
            items={items}
            slideOnClick
            itemWidth={isMobile ? 100 : 210}
            onChangeSlide={(index) => {
              console.log('122112', index);
            }}
          />
        </div>
      )}
      <div className="column image-container">
        <Swiper
          direction={isMobile ? 'horizontal' : 'vertical'}
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
            <img src={Image_1} alt="image_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_6} alt="image_2" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={Image_7} alt="image_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image_8} alt="image_4" />
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className="column description-product">
        {!isMobile && (
          <RoundedSlider
            ref={carouselRef}
            items={items}
            slideOnClick
            itemWidth={isMobile ? 50 : 210}
            onChangeSlide={(index) => {
              console.log('122112', index);
            }}
          />
        )}
        <div className="description-container">
          <h2 className="name-product">Playboi Carti Black Cat Hoodie</h2>
          <p className="price-product">$359</p>
          <p className="description-product">
            Description: The Playboi Carti x CPFM 4 WLR King Vamp T-Shirt White became available from a collaboration
            between Cactus Plant Free Market (CPFM), an urban brand of Playboi Carti, the rapper. The design showcases a
            white color.
          </p>
          <Button flat textButton type="button" className="text-button" onClick={handleSelectSizesModal}>
            View sizing chart
          </Button>
        </div>
        <Button className="go-to-waiting-btn" onClick={() => navigate('/waiting-room')}>
          join event
        </Button>
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
