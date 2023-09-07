import { styled } from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  padding: 40px 52px;
  background: ${({ theme }) => theme.dark};
  box-sizing: border-box;

  .logo {
    height: 26px;
  }

  .links-container {
    border-bottom: 1px solid ${({ theme }) => theme.grey};
  }

  .bottom-container,
  .links-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 33px;
  }

  .bottom-container {
    padding-top: 33px;

    span,
    a {
      color: ${({ theme }) => theme.grey};
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      text-decoration: none;
    }
    a {
      margin-left: 20px;
    }
  }

  .web-links a {
    color: ${({ theme }) => theme.white};
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 14px;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.grey};
    }
  }

  .social-links {
    display: flex;
    column-gap: 30px;
  }
`;
