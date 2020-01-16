/*jshint esversion: 6 */
// main react router

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Footer from "./Footer";
import Home from './page/Home';
import About from './page/About';
import Blog from './page/Blog';
import Gear from './page/Gear';
import Photo from './page/Photo';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  // initialize blog state
  constructor() {
    super();
    this.state = {
      blogs:[]
    }
  }

// getting data from test wordpress site
  componentDidMount(){
    let blogtURL = "https://sagacious-chance.000webhostapp.com/wp-json/wp/v2/blogs"
    fetch(blogtURL)
    .then(response => response.json())
    .then(response => {this.setState({blogs: response})})
  }

  // render router to all pages, pass in wordpress api as props
  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={(props) => <Home {...props}  blogs={this.state.blogs} /> }/>
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' render={(props) => <Blog {...props}  blogs={this.state.blogs} /> }/>
          <Route exact path='/gear' component={Gear} />
          <Route exact path='/photo' component={Photo} />
          <Footer />
        </Router>
      </div>
    );
  }
}



export default App;
