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
import 'react-responsive'
import MediaQuery from 'react-responsive'

import Home from './home.js'

import '../css/style.css';


export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="majorContainer">
          <Route exact path="/" render={()=><Home/>}/>
        </div>
      </Router>);}}

render(<App />, document.getElementById('app'));