import React from "react";
import { InputContainer } from "./styles";

interface InputProps {
  value: string;
}

export function Input({ value }: InputProps) {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
}
