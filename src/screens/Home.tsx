import { FC } from 'react';
import ReactPlayer from 'react-player';
import { StyledHomeScreens } from '../styles/screens/HomeScreens';
import { Button } from '../components/Button';
import { ClockIcon, CameraIcon, Mute, DownArrow } from '../assets/svg';
import { HomePageProductItem } from '../components/HomePageProductItem';
import { Footer } from '../components/Footer';
import HomeVideo from '../assets/video/home_video.mp4';
import { useInView } from 'react-intersection-observer';
import Image_1 from '../assets/images/1.png';
import Image_2 from '../assets/images/2.png';
import Image_3 from '../assets/images/3.png';
import Image_4 from '../assets/images/4.png';
import Image_5 from '../assets/images/5.png';
import Image_6 from '../assets/images/6.png';
import Image_7 from '../assets/images/7.png';
import Image_8 from '../assets/images/8.png';

const products = [
  {
    image: Image_1,
    name: 'HOT STEP',
    price: '180.00',
  },
  {
    image: Image_2,
    name: 'NOCTA TECH FLEECE CREW',
    price: '310.00',
  },
  {
    image: Image_3,
    name: 'NOCTA TECH FLEECE CREW PANT',
    price: '280.00',
  },
  {
    image: Image_4,
    name: 'NOCTA FLEECE HOODIE',
    price: '500.00',
  },
  {
    image: Image_5,
    name: 'ALIEN GORETEX JACKET',
    price: '400.00',
  },
  {
    image: Image_6,
    name: 'JACKET WITH SWAROVSKI® CRYSTALS',
    price: '130.00',
  },
  {
    image: Image_7,
    name: 'RD TECH CREW',
    price: '150.00',
  },
  {
    image: Image_8,
    name: 'NOCTA TECH FLEECE CREW',
    price: '310.00',
  },
];

export const Home: FC = () => {
  const handleJoinEvent = () => {
    console.log('Join Event');
  };

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <StyledHomeScreens>
      <div className="player-container">
        <ReactPlayer
          className="player"
          url={HomeVideo}
          width="100%"
          height="100%"
          playing
          loop
          muted
          playsinline
          stopOnUnmount
        />
        <img src={Mute} alt="Mute" className="mute-button" />
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
        <h1 className="title">Products</h1>
        <div className={`products-list ${inView && 'show-products'}`} ref={ref}>
          {products.map((item, index) => (
            <HomePageProductItem image={item.image} price={item.price} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </StyledHomeScreens>
  );
};

export default Home;
