import React from 'react';
import Background from '../image/bgImg.JPG';
import Logo from '../image/bunnyLogo.png';
import './About.css';

function About (){
 return(
   <div>
    <img src={Background} width="100%" alt="background" />
    <img src={Logo} class="logoImage phone" alt="logo" />
    <br/>
    <br/>
    <p>
      Welcome. Happy travels and enjoy the journey ahead of you.
    </p>
    <p class="aboutText">
      I am a self proclaimed explorer looking to follow the footsteps of Columbus, Cook or Cabot.
      I am in search of those places forgotten by the mass, where over-tourism seems like a funny joke.
      Many beautiful places on earth tend to be obscure, but is a natural playground where wildlife flourishs.
      Maybe, it is best kept this way. A blog can narate an adventure, but the smell, the sounds and the feelings can never be reproduced.
    </p>
    <br/>
    <p class="aboutText">
      I attempt to capture everything in the world through my eyes and lens
      . . . or perhaps, it is me who is captured.
    </p>
   </div>
 )
}

export default About;
