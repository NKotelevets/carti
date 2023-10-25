import { styled } from 'styled-components';

export const StyledProductScreens = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.dark};
  overflow: hidden;
  padding: 90px 42px 34px 42px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .column {
    width: 50%;
  }

  .image-container {
    height: 100%;
    width: 60%;
    overflow: hidden;
  }

  .description-product {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12px;
    margin-bottom: 30px;
  }

  .column.description-product {
    width: 40%;
  }

  .name-product {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .price-product {
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }

  .text-button {
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 4px;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    width: fit-content;
    margin: 0 auto;

    &:hover {
      color: ${({ theme }) => theme.grey};
      border-bottom: 1px solid ${({ theme }) => theme.grey};
    }
  }

  .description-product {
    box-sizing: border-box;
    padding: 0px 40px;
  }
  .image-container {
    .swiper-pagination {
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translate(0, -50%);
      width: 10px;
      z-index: 100;
    }

    .swiper-pagination-bullet {
      height: 60px;
      width: 2px;
      display: inline-block;
      margin: 5px;
      background: #999999;
    }

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.white};
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      background-color: ${({ theme }) => theme.dark};
    }

    .swiper {
      height: 100%;
    }
  }

  .swiper-slide img {
    width: 100%;
    object-fit: contain;
  }

  .swiper-slide-active {
    animation: showProducts 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .description-container {
    animation: showProducts 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes showProducts {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  // selected sizes screen styles
  .select-sizes-container {
    margin-top: 40px;

    .swiper {
      width: 100%;
      height: 100%;
      border-top: 1px solid rgba(175, 175, 182, 0.3);
      // border-bottom: 1px solid rgba(175, 175, 182, 0.3);
      padding: 15px 0;
      margin-bottom: 30px;
    }

    .swiper-slide {
      color: ${({ theme }: any) => theme.white};
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: center;

      &:hover {
        &::before {
          display: block;
          content: '';
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 3px;
          background: radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(255, 255, 255, 0) 100%);
        }
      }
    }

    .selected-size-effect {
      position: relative;

      &::before {
        display: block;
        content: '';
        position: absolute;
        top: -16px;
        left: 50%;
        transform: translateX(-50%);
        width: 24px;
        height: 3px;
        background: radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(255, 255, 255, 0) 100%);
      }
    }

    .select-size-options {
      cursor: pointer;
      width: 100%;

      input {
        display: none;
      }
    }

    .swiper-pagination {
      display: none;
    }

    p {
      color: ${({ theme }: any) => theme.white};
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 12px;
    }
  }

  .inner-slider {
    margin: 0px auto 80px auto;

    img {
      height: 100px;
    }

    // .slick-cloned {
    //   display: none;
    // }

    .slick-slide {
      padding: 10px 10px;
      box-sizing: border-box;
      position: relative;
    }

    .slide {
      border: 1px solid #888891;
      text-align: center;
    }
    .slideWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .activeSlide {
      border: 1px solid #fff;
      position: relative;
      transform: scale(1.2);

      &:before {
        position: absolute;
        top: -2px;
        left: 50%;
        transform: translateX(-50%);
        background: radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(255, 255, 255, 0) 100%);
        width: 50px;
        height: 6px;
        content: '';
      }

      &:after {
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        background: radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(255, 255, 255, 0) 100%);
        width: 50px;
        height: 6px;
        content: '';
      }
    }
  }

  @media (max-width: 965px) {
    flex-direction: column;
    overflow: scroll;

    .image-container,
    .column.description-product {
      width: 100%;
    }

    .rounded-slider-container {
      // width: 50%;
      margin: 0 auto;
    }

    .image-container,
    .image-container .swiper,
    .image-containe .swiper-wrapper {
      height: 350px;
    }

    .image-container {
      overflow: visible;
      margin-bottom: 10px;
      position: relative;

      .swiper-pagination {
        bottom: -160px;
        // bottom: -180px;
        left: 50%;
        transform: rotate(90deg);
        top: auto;
        z-index: 1000;
      }
      .swiper {
        overflow-y: visible;
      }
    }
    .description-product {
      padding: 0px;
    }

    .select-sizes-container {
      .select-sizes-container .swiper {
        height: 40px;
      }
    }

    .description-container {
      margin-top: 20px;
    }
    .go-to-waiting-btn {
      margin-top: 20px;
    }

    .inner-slider {
      width: 100%;

      img {
        height: 70px;
      }
    }
  }
`;
