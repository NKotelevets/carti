import React from 'react';

import { StyledEventProductCard } from '../styles/components/StyledEventProductCard';
import { formattedValue } from '../helpers/formattedValue';
import { IVideoEventCard } from '../models/event';

import tshort from '../assets/images/tshirt.png';
import { ProgressBorder } from '../assets/svg/ProgressBorder';
import { Image } from './Image';
import { Button } from './Button';

type ProductCardProps = {
  card: IVideoEventCard;
  handleCardClick: (card: IVideoEventCard) => void;
  className?: string;
  disabled?: boolean;
  isPlay?: boolean;
  startPos?: { x: number; y: number };
  currency?: string;
  currentSeek?: number;
} & React.ComponentProps<'div'>;

export const EventProductCard: React.FC<ProductCardProps> = ({
  card,
  handleCardClick,
  className = '',
  disabled = false,
  style,
  isPlay = false,
  startPos,
  currency,
}) => {
  const animationstartpos = Number(card.start);
  const animationDuration = Number(card.start) + Number(card.duration);
  // const animationstartpos = (Number(seekChanged) - Number(card.start)) / Number(card.duration);
  // const animationDuration =
  //   Number(seekChanged) < Number(card.start)
  //     ? Number(card.duration)
  //     : Number(card.start) + Number(card.duration) - Number(seekChanged) + 1;

  return (
    <StyledEventProductCard
      className={className}
      data-id={card.product_id}
      disabled={disabled}
      style={style}
      isplay={isPlay}
      duration={animationDuration}
      animationstartpos={animationstartpos < 0 ? 0 : animationstartpos}
      data-x={startPos?.x}
      data-y={startPos?.y}
    >
      <ProgressBorder className="animation" />
      <div
        className="select"
        onClick={() =>
          handleCardClick({
            ...card,
            start: null,
            duration: null,
            width: null,
            height: null,
            offsetTop: null,
            offsetLeft: null,
          })
        }
      ></div>
      <div className="img-container">
        <Image src={card.image} alt="Product image" onError={({ currentTarget }) => (currentTarget.src = tshort)} />
      </div>
      <div className="info-container">
        <div className="name-container">
          <p>{card.name}</p>
        </div>
        <p>{formattedValue(Number(card.price), currency)}</p>
      </div>
      <Button className="btn" onClick={() => console.log(123)} transparent={true}>
        Buy Now
      </Button>
    </StyledEventProductCard>
  );
};
