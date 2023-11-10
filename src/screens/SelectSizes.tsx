import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Slider from 'react-slick';
import 'react-round-carousel/src/index.css';

import { Button } from '../components/Button';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';
import { StyledProductScreens } from '../styles/screens/ProductScreens';
import { Close } from '../assets/svg';

import Sizes from '../assets/images/Sizes.png';
import Image_1 from '../assets/images/carti/product_1_1.png';
import Image_2 from '../assets/images/carti/product_2_1.png';
import Image_3 from '../assets/images/carti/product_3_1.png';
import Image_4 from '../assets/images/carti/product_4_1.jpg';
import Image_6 from '../assets/images/carti/product_1_2.png';
// import Image_7 from '../assets/images/joshua/product_1_4.png';
// import Image_8 from '../assets/images/joshua/product_1_5.png';

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
  // {
  //   alt: 'Photo',
  //   image: Image_4,
  //   content: '',
  // },
];

export const SelectSizes: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  const handleChangeSize = (e: any) => {
    setSelectedSize(e.target.value);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 965);

  const listenWidth = () => {
    const width = window.innerWidth;

    if (width < 965) {
      !isMobile && setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', listenWidth);
    return () => window.removeEventListener('resize', listenWidth);
  }, [listenWidth]);

  const handleSelectSizesModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    centerPadding: '0',
    swipeToSlide: true,
    slidesToScroll: true,
    focusOnSelect: true,
    arrows: false,

    beforeChange: (_: any, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = items.map((item: any, idx: number) => {
    return (
      <div className={idx === imageIndex ? 'activeSlide' : 'slide'} key={uuidv4()}>
        <div className="slideWrapper">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="overlay"></div>
      </div>
    );
  });

  const selectSizes = () => (
    <div className="select-sizes-container">
      <p>Select your size here</p>

      <Swiper
        slidesPerView={isMobile ? 6 : 9}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sizes.map((sizes) => (
          <SwiperSlide key={uuidv4()}>
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
    </div>
  );

  return (
    <StyledProductScreens>
      {isMobile && (
        <div className="inner-slider">
          <Slider {...settings}>{templateImages}</Slider>
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
        {/* <RoundedSlider
          ref={carouselRef}
          items={items}
          slideOnClick
          itemWidth={210}
          onChangeSlide={(index) => {
            console.log('test', index);
          }}
        /> */}
        {!isMobile && (
          <div className="inner-slider">
            <Slider {...settings}>{templateImages}</Slider>
          </div>
        )}
        {isMobile && selectSizes()}

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

        {!isMobile && selectSizes()}

        <Button className="go-to-waiting-btn" onClick={() => navigate('/waiting-room')} transparent={true}>
          To waiting room
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

export default SelectSizes;
