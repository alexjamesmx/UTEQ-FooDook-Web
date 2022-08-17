import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { InfoProvider } from './app/components/infoContext'
ReactDOM.render(
  <BrowserRouter>
    <InfoProvider>
      <App />
    </InfoProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

reportWebVitals()
