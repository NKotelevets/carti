import styled from "styled-components";

interface StyledProps {
  marginBottom?: string;
  width?: string;
}

export const StyledAuthScreens = styled.div<StyledProps>`
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
  overflow: hidden;

  .player video {
    object-fit: cover;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );

    .form-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: calc(100% - 56px);
    }

    .footer-wrapper {
      width: 100%;
      height: 56px;
      border-top: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      a {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.12px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;
