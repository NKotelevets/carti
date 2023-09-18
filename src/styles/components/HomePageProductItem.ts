import { styled } from 'styled-components';

export const StyledHomePageProductItem = styled.div`
  width: 21%;
  height: 300px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    height: 220px;
    margin-bottom: 40px;
    width: fit-content;
  }

  .description-container {
    flex: 1;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  .name {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .price {
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }

  .item-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(25, 25, 27, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear;
  }

  &:hover .item-overlay {
    opacity: 1;
  }
`;
