import { FC, HTMLProps } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { StyledHeader } from '../styles/components/Header';

import logo from '../assets/images/Logo.png';
import { LeftArrow } from '../assets/svg';

interface HeaderProps extends HTMLProps<HTMLElement> {
  showBackButton?: boolean;
}

export const Header: FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();

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
        <Link to="/">My Account</Link>
      </div>
    </StyledHeader>
  );
};
