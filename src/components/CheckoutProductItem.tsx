import { StyledCheckoutProductItem } from '../styles/components/CheckoutProductItem';
import { FC, HTMLProps, useState } from 'react';
import { PlusIcon, MinusIcon } from '../assets/svg';
import { Button } from './Button';

interface CheckoutProductItemProps extends HTMLProps<HTMLElement> {
  name: string;
  price: string;
  image: string;
  size: number | undefined;
}

export const CheckoutProductItem: FC<CheckoutProductItemProps> = ({ name, price, size, image }) => {
  const [count, setCount] = useState(1);
  return (
    <StyledCheckoutProductItem>
      <img src={image} alt={'image'} className="image" />
      <div className="description-container">
        <div className="name-container">
          <p className="title">{name}</p>
          <p className="sizes">
            size: <span>{size}</span>
          </p>
          <p className="price">{price}</p>
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
