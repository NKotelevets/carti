import { styled } from 'styled-components';

export const StyledMyCard = styled.div`
  animation: fadeInCard 2s;
  animation-fill-mode: forwards;
  width: 300px;
  position: fixed;
  background-color: ${({ theme }: any) => theme.dark};
  height: calc(100vh - 56px);
  right: -300px;
  top: 56px;
  border-left: 1px solid ${({ theme }: any) => theme.white};
  padding: 40px;
  box-sizing: border-box;
  overflow-y: scroll;

  @keyframes fadeInCard {
    0% {
      right: -300px;
    }

    100% {
      right: 0px;
    }
  }

  .bottom-nav {
    position: sticky;
    bottom: 0px;
    // width: calc(100% - 80px);
    background: rgba(25, 25, 27, 0.1);
    backdrop-filter: blur(5px);
  }
`;
