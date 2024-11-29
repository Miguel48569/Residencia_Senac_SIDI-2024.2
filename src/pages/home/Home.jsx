import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { goToHome, goToLoginPage, goToLogUser, goToRegister } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import Icone from "../../assets/images/IconeLogo.png";
import UserBox from "../../assets/images/userBox.png";
import LogOut from "../../assets/images/LogOut.png";
import {
  ContainerButtonHome,
  ContainerTextHome,
  HeaderHome,
  ImgContainerHome,
  PopUpPonto,
  PopUpText,
  TextDate,
  TextHeader,
  TextTime,
  TitleHome,
} from "./HomeStyle.js";

function Home() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [ponto, setPonto] = useState(false);
  const flagPontoEntrada = localStorage.getItem("Entrada");
  const navigate = useNavigate();

  const updateDate = () => {
    setDate(new Date().toLocaleDateString());
  };

  const updateTime = () => {
    setTime(
      new Date().toLocaleString("pt-Br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  };

  const handlePonto = () => {
    setPonto(true);
  };

  const cancelPonto = () => {
    setPonto(false);
  };

  const savePonto = (navigate) => {
    if (localStorage.getItem("Entrada")) {
      localStorage.setItem("Saida", JSON.stringify(time));
    } else {
      localStorage.setItem("Entrada", JSON.stringify(time));
    }

    setTimeout(() => {
      alert("Ponto registrado com Sucesso!");
      goToLogUser(navigate);
    }, 300);
  };

  useEffect(() => {
    setInterval(() => {
      updateDate();
      updateTime();
    }, 300);
  }, [date, time]);

  return (
    <>
      <HeaderHome>
        <ImgContainerHome src={Icone} alt="Icone da empresa Sidi sem o nome" />
        <Box display='flex' flexDirection="row" mr={2} gap={2} height={6}>
          <TextHeader>Usuário</TextHeader>
          <ImgContainerHome
            src={UserBox}
            alt="Icone do usuário em formato de box"
          />
          <ImgContainerHome onClick={()=> goToLoginPage(navigate)} src={LogOut} alt="Icone para deslogar do site" />
        </Box>
      </HeaderHome>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          bgcolor: "#ffff",
          width: "100vw",
          height: "88.5vh",
          m: "-16px",
          mt: "-12px",
          fontFamily: "Onest",
        }}
      >
        <ContainerTextHome>
          <TitleHome>Bater</TitleHome>
          <TitleHome>
            {"\u00A0"}
            {"\u00A0"}Ponto
          </TitleHome>

          <TextDate>{date}</TextDate>
          <TextTime>{time}</TextTime>
        </ContainerTextHome>
        <ContainerButtonHome>
          <Button
            onClick={() => handlePonto()}
            type="button"
            variant="contained"
            sx={{
              py: 1.5,
              borderRadius: "80px",
              border: 4,
              width: "360px",
              height: "fit-content",
              margin: "16px",
              bgcolor: "#4FD48C",
              color: "#000000",
              fontSize: "32px",
              fontFamily: "Onest",
              fontWeight: "bold",
            }}
          >
            Bater Ponto
          </Button>
          <Button
            onClick={() => goToLogUser(navigate)}
            type="button"
            variant="contained"
            sx={{
              py: 1.5,
              borderRadius: "80px",
              border: 4,
              width: "360px",
              height: "fit-content",
              margin: "16px",
              bgcolor: "#aa21ff",
              color: "#000000",
              fontSize: "32px",
              fontFamily: "Onest",
              fontWeight: "bold",
            }}
          >
            Histórico
          </Button>
        </ContainerButtonHome>
        {ponto && (
          <PopUpPonto>
            {flagPontoEntrada ? (
              <PopUpText>Bater seu Ponto de Saída</PopUpText>
            ) : (
              <PopUpText>Bater seu Ponto de Entrada</PopUpText>
            )}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Button
                onClick={() => cancelPonto()}
                type="button"
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: "12px",
                  margin: "16px",
                  bgcolor: "#9039C7",
                  color: "#000000",
                  fontSize: "18px",
                  fontFamily: "Onest",
                  fontWeight: "bold",
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => savePonto(navigate)}
                type="button"
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: "12px",
                  margin: "16px",
                  bgcolor: "#4FD48C",
                  color: "#000000",
                  fontSize: "18px",
                  fontFamily: "Onest",
                  fontWeight: "bold",
                }}
              >
                Confirmar
              </Button>
            </Box>
          </PopUpPonto>
        )}
      </Box>
    </>
  );
}

export default Home;
