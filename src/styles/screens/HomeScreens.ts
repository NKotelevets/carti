import { styled } from 'styled-components';

export const StyledHomeScreens = styled.div`
  .player-container {
    width: 100%;
    height: calc(100vh - 56px);
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
      height: 100px;
      display: flex;
      justify-content: space-between;
      padding: 0 40px 40px 40px;

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

    .price-event {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0.01em;
      color: ${({ theme }) => theme.white};
      text-align: center;
      width: 100%;
      display: inline-block;
      margin-bottom: 15px;
    }

    .event-name {
      font-size: 22px;
      font-weight: 600;
      line-height: 33px;
      letter-spacing: 0em;
      color: ${({ theme }) => theme.white};
    }

    .event-date {
      display: flex;
      width: 100%;

      div:first-child {
        margin-right: 50px;
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
      border-bottom: 1px solid ${({ theme }) => theme.white};
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .event-info-block-right {
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
    }

    .event-info-block-center {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
  }
  .products-container {
    background-color: ${({ theme }) => theme.dark};
    padding: 120px 40px 80px 40px;

    .title {
      color: #fff;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 60px;
    }

    .products-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 80px;
      column-gap: 53px;
    }
  }
`;
