import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '../components/Button';
import { ClockIcon, CameraIcon, InviteFriendIcon, Mute, Close } from '../assets/svg';
import WaitingRoomVideo from '../assets/video/AJWaitingRoom.mp4';
import { StyledWaitingRoomScreens } from '../styles/screens/WaitingRoomScreens';
import Countdown from '../components/CountDown';
import { useNavigate } from 'react-router-dom';
import { StyledInviteFriendModal } from '../styles/components/InviteFriendModal';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const WaitingRoom: FC = () => {
  const [timer, setTimer] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isEvent: false,
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [value, setValue] = useState();

  const handleSelectSizesModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const [muted, setMuted] = useState(true);
  const navigate = useNavigate();

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        const dateAtm = new Date();
        const currentTime = dateAtm.getTime();
        const eventTime = new Date('2025-01-26').getTime();

        const timeRemaining = eventTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setTimer((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
        }));
      };
      if (!timer.isEvent) {
        countdown();
      } else {
        setTimer((prevState) => ({
          ...prevState,
          isEvent: true,
        }));
      }
    }, 1000);
  }, [currentYear]);

  const handleAddToCalendar = () => {
    console.log('handleAddToCalendar');
  };

  return (
    <StyledWaitingRoomScreens>
      <div className="player-container">
        <ReactPlayer
          className="player"
          url={WaitingRoomVideo}
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
          <div className="mobile-counter event-info-block ">
            <div className="invite-friend">
              <span className="start-event">event starts in:</span>

              <Button
                flat
                textButton
                type="button"
                onClick={handleSelectSizesModal}
                className="text-button"
                leftIcon={<InviteFriendIcon />}
              >
                Invite a friend
              </Button>
            </div>
            <Countdown countdownData={timer} />
          </div>
          <div className="event-info">
            <div className="event-name-container event-info-block">
              <span className="event-name">Genesis</span>
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
              <span className="event-description">
                Discover the genesis of Anthony Joshua’s career and uncover the untold story behind his gold medal
                Olympic win. Immerse yourself in this exclusive, interactive short film, and shop exclusive AJBXNG
                products during the experience.
              </span>
            </div>
            <div className="event-info-block event-info-block-center">
              <Button
                flat
                textButton
                type="button"
                onClick={handleAddToCalendar}
                className="text-button select-sizes-button"
              >
                + Add to calendar
              </Button>
              <Button onClick={() => navigate('/select-sizes')} transparent={true} className="select-size-btn">
                Select size
              </Button>
              <Button onClick={() => navigate('/event')}>Start Event</Button>
            </div>
            <div className="event-info-block event-info-block-right">
              <div className="invite-friend">
                <span className="start-event">event starts in:</span>

                <Button
                  flat
                  textButton
                  type="button"
                  onClick={handleSelectSizesModal}
                  className="text-button"
                  leftIcon={<InviteFriendIcon />}
                >
                  Invite a friend
                </Button>
              </div>
              <Countdown countdownData={timer} />
            </div>
          </div>
        </div>
      </div>
      <StyledInviteFriendModal
        isOpen={isOpenModal}
        onBackgroundClick={handleSelectSizesModal}
        onEscapeKeydown={handleSelectSizesModal}
      >
        <button className="close-button" onClick={handleSelectSizesModal}>
          <Close />
        </button>
        <h2>INVITE A FRIEND</h2>
        <label>enter friend’s phone number</label>
        <PhoneInput
          international
          placeholder="Enter phone number"
          defaultCountry="US"
          value={value}
          onChange={() => setValue}
          smartCaret={false}
        />
        <label>Comment (optional)</label>

        <textarea></textarea>
        <p>Max 120 symbols</p>

        <Button onClick={handleSelectSizesModal}>send invitation</Button>
      </StyledInviteFriendModal>
    </StyledWaitingRoomScreens>
  );
};

export default WaitingRoom;
