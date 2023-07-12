import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
