import React from "react";
import { Container } from "../../styles/DatosUsuarioStyle";

const DatosUsuario = ({ nombre, fechaNacimiento, datosContacto }) => {
  return (
    <Container>
      <div>
        <p>
          Fecha de nacimiento: {fechaNacimiento.dia} {fechaNacimiento.mes}{" "}
          {fechaNacimiento.anio}
        </p>
        <p>Correo electrónico: {datosContacto.email}</p>
        <p>Teléfono celular: {datosContacto.telefono}</p>
        <p>
          Nombre: {nombre.nombre} {nombre.segundoNombre}{" "}
          {nombre.apellidoPaterno} {nombre.apellidoMaterno}
        </p>
      </div>
    </Container>
  );
};

export default DatosUsuario;
