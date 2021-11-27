import Card from "../Card";
import { ContainerTec, ContainerHeaderTec, ButtonReg } from "./styles";

const Cards = ({
  children,
  handleShow,
  handleShowEditTech,
  techs,
  deleteTech,
}) => {
  return (
    <div>
      <ContainerHeaderTec>
        <h3>{children}</h3>
        <ButtonReg onClick={handleShow}>Cadastrar</ButtonReg>
      </ContainerHeaderTec>
      <ContainerTec className="cards">
        {techs.map((cardtech) => (
          <Card
            key={cardtech.id}
            handleShowEditTech={handleShowEditTech}
            techs={techs}
            cardtech={cardtech}
            deleteTech={deleteTech}
          />
        ))}
      </ContainerTec>
    </div>
  );
};

export default Cards;
