import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const ContainerLogin = styled.form`
  margin-top: 56px;
  height: 426px;
  width: 500px;
  border-radius: 5px;
  border: 2px solid var(--grey-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MsgLogin = styled.span`
  text-align: center;
  font-size: 14px;
  width: 327px;
  height: 36px;
  padding: 2px;
  margin: 20px 0px;
  color: var(--grey-100);
`;

export const MsgLoginBlack = styled(MsgLogin)`
  color: var(--black-color);
`;

export const MsgError = styled.span`
  font-size: 10px;
  color: var(--red-color);
  margin-bottom:2px;
`