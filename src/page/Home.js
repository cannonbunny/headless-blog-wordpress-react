// main index to display all the items in the blog

import React from 'react';
import Logo from '../image/bunnyLogo.png';
import Sidebar1 from '../image/sidebar1.png';
import Sidebar2 from '../image/sidebar2.png';
import Sidebar3 from '../image/sidebar3.png';
import Sidebar4 from '../image/sidebar4.png';
import Sidebar1Hover from '../image/sidebar1Hover.png';
import Sidebar2Hover from '../image/sidebar2Hover.png';
import Sidebar3Hover from '../image/sidebar3Hover.png';
import Sidebar4Hover from '../image/sidebar4Hover.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

class Home extends React.Component{
  render(){
    let allBlogs = this.props.blogs.map((blog, index) => {
      return (
        <Col lg={4} md={4} sm={6} xs={12} key={index}>
          <img class="blogImage" src={blog.better_featured_image.source_url} alt={blog.better_featured_image.alt_text}/>
          <h5 class="titleContainer">{blog.title.rendered}</h5>
        </Col>
      )
    })
    return (
      <div>
        <div class="titleDiv">
          <p class="titleText">
            46
            below
          </p>
        </div>
        <img src={Logo} class="logoHomeImage phoneHome" alt="logo" />
        <div class="titleBackgroundImage" position="relative">
          <Row>
            <Col lg={3} md={2} sm={1} xs={1}>

            </Col>
            <Col lg={6} md={8} sm={10} xs={10}>
            <div class="left" >
              <a href="/blog" class="link linkBlogs"> Blogs</a>
              <img src={Sidebar1} class="sideBlogs height80" alt="blogs" />
              <img src={Sidebar1Hover} class="sideBlogsHover height80" alt="blogs" />
              <br/>
              <a href="/photo" class="linkPictures link"> Photo </a>
              <img src={Sidebar2} class="sidePictures height80" alt="pictures" />
              <img src={Sidebar2Hover} class="sidePicturesHover height80" alt="blogs" />
              <br/>
              <a href="/gear" class="linkGears link"> Gears </a>
              <img src={Sidebar3} class="sideGears height80" alt="gears" />
              <img src={Sidebar3Hover} class="sideGearsHover height80" alt="blogs" />
              <br/>
              <a href="/about" class="linkAbout link"> About </a>
              <img src={Sidebar4} class="sideAbout height80" alt="about" />
              <img src={Sidebar4Hover} class="sideAboutHover height80" alt="blogs" />
              <p class="borderParagraph textBlog sideBlogsHover">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat.
              </p>
              <p class="borderParagraph textBlog sidePicturesHover">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat.
              </p>
              <p class="borderParagraph textBlog sideGearsHover">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat.
              </p>
              <p class="borderParagraph textBlog sideAboutHover">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat.
              </p>
            </div>
            </Col>
            <Col lg={3} md={2} sm={1} xs={1}>

            </Col>
          </Row>
        </div>
        <div class="blogDiv">
          <h3>
          Latest from the Blogs
          </h3>
          <a href="/blog">
            <Row>
              {allBlogs}
            </Row>
          </a>
        </div>
        <div class="photoDiv">
          <div class="photoInnerDiv">
            <a class="photoParallaxLink" href="/photo">Photo Gallery</a>
          </div>
        </div>
        <div class="gearDiv">
          <h3>
          My Travel Gear Reviews
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, ligula sed dictum maximus, felis nunc viverra lectus, tincidunt faucibus neque nisl et erat. Donec vehicula neque ut nunc dapibus consectetur. Nulla fringilla leo sit amet leo faucibus, eu mattis diam pulvinar. Donec lacinia ipsum magna, vitae elementum nisi feugiat vitae. In cursus pulvinar massa, sed imperdiet ligula blandit in. Vivamus et felis tempor, finibus ante sit amet, condimentum nisl. Ut risus est, sodales ut ullamcorper ac, lacinia fermentum mi. Etiam a turpis ac velit varius lacinia sed eget ipsum. Praesent placerat dolor nisl, sit amet maximus erat dictum vel. Phasellus eget erat vehicula, vulputate est eget, consequat libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eget interdum justo, sit amet eleifend orci.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
