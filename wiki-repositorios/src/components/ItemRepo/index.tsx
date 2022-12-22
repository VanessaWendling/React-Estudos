import React from "react";
import { ItemContainer } from "./styles";

export interface RepoProps {
  id: number;
  full_name: string;
  name: string;
  html_url: string;
}

export function ItemRepo({ id, name, full_name, html_url }: RepoProps) {
  return (
    <ItemContainer>
      <h3>{name}</h3>
      <p>{full_name}</p>
      <a href={html_url} target="_blank">
        Ver repositório
      </a>
      <hr />
    </ItemContainer>
  );
}
