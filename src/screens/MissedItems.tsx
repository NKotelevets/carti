import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

import { HomePageProductItem } from '../components/HomePageProductItem';
import { MyCard } from '../components/MyCard';
import { Button } from '../components/Button';
import { setStatusCard } from '../redux/reducers/mainReducer';
import { RootState } from '../redux/store';

import { StyledSelectSizesModal } from '../styles/components/SelectSizesModal';
import { StyledMissedItemsScreens } from '../styles/screens/MissedItemsScreen';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';

import HelperIcon from '../assets/images/question-mark-circle.png';
import Image_1 from '../assets/images/carti/product_1_1.png';
import Image_2 from '../assets/images/carti/product_2_1.png';
import Image_3 from '../assets/images/carti/product_3_1.png';
import Image_4 from '../assets/images/carti/product_4_1.png';
import Sizes from '../assets/images/Sizes.png';
import { Close } from '../assets/svg';

const products = [
  {
    image: Image_1,
    name: 'Playboi Carti Black Cat Hoodie',
    price: '$ 359.00',
  },
  {
    image: Image_2,
    name: 'Playboi Carti Burn Tee',
    price: '$ 129.00',
  },
  {
    image: Image_3,
    name: 'Playboi Carti x CPFM 4 WLR King Vamp T-shirt',
    price: '$ 99.00',
  },
  {
    image: Image_4,
    name: 'Playboi Carti Fuck Off Tee',
    price: '$ 109.00',
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [isOpenModalSizes, setIsOpenModalSizes] = useState(false);

  const { myCardActive } = useSelector((state: RootState) => state.main);

  // const goToCard = () => {
  //   navigate('/checkout');
  //   // console.log('goToCard');
  //   // dispatch(setStatusCard(true));
  // };

  const addItemToCard = () => {
    console.log('addItemToCard');
    setIsOpenModal(true);
  };

  const handleSelectSizesModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleSelectSizesChartModal = () => {
    setIsOpenModalSizes(!isOpenModalSizes);
  };

  const handleChangeSize = (e: any) => {
    setSelectedSize(e.target.value);
  };

  const addNewProduct = () => {
    setIsOpenModal(!isOpenModal);
    dispatch(setStatusCard(!myCardActive));
  };

  return (
    <StyledMissedItemsScreens scrollEnable={!myCardActive}>
      <h3 className="title">ITEMS YOU MISSED</h3>

      <p className="counter">
        09:59 min left{' '}
        <img
          src={HelperIcon}
          alt="Helper"
          data-tooltip-id="tooltip"
          data-tooltip-content="Time left before items become unavailable for purchase"
        />
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
            height={'330px'}
            width={window.innerWidth < 965 ? (window.innerWidth < 610 ? '100%' : '45%') : '220px'}
            minheight={'373px'}
          />
        ))}
      </div>

      <div className="bottom-navigation">
        <Button type="button" onClick={() => navigate('/checkout')} width={'400px'} className="event-button">
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
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 6,
            },
          }}
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
        <Button flat textButton type="button" className="text-button" onClick={handleSelectSizesChartModal}>
          View sizing chart
        </Button>
        <Button onClick={addNewProduct} transparent={true}>
          CONFIRM
        </Button>
      </StyledSelectSizesModal>

      <StyledProductSizingChart
        isOpen={isOpenModalSizes}
        onBackgroundClick={handleSelectSizesChartModal}
        onEscapeKeydown={handleSelectSizesChartModal}
      >
        <button className="close-button" onClick={handleSelectSizesChartModal}>
          <Close />
        </button>
        <h3>sizing chart</h3>
        <p>Choose your size according the information below</p>
        <img src={Sizes} alt="sizes" />
      </StyledProductSizingChart>
      <MyCard showMyCard={myCardActive} />
      <Tooltip id="tooltip" place="top" arrowColor="transparent" />
    </StyledMissedItemsScreens>
  );
};

export default MissedItems;
