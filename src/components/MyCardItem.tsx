import { StyledMyCardItem } from '../styles/components/MyCardItem';
import { FC, HTMLProps, useState } from 'react';
import Image_8 from '../assets/images/8.png';
import { PlusIcon, MinusIcon, TrashIcon } from '../assets/svg';
import { Button } from './Button';

interface MyCardItemProps extends HTMLProps<HTMLElement> {}

export const MyCardItem: FC<MyCardItemProps> = ({}) => {
  const [count, setCount] = useState(1);
  return (
    <StyledMyCardItem>
      <img src={TrashIcon} alt="remove" className="trash" />
      <img src={Image_8} alt={'image'} className="image" />
      <p className="title">NOCTA TECH FLEECE CREW</p>
      <p className="price">$ 310.00</p>
      <div className="selected-sizes">
        <p className="sizes">
          size: <span>xl</span>
        </p>
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
    </StyledMyCardItem>
  );
};
