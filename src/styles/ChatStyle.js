import styled from "styled-components";

// Icons
import { AiOutlineClose } from "react-icons/ai";
import { RiTimerLine } from "react-icons/ri";
import { HiOutlineClipboardCheck } from "react-icons/hi";

export const ChatContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  max-height: 400px;
  overflow-y: scroll;
  padding: 10px;
  position: fixed;
  right: 20px;
  width: 400px;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #bf4f74;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  gap: 10px;
  justify-content: center;
  margin-left: -10px;
  margin-right: -15px;
  margin-top: -10px;
  padding: 40px;
`;

export const ConfirmContainer = styled.div`
  align-items: center;
  background-color: #bbbb;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  gap: 10px;
  height: 30px;
  justify-content: center;
  margin-right: -45px;
  margin-top: 20px;
  padding: 12px;
  width: 300px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ClipboardIcon = styled(HiOutlineClipboardCheck)`
  height: 44px;
  position: absolute;
  right: 50px;
  top: 10px;
  width: 44px;
`;

export const TimerIcon = styled(RiTimerLine)`
  height: 20px;
  left: 6px;
  position: absolute;
  top: 42px;
  width: 20px;
`;

export const Texto = styled.p`
  font-size: 1em;
  left: 34px;
  margin: 0;
  position: absolute;
  top: 43px;
`;

export const Titulo = styled.h3`
  font-size: 1.2em;
  left: 34px;
  margin: 0;
  position: absolute;
  top: 14px;
`;
