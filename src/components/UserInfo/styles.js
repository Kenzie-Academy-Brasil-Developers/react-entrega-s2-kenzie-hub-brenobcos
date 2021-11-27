import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  background-color: var(--white-color);
  header {
    height: 80px;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    align-items: center;
    padding: 17px;
    background-color: var(--color-primary);
    margin-bottom: 10px;
    div:first-child {
      margin-right: 15px;
    }
    .avatar {
      background-color: var(--color-primary);
    }
    .infos {
      h4 {
        color: var(--white-color);
      }
      p {
        color: var(--white-color);
      }
      p:last-child {
        font-style: italic;
        color: var(--grey-50);
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const CardContact = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  text-align: left;

  h4 {
    color: var(--black-color);
  }
  p {
    color: var(--grey-50);
    margin-bottom: 10px;
  }
`;

export const ButtonExit = styled.button`
  background-color: var(--color-primary);
  color: var(--white-color);
  width: 400px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  font-size: 14px;
  font-weight: 600;

  :hover {
    border: 2px solid var(--black-color);
  }
`;
