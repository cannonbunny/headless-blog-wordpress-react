import React from 'react';
import Logo from '../image/bunnyLogo.png';
import Background3 from '../image/titleBackgroundImage.jpg';
import Background4 from '../image/photoBackgroundImage.JPG';
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
  constructor() {
    super();
    this.state = {
      blogs:[]
    }
  }
  componentDidMount(){
    let blogtURL = "https://sagacious-chance.000webhostapp.com/wp-json/wp/v2/blogs"
    // let blogtURL = "https://agile-brushlands-42193.herokuapp.com/wp-json/wp/v2/blogs"
    fetch(blogtURL)
    .then(response => response.json())
    .then(response => {this.setState({blogs: response})})
  }
  render(){
    let blogs = this.state.blogs.map((blog, index) => {
      return (
        <div key = {index} position="relative" margin="0" padding="0">
          <Col lg={4} md={4} sm={6} xs={6}>
            <img class="blogImage" src={blog.better_featured_image.source_url} alt={blog.better_featured_image.alt_text}
            />
            <h5 class="titleContainer">{blog.title.rendered} </h5>
          </Col>
        </div>
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
            My blog about cool and beautiful places I've been to. It is a story board of my travels throughout the years. I haven't been to that many places yet but my wish list is long.
            </p>
            <p class="borderParagraph textBlog sidePicturesHover">
            My picture gallery featuring some of the most exciting moments in my life. Documenting my travels through photography became my interest. When I seems to forget, photograph remembers.
            </p>
            <p class="borderParagraph textBlog sideGearsHover">
            The reviews of my gears. Mostly cameras but maybe sometimes I will throw in random stuff like camera phones or tripods.
            </p>
            <p class="borderParagraph textBlog sideAboutHover">
            A little bit about me. I don't really use facebook, instagram, linkedin, snapchat...etc.
            </p>
          </div>
          </Col>
          <Col lg={3} md={2} sm={1} xs={1}>

          </Col>
        </Row>
        </div>
        <div class="blogDiv">
        <h3>
        Latest from the Travel Blogs
        </h3>
        <a href="/blog">
          {blogs}
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
          Under Construction
        </p>
        </div>
      </div>
    );
  }
}

export default Home;
