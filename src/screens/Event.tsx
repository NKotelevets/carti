import { FC, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { StyledEventScreens } from '../styles/screens/Event';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/svg';
import { IProductData } from '../models/event';
import { EventProductCard } from '../components/EventProductCard';
import { getProductCardStyles } from '../helpers/videoHelpers';
import { formattedTime } from '../helpers/formattedValue';
import EventVideo from '../assets/video/Event.mp4';
import Image_1 from '../assets/images/Supreme.png';

export type IVideoPlayer = ReactPlayer & { wrapper: HTMLElement };

const cards = [
  {
    width: 0.130161094224924,
    height: 0.3819697761126822,
    offsetLeft: 0.67633587786259542,
    offsetTop: 0.33574660633484162,
    start: 55,
    duration: 10,
    player_width: 786,
    player_height: 442,
    id: 709,
    product_id: 906,
    name: 'Box Logo T-shirt',
    price: 95.0,
    currency: 'usd',
    image: Image_1,
  },

  // {
  //   width: 0.243161094224924,
  //   height: 0.5619697761126822,
  //   offsetLeft: 0.17633587786259542,
  //   offsetTop: 0.13574660633484162,
  //   start: 10,
  //   duration: 10,
  //   player_width: 786,
  //   player_height: 442,
  //   id: 709,
  //   product_id: 906,
  //   name: 'First',
  //   price: 121,
  //   currency: 'usd',
  //   image: 'https://d2pdy0anl46va0.cloudfront.net/906/57c269d5-6ff0-46f6-9a73-6743ea0d8174.webp',
  // },
  // {
  //   width: 0.243161094224924,
  //   height: 0.5619697761126822,
  //   offsetLeft: 0.07633587786259542,
  //   offsetTop: 0.13574660633484162,
  //   start: 13,
  //   duration: 10,
  //   player_width: 786,
  //   player_height: 442,
  //   id: 710,
  //   product_id: 907,
  //   name: 'Second',
  //   price: 32,
  //   currency: 'usd',
  //   image: 'https://d2pdy0anl46va0.cloudfront.net/907/eee3f987-e26e-4a98-9691-730b162ed6d4.webp',
  // },
];

export const Event: FC = () => {
  const navigate = useNavigate();
  const ref = useRef<IVideoPlayer>(null);

  const [isPlay, setIsPlay] = useState(false);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const [currentSeek, setCurrentSeek] = useState<number>(0);
  const [screen, setScreen] = useState<{ width: number; height: number }>();

  const handleGetDuration = (duration: number) => {
    setTotalDuration(duration);
  };

  const handleProcess = ({ playedSeconds }: { playedSeconds: number }) => {
    setCurrentSeek(playedSeconds);
  };

  const wrapper = (ref as React.MutableRefObject<IVideoPlayer>)?.current?.wrapper;

  return (
    <StyledEventScreens>
      <ReactPlayer
        className="player"
        url={EventVideo}
        width="100%"
        height="100%"
        playing={isPlay}
        playsinline
        stopOnUnmount
        currentSeek={currentSeek}
        onEnded={() => {
          setIsPlay(false);
          navigate('/picked-items');
        }}
        ref={ref}
        onDuration={handleGetDuration}
        onReady={() => {
          setIsPlay(true);
          setScreen({ width: wrapper?.clientWidth, height: wrapper.clientHeight });
        }}
        onProgress={(e) => handleProcess(e)}
        onStart={() => {
          setScreen({ width: wrapper?.clientWidth, height: wrapper.clientHeight });
        }}
      />
      <div className="products-wrapper">
        {cards?.length !== 0 &&
          cards?.map((product: IProductData) => (
            <EventProductCard
              key={product.id}
              className="resize"
              isPlay={
                currentSeek >= Math.trunc(Number(product.start)) &&
                currentSeek <= Math.trunc(Number(product.start)) + Math.trunc(Number(product.duration))
              }
              card={product}
              handleCardClick={() => console.log('test')}
              style={getProductCardStyles({
                currentSeek,
                item: product,
                clientWidth: screen?.width ?? wrapper?.clientWidth,
                clientHeight: screen?.height ?? wrapper?.clientHeight,
              })}
              startPos={{
                x: (screen?.width ?? wrapper?.clientWidth) * Number(product.offsetLeft),
                y: (screen?.height ?? wrapper?.clientHeight) * Number(product.offsetTop),
              }}
              currency={'usd'}
            />
          ))}
      </div>

      <div className="header">
        <div className="left-side">
          <button className="back-arrow" onClick={() => navigate('/waiting-room')}>
            <LeftArrow />
            <span>To Waiting Room</span>
          </button>
        </div>
      </div>
      <div className="time-line-container">
        <span>{formattedTime(currentSeek)}</span>
        <div className="time-line">
          <div
            className="time-line-progress"
            style={{ width: `${(Number((currentSeek / totalDuration).toFixed(2)) * 100).toString()}%` }}
          ></div>
        </div>
        <span>{formattedTime(totalDuration)}</span>
      </div>
    </StyledEventScreens>
  );
};

export default Event;
