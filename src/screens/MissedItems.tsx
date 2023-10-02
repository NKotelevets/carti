import { FC, useState } from 'react';
import { StyledMissedItemsScreens } from '../styles/screens/MissedItemsScreen';
import HelperIcon from '../assets/images/question-mark-circle.png';
import Image_1 from '../assets/images/1.png';
import Image_2 from '../assets/images/2.png';
import Image_3 from '../assets/images/3.png';
import Image_4 from '../assets/images/4.png';
import Image_5 from '../assets/images/5.png';
import Image_6 from '../assets/images/6.png';
import Image_7 from '../assets/images/7.png';
import Image_8 from '../assets/images/8.png';
import { HomePageProductItem } from '../components/HomePageProductItem';
import { Button } from '../components/Button';
import { StyledSelectSizesModal } from '../styles/components/SelectSizesModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
const products = [
  {
    image: Image_1,
    name: 'HOT STEP',
    price: '180.00',
  },
  {
    image: Image_2,
    name: 'NOCTA TECH FLEECE CREW',
    price: '310.00',
  },
  {
    image: Image_3,
    name: 'NOCTA TECH FLEECE CREW PANT',
    price: '280.00',
  },
  {
    image: Image_4,
    name: 'NOCTA FLEECE HOODIE',
    price: '500.00',
  },
  {
    image: Image_5,
    name: 'ALIEN GORETEX JACKET',
    price: '400.00',
  },
  {
    image: Image_6,
    name: 'JACKET WITH SWAROVSKI® CRYSTALS',
    price: '130.00',
  },
  {
    image: Image_7,
    name: 'RD TECH CREW',
    price: '150.00',
  },
  {
    image: Image_8,
    name: 'NOCTA TECH FLEECE CREW',
    price: '310.00',
  },
];

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

export const MissedItems: FC = () => {
  const goToCard = () => {
    console.log('goToCard');
  };
  const addItemToCard = () => {
    console.log('addItemToCard');
    setIsOpenModal(true);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSelectSizesModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <StyledMissedItemsScreens>
      <h3 className="title">ITEMS YOU MISSED</h3>

      <p className="counter">
        09:59 min left <img src={HelperIcon} alt="Helper" />
      </p>
      <div className="products-container">
        {products.map((item, index) => (
          <HomePageProductItem
            image={item.image}
            price={item.price}
            name={item.name}
            key={index}
            hideDetailsButton
            actionButton={addItemToCard}
            actionButtonText="ADD TO CART"
          />
        ))}
      </div>

      <div className="bottom-navigation">
        <Button type="button" onClick={goToCard} width={'400px'} className="event-button">
          GO TO CART
        </Button>
      </div>

      <StyledSelectSizesModal
        isOpen={isOpenModal}
        onBackgroundClick={handleSelectSizesModal}
        onEscapeKeydown={handleSelectSizesModal}
      >
        <h3>SELECT SIZE</h3>

        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sizes.map((sizes) => (
            <SwiperSlide>{sizes.label}</SwiperSlide>
          ))}
        </Swiper>
        <Button flat textButton type="button" className="text-button">
          View sizing chart
        </Button>
        <Button onClick={() => handleSelectSizesModal()} transparent={true}>
          CONFIRM
        </Button>
      </StyledSelectSizesModal>
    </StyledMissedItemsScreens>
  );
};

export default MissedItems;
