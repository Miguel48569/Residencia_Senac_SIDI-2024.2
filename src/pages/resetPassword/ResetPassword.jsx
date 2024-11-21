import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Box, Typography } from "@mui/material";
import validationResetPassword from "../../utils/validationResetPassword";
import {
  goToRegister,
  goToCodeResetPassword,
  goToLoginPage,
} from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { ErrorResetPassword, InputResetPassword } from "./ResetPasswordStyle";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationResetPassword),
  });

  const navigate = useNavigate();

  const [submittedEmail, setSubmittedEmail] = useState(null);

  const onSubmit = (data) => {
    setSubmittedEmail(data);
    console.log(submittedEmail);
  };

  useEffect(() => {
    submittedEmail &&
      setTimeout(() => {
        goToCodeResetPassword(navigate);
      }, 1000);
  }, [submittedEmail]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography component="h1" variant="h4" align="center" mb={5}>
        ESQUECEU A SENHA?
      </Typography>
      <Typography component="h1" variant="h4" align="center" mb={6}>
        DIGITE SEU EMAIL PARA <br /> RECUPERAR A SUA SENHA
      </Typography>

      <Box
        flexDirection="column"
        display="flex"
        gap="12px"
        justifyContent="space-between"
      >
        <Typography color="white" variant="p" align="left">
          EMAIL *
        </Typography>

        <InputResetPassword
          {...register("email")}
          label="Digite seu email"
          type="email"
        />

        {errors.email && (
          <ErrorResetPassword>
            {!!errors.email}
            {errors.email?.message}
          </ErrorResetPassword>
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
            Solicitar código
          </Button>
          <Button
            onClick={() => goToLoginPage(navigate)}
            type="button"
            variant="contained"
            color="primary"
            sx={{
              border: 1,
              py: 1.5,
              borderRadius: "25px",
              width: "10vw",
              m: 1,
            }}
          >
            Voltar
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default ResetPassword;
