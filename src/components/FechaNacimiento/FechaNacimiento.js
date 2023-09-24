// Componentes
import React from "react";
import Titulo from "../UI/Titulo";
import Contenedor from "../UI/Contenedor";
import TextInput from "../UI/TextInput";
import CuadroConfirmacion from "../UI/CuadroConfirmacion";

const FechaNacimiento = ({
  onComplete,
  fechaNacimiento,
  setFechaNacimiento,
}) => {
  const handleInputChange = (e) => {
    setFechaNacimiento((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fechaNacimientoCompleta = `${fechaNacimiento.dia} ${fechaNacimiento.mes} ${fechaNacimiento.anio}`;

  const handleComplete = () => {
    if (fechaNacimientoCompleta.trim() !== "") {
      onComplete(); // Llamamos a la función onComplete para avanzar al siguiente paso
    }
  };

  return (
    <>
      <Contenedor>
        <Titulo titulo="Cual es tu fecha de nacimiento?" />
        <TextInput
          placeholder="Dia"
          value={fechaNacimiento.dia}
          onChange={handleInputChange}
          name="dia"
        />
        <TextInput
          placeholder="Mes"
          value={fechaNacimiento.mes}
          onChange={handleInputChange}
          name="mes"
        />
        <TextInput
          placeholder="Año"
          value={fechaNacimiento.anio}
          onChange={handleInputChange}
          onBlur={handleComplete}
          name="anio"
        />
      </Contenedor>
      <CuadroConfirmacion text={fechaNacimientoCompleta} />
    </>
  );
};

export default FechaNacimiento;
