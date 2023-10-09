import { FC } from 'react';
import { StyledPickedItemsScreens } from '../styles/screens/PickedItems';
import { v4 as uuidv4 } from 'uuid';
import { Tooltip } from 'react-tooltip';

import { HomePageProductItem } from '../components/HomePageProductItem';
import Carroussel from '../components/Carousel';
import Image_1 from '../assets/images/1.png';
import Image_2 from '../assets/images/2.png';
import Image_3 from '../assets/images/3.png';
import Image_4 from '../assets/images/4.png';
import Image_5 from '../assets/images/5.png';
import Image_6 from '../assets/images/6.png';
import Image_7 from '../assets/images/7.png';
import Image_8 from '../assets/images/8.png';
import { Button } from '../components/Button';
import HelperIcon from '../assets/images/question-mark-circle.png';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/svg';

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

const selectedProducts = products.map((item, index) => ({
  key: uuidv4(),
  content: (
    <HomePageProductItem
      image={item.image}
      price={item.price}
      name={item.name}
      key={index}
      hideDetailsButton
      width={'22vw'}
      height={'52vh'}
    />
  ),
}));

export const PickedItems: FC = () => {
  const navigate = useNavigate();

  const goToMisseditems = () => {
    navigate('/missed-items');
  };

  return (
    <StyledPickedItemsScreens>
      <div className="container">
        <h3 className="title">Congratulations, Uyi! Your picks are in</h3>
        <p className="counter">
          09:59 min left{' '}
          <img
            src={HelperIcon}
            alt="Helper"
            data-tooltip-id="tooltip"
            data-tooltip-content="Time left before items become unavailable for purchase"
          />
        </p>
        <div className="slider-container">
          <Carroussel
            cards={selectedProducts}
            height="100%"
            width="90%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>

        <div className="bottom-navigation">
          <Button type="button" onClick={goToMisseditems} width={'400px'} className="event-button">
            Continue <LeftArrow />
          </Button>
        </div>
      </div>
      <Tooltip id="tooltip" place="top" arrowColor="transparent" />
    </StyledPickedItemsScreens>
  );
};

export default PickedItems;
