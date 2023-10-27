import Modal from 'styled-react-modal';

export const StyledInviteFriendModal = Modal.styled`
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
    z-index: 1000000;

    h2 {
        color: ${({ theme }: any) => theme.white};
        text-align: center;
        font-size: 26px;
        font-style: normal;
        font-weight: 800;
        line-height: 150%; /* 39px */
        letter-spacing: 0.26px;
        margin-bottom: 30px;
    }


  .PhoneInput {
    margin-bottom: 24px;
    width: 100%;

    .PhoneInputCountry {
      margin: 0;
      padding: 5px 10px;
      border: 1px solid ${({ theme }: any) => theme.white};
      border-right: none;
      background: rgba(25, 25, 27, 0.5);
      backdrop-filter: blur(7.5px);

      .PhoneInputCountrySelectArrow {
        border-color: ${({ theme }: any) => theme.white};
        opacity: 1;
      }
    }

    .PhoneInputInput {
      padding: 11px 15px;
      border: 1px solid ${({ theme }: any) => theme.white};
      background: transparent;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0.12px;
      color: ${({ theme }: any) => theme.white};
      background: rgba(25, 25, 27, 0.5);
      backdrop-filter: blur(7.5px);

      &:focus-visible {
        outline: none;
      }
    }
  }

  label{ 
      color: ${({ theme }: any) => theme.white};
    text-align: left;
    margin-bottom: 8px;

    font-size: 12px;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
    letter-spacing: 0.12px;
    text-transform: uppercase;
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
    margin-bottom: 6px;
  }

  p {
    color: #AFAFB6;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 15px */
    width: 100%;
    letter-spacing: 0.1px;
    margin-bottom: 30px;
  }
    
  @media (max-width: 965px) {
    padding:40px 20px;
    width: 95vw;
    box-sizing: border-box; 
  }
`;
