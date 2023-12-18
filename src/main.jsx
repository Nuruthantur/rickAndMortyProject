import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './Characters.jsx';
import Characters2 from './Characters2.jsx';
import axios from 'axios';

// import fetchCharactersAsync from './components/searchbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <App /> */}
    <Characters/>

  </React.StrictMode>,
)
