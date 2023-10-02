import { StyledMyCard } from '../styles/components/MyCard';
import { FC, HTMLProps } from 'react';
import { Button } from './Button';
import { MyCardItem } from './MyCardItem';

interface MyCardProps extends HTMLProps<HTMLElement> {}

export const MyCard: FC<MyCardProps> = ({}) => {
  return (
    <StyledMyCard>
      <MyCardItem />
      <MyCardItem />
      <MyCardItem />
      <div className="bottom-nav">
        <Button onClick={() => console.log()} transparent={true} className="button-action">
          TO checkout
        </Button>
      </div>
    </StyledMyCard>
  );
};
