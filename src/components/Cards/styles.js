import styled from "styled-components";

export const ContainerTec = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

export const ContainerHeaderTec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 15px 0px 15px 0px;
`;

export const ButtonReg = styled.button`
  background-color: var(--color-primary);
  color: var(--white-color);
  height: 50px;
  border-radius: 8px;
  padding: 0px 40px;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  font-weight: 600;

  :hover {
    border: 2px solid var(--black-color);
  }
`;
