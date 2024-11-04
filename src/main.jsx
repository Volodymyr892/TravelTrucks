// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'; 
import ReactDom from "react-dom/clien";

import 'modern-normalize'

import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)