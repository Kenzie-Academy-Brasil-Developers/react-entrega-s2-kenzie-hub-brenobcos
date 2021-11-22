import api from "../../services/api";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, InputLabel, NativeSelect, FormHelperText } from "@mui/material";
import ButtonPurple from "../../components/ButtonPurple";
import Title from "../../components/Title";
import { ContainerRegister, DivRegister, MsgError } from "./styles";

const Register = ({ logged }) => {
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
    course_module: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = { email, password, name, bio, contact, course_module };

    api
      .post("/users", user)
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        return history.push("/");
      })
      .catch((errors) => toast.error("Email duplicado, tente outro email"));
  };

  if (logged) {
    <Redirect to="/dashboard" />;
  }

  return (
    <DivRegister>
      <Title />
      <ContainerRegister
        type={"submit"}
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <TextField
          margin="normal"
          fullWidth
          label="Nome *"
          variant="outlined"
          {...register("name")}
        />
        <MsgError>{errors.name?.message}</MsgError>
        <TextField
          margin="normal"
          fullWidth
          label="Email *"
          variant="outlined"
          {...register("email")}
        />
        <MsgError>{errors.email?.message}</MsgError>
        <TextField
          margin="normal"
          fullWidth
          label="Bio *"
          variant="outlined"
          {...register("bio")}
        />
        <MsgError>{errors.bio?.message}</MsgError>
        <TextField
          margin="normal"
          fullWidth
          label="Contato *"
          variant="outlined"
          {...register("contact")}
        />
        <MsgError>{errors.contact?.message}</MsgError>
        <InputLabel htmlFor="select">Selecionar módulo *:</InputLabel>
        <NativeSelect
          {...register("course_module")}
          fullWidth
          labelId="Required"
        >
          <option value={"Primeiro módulo (Introdução ao Frontend)"}>
            Primeiro módulo
          </option>
          <option value={"Segundo módulo (Frontend Avançado)"}>
            Segundo módulo
          </option>
          <option value={"Terceiro módulo (Introdução ao Backend)"}>
            Terceiro móduro
          </option>
          <option value={"Quarto módulo (Backend Avançado)"}>
            Quarto módulo
          </option>
        </NativeSelect>
        <FormHelperText>Campo obrigatório</FormHelperText>
        <TextField
          margin="normal"
          type="password"
          fullWidth
          label="Senha *"
          variant="outlined"
          {...register("password")}
        />
        <MsgError>{errors.password?.message}</MsgError>
        <TextField
          margin="normal"
          type="password"
          fullWidth
          label="Confirmar Senha *"
          variant="outlined"
          {...register("confirm_password")}
        />
        <MsgError>{errors.confirm_password?.message}</MsgError>
        <ButtonPurple type="submit">Cadastrar</ButtonPurple>
      </ContainerRegister>
    </DivRegister>
  );
};

export default Register;
