import { StyledCheckoutProductItem } from '../styles/components/CheckoutProductItem';
import { FC, HTMLProps, useState } from 'react';
import Image_8 from '../assets/images/8.png';
import { PlusIcon, MinusIcon } from '../assets/svg';
import { Button } from './Button';

interface CheckoutProductItemProps extends HTMLProps<HTMLElement> {}

export const CheckoutProductItem: FC<CheckoutProductItemProps> = ({}) => {
  const [count, setCount] = useState(1);
  return (
    <StyledCheckoutProductItem>
      <img src={Image_8} alt={'image'} className="image" />
      <div className="description-container">
        <div className="name-container">
          <p className="title">NOCTA TECH FLEECE CREW</p>
          <p className="sizes">
            size: <span>xl</span>
          </p>
          <p className="price">$ 310.00</p>
        </div>
        <div className="selected-sizes">
          <div className="counter-container">
            <Button onClick={() => setCount((prev) => prev - 1)} textButton width="auto">
              <img src={MinusIcon} alt="minus" />
            </Button>
            <span className="counter">{count}</span>
            <Button onClick={() => setCount((prev) => prev + 1)} textButton width="auto">
              <img src={PlusIcon} alt="minus" />
            </Button>
          </div>
        </div>
      </div>
    </StyledCheckoutProductItem>
  );
};
