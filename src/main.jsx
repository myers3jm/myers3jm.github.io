import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Component from './Component.jsx'
import ShowEmail from './Email.jsx'
import Age from './Age.jsx'
import Joke from './Joke.jsx'
import Dog from './Dog.jsx'
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

ReactDOM.createRoot(document.getElementById('age-section')).render(
  <React.StrictMode>
    <Age />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('joke-section')).render(
  <React.StrictMode>
    <Joke />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('dog-section')).render(
  <React.StrictMode>
    <Dog />
  </React.StrictMode>,
)