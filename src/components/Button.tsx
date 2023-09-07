import { StyledButton } from '../styles/components/Button';
import { FC, HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onClick?: () => void;
  flat?: boolean;
  type?: 'button' | 'submit' | 'reset';
  marginBottom?: string;
  borderRadius?: string;
  width?: string;
  textButton?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  disabled,
  children,
  leftIcon,
  rightIcon,
  flat,
  marginBottom,
  borderRadius,
  onClick,
  type,
  width,
  textButton,
}) => {
  return (
    <StyledButton
      type={type}
      className={className}
      disabled={disabled}
      $flat={flat ? flat : undefined}
      marginBottom={marginBottom}
      borderRadius={borderRadius}
      onClick={onClick}
      width={width}
      $textButton={textButton ? textButton : undefined}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </StyledButton>
  );
};
