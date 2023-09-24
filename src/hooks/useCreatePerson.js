import React from "react";
import { gql, useMutation } from "@apollo/client";
import { CREATE_PERSON } from "../graphql/hooks/Person";

const useCreatePerson = () => {
  const [createPerson] = useMutation(CREATE_PERSON);

  const createPersonHandler = async (nombre, contacto, fechaNacimiento) => {
    createPerson({
      variables: {
        personInput: {
          name: {
            firstName: nombre.nombre,
            middleName: nombre.segundoNombre,
            lastName: nombre.apellidoPaterno,
            maternalLastName: nombre.apellidoMaterno,
          },
          birthDate: {
            year: parseInt(fechaNacimiento.anio),
            month: fechaNacimiento.mes,
            day: parseInt(fechaNacimiento.dia),
          },
          contact: {
            email: contacto.email,
            phone: contacto.telefono,
          },
        },
      },
    })
      .then((result) => {
        // Manejar la respuesta de la mutación aquí
        console.log(result.data.createPerson);
      })
      .catch((error) => {
        // Manejar errores aquí
        console.error(error);
      });
  };
  return { createPersonHandler };
};

export default useCreatePerson;
