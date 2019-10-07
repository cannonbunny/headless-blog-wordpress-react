/*jshint esversion: 6 */

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

  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/blog' component={Blog}></Route>
          <Route exact path='/gear' component={Gear}></Route>
          <Route exact path='/photo' component={Photo}></Route>
          <Footer />
        </Router>
      </div>

    );
  }
}



export default App;
