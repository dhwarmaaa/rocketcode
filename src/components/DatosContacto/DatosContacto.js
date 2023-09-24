// Componentes
import React from "react";
import Contenedor from "../UI/Contenedor";
import Titulo from "../UI/Titulo";
import TextInput from "../UI/TextInput";
import CuadroConfirmacion from "../UI/CuadroConfirmacion";

const DatosContacto = ({ onComplete, email, telefono, setDatosContacto }) => {
  const datos =
    email.trim() !== "" && telefono.trim() !== ""
      ? `Correo electronico: ${email}\nTelefono celular: ${telefono}`
      : "";

  const handleInputChange = (e) => {
    setDatosContacto((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Contenedor>
        <Titulo titulo="Datos de contacto" />
        <TextInput
          placeholder="Correo electronico"
          value={email}
          onChange={handleInputChange}
          name="email"
        />
        <TextInput
          placeholder="Telefono"
          value={telefono}
          onChange={handleInputChange}
          name="telefono"
          onBlur={onComplete}
        />
      </Contenedor>
      <CuadroConfirmacion text={datos} />
    </>
  );
};

export default DatosContacto;
