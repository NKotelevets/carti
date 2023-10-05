import { StyledMyCard } from '../styles/components/MyCard';
import { FC, HTMLProps } from 'react';
import { Button } from './Button';
import { MyCardItem } from './MyCardItem';
import { useNavigate } from 'react-router-dom';

interface MyCardProps extends HTMLProps<HTMLElement> {
  showMyCard?: boolean;
}

export const MyCard: FC<MyCardProps> = ({ showMyCard }) => {
  const navigate = useNavigate();
  return (
    <StyledMyCard showMyCard={showMyCard}>
      <MyCardItem />
      <MyCardItem />
      <MyCardItem />
      <div className="bottom-nav">
        <Button onClick={() => navigate('/checkout')} transparent={true} className="button-action">
          TO checkout
        </Button>
      </div>
    </StyledMyCard>
  );
};
