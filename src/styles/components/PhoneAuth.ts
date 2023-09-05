import styled from "styled-components";

interface StyledProps {
  marginBottom?: string;
  width?: string;
}

export const StyledPhoneAuth = styled.div<StyledProps>`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;

  & > div {
    width: 100%;
  }

  & > div:nth-child(2) {
    text-align: left;
  }

  h4 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 26px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    letter-spacing: 0.26px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }

  .subtitle {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.14px;
    color: #fff;
    text-align: center;

    a {
      color: #fff;
      font-weight: 800;
    }
  }

  .PhoneInput {
    margin-bottom: 24px;

    .PhoneInputCountry {
      margin: 0;
      padding: 5px 10px;
      border: 1px solid #fff;
      border-right: none;

      .PhoneInputCountrySelectArrow {
        border-color: #fff;
        opacity: 1;
      }
    }

    .PhoneInputInput {
      padding: 11px 15px;
      border: 1px solid #fff;
      background: transparent;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0.12px;
      color: #fff;

      &:focus-visible {
        outline: none;
      }
    }
  }

  .label-wrapper {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: 0.12px;
    }

    .label {
      color: #fff;
      text-transform: uppercase;
    }

    .error {
      color: #F32837;
    }
  }

  .form {
    width: 100%;

    .input-text {
      width: 100%;
      padding: 11px 15px;
      border: 1px solid #fff;
      background: transparent;
      font-family: 'Manrope', sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0.12px;
      text-transform: uppercase;
      color: #fff;
      box-sizing: border-box;
      margin-bottom: 24px;

      &:focus-visible {
        outline: none;
      }
    }
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .tile {
      width: 30px;
      height: 8px;
      border: 1px solid #AFAFB6;
      background: transparent;
      background: linear-gradient(to right, white 50%, transparent 50%);
      background-size: 200% 100%;
      background-position: right bottom;
      transition: all .5s ease-out;

      &.active {
        background-position: left bottom;
        border-color: #fff;
      }
    }
  }
`;
