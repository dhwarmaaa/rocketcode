import React, { useState } from "react";

const useDataForm = () => {
  const [nombre, setNombre] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
  });
  const [fechaNacimiento, setFechaNacimiento] = useState({
    dia: "",
    mes: "",
    anio: "",
  });
  const [datosContacto, setDatosContacto] = useState({
    email: "",
    telefono: "",
  });

  return {
    nombre,
    setNombre,
    fechaNacimiento,
    setFechaNacimiento,
    datosContacto,
    setDatosContacto,
  };
};

export default useDataForm;
