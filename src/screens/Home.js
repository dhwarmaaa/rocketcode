// Hooks
import React, { useState } from "react";

// Componentes
import Chat from "../components/Chat/Chat";
import {
  PaginaInicio,
  ContenidoCentrado,
  MainText,
  ChatButton,
} from "../styles/HomeStyle";

/*
    Home se encarga principalmente de mostrar el texto principal
    y de mostrar el botón para abrir el chat asi como de controlar su funcion.
*/
const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <PaginaInicio>
      <ContenidoCentrado>
        <MainText>Prueba técnica</MainText>
        <p>Dharma Farina Saucedo Saucedo</p>
        <p>
          Para iniciar, abre el chat pulsando el circulo rosado con el texto
          Chat. Una vez dentro, llena los campos solicitados y al finalizar da
          clic en cualquier parte del formulario para continuar con el proceso.
          Por favor, toma en cuenta escribir el nombre del mes de tu fecha de
          nacimiento en minusculas.
        </p>
        <p>
          Una vez completada la informacion, presiona el boton Iniciar para
          terminar el proceso.
        </p>
      </ContenidoCentrado>
      {isChatOpen && <Chat toggleChat={toggleChat} />}
      {!isChatOpen && <ChatButton onClick={toggleChat}>Chat</ChatButton>}
    </PaginaInicio>
  );
};

export default Home;
