import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { goToHome, goToLogUser, goToRegister } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import {
  ContainerPage,
  TitleLog,
  TextLog,
  MinorTitleLog,
  ContainerLog,
  ImgContainer,
  HeaderLog,
} from "./LogUserStyle";
import Return from "../../assets/images/return.png";
import Icone from "../../assets/images/IconeLogo.png";

function LogUser() {
  const [pontoEntrada, setPontoEntrada] = useState(
    localStorage.getItem("Entrada")
  );

  const [pontoSaida, setPontoSaida] = useState(localStorage.getItem("Saida"));

  const navigate = useNavigate();

  const dataAtual = new Date();

  const formatoDataEntrada =
    String(dataAtual.getDate()).padStart(2, "0") +
    "/" +
    String(dataAtual.getMonth() + 1).padStart(2, "0") +
    "/" +
    dataAtual.getFullYear();

  const tratamentoPontoEntrada =
    pontoEntrada && pontoEntrada.slice(1, pontoEntrada.length - 1);

  const tratamentoPontoSaida =
    pontoSaida && pontoSaida.slice(1, pontoEntrada.length - 1);

  const handleReturn = (navigate) => {
    goToHome(navigate);
  };

  const handleCorrection = () => {
    alert("Seu pedido de correção de ponto foi solicitado ao Gestor");
  };

  useEffect(() => {
    if (pontoSaida) {
      setTimeout(() => {
        alert("Limpar pontos para teste Local Storage");
        localStorage.clear();
        goToHome(navigate);
      }, 20000);
    }
  }, [pontoSaida]);
  return (
    <>
      <HeaderLog>
        <ImgContainer src={Icone} alt="Icone da empresa Sidi sem o nome" />
      </HeaderLog>
      <ContainerPage>
        <ImgContainer
          src={Return}
          alt="Botão para voltar"
          onClick={() => handleReturn(navigate)}
        />
        <TitleLog>Histórico</TitleLog>
        <Box mr={26}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
            mr={4}
            mb={-2}
          >
            <MinorTitleLog>Data</MinorTitleLog>
            <MinorTitleLog>Hora Entrada</MinorTitleLog>
            <MinorTitleLog>Hora Saída</MinorTitleLog>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            ml={18}
            gap={19}
          >
            <div>
              <TextLog>27/11/2024</TextLog>
              <TextLog>28/11/2024</TextLog>
              {pontoEntrada ? <TextLog>{formatoDataEntrada}</TextLog> : null}
            </div>
            <div>
              <TextLog>8:15:20</TextLog>
              <TextLog>8:02:01</TextLog>
              {pontoEntrada ? (
                <TextLog>{tratamentoPontoEntrada}</TextLog>
              ) : null}
            </div>
            <div>
              <TextLog>17:28:01</TextLog>
              <TextLog>17:10:11</TextLog>
              {pontoSaida ? <TextLog>{tratamentoPontoSaida}</TextLog> : null}
            </div>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              ml={-8}
              mr={-12}
            >
              <Button
                onClick={() => handleCorrection()}
                type="button"
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: "12px",
                  border: 1,
                  bgcolor: "#4FD48C",
                  color: "#000000",
                  fontFamily: "Onest",
                  fontWeight: "bold",
                }}
              >
                Corrigir
              </Button>
              <Button
                onClick={() => handleCorrection()}
                type="button"
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: "12px",
                  border: 1,
                  bgcolor: "#4FD48C",
                  color: "#000000",
                  fontFamily: "Onest",
                  fontWeight: "bold",
                }}
              >
                Corrigir
              </Button>
              {pontoEntrada ? (
                <Button
                  onClick={() => handleCorrection()}
                  type="button"
                  variant="contained"
                  sx={{
                    py: 1.5,
                    borderRadius: "12px",
                    border: 1,
                    bgcolor: "#4FD48C",
                    color: "#000000",
                    fontFamily: "Onest",
                    fontWeight: "bold",
                  }}
                >
                  Corrigir
                </Button>
              ) : null}
            </Box>
          </Box>
        </Box>
      </ContainerPage>
    </>
  );
}

export default LogUser;
