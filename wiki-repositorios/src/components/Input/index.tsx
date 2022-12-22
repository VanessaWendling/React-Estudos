import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <InputContainer>
      <input {...rest} />
    </InputContainer>
  );
}
