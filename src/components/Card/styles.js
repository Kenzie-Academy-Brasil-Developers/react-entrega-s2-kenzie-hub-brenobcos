import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 150px;
  height: 100px;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 5px;
  margin: 10px;
  padding: 15px;
`;

export const RemoveButton = styled.button`
  color: var(--grey-100);
  background-color: transparent;
  border: 0;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
