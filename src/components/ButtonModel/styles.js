import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--color-primary);
  color: var(--white-color);
  width: 300px;
  height: 50px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  font-size: 14px;
  font-weight: 600;

  :hover {
    border: 2px solid var(--black-color);
  }
`;
