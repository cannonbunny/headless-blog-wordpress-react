// subpage example

import React from 'react';
import Background from '../image/bgImg.JPG';
import Logo from '../image/bunnyLogo.png';
import './About.css';
import Header from "../Header";

function About (){
 return(
   <div>
   <Header />
    <img src={Background} width="100%" alt="background" />
    <img src={Logo} class="logoImage phone" alt="logo" />
    <br/>
    <br/>
    <p>
      Welcome. Happy travels and enjoy the journey ahead of you.
    </p>
    <p class="aboutText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat. Donec vehicula neque ut nunc dapibus consectetur. Nulla fringilla leo sit amet leo faucibus, eu mattis diam pulvinar. Donec lacinia ipsum magna, vitae elementum nisi feugiat vitae. In cursus pulvinar massa, sed imperdiet ligula blandit in. Vivamus et felis tempor, finibus ante sit amet, condimentum nisl. Ut risus est, sodales ut ullamcorper ac, lacinia fermentum mi. Etiam a turpis ac velit varius lacinia sed eget ipsum. Praesent placerat dolor nisl, sit amet maximus erat dictum vel. Phasellus eget erat vehicula, vulputate est eget, consequat libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eget interdum justo, sit amet eleifend orci.
    </p>
   </div>
 )
}

export default About;
