import styled from 'styled-components';
import { HTMLProps } from 'react';

interface StyledButtonProps extends HTMLProps<HTMLButtonElement> {
  flat?: boolean;
  marginBottom?: string;
  borderRadius?: string;
  width?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  align-self: center;
  height: 42px;
  width: ${({ width }) => (width ? width : '100%')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0px')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0px')};
  color: ${({ flat, theme }) => (flat ? theme.black : '#19191B')};
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: 0.14px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out;
  box-sizing: border-box;

  &:hover {
    background-position: left bottom;
    color: #fff;
  }
`;
