import Modal from 'styled-react-modal';

export const StyledProductSizingChart = Modal.styled`
    justify-content: center;
    border: 1px solid #FFF;
    background: #19191B;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 40px 60px;
    z-index: 101!important;
    position: relative;

    h3 {
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

    p {
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
        letter-spacing: 0.12px;
        margin-bottom: 30px;
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
`;
