import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Teams } from './components/Teams';
import { Services } from './components/Services';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Banner />
    <Teams />
    <Services/>
  </React.StrictMode >
);

reportWebVitals();