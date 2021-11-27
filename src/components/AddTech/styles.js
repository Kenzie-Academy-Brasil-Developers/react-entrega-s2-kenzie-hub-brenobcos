import styled from "styled-components";

export const ContainerAddTec = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.75);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeadDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 35px;
`;

export const Modal = styled.div`
  display: flex;
  gap: 15px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  padding: 25px;
  height: 250px;
  background-color: var(--white-color);
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  color: var(--black-color);
  border: none;
  cursor: pointer;

  :hover {
    color: var(--color-primary);
  }
`;

export const SpanClose = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonRegister = styled.button`
  background-color: var(--color-primary);
  color: var(--white-color);
  width: 200px;
  height: 50px;
  border-radius: 8px;
  padding: 0px 40px;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;

  :hover {
    border: 2px solid var(--black-color);
  }
`;
