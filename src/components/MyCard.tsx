import { StyledMyCard } from '../styles/components/MyCard';
import { FC, HTMLProps } from 'react';
import { Button } from './Button';
import { MyCardItem } from './MyCardItem';
import { useNavigate } from 'react-router-dom';
import Image_1 from '../assets/images/joshua/product_1_1.png';
import Image_2 from '../assets/images/joshua/product_2_1.png';
import Image_3 from '../assets/images/joshua/product_3_1.png';
import Image_4 from '../assets/images/joshua/product_4_1.png';
import { setStatusCard } from '../redux/reducers/mainReducer';
import { useDispatch } from 'react-redux';

interface MyCardProps extends HTMLProps<HTMLElement> {
  showMyCard?: boolean;
}

const products = [
  {
    image: Image_1,
    name: 'AJBXNG Olympic Jacket',
    price: '$ 169.00',
    size: 'S',
  },
  {
    image: Image_2,
    name: 'Elite ESG10 Hustle Sparring Glove 16oz',
    price: '$ 155.00',
    size: 'S',
  },
  {
    image: Image_3,
    name: 'Dark Earth Hoodie',
    price: '$ 75.00',
    size: 'S',
  },
  {
    image: Image_4,
    name: 'Sketch Tee White',
    price: '$ 25.00',
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
