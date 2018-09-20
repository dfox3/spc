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
              <h2>nfl</h2>
              <h2>nba</h2>
            </div>
            <div className="container1">
              
              <p>We aim to provide comparative sports analytics to the lowbrows.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home