import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { Container, Content, CardContact, ButtonExit } from "./styles";

const UserInfo = ({
  name,
  email,
  contact,
  course_module,
  avatar,
  setLogged,
}) => {
  const [module, setModule] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");

  useEffect(() => {
    setModule(course_module?.split("(")[0]);
    setModuleDescription(`(${course_module?.split("(")[1]}`);
  }, [course_module]);

  const logout = () => {
    setLogged(false);
    localStorage.removeItem("@kenziehub:token");
    localStorage.removeItem("@kenziehub:user");
  };

  return (
    <Container>
      <header
        name={name}
        email={email}
        contact={contact}
        course_module={course_module}
        avatar={avatar}
      >
        <Avatar
          className="avatar"
          alt={name}
          src={!!avatar ? avatar : ""}
          sx={{ width: 56, height: 56 }}
        ></Avatar>
        <div className="infos">
          <h4>{name}</h4>
          <p>{module}</p>
          <p>{moduleDescription}</p>
        </div>
      </header>
      <Content>
        <CardContact href={`tel:${contact}`}>
          <div>
            <h4>Ligar agora</h4>
            <p>{contact}</p>
          </div>
        </CardContact>
        <CardContact href={`mailto:${email}`}>
          <div>
            <h4>Enviar email</h4>
            <p>{email}</p>
          </div>
        </CardContact>
        <ButtonExit onClick={logout}>Sair</ButtonExit>
      </Content>
    </Container>
  );
};

export default UserInfo;
