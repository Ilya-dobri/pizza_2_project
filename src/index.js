import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/app.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import { Provider } from 'react-redux'




const container = document.getElementById('root');
const root = createRoot(container);



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
