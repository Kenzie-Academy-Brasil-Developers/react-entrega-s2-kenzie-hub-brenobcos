import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import api from "../../services/api";
import { InputLabel, NativeSelect, TextField } from "@mui/material";
import {
  ContainerAddTec,
  ButtonClose,
  HeadDiv,
  Modal,
  SpanClose,
  ButtonRegister,
} from "./styles";

const AddTech = ({ handleShowTech, token, getAction }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getAction();
        toast.success("Tech adicionada com sucesso!");
        reset();
        handleShowTech();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Algo saiu errado, verifique seus dados e tente novamente");
      });
  };

  return (
    <ContainerAddTec>
      <Modal>
        <HeadDiv>
          <h2>Cadastrar Tech</h2>
          <ButtonClose onClick={handleShowTech}>
            <SpanClose>X</SpanClose>
          </ButtonClose>
        </HeadDiv>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            {...register("title")}
            variant="standard"
            label={"Insira a tecnologia*"}
          />
          <div>
            <div>
              <NativeSelect {...register("status")} fullWidth>
                <option value={"Iniciante"}>Iniciante</option>
                <option value={"Intermediário"}>Intermediário</option>
                <option value={"Avançado"}>Avançado</option>
              </NativeSelect>
              <InputLabel htmlFor="select">Selecionar módulo *</InputLabel>
            </div>
          </div>
          <ButtonRegister type="submit">Cadastrar</ButtonRegister>
        </form>
      </Modal>
    </ContainerAddTec>
  );
};

export default AddTech;
