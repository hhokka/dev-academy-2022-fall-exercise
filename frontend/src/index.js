import React from 'react'
//import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import * as ReactDOMClient from 'react-dom/client'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>)