import styled from "styled-components";

export const HeaderLog = styled("header")`
  position: absolute;
  top: 0vh;
  width: 100vw;
  height: 12vh;
  background-color: white;
`;

export const ContainerPage = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #ffff;
  width: 110vw;
  height: 89vh;
  margin: -16px;
  font-family: "Onest";
  padding-bottom: 20vh;
`;

export const TitleLog = styled("h1")`
  font-weight: 800;
  font-family: "Onest";
  font-size: 80px;
  color: #4fd48c;
  margin: -16px 16px;
`;

export const TextLog = styled("p")`
  font-size: 24px;
`;

export const MinorTitleLog = styled("p")`
  font-size: 28px;
  font-weight: bold;
`;

export const ImgContainer = styled("img")`
  height: fit-content;
  width: fit-content;
  margin-left: 16px;
  margin-top: 6px;
`;
