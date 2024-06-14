import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navv from './pages/Navv';
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  return (
    <Router>
      <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route path='/navv' element={<Navv/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
