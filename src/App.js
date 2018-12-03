import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container-fluid">
            <NavbarBrand href="/" className="titulo">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;