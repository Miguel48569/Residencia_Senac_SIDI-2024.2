import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography, Box, Divider } from "@mui/material";
import validationLogin from "../../utils/validatioLogin";
import { goToHome, goToRegister, goToResetPassword } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { ErrorLogin, InputLogin, HrLine} from "./LoginStyle.js";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationLogin),
  });

  const navigate = useNavigate();

  const [doLogin, setDoLogin] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setDoLogin(data);
    console.log(doLogin);
  };

  const handleChangePage = (navigate) => {
    setTimeout(() => {
      goToHome(navigate);
    }, 1000);
  };

  useEffect(() => {
    doLogin && handleChangePage(navigate);
  }, [doLogin]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography color="white" variant="h4" align="center" gutterBottom>
          LOGIN
        </Typography>

        <Box display="flex" flexDirection="column" gap="12px" p={2} mt={3}>
          <Typography color="white" variant="p" align="left">
            EMAIL *
          </Typography>

          <InputLogin
            {...register("email")}
            label="Digite seu email"
            type="email"
            variant="outlined"
            fullWidth
          />

          {errors.email && (
            <ErrorLogin>
              {!!errors.email}
              {errors.email?.message}
            </ErrorLogin>
          )}

          <Typography color="white" variant="p" align="left">
            SENHA *
          </Typography>

          <InputLogin
            {...register("password")}
            label="Digite sua senha"
            type="password"
            variant="outlined"
            fullWidth
          />

          {errors.password && (
            <ErrorLogin>
              {!!errors.password}
              {errors.password?.message}
            </ErrorLogin>
          )}
          <Box
            display="flex"
            flexDirection="column"
            gap="12px"
            alignItems="center"
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                color: '#FFFFFF',
                py: 1.5,
                borderRadius: "25px",
                width: "15vw",
                margin: "16px",
              }}
            >
              Entrar
            </Button>
            <Box display="flex" flexDirection="row">
              <HrLine />
              <Typography
                onClick={() => goToResetPassword(navigate)}
                color="secondary"
                variant="p"
              >
                ESQUECI MINHA SENHA
              </Typography>
              <HrLine />
            </Box>

            <Button
              onClick={() => goToRegister(navigate)}
              type="button"
              variant="contained"
              sx={{
                color: '#FFFFFF',
                py: 1.5,
                borderRadius: "25px",
                border: 1,
                width: "fit-content",
                margin: "16px",
              }}
            >
              Cadastre-se
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}

export default Login;
