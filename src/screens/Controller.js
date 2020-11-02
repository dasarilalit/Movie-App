import React, { Component } from 'react';
import Home from '../screens/home/Home';
import Details from '../screens/details/Details';
import moviesData from '../common/movieData';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Controller extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Home {...props} moviesData={moviesData} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} />} />
          
          
        </div>
      </Router>
    )
  }
}

export default Controller;