import { ContainerCard, RemoveButton } from "./styles";

const Card = ({ techs, handleShowEditTech, cardtech, deleteTech }) => {
  return (
    <ContainerCard>
      <h4>{cardtech.title}</h4>
      <h5>{cardtech.status}</h5>
      <p>{cardtech.decription}</p>
      <RemoveButton onClick={() => deleteTech(cardtech.id)}>
        Excluir
      </RemoveButton>
    </ContainerCard>
  );
};

export default Card;
