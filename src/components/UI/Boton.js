import React from "react";
import { Button } from "../../styles/BotonStyle";

const Boton = ({ texto, onClick }) => {
  return <Button onClick={onClick}>{texto}</Button>;
};

export default Boton;
