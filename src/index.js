import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import LandingPage from './pages/LandingPage';

// Loading Page
const loader = document.querySelector('.loading-page')
// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('disable')
const hideLoader = () => loader.classList.add('disable')

// const App = ({ hideLoader }) => {
//   useEffect(hideLoader, [])
  
//   return (
//     <LandingPage />
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <LandingPage
      hideLoader={hideLoader}
      showLoader={showLoader}
    />
  </React.StrictMode>,
  document.getElementById('root')
)
