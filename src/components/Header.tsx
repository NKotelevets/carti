import { FC, HTMLProps, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StyledHeader } from '../styles/components/Header';

import logo from '../assets/images/Lando/Logo.png';
import { LeftArrow } from '../assets/svg';
import { Button } from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setStatusCard } from '../redux/reducers/mainReducer';

interface HeaderProps extends HTMLProps<HTMLElement> {
  showBackButton?: boolean;
}

export const Header: FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { myCardActive } = useSelector((state: RootState) => state.main);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const handleJoinEvent = () => {
    navigate('/waiting-room');
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

  return location.pathname !== '/event' ? (
    <StyledHeader fixed={location.pathname === '/checkout' ? true : false}>
      <div className="left-side">
        {(showBackButton ||
          location.pathname === '/products' ||
          location.pathname === '/terms-and-conditions' ||
          location.pathname === '/privacy-policy' ||
          location.pathname === '/select-sizes' ||
          location.pathname === '/products') && (
          <button className="back-arrow" onClick={() => navigate(-1)}>
            <LeftArrow />
            <span>Back</span>
          </button>
        )}
      </div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <div className="right-side">
        {location.pathname !== '/sign-up' &&
          location.pathname !== '/sign-in' &&
          location.pathname !== '/picked-items' &&
          location.pathname !== '/checkout' && (
            <>
              {isVisible && location.pathname === '/' && (
                <Button type="button" onClick={handleJoinEvent} width={'200px'} className="join-event-button">
                  JOIN EVENT
                </Button>
              )}
              {location.pathname !== '/missed-items' ? null : (
                // <Link to="/">My Account</Link>
                <>
                  {location.pathname === '/missed-items' && (
                    <Button
                      type="button"
                      onClick={() => navigate('/checkout')}
                      width={'200px'}
                      className="join-event-button"
                    >
                      To checkout
                    </Button>
                  )}
                  <Button
                    flat
                    textButton
                    width="auto"
                    type="button"
                    onClick={() => {
                      dispatch(setStatusCard(!myCardActive));
                    }}
                    className="text-button select-sizes-button"
                  >
                    My Cart (2)
                  </Button>
                </>
              )}
            </>
          )}
      </div>
    </StyledHeader>
  ) : null;
};
