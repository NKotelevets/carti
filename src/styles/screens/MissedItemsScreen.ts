import { styled } from 'styled-components';

export const StyledMissedItemsScreens = styled.div`
  background-color: ${({ theme }) => theme.dark};
  width: '100%';
  //   height: 100vh;
  padding: 80px 0px 224px 0px;
  box-sizing: border-box;

  .counter {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.16px;
    align-items: center;
    display: flex;
    justify-content: center;

    img {
      margin-left: 10px;
    }
  }

  .title {
    color: ${({ theme }) => theme.white};
    margin-bottom: 26px;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.26px;
  }

  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 100px;
    column-gap: 53px;
    margin-top: 60px;
    padding: 0px 40px;
    opacity: 0;
    animation: showProducts 3s;
    // animation-delay: 1s;
    animation-fill-mode: forwards;

    @keyframes showProducts {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
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
    bottom: -100%;

    animation: showBottomPanel 3s;
    animation-fill-mode: forwards;

    @keyframes showBottomPanel {
      0% {
        bottom: -100%;
      }

      100% {
        bottom: 0%;
      }
    }
  }
`;
