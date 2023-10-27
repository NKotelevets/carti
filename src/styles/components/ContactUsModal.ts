import Modal from 'styled-react-modal';

export const ContactUsModal = Modal.styled`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFF;
    background: #19191B;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 40px 60px;
    width: 30vw;
    position: relative;

    h2 {
        color: #FFF;
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 800;
        line-height: 150%; 
        letter-spacing: 0.26px;
        text-transform: uppercase;
        margin-bottom: 12px;
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
          color: ${({ theme }: any) => theme.white};
          text-transform: uppercase;
        }
    
        .error {
          color: ${({ theme }: any) => theme.red};
        }
      }
    
      .form {
        width: 100%;
    
        .input-text {
          width: 100%;
          padding: 11px 15px;
          border: 1px solid ${({ theme }: any) => theme.white};
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: 17px;
          letter-spacing: 0.12px;
          text-transform: uppercase;
          color: ${({ theme }: any) => theme.white};
          box-sizing: border-box;
          margin-bottom: 24px;
          background: rgba(25, 25, 27, 0.5);
          backdrop-filter: blur(7.5px);
    
          &:focus-visible {
            outline: none;
          }
        }
      }
    
      .agreement-wrapper {
        margin-bottom: 24px;
        .agreement-text {
          color: ${({ theme }: any) => theme.grey};
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
    
          a {
            color: ${({ theme }: any) => theme.white};
            font-weight: 500;
            text-decoration: none;
    
            &:hover {
              color: ${({ theme }: any) => theme.grey};
              text-decoration: underline;
            }
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
          border: 1px solid ${({ theme }: any) => theme.grey};
          background: transparent;
          background: linear-gradient(to right, white 50%, transparent 50%);
          background-size: 200% 100%;
          background-position: right bottom;
          transition: all 0.5s ease-out;
    
          &.active {
            background-position: left bottom;
            border-color: ${({ theme }: any) => theme.white};
          }
        }
      }
    
      .text-button {
        margin-top: 16px;
    
        &:hover {
          color: ${({ theme }: any) => theme.grey};
          text-decoration: underline;
        }
      }
    
      textarea {
        width: 100%;
        height: 150px;
        background: transparent;
        resize: none;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0.12px;
        color: ${({ theme }: any) => theme.white};
        padding: 10px;
        outline: none;
        border: 1px solid ${({ theme }: any) => theme.white};
        box-sizing: border-box;
        margin-bottom: 50px;
    }

    .close-button {
        border: 0px;
        background: none;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    
        svg {
          stroke:  ${({ theme }: any) => theme.white};
    
          &:hover {
              stroke:  ${({ theme }: any) => theme.grey};
          }
        }
      }

     @media (max-width: 965px) {
         width: 75vw;
         padding: 40px 25px;

        h2 {
            font-size: 20px;
        }

        p {
            font-size: 12px;
        }

    }


`;
