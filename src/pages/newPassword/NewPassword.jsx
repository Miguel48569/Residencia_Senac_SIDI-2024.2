import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography, Box } from "@mui/material";
import validationNewPassword from "../../utils/validationNewPassword";
import {
  goToRegister,
  goToresetedPassword,
  goToLoginPage,
} from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { InputNewPassword, ErrorNewPassword } from "./NewPasswordStyle";

function NewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationNewPassword),
  });

  const navigate = useNavigate();

  const [resetedPassword, setResetedPassword] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setResetedPassword(data);
    reset();
  };

  useEffect(()=>{
    resetedPassword && setTimeout(()=>{
      goToLoginPage(navigate)
    }, 1000)
  },[resetedPassword])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          DIGITE NOVA SENHA!
        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          gap="12px"
          justifyContent="space-between"
        >
          <Typography color="white" variant="p" align="left">
            SENHA *
          </Typography>

          <InputNewPassword
            {...register("password")}
            label="Digite sua senha"
            type="password"
            variant="outlined"
            fullWidth
          />

          {errors.password && (
            <ErrorNewPassword>
              {!!errors.password}
              {errors.password?.message}
            </ErrorNewPassword>
          )}

          <Typography color="white" variant="p" align="left">
            CONFIRME A SENHA *
          </Typography>

          <InputNewPassword
            {...register("confirmPassword")}
            label="Confirmação de Senha"
            type="password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          {errors.confirmPassword && (
            <ErrorNewPassword>
              {!!errors.confirmPassword}
              {errors.confirmPassword?.message}
            </ErrorNewPassword>
          )}

          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            mt={3}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                color:'white',
                border: 1,
                py: 1.5,
                borderRadius: "25px",
                width: "10vw",
              }}
            >
              CONFIRMAR
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}
export default NewPassword;
