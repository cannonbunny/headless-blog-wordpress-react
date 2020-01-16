import React from 'react';
import Background2 from '../image/titleImg.jpg';
import Logo from '../image/bunnyLogo.png';
import Photo1 from '../image/photo1.JPG';
import Photo2 from '../image/photo2.JPG';
import Photo3 from '../image/photo3.JPG';
import Photo4 from '../image/photo4.JPG';
import Photo5 from '../image/photo5.JPG';
import Photo6 from '../image/photo6.jpg';
import Photo7 from '../image/photo7.JPG';
import Photo8 from '../image/photo8.jpg';
import Photo9 from '../image/photo9.jpg';
import Photo10 from '../image/photo10.JPG';
// import Photo11 from '../image/photo11.JPG';
import Photo12 from '../image/photo12.JPG';
import Photo13 from '../image/photo13.jpg';
import Photo14 from '../image/photo14.jpg';
import Photo15 from '../image/photo15.JPG';
import Photo16 from '../image/photo16.JPG';
import Photo17 from '../image/photo17.JPG';
// import Photo18 from '../image/photo18.JPG';
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
            <img src={Photo1} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo10} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo5} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo15} class="photoBoothPic" padding="0" alt="logo" />
          </div>
          <div class="photoBoothColumn">
            <img src={Photo2} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo13} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo6} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo16} class="photoBoothPic" padding="0" alt="logo" />
            </div>
            <div class="photoBoothColumn">
            <img src={Photo3} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo8} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo7} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo17} class="photoBoothPic" padding="0" alt="logo" />
            </div>
            <div class="photoBoothColumn">
            <img src={Photo4} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo9} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo12} class="photoBoothPic" padding="0" alt="logo" />
            <img src={Photo14} class="photoBoothPic" padding="0" alt="logo" />
          </div>
        </div>


   </div>
 )
}

export default Photo;
