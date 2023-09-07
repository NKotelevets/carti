import { FC } from "react";

import { StyledFooter } from "../styles/components/Footer";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Pinterest,
  Tiktok,
  Twitter,
  Youtube,
} from "../assets/svg";

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="links-container">
        <img src={logo} className="logo" />

        <div className="web-links">
          <Link to="/">Contact Us</Link>
          <Link to="/">My Account</Link>
        </div>
        <div className="social-links">
          <a target="_blank" href={"/"}>
            <img src={Facebook} alt="Facebook" />
          </a>
          <a target="_blank" href={"/"}>
            <img src={Twitter} alt="Twitter" />
          </a>
          <a target="_blank" href={"/"}>
            <img src={Instagram} alt="Instagram" />
          </a>
          <a target="_blank" href={"/"}>
            <img src={Youtube} alt="Youtube" />
          </a>
          <a target="_blank" href={"/"}>
            <img src={Pinterest} alt="Pinterest" />
          </a>
          <a target="_blank" href={"/"}>
            <img src={Tiktok} alt="Tiktok" />
          </a>
        </div>
      </div>
      <div className="bottom-container">
        <span>© ALL RIGHTS RESERVED</span>
        <div>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </StyledFooter>
  );
};
