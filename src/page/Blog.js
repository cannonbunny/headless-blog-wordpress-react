// blog post display

import React from 'react';
import Background2 from '../image/titleImg.jpg';
import Logo from '../image/bunnyLogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Blog.css';
import Header from "../Header";

class Blog extends React.Component{
  render(){
    let allBlogs = this.props.blogs.map((blog, index) => {
      let String = blog.content.rendered
      // .replace(/(<([^>]+)>)/ig,"");
      return (
        <div key = {index}>
        <Container>
          <Row>
            <Col lg md sm xs>
              <img class="blogShowImage" src={blog.better_featured_image.source_url} alt={blog.better_featured_image.alt_text}
              />
              <h3 class="contentContainer">{blog.title.rendered} </h3>
              <p style={{textAlign: "left"}}>{blog.acf.date}</p>
              <p style={{textAlign: "left"}} dangerouslySetInnerHTML={{ __html:String}}/>
              <hr/>
            </Col>
          </Row>
        </Container>
        </div>
      )
    })
    return (
      <div>
      <Header />
        <img src={Background2} width="100%" alt="background" />
        <img src={Logo} class="logoImage phone" alt="logo" />
        {allBlogs}
      </div>
    );
  }
}

export default Blog;
