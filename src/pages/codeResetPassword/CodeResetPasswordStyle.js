import styled from "styled-components";
import theme from "../../utils/theme";

export const ContainerCodePage = styled("div")`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerCodePassword = styled("div")`
  width: 60vw;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 30px;
`;

export const ContainerButtonPassword = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputNum = styled("input")`
  width: 80px;
  height: 120px;
  border-radius: 10%;
  text-align: center;
  font-weight: bold;  
`;

export const Line = styled('hr')`
text-align: center;
transform: rotate(90deg);
height: 10vh;
margin-top: 24px;
`

