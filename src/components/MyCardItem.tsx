import { StyledMyCardItem } from '../styles/components/MyCardItem';
import { FC, HTMLProps, useState } from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '../assets/svg';
import { Button } from './Button';

interface MyCardItemProps extends HTMLProps<HTMLElement> {
  name: string;
  price: string;
  image: string;
  sizes: undefined | string;
}

export const MyCardItem: FC<MyCardItemProps> = ({ name, price, sizes, image }) => {
  const [count, setCount] = useState(1);
  return (
    <StyledMyCardItem>
      <img src={image} alt="image" className="image" />
      <div className="description-container">
        <p className="title">{name}</p>
        <p className="sizes">
          size: <span>{sizes}</span>
        </p>
        <div className="selected-sizes">
          <p className="price">{price}</p>
          <div className="counter-container">
            <Button onClick={() => setCount((prev) => prev - 1)} textButton width="auto">
              <img src={MinusIcon} alt="minus" />
            </Button>
            <span className="counter">{count}</span>
            <Button onClick={() => setCount((prev) => prev + 1)} textButton width="auto">
              <img src={PlusIcon} alt="plus" />
            </Button>
          </div>
          <img src={TrashIcon} alt="remove" className="trash" />
        </div>
      </div>
    </StyledMyCardItem>
  );
};
