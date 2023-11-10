import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { StyledEventScreens } from '../styles/screens/Event';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/svg';
import { IProductData } from '../models/event';
import { EventProductCard } from '../components/EventProductCard';
import { getProductCardStyles } from '../helpers/videoHelpers';
import { formattedTime } from '../helpers/formattedValue';
import EventVideo from '../assets/video/AnthonyJoshuaDemo.mp4';
import Image_1 from '../assets/images/Supreme.png';

export type IVideoPlayer = ReactPlayer & { wrapper: HTMLElement };

const cards = [
  {
    width: 0.130161094224924,
    height: 0.3819697761126822,
    offsetLeft: 0.67633587786259542,
    offsetTop: 0.33574660633484162,
    start: 53,
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
];

export const Event: FC = () => {
  const navigate = useNavigate();
  const ref = useRef<IVideoPlayer>(null);

  const [showPanel, setShowPanel] = useState(false);
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

  const mousemove = () => {
    setShowPanel(true);

    setTimeout(() => {
      setShowPanel(false);
    }, 10000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mousemove);
    return () => window.removeEventListener('mousemove', mousemove);
  }, []);

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
          // navigate('/picked-items');
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

      <div className={`header ${showPanel && 'showpanel'}`}>
        <div className="left-side">
          <button className="back-arrow" onClick={() => navigate('/waiting-room')}>
            <LeftArrow />
            <span>To Waiting Room</span>
          </button>
        </div>
      </div>
      <div className={`time-line-container ${showPanel && 'showpanel'}`}>
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
