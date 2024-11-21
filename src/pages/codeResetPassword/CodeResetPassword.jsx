import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography } from "@mui/material";
import validationRegister from "../../utils/validationRegister";
import { goToLoginPage, goToNewPassword } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  ContainerCodePassword,
  InputNum,
  ContainerCodePage,
  ContainerButtonPassword,
  Line,
} from "./CodeResetPasswordStyle";

function CodeResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationRegister),
  });

  const navigate = useNavigate();
  const[reSend, setReSend] = useState(false);

  const handleReSend=()=>{
    setReSend(true)
    console.log(reSend)
  }

  return (
    <ContainerCodePage>
      <Typography
        component="h1"
        variant="h4"
        color="white"
        sx={{ paddingBottom: "10vh" }}
      >
        DIGITE O CÓDIGO ENVIADO NO{" "}
        <Typography component="h1" variant="h4" color="secondary">
          EMAIL!
        </Typography>
      </Typography>
      <ContainerCodePassword>
        <InputNum
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <Line />
        <InputNum
          {...register("numumber")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <Line />
        <InputNum
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <Line />
        <InputNum
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <Line />
        <InputNum
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
        <Line />
        <InputNum
          {...register("number")}
          error={!!errors.number}
          helperText={errors.number?.message}
        />
      </ContainerCodePassword>
      <ContainerButtonPassword>
        <Button
          onClick={() => goToNewPassword(navigate)}
          type="button"
          variant="contained"
          color="secondary"
          sx={{ color:'white', borderRadius: "20px", margin: "20px" }}
        >
          AVANÇAR
        </Button>
        <Button
          onClick={() => handleReSend()}
          type="button"
          variant="contained"
          color="primary"
          sx={{ border: 1, borderRadius: "20px", margin: "20px" }}
        >
          REENVIAR CÓDIGO
        </Button>
      </ContainerButtonPassword>
      {reSend && (<Typography component="h1"  sx={{ color:"white", fontSize:"14px", mt:4 }}>
          CÓDIGO REENVIADO.
        </Typography>)}
    </ContainerCodePage>
  );
}

export default CodeResetPassword;
