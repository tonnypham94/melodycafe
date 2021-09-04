import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import LandingPage from './pages/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
