import { FC, useState } from 'react';
import { StyledMissedItemsScreens } from '../styles/screens/MissedItemsScreen';
import HelperIcon from '../assets/images/question-mark-circle.png';
import Image_1 from '../assets/images/joshua/product_1_1.png';
import Image_2 from '../assets/images/joshua/product_2_1.png';
import Image_3 from '../assets/images/joshua/product_3_1.png';
import Image_4 from '../assets/images/joshua/product_4_1.png';
import { HomePageProductItem } from '../components/HomePageProductItem';
import { Button } from '../components/Button';
import { StyledSelectSizesModal } from '../styles/components/SelectSizesModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import Sizes from '../assets/images/Sizes.png';

import 'swiper/css';
import { setStatusCard } from '../redux/reducers/mainReducer';
import { MyCard } from '../components/MyCard';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { StyledProductSizingChart } from '../styles/components/ProductSizingChartModal';
import { Close } from '../assets/svg';
import { Tooltip } from 'react-tooltip';
import { useDispatch } from 'react-redux';
const products = [
  {
    image: Image_1,
    name: 'AJBXNG Olympic Jacket',
    price: '$ 169.00',
  },
  {
    image: Image_2,
    name: 'Elite ESG10 Hustle Sparring Glove 16oz',
    price: '$ 155.00',
  },
  {
    image: Image_3,
    name: 'Dark Earth Hoodie',
    price: '$ 75.00',
  },
  {
    image: Image_4,
    name: 'Sketch Tee White',
    price: '$ 25.00',
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const { myCardActive } = useSelector((state: RootState) => state.main);
  const navigate = useNavigate();

  // const goToCard = () => {
  //   navigate('/checkout');
  //   // console.log('goToCard');
  //   // dispatch(setStatusCard(true));
  // };
  const addItemToCard = () => {
    console.log('addItemToCard');
    setIsOpenModal(true);
  };

  function handleSelectSizesModal() {
    setIsOpenModal(!isOpenModal);
  }

  const [isOpenModalSizes, setIsOpenModalSizes] = useState(false);

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
    <StyledMissedItemsScreens>
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
          slidesPerView={6}
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
