import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import UserInfo from "../../components/UserInfo";
import toast from "react-hot-toast";

import Cards from "../../components/Cards";
import AddTech from "../../components/AddTech";

const Dashboard = ({ logged, setLogged }) => {
  const [userData, setUserData] = useState({});
  const [techs, setTechs] = useState([]);
  const [editTech, setEditTech] = useState({});
  const [showAddTech, setShowAddTech] = useState(false);
  const [showEditTech, setShowEditTech] = useState(false);
  const [action, setAction] = useState(false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenziehub:token")) || ""
  );

  const { name, email, contact, avatar_url, course_module, id } =
    localStorage.getItem("@kenziehub:user")
      ? JSON.parse(localStorage.getItem("@kenziehub:user"))
      : {};

  const getUser = () => {
    api
      .get(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserData(response.data);
        setTechs(response.data.techs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, [action]);

  const getAction = () => {
    setAction(!action);
  };

  const handleShowTech = () => {
    setShowAddTech(!showAddTech);
  };

  const handleShowEditTech = (techInfo) => {
    setShowEditTech(!showEditTech);
    setEditTech(techInfo);
  };

  const deleteTech = (tech_id) => {
    api
      .delete(`users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia deletada");
      });

    setTechs(techs.filter((tech) => tech.id !== tech_id));
  };

  return (
    <Container>
      <Header name={name} avatar_url={avatar_url} />
      <Content>
        <UserInfo
          name={name}
          email={email}
          contact={contact}
          course_module={course_module}
          avatar={avatar_url}
          setLogged={setLogged}
        />
        <Cards
          handleShow={handleShowTech}
          techs={techs}
          handleShowEditTech={handleShowEditTech}
          deleteTech={deleteTech}
        >
          Minhas Tecnologias
        </Cards>
        {showAddTech && (
          <AddTech
            handleShowTech={handleShowTech}
            getAction={getAction}
            token={token}
          />
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
