import { FC } from 'react';
import { StyledPickedItemsScreens } from '../styles/screens/PickedItems';
import { v4 as uuidv4 } from 'uuid';
import { Tooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';

import { HomePageProductItem } from '../components/HomePageProductItem';
import Carroussel from '../components/Carousel';
import Image_1 from '../assets/images/joshua/product_1_1.png';
import Image_2 from '../assets/images/joshua/product_2_1.png';
import Image_3 from '../assets/images/joshua/product_3_1.png';
import Image_4 from '../assets/images/joshua/product_4_1.png';

import { Button } from '../components/Button';
import HelperIcon from '../assets/images/question-mark-circle.png';

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

const selectedProducts = products.map((item, index) => ({
  key: uuidv4(),
  content: (
    <HomePageProductItem
      image={item.image}
      price={item.price}
      name={item.name}
      key={index}
      hideDetailsButton
      width={'20vw'}
      height={window.innerWidth < 965 ? '55vh' : '57vh'}
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
            Continue
          </Button>
        </div>
      </div>
      <Tooltip id="tooltip" place="top" arrowColor="transparent" />
    </StyledPickedItemsScreens>
  );
};

export default PickedItems;
