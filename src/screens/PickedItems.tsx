import { FC } from 'react';
import { StyledPickedItemsScreens } from '../styles/screens/PickedItems';
import { v4 as uuidv4 } from 'uuid';
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

const goToMisseditems = () => {
  console.log('To missed items');
};

const selectedProducts = products.map((item, index) => ({
  key: uuidv4(),
  content: <HomePageProductItem image={item.image} price={item.price} name={item.name} key={index} hideDetailsButton />,
}));

export const PickedItems: FC = () => {
  return (
    <StyledPickedItemsScreens>
      <p className="counter">
        09:59 min left <img src={HelperIcon} alt="Helper" />
      </p>
      <h3 className="title">CONGRATULATIONS! YOUR PICKS ARE IN</h3>
      <div className="slider-container">
        <Carroussel cards={selectedProducts} height="500px" width="90%" margin="0 auto" offset={2} showArrows={false} />
      </div>
      <Button type="button" onClick={goToMisseditems} width={'400px'} className="event-button">
        ITEMS YOU MISSED
      </Button>
    </StyledPickedItemsScreens>
  );
};

export default PickedItems;
