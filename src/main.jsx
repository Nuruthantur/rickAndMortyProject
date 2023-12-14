import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './Characters.jsx';
import Characters2 from './Characters2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <App /> */}
    <Characters/>
    {/* <Characters2/> */}

 
  </React.StrictMode>,
)
