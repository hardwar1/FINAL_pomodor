import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { BrowserRouter } from 'react-router-dom'

import './global.scss'

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
