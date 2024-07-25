import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Component from './Component.jsx'
import ShowEmail from './Email.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('react')).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('email-section')).render(
  <React.StrictMode>
    <ShowEmail />
  </React.StrictMode>,
)
