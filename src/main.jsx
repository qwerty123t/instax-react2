import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/index.js';

import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './assets/reset.css'
import './assets/app.css'
import './assets/fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>,
)
