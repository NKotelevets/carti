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
      <div className={`overlay ${showMyCard == true ? 'active' : ''}`}>
        <div className={`panel ${showMyCard == true ? 'active' : ''}`}>
          <MyCardItem />
          <MyCardItem />
          <MyCardItem />
          <div className="bottom-nav">
            <Button onClick={() => navigate('/checkout')} transparent={true} className="button-action">
              TO checkout
            </Button>
          </div>
        </div>
      </div>
    </StyledMyCard>
  );
};
