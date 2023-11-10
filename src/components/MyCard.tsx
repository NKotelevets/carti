import { FC, HTMLProps } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from './Button';
import { MyCardItem } from './MyCardItem';
import { StyledMyCard } from '../styles/components/MyCard';
import { setStatusCard } from '../redux/reducers/mainReducer';

import Image_1 from '../assets/images/carti/product_1_1.png';
import Image_2 from '../assets/images/carti/product_2_1.png';
import Image_3 from '../assets/images/carti/product_3_1.png';
import Image_4 from '../assets/images/carti/product_4_1.png';

interface MyCardProps extends HTMLProps<HTMLElement> {
  showMyCard?: boolean;
}

const products = [
  {
    image: Image_1,
    name: 'Playboi Carti Black Cat Hoodie',
    price: '$ 359.00',
    size: 'S',
  },
  {
    image: Image_2,
    name: 'Playboi Carti Burn Tee',
    price: '$ 129.00',
    size: 'S',
  },
  {
    image: Image_3,
    name: 'Playboi Carti x CPFM 4 WLR King Vamp T-shirt',
    price: '$ 99.00',
    size: 'S',
  },
  {
    image: Image_4,
    name: 'Playboi Carti Fuck Off Tee',
    price: '$ 109.00',
    size: 'S',
  },
];

export const MyCard: FC<MyCardProps> = ({ showMyCard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledMyCard showMyCard={showMyCard}>
      <div className={`overlay ${showMyCard == true ? 'active' : ''}`}>
        <div className={`panel ${showMyCard == true ? 'active' : ''}`}>
          {products.map((product) => (
            <MyCardItem
              name={product.name}
              price={product.price}
              image={product.image}
              sizes={product.size.toString()}
              key={uuid()}
            />
          ))}
          <div className="bottom-nav">
            <p className="price-total">
              <span>Total:</span>
              <span>$ 610.00</span>
            </p>
            <Button onClick={() => navigate('/checkout')} className="button-action button-action-first">
              TO checkout
            </Button>
            <Button onClick={() => dispatch(setStatusCard(false))} transparent={true} className="button-action">
              continue shopping
            </Button>
          </div>
        </div>
      </div>
    </StyledMyCard>
  );
};
