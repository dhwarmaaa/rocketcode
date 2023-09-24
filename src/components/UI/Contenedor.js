import React from "react";
import Avatar from "./Avatar";
import { Container, ColumnContainer } from "../../styles/ContenedorStyle";

const Contenedor = ({ children }) => {
  return (
    <ColumnContainer>
      <Avatar />
      <Container>{children}</Container>
    </ColumnContainer>
  );
};

export default Contenedor;
