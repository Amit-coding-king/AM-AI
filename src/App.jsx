import AboutPage from './pages/AboutPage';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PricePage from './pages/PricePage';
import { BrowserRouter as Router , Routes , Route, useLocation} from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import ChatComponent from './components/ChatComponent';

function App(){

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pricing' element={<PricePage />} />
        <Route path='/chat' element={<ChatPage />}> 
            <Route path=':id' element={<ChatComponent />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='*'  element={<NotFoundPage />} />
      </Routes>
    </Router>

  )
}

export default App;