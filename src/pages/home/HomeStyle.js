import styled from "styled-components";

export const HeaderHome = styled("header")`
  position: absolute;
  top: 0vh;
  width: 100vw;
  height: 12vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
`;

export const TextHeader = styled("p")`  
  font-family: "Onest", serif;
  font-weight: 600;
  font-size: 24px;
  margin: 12px;
`

export const ContainerTextHome = styled("div")`
  margin-left: 42px;
  font-family: "Onest", serif;
  font-weight: 600;
`;

export const ContainerButtonHome = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  margin-right: 10vw;
  font-family: "Onest", serif;
  font-weight: 600;
`;

export const TitleHome = styled("h1")`
  font-weight: 600;
  font-family: "Onest", serif;
  font-size: 100px;
  text-align: "center";
  margin: -2px;
  color: #a00cff;
`;

export const TextDate = styled("p")`
  font-size: 36px;
  margin-left: 4vw;
`;

export const TextTime = styled("p")`
  font-size: 64px;
  margin-top: -16px;
  margin-left: 6vw;
`;

export const PopUpPonto = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 30vh;
  left: 30vw;
  background-color: black;
  width: 45vw;
  height: 40vh;
  border: 4px solid #9800f9;
  border-radius: 32px;
`;

export const PopUpText = styled("p")`
  text-align: center;
  margin-top: -16px;
  font-size: 32px;
  color: #9800f9;
`;

export const ImgContainerHome = styled('img')`
height: fit-content;
width: fit-content;
margin-left: 12px;
margin-top: 6px;
`
