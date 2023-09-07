import styled from "styled-components";
import { HTMLProps } from "react";

interface StyledButtonProps extends HTMLProps<HTMLButtonElement> {
  flat?: boolean;
  marginBottom?: string;
  borderRadius?: string;
  width?: string;
  transparent?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  align-self: center;
  height: 42px;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0px")};
  color: ${({ flat, theme, transparent }) =>
    transparent ? "#fff" : flat ? theme.black : "#19191B"};
  border: ${({ transparent }) => (transparent ? "1px solid #FFF" : "none")};
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
  background: linear-gradient(
    to right,
    ${({ transparent, theme }) => (transparent ? "white" : theme.black)} 50%,
    ${({ transparent }) => (transparent ? "transparent" : "white")} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  box-sizing: border-box;

  &:hover {
    background-position: left bottom;
    color: ${({ transparent, theme }) => (transparent ? theme.black : "#fff")};
  }
`;
