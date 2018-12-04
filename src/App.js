import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './compartida/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container-fluid">
            <NavbarBrand href="/" className="titulo">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;