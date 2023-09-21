import { StyledHomePageProductItem } from '../styles/components/HomePageProductItem';
import { FC, HTMLProps } from 'react';
import { Button } from './Button';

interface HomePageProductItemProps extends HTMLProps<HTMLElement> {
  image: string;
  price: string;
  name: string;
  hideDetailsButton?: boolean;
}

export const HomePageProductItem: FC<HomePageProductItemProps> = ({ image, price, name, hideDetailsButton }) => {
  return (
    <StyledHomePageProductItem>
      <img src={image} alt={name} />
      <div className="description-container">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
      <div className="item-overlay">
        {!hideDetailsButton && (
          <Button
            onClick={() => {
              console.log('go to prosuct');
            }}
            transparent={true}
          >
            View Details
          </Button>
        )}
      </div>
    </StyledHomePageProductItem>
  );
};
