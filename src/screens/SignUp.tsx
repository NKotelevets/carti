import { FC } from 'react';
import ReactPlayer from 'react-player';
import { StyledAuthScreens } from '../styles/screens/AuthScreens';
import { PhoneAuth } from '../components/PhoneAuth';
import { Link } from 'react-router-dom';
import LoginVideo from '../assets/video/CartiLandingpage.mp4';

export const SignUp: FC = () => {
  return (
    <StyledAuthScreens>
      <ReactPlayer
        className="player"
        url={LoginVideo}
        width="100%"
        height="100%"
        playing
        loop
        muted
        playsinline
        stopOnUnmount
      />
      <div className="content-wrapper">
        <div className="form-wrapper">
          <PhoneAuth
            title={'CREATE AN ACCOUNT'}
            subtitle={'Already have an account? '}
            subtitleLinkText={'Sign In'}
            subtitleLinkPath={'/sign-in'}
            stepsCount={3}
          />
        </div>
        <div className="footer-wrapper">
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </StyledAuthScreens>
  );
};

export default SignUp;
