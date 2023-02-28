import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import AdminPage from './components/AdminPage'
import AgentLogin from './components/AgentLogin'
import LoginPage from './components/LoginPage'

const App = () => (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path='/adminlogin' element={<AdminLogin />} />
          <Route exact path='/agentlogin' element={<AgentLogin />} />
          <Route exact path='/adminpage' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
)
export default App
