import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--color-primary);
  color: var(--white-color);
  width: 452px;
  height: 60px;
  border-radius: 8px;
  padding: 0px 40px;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  font-size: 16px;
  font-weight: 600;

  :hover {
    border: 2px solid var(--black-color);
  }
`;
