import { FC, useState } from 'react';
import ReactPlayer from 'react-player';
import { StyledHomeScreens } from '../styles/screens/HomeScreens';
import { Button } from '../components/Button';
import { ClockIcon, CameraIcon, Mute, DownArrow } from '../assets/svg';
import { HomePageProductItem } from '../components/HomePageProductItem';
import { Footer } from '../components/Footer';
import LandoMain from '../assets/video/LandoMain.mp4';
import { useInView } from 'react-intersection-observer';
import Image_1 from '../assets/images/Lando/product_1_1.png';
import Image_2 from '../assets/images/Lando/product_2_1.png';
import Image_3 from '../assets/images/Lando/product_3_1.png';
import Image_4 from '../assets/images/Lando/product_4_1.png';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    image: Image_1,
    name: "1:2 SCALE 2023 'TRIPLE CROWN' MINI HELMET",
    price: '£179.00',
  },
  {
    image: Image_2,
    name: 'BEACHBALL LONG SLEEVE TEE',
    price: '£40.00',
  },
  {
    image: Image_3,
    name: 'LN TRUCKER HAT',
    price: '£25.00',
  },
  {
    image: Image_4,
    name: 'LN HOODIE',
    price: '£70.00',
  },
];

export const Home: FC = () => {
  const navigate = useNavigate();
  const handleJoinEvent = () => {
    navigate('/waiting-room');
  };
  const [muted, setMuted] = useState(true);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <StyledHomeScreens>
      <div className="player-container">
        <ReactPlayer
          className="player"
          url={LandoMain}
          width="100%"
          height="100%"
          playing
          loop
          muted={muted}
          playsinline
          stopOnUnmount
        />
        <button className="mute-button" onClick={() => setMuted((prev) => !prev)}>
          <Mute color={'#fff'} muted={muted} />
        </button>

        <div className="content-wrapper">
          <div className="event-info">
            <div className="event-name-container event-info-block">
              <span className="event-name">“Chasing Freedom”</span>
              <div className="event-date">
                <div>
                  <img src={CameraIcon} alt="camera" />
                  <span>3 min</span>
                </div>
                <div>
                  <img src={ClockIcon} alt="time" />
                  <span>Sep. 2, 2023 - 10:00 AM</span>
                </div>
              </div>
            </div>
            <div className="event-info-block event-info-block-center">
              <span className="event-description">
                Individuality is the essence of freedom. Discover and shop the 2-in-1 bag in this short film exploring
                the notion of true freedom. SPENCER BADU’s modular design and interchangeable accessories empower you to
                create a style that is uniquely yours.
              </span>
              <a href="#products" className="bottom-arrow">
                <img src={DownArrow} alt="back" />
              </a>
            </div>
            <div className="event-info-block event-info-block-right">
              <span className="price-event">Price: $20.00</span>
              <Button type="button" onClick={handleJoinEvent}>
                JOIN EVENT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="products-container" id="products">
        <div className="title-container" ref={ref}>
          <h1 className={`title ${inView && 'show-products'}`}>Products</h1>
          <div className={`products-list ${inView && 'show-products'}`}>
            {products.map((item, index) => (
              <HomePageProductItem image={item.image} price={item.price} name={item.name} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </StyledHomeScreens>
  );
};

export default Home;
