import ReactDOM from 'react-dom'
import './styles/css/index.css'

import { BrowserRouter } from 'react-router-dom'
import { IsLoggedIn } from './apollo-repo/IndCom'

ReactDOM.render(
  <BrowserRouter>
    <IsLoggedIn />
  </BrowserRouter>,
  document.getElementById('root')
)
