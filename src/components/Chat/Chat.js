// Hooks
import React, { useState } from "react";
import useChatSteps from "../../hooks/useChatSteps";
import useDataForm from "../../hooks/useDataForm";
import useCreatePerson from "../../hooks/useCreatePerson";

// Componentes
import Nombre from "../Nombre/Nombre";
import FechaNacimiento from "../FechaNacimiento/FechaNacimiento";
import DatosContacto from "../DatosContacto/DatosContacto";
import Boton from "../UI/Boton";
import DatosUsuario from "../UI/DatosUsuario";

import {
  ChatContainer,
  Container,
  ConfirmContainer,
  CloseIcon,
  ClipboardIcon,
  TimerIcon,
  Titulo,
  Texto,
} from "../../styles/ChatStyle";

/*
  Chat muestra cada parte del formulario y los datos del usuario
*/
const Chat = ({ toggleChat }) => {
  const { currentStep, nextStep } = useChatSteps();
  const { createPersonHandler } = useCreatePerson();
  const {
    nombre,
    setNombre,
    fechaNacimiento,
    setFechaNacimiento,
    datosContacto,
    setDatosContacto,
  } = useDataForm();

  const [button, setButton] = useState(false);

  const toggleButton = () => {
    if (!button) {
      createPersonHandler(nombre, datosContacto, fechaNacimiento);
      setButton(true); // Deshabilita el botón
    }
  };

  return (
    <ChatContainer>
      <CloseIcon onClick={toggleChat} />
      <Container>
        <div>
          <Titulo>Formulario </Titulo>
          <TimerIcon />
          <Texto>En menos de 5 minutos</Texto>
          <ClipboardIcon />
        </div>
      </Container>
      <Nombre onComplete={nextStep} nombre={nombre} setNombre={setNombre} />
      {currentStep >= 2 && (
        <FechaNacimiento
          onComplete={nextStep}
          fechaNacimiento={fechaNacimiento}
          setFechaNacimiento={setFechaNacimiento}
        />
      )}
      {currentStep >= 3 && (
        <DatosContacto
          {...datosContacto}
          setDatosContacto={setDatosContacto}
          onComplete={nextStep}
        />
      )}
      {currentStep >= 4 && (
        <>
          <ConfirmContainer>
            Si tus datos son correctos por favor continuemos
          </ConfirmContainer>
          <Boton texto="Iniciar" onClick={toggleButton} />
        </>
      )}
      {button && (
        <DatosUsuario
          nombre={nombre}
          fechaNacimiento={fechaNacimiento}
          datosContacto={datosContacto}
        />
      )}
    </ChatContainer>
  );
};

export default Chat;
