import React from 'react';
import { createRoot } from 'react-dom/client'; // правильный импорт createRoot
import './scss/app.scss';
import App from './App';

// Создаем корневой элемент
const container = document.getElementById('root');
const root = createRoot(container);

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);