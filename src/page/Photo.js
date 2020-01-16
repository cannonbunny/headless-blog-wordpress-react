// Add in photo in the div of photoBoothColumn, will be a masonic of 4 columns

import React from 'react';
import Background2 from '../image/titleImg.jpg';
import Logo from '../image/bunnyLogo.png';
import './Photo.css';
import Header from "../Header";

function Photo (){
 return(
   <div>
   <Header />
    <img src={Background2} width="100%" alt="background" />
    <img src={Logo} class="logoImage phone" alt="logo" />
        <div class="photoBoothRow">
        <div class="photoBoothColumn">

        </div>
        <div class="photoBoothColumn">

        </div>
        <div class="photoBoothColumn">

        </div>
        <div class="photoBoothColumn">
        </div>
      </div>
   </div>
 )
}

export default Photo;
