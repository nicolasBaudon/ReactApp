import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar light color="dark">
          <div className="container-fluid">
            <NavbarBrand href="/">Confusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;