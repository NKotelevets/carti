import { styled } from 'styled-components';

export const StyledMyCardItem = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 20px;

  .counter-container {
    display: flex;
    align-items: center;
  }

  .selected-sizes {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: inline-flex;
      align-items: center;
    }
  }

  .counter {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: uppercase;
    margin: 0 10px;
    cursor: pointer;
  }
  .title {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .image {
    width: 150px;
    margin-bottom: 20px;
  }

  .price {
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 24px;
  }

  .sizes {
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.12px;
    text-transform: uppercase;
  }

  .trash {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;
