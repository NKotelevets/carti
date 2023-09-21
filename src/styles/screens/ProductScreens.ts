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

  .image-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .column {
    width: 50%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    background-color: ${({ theme }) => theme.dark};
  }

  .swiper-slide img {
    width: 100%;
    object-fit: contain;
  }

  .swiper {
    height: 100%;
  }

  .description-product {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.12px;
    margin-bottom: 40px;
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
  }

  .description-product {
    box-sizing: border-box;
    padding: 0px 80px;
  }

  .carousel {
    width: 1.125em;
    height: 13.125em;
    position: relative;
    margin: 0 auto;
    perspective: 62.5em;
    margin-bottom: 100px;
  }

  .carousel__slide {
    position: absolute;
    width: 12.875em;
    height: 11.875em;
    left: 0.625em;
    top: 0.625em;
    border: 0.125em solid;
    transition:
      transform 1s,
      opacity 1s;
  }

  .carousel__controls {
    display: none;
  }

  .swiper-pagination {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translate(0, -50%);
    width: 10px;
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

  .carousel {
    width: 13.125em;
    height: 13.125em;
    position: relative;
    margin: 0 auto;
    perspective: 62.5em;
    margin-bottom: 100px;
  }

  .carousel__container {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .carousel__slide {
    position: absolute;
    width: 11.875em;
    height: 11.875em;
    left: 0.625em;
    top: 0.625em;
    border: 0.125em solid;
    transition:
      transform 1s,
      opacity 1s;
  }

  .carousel__slide img {
    width: 100%;
    height: auto;
    display: block;
  }

  .carousel__slide-overlay {
    color: #fff;
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    background-color: rgba(0, 0, 0, 0.7);
    user-select: none;
  }

  .carousel__slide-overlay span,
  .carousel__slide-overlay strong {
    display: block;
    flex: 0 0 100%;
  }

  .carousel__slide:hover .carousel__slide-overlay {
    opacity: 1;
  }

  .carousel__slide:hover .carousel__slide-overlay {
    opacity: 1;
  }

  .carousel__controls {
    display: none;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

  .carousel__control {
    font-size: 0;
    line-height: 0;
    text-indent: -100%;
    width: 2.5em;
    height: 2.5em;
    display: block;
    position: relative;
    border: 1px solid;
    margin: 0 2em;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    box-shadow: none;
  }

  .carousel__control::before,
  .carousel__control::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .carousel__control::before {
    width: 50%;
    height: 1px;
    background-color: #fff;
  }

  .carousel__control::after {
    content: '';
    width: 0.9375em;
    height: 0.9375em;
    display: inline-block;
    vertical-align: middle;
    border-color: #fff;
    border-style: solid;
    border-width: 0 0 1px 1px;
    margin: auto;
    transform: rotate(-135deg);
    transform-origin: 50% 50%;
    transition: all 0.35s ease-in-out;
  }

  .carousel__control--prev::after {
    transform: rotate(45deg);
  }
`;
