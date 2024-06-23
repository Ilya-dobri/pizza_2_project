import './App.css';
import React from 'react';


import { Header } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from './Pages';

import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();



  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
