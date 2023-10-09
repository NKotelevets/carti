import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '../components/Button';
import { ClockIcon, CameraIcon, InviteFriendIcon, Mute } from '../assets/svg';
import HomeVideo from '../assets/video/home_video.mp4';
import { StyledWaitingRoomScreens } from '../styles/screens/WaitingRoomScreens';
import Countdown from '../components/CountDown';
import { useNavigate } from 'react-router-dom';

export const WaitingRoom: FC = () => {
  const [timer, setTimer] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isEvent: false,
  });

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

  const handleInviteFriend = () => {
    console.log('handleInviteFriend');
  };

  const handleAddToCalendar = () => {
    console.log('handleAddToCalendar');
  };

  return (
    <StyledWaitingRoomScreens>
      <div className="player-container">
        <ReactPlayer
          className="player"
          url={HomeVideo}
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
              <span className="event-description">
                Individuality is the essence of freedom. Discover and shop the 2-in-1 bag in this short film exploring
                the notion of true freedom. SPENCER BADU’s modular design and interchangeable accessories empower you to
                create a style that is uniquely yours.
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
              <Button onClick={() => navigate('/select-sizes')} transparent={true}>
                Select size
              </Button>
            </div>
            <div className="event-info-block event-info-block-right">
              <div className="invite-friend">
                <span className="start-event">event starts in:</span>

                <Button
                  flat
                  textButton
                  type="button"
                  onClick={handleInviteFriend}
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
    </StyledWaitingRoomScreens>
  );
};

export default WaitingRoom;
