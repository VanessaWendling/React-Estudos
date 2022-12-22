import React, { MouseEventHandler } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

function Button({ onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>Buscar</ButtonContainer>;
}

export default Button;
