import { styled } from 'styled-components';

export const StyledPickedItemsScreens = styled.div`
  background-color: ${({ theme }) => theme.dark};
  width: '100%';
  height: 100vh;
  padding: 80px 0px 24px 0px;
  box-sizing: border-box;
  overflow: hidden;

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
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.26px;
    margin-bottom: 26px;
  }

  .counter {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    align-items: center;
    display: flex;
    justify-content: center;

    img {
      margin-left: 10px;
    }
  }

  .slider-container {
    height: 100%;
    overflow: hidden;
    //   height: 75vh;
    //   // border-bottom: 1px solid ${({ theme }) => theme.grey};
    //   // margin-bottom: 35px;
    //   // position: relative;
    //   // padding-top: 50%;
    //   div {
    //     // max-height: 65vh;
    //     // top: 0;
    //     // transform: scale(0.9) !important;
    //     height: 100% !important;
    //     img {
    //       // height: 300px;
    //     }
    //   }
  }

  .event-button {
    margin: 0 auto;
  }

  .bottom-navigation {
    padding: 30px;
    border-top: 1px solid ${({ theme }) => theme.grey};
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.dark};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // .jiaanf {
  //   height: 350px;
  //   width: 500px;

  //   img {
  //     height: 300px;
  //     margin-bottom: 0px;
  //   }
  // }

  // .css-1fzpoyk {
  //   top: 45%;
  // }

  .css-doq0dk {
    top: -16vh;
  }
`;
