import React from 'react';
import GearImage from '../image/gearImg.JPG';
import Logo from '../image/bunnyLogo.png';
import Header from "../Header";

function Gear (){
 return(
   <div>
   <Header />
    <img src={GearImage} width="100%" alt="background" />
    <img src={Logo} class="logoImage phone" alt="logo" />
    <h3>
      Under Construction
    </h3>
   </div>
 )
}

export default Gear;
