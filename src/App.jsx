import './App.css';
import React from 'react';
import axios from 'axios';


import { Header } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from './Pages';
import { setPizzas as setPizzasAction } from './Redux/actions/pizzas';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    axios.get('./db.json').then(({ data }) => {
      this.props.setPizi(data.pizzas);
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home items={this.props.items} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizi: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
