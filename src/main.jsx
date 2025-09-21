import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { store } from './redux/store.js'
import GlobalStyles from './components/GlobalStyles/index.jsx'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </StrictMode>,
);
