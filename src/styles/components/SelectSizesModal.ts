import Modal from 'styled-react-modal';

export const StyledSelectSizesModal = Modal.styled`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFF;
background: #19191B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 40px 60px;
width: 30vw;

h3{
    color: ${({ theme }: any) => theme.white};

    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.26px;
    margin-bottom: 30px;
}

.text-button {
    color: ${({ theme }: any) => theme.white};
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 4px;
    border-bottom: 1px solid ${({ theme }: any) => theme.white};
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 34px;
  }

  .swiper {
    width: 100%;
    height: 100%;
    border-top: 1px solid rgba(175, 175, 182, 0.30);
    border-bottom: 1px solid rgba(175, 175, 182, 0.30);
    padding: 15px 0;
    margin-bottom: 16px;
  }
  
  .swiper-slide {
    color: ${({ theme }: any) => theme.white};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
`;
