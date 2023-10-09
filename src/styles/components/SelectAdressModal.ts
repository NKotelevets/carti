import Modal from 'styled-react-modal';

export const StyledSelectAdressModal = Modal.styled`
    justify-content: center;
    border: 1px solid #FFF;
    background: #19191B;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 40px 60px;
    width: 60vw;
    // height: 70vh;
    z-index: 101!important;
    position: relative;

    .map-container {
    height: 400px;
    width: 100%;
    margin-bottom: 30px;
  }

  .title {
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.24px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .description {
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 30px;
    letter-spacing: 0.12px;
  }

  .button{
      margin: 0 auto;
  }

  .close-button {
    border: 0px;
    background: none;
    position: absolute;
    top; 40px;
    right: 20px;
    cursor: pointer;

    svg {
      stroke:  ${({ theme }: any) => theme.white};

      &:hover {
          stroke:  ${({ theme }: any) => theme.grey};
      }
    }

   
  }
`;
