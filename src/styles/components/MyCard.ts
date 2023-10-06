import { HTMLProps } from 'react';
import { styled } from 'styled-components';

interface StyledMyCardProps extends HTMLProps<HTMLButtonElement> {
  showMyCard?: boolean;
}

export const StyledMyCard = styled.div<StyledMyCardProps>`
  .overlay {
    background: rgba(25, 25, 27, 0.5);
    height: calc(100vh - 56px);
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 100vw;
    transition: 2s;

    &.active {
      left: 0px;
    }
  }

  .panel {
    // animation: ${({ showMyCard }) => (showMyCard ? 'fadeInCard' : 'fadeOutCard')} 2s;
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
    z-index: 10000;
    transition: 2s;

    &.active {
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
