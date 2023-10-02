import { styled } from 'styled-components';

export const StyledCheckoutScreens = styled.div`
  background-color: ${({ theme }) => theme.dark};
  width: '100%';
  min-height: 100vh;
  padding: 80px 0px 24px 0px;
  box-sizing: border-box;
  overflow: hidden;

  .title {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.26px;
    margin-bottom: 26px;
  }

  .input-text {
    width: 100%;
    padding: 11px 15px;
    border: 1px solid ${({ theme }) => theme.white};
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.white};
    box-sizing: border-box;
    margin-bottom: 24px;
    background: rgba(25, 25, 27, 0.5);
    backdrop-filter: blur(7.5px);

    &:focus-visible {
      outline: none;
    }
  }
`;
