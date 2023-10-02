import { FC, HTMLProps, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StyledHeader } from '../styles/components/Header';

import logo from '../assets/images/Logo.png';
import { LeftArrow } from '../assets/svg';
import { Button } from './Button';
import { MyCard } from './MyCard';

interface HeaderProps extends HTMLProps<HTMLElement> {
  showBackButton?: boolean;
}

export const Header: FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);
  const [showMyCard, setShowMyCard] = useState(false);

  const handleJoinEvent = () => {
    console.log('join event');
  };

  const listenToScroll = () => {
    const heightToHideFrom = window.innerHeight;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <StyledHeader fixed={location.pathname === '/checkout'}>
      <div className="left-side">
        {showBackButton && (
          <button className="back-arrow" onClick={() => navigate(-1)}>
            <img src={LeftArrow} alt="back" />
            <span>Back</span>
          </button>
        )}
      </div>
      <img src={logo} className="logo" alt="logo" />
      <div className="right-side">
        {isVisible && (
          <Button type="button" onClick={handleJoinEvent} width={'200px'} className="join-event-button">
            JOIN EVENT
          </Button>
        )}
        {location.pathname !== '/missed-items' ? (
          <Link to="/">My Account</Link>
        ) : (
          <Button
            flat
            textButton
            width="auto"
            type="button"
            onClick={() => setShowMyCard((prev) => !prev)}
            className="text-button select-sizes-button"
          >
            My Cart (2)
          </Button>
        )}
      </div>
      {showMyCard && <MyCard />}
    </StyledHeader>
  );
};
