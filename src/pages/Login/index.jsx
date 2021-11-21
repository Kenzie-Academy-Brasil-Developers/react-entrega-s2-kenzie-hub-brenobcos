import api from "../../services/api";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-hot-toast'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { ContainerLogin, Div, MsgLogin, MsgLoginBlack } from "./styles";
import ButtonPurple from "../../components/ButtonPurple";
import Title from "../../components/Title";

const Login = ({ logged, setLogged }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Email obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
    .post("/sessions", data)
    .then((response) => {
      const { token, user } = response.data;
      toast.success('Login realizado com sucesso')
      localStorage.clear();
      localStorage.setItem("@kenziehub:token", JSON.stringify(token));
      localStorage.setItem("@kenziehub:user", JSON.stringify(user));
      setLogged(true);
      return history.push("/dashboard");
    })
    .catch((error) => toast.error('Email ou senha inválido'));
  };


  if(logged){
    <Redirect to = '/dashboard'/>
  }

  return (
    <Div>
      <Title />
      <ContainerLogin onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          margin="normal"
          fullWidth
          label="E-mail"
          variant="outlined"
          {...register("email")}
        />
        <TextField
          margin="normal"
          fullWidth
          type="password"
          label="Senha"
          variant="outlined"
          {...register("password")}
        />
        <ButtonPurple type ={'submit'}>Logar</ButtonPurple>
        <MsgLogin>
          Criar uma Página para mostrar suas{" "}
          <MsgLoginBlack>habilidades metas e progresso</MsgLoginBlack>
        </MsgLogin>
        <ButtonPurple onClick={() => history.push("/register")}>
          Cadastrar
        </ButtonPurple>
      </ContainerLogin>
    </Div>
  );
};

export default Login;
