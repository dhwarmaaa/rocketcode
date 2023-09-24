import React from "react";

// Componentes...
import TextInput from "../UI/TextInput";
import Contenedor from "../UI/Contenedor";
import Titulo from "../UI/Titulo";
import CuadroConfirmacion from "../UI/CuadroConfirmacion";

const Nombre = ({ onComplete, nombre, setNombre }) => {
  // Variable que contiene el nombre completo para mostrarlo en el cuadro de confirmacion
  const nombreCompleto = `${nombre.nombre} ${nombre.segundoNombre} ${nombre.apellidoPaterno} ${nombre.apellidoMaterno}`;

  const handleComplete = () => {
    if (nombreCompleto.trim() !== "") {
      onComplete(); // Llamamos a la función onComplete para avanzar al siguiente paso
    }
  };

  const handleInputChange = (e) => {
    setNombre((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // si hay nombre ingresado, mostramos el cuadro de confirmacion
  const confirmacion = nombreCompleto.length > 0 && (
    <CuadroConfirmacion text={nombreCompleto} />
  );

  return (
    <>
      <Contenedor>
        <Titulo titulo="¿Cual es tu nombre?" />
        <TextInput
          placeholder="Nombre"
          value={nombre.nombre}
          onChange={handleInputChange}
          name="nombre"
        />
        <TextInput
          placeholder="Segundo Nombre"
          value={nombre.segundoNombre}
          onChange={handleInputChange}
          name="segundoNombre"
        />
        <TextInput
          placeholder="Apellido Paterno"
          value={nombre.apellidoPaterno}
          onChange={handleInputChange}
          name="apellidoPaterno"
        />
        <TextInput
          placeholder="Apellido Materno"
          value={nombre.apellidoMaterno}
          onChange={handleInputChange}
          onBlur={handleComplete}
          name="apellidoMaterno"
        />
      </Contenedor>
      {confirmacion}
    </>
  );
};

export default Nombre;
