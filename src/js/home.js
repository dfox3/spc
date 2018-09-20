import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  NavLink,
  Switch
} from 'react-router-dom'
import '../css/style.css';
import logo from "./../img/logo.png"
import Logo2 from '-!svg-react-loader!./../img/logo.svg';

class Home extends React.Component {

  render() {
    return (
      <Router>
        <div className="majorContainer">
          <div className="stickyHeader">
            <div className="container2">
              <Logo2 className='normal' />
            </div>
            <div className="container1flex">
              <p>the </p>
              <h1>sport ball chakra</h1>
            </div>
          </div>

          <div className="containerMain">
            <div className="fauxSticky"/>
            <div className="intro">
                </div>
            <div className="container1flex">
              <div>
                <NavLink className="sideLink" activeClassName="activeSideLink" to='/assball'><h2>assball</h2></NavLink>
                <NavLink className="sideLink" activeClassName="activeSideLink" to='/nba'><h2>nba</h2></NavLink>
                <NavLink className="sideLink" activeClassName="activeSideLink" to='/nfl'><h2>nfl</h2></NavLink>
              </div>
              <div className="container1">
                <Route exact path="/" render={()=><p>We aim to provide comparative sports analytics to the lowbrows.</p>} /> 
                <Route path="/assball" render={()=><p>Assball stats chart</p>} /> 
                <Route path="/nba" render={()=><p>nba stats chart</p>} /> 
                <Route path="/nfl" render={()=><p>nfl stats chart</p>} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Home