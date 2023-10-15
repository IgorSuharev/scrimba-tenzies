import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
