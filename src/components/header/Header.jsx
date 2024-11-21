import React from "react";
import Logo from '../../assets/images/LogoSidi.png'
import { ContainerHeader } from "./HeaderStyle";


function Header(){

    return(
    <ContainerHeader>
        <img src={Logo} alt="Logo da empresa Sidi" />
    </ContainerHeader>

    )
}

export default Header;