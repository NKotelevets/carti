import { styled } from 'styled-components';

export const StyledPickedItemsScreens = styled.div`
  background-color: ${({ theme }) => theme.dark};
  width: '100%';
  height: 100vh;
  padding: 80px 0px 24px 0px;
  box-sizing: border-box;

  .cardContainer {
    background-color: blue;
    /*margin: 20px;*/
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    align-items: center;
    box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.4);
  }
  .titleContainer {
    background-color: white;
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 5px;
  }
  #title {
    flex-grow: 3;
    position: relative;
  }

  #rating {
    width: 40%;
    background-color: orange;
    flex-direction: row;
  }
  .cardImgContainer {
    background-color: green;
  }

  .cardImgContainer img {
    object-fit: fill;
  }

  .cardTextContainer {
    background-color: red;
  }

  div {
    opacity: 1 !important;
    background-color: transparent !important;
    transform: scale(1);
  }

  .title {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 26px;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.26px;
  }

  .counter {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    margin-bottom: 26px;
    align-items: center;
    display: flex;
    justify-content: center;

    img {
      margin-left: 10px;
    }
  }

  .slider-container {
    height: 60vh;
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    margin-bottom: 35px;

    div {
      max-height: 60vh;
    }
  }

  .event-button {
    margin: 0 auto;
  }
`;
