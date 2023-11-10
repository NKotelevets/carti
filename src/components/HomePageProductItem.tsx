import { StyledHomePageProductItem } from '../styles/components/HomePageProductItem';
import { FC, HTMLProps } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

interface HomePageProductItemProps extends HTMLProps<HTMLElement> {
  image: string;
  price: string;
  name: string;
  hideDetailsButton?: boolean;
  actionButton?: () => void;
  actionButtonText?: string;
  width?: string;
  height?: string;
  minheight?: string;
}

export const HomePageProductItem: FC<HomePageProductItemProps> = ({
  image,
  price,
  name,
  hideDetailsButton,
  actionButton,
  actionButtonText,
  width,
  height,
  minheight,
}) => {
  const navigate = useNavigate();

  return (
    <StyledHomePageProductItem width={width} height={height} minheight={minheight}>
      <img src={image} alt={name} />
      <div className="description-container">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
      {actionButton && actionButtonText && (
        <Button onClick={actionButton} transparent={true} className="button-action">
          {actionButtonText}
        </Button>
      )}
      <div className="item-overlay">
        {!hideDetailsButton && (
          <Button onClick={() => navigate('/products')} transparent={true}>
            View Details
          </Button>
        )}
      </div>
    </StyledHomePageProductItem>
  );
};
