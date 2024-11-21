import styled from "styled-components";

export const InputLogin = styled("input")`
  width: 34vw;
  height: 52px;
  border-radius: 20px;
  padding-left: 12px;
  text-align: left;
  font-weight: bold;
  color: "white";

`;

export const ErrorLogin = styled('p')`
color: red;
margin: -2px;
font-weight: lighter;
text-align: left;
font-size: 12px;
`

export const HrLine = styled('hr::after')`      
    position: relative;
    display: block;
    width: 120px;
    border-bottom: 2px solid #4FD48C;
    margin: 0 16px 12px 16px;
`
