import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
`;

export const ContainerRegister = styled.div`
  margin-top: 56px;
  height: 770px;
  width: 500px;
  border-radius: 5px;
  border: 2px solid var(--grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerModule = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

export const Titlemodule = styled.span`
  color: var(--grey-100);
  margin: 15px 0px;
  font-size: 14px;
  font-weight: 500;
`;

export const ButtonModule = styled.button`
  color: var(--color-primary);
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 15px;
  font-size: 14px;
  font-weight: 500;

  :hover {
    background-color: var(--purple-transp);
    border-radius: 8px;
  }
`;
