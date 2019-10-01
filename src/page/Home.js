import React from 'react';
import Background2 from '../image/titleImg.jpg';
import Logo from '../image/bunnyLogo.png';
import './About.css';

class Home extends React.Component{
  constructor() {
    super();
    this.state = {
      blogs:[]
    }
  }
  componentDidMount(){
    let blogtURL = "http://localhost:8888/wp-json/wp/v2/blogs"
    // let blogtURL = "http://limitless-woodland-47510.herokuapp.com//wp-json/wp/v2/blogs"
    fetch(blogtURL)
    .then(response => response.json())
    .then(response => {this.setState({blogs: response})})
  }
  render(){
    let blogs = this.state.blogs.map((blog, index) => {
      return (
        <div key = {index}>
          <p>Title: {blog.title.rendered}</p>
        </div>
      )
    })


    return (
      <div>
        <img src={Background2} width="100%" alt="background" />
        <img src={Logo} class="logoImage phone" alt="logo" />
        {blogs}
      </div>
    );
  }
}

export default Home;
