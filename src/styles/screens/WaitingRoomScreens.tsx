import { styled } from 'styled-components';

export const StyledWaitingRoomScreens = styled.div`
  .player-container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .player video {
    object-fit: cover;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      linear-gradient(0.75deg, #19191b 4.74%, rgba(25, 25, 27, 0) 46.34%);

    .event-info {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      padding: 0 40px 40px 40px;
      opacity: 0;
      position: relative;
      bottom: -250px;
      animation: fadeIn 3s;
      animation-delay: 1s;
      animation-fill-mode: forwards;

      @keyframes fadeIn {
        0% {
          opacity: 0;
          bottom: -250px;
        }
        50% {
          opacity: 0.5;
          bottom: 0px;
        }
        100% {
          bottom: 0px;
          opacity: 1;
        }
      }

      .event-info-block {
        width: 30%;
      }
    }

    .event-description {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.01em;
      color: ${({ theme }) => theme.white};
    }

    .start-event {
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.01em;
      color: ${({ theme }) => theme.white};
      // text-align: center;
      width: 100%;
      display: inline-block;
      text-transform: uppercase;
    }

    .event-name {
      font-size: 22px;
      font-weight: 600;
      line-height: 33px;
      letter-spacing: 0em;
      color: ${({ theme }) => theme.white};
      margin-bottom: 12px;
    }

    .event-date {
      display: flex;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.white};
      margin-bottom: 30px;
      padding-bottom: 12px;

      div:first-child {
        margin-right: 50px;
      }

      div {
        display: flex;
        align-items: center;
      }

      span {
        color: ${({ theme }) => theme.white};
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        margin-left: 6px;
      }
    }

    .event-name-container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .event-info-block-right {
      justify-content: flex-start;
      display: flex;
      flex-direction: column;
    }

    .event-info-block-center {
      justify-content: flex-start;
      display: flex;
      flex-direction: column;
    }
  }

  .text-button {
    text-transform: none;
    text-align: right;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;

    span {
      margin-left: 6px;
    }
  }

  .invite-friend {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  }

  .select-sizes-button {
    margin-bottom: 16px;
  }

  .mute-button {
    position: absolute;
    top: 50%;
    left: 40px;
  }
`;
