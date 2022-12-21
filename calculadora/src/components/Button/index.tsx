import { MouseEventHandler } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
};

export default Button;
