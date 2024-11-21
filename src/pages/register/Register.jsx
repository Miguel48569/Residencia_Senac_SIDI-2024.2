import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography, Box } from "@mui/material";
import validationRegister from "../../utils/validationRegister";
import {
  goToRegister,
  goToResetPassword,
  goToLoginPage,
} from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { ErrorRegister, InputRegister } from "./RegisterStyle";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationRegister),
  });

  const navigate = useNavigate();

  const [submittedNewPassword, setSubmittedNewPassword] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedNewPassword(data);
    reset();
  };

  const handleChangePage = (navigate) => {
    console.log(submittedNewPassword);
    setTimeout(() => {
      goToLoginPage(navigate);
    }, 1000);
  };

  useEffect(() => {
    submittedNewPassword && handleChangePage(navigate);
  }, [submittedNewPassword]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          mb={3.5}
          gutterBottom
        >
          FORMULÁRIO DE CADASTRO
        </Typography>

        <Box
          flexDirection="column"
          display="flex"
          gap="12px"
          justifyContent="space-between"
        >
          <Typography color="white" variant="p" align="left">
            NOME *
          </Typography>

          <InputRegister
            {...register("nome")}
            label="nome"
            type="nome"
            margin="normal"
          />
          {errors.nome && (
            <ErrorRegister>
              {!!errors.nome}
              {errors.nome?.message}
            </ErrorRegister>
          )}

          <Typography color="white" variant="p" align="left">
            EMAIL *
          </Typography>

          <InputRegister
            {...register("email")}
            label="Digite seu email"
            type="email"
          />

          {errors.email && (
            <ErrorRegister>
              {!!errors.email}
              {errors.email?.message}
            </ErrorRegister>
          )}

          <Typography color="white" variant="p" align="left">
            SENHA *
          </Typography>

          <InputRegister
            {...register("password")}
            label="Digite sua senha"
            type="password"
            variant="outlined"
            fullWidth
          />

          {errors.password && (
            <ErrorRegister>
              {!!errors.password}
              {errors.password?.message}
            </ErrorRegister>
          )}

          <Typography color="white" variant="p" align="left">
            CONFIRME A SENHA *
          </Typography>

          <InputRegister
            {...register("confirmPassword")}
            label="Confirmação de Senha"
            type="password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          {errors.confirmPassword && (
            <ErrorRegister>
              {!!errors.confirmPassword}
              {errors.confirmPassword?.message}
            </ErrorRegister>
          )}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="12px"
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                color: "white",
                py: 1.5,
                borderRadius: "25px",
                width: "15vw",
                m: 1,
              }}
            >
              Cadastrar-se
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              sx={{
                border: 1,
                py: 1.5,
                borderRadius: "25px",
                width: "10vw",
              }}
              onClick={() => goToLoginPage(navigate)}
            >
              CONECTE-SE
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}
export default Register;
