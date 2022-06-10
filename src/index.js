import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import { hydrate, render } from "react-dom";
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    hydrate(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    , rootElement);
} else {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    , rootElement);
}