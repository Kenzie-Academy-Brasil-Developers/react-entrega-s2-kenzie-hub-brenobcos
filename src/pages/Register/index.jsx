import api from "../../services/api";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import ButtonPurple from "../../components/ButtonPurple";
import Title from "../../components/Title";
import { ButtonModule, ContainerModule, ContainerRegister, DivRegister, Titlemodule } from "./styles";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Apenas letras, por favor"
      ),
    email: yup.string().email().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    module: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <DivRegister>
      <Title />
      <ContainerRegister>
        <TextField
          margin="normal"
          fullWidth
          label="Nome"
          variant="outlined"
          {...register("name")}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          variant="outlined"
          {...register("email")}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Bio"
          variant="outlined"
          {...register("bio")}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Contato"
          variant="outlined"
          {...register("contact")}
        />
        <Titlemodule>Selecionar módulo:</Titlemodule>
        <ContainerModule>
            <ButtonModule>Primeiro</ButtonModule>
            <ButtonModule>Segundo</ButtonModule>
            <ButtonModule>Terceiro</ButtonModule>
            <ButtonModule>Quarto</ButtonModule>
        </ContainerModule>
        <TextField
          margin="normal"
          fullWidth
          label="Senha"
          variant="outlined"
          {...register("password")}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Confirmar Senha"
          variant="outlined"
          {...register("confirm_password")}
        />
        <ButtonPurple>Cadastrar</ButtonPurple>
      </ContainerRegister>
    </DivRegister>
  );
};

export default Register;
