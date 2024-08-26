import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000, // duração da animação
  easing: 'ease-in-out', // tipo de easing
  once: true // anima apenas uma vez
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


