/*jshint esversion: 6 */

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Home from './page/Home';
import About from './page/About';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}



export default App;
