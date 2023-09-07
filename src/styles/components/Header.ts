import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;

  .left-side,
  .right-side {
    width: 45%;
  }

  .right-side {
    display: flex;
    justify-content: flex-end;

    a {
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      color: ${({ theme }) => theme.white};
      text-decoration: none;
    }
  }

  .logo {
    height: 26px;
  }

  .back-arrow {
    background-color: transparent;
    border: 0px;
    cursor: pointer;

    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      color: ${({ theme }) => theme.white};
      margin-left: 5px;
    }
  }
`;
