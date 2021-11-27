import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
`;

export const ContainerRegister = styled.form`
  height: 600px;
  width: 300px;
  border-radius: 5px;
  border: 2px solid var(--grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MsgError = styled.span`
  font-size: 10px;
  color: var(--red-color);
  margin-bottom: 2px;
`;
