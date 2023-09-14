import { FC, HTMLProps, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { StyledHeader } from '../styles/components/Header';

import logo from '../assets/images/Logo.png';
import { LeftArrow } from '../assets/svg';
import { Button } from './Button';

interface HeaderProps extends HTMLProps<HTMLElement> {
  showBackButton?: boolean;
}

export const Header: FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
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
    <StyledHeader>
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
        <Link to="/">My Account</Link>
      </div>
    </StyledHeader>
  );
};
