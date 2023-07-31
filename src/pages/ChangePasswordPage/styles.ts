import styled from "styled-components";
import { Button } from "antd";

export const ModalLoginButton = styled(Button)`
  margin-bottom: 2rem;
  width: 100%;
  background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  // padding: 0.5rem;
  height: 2.5rem;
  border: none;
  &:hover {
    background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%);
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ModalCancelButton = styled(Button)`
  margin-bottom: 2rem;
  margin-left: 1rem;
  background: #121825;
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  // padding: 0.5rem;
  height: 2.5rem;
  border: 1px solid #ffbe55;
  &:hover {
    background: #121825;
    border: 1px solid #ffbe55;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background: #121825;
    border: 1px solid #ffbe55;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  }
`;
