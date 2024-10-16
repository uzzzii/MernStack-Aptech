import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Navbar1 from './Pages/Navbar';
import Register from './Pages/Register';
import Services from './Pages/Services';
import ContactForm from './Pages/Contact';
import Test from './Pages/Test';

function App() {
  return (
  <>
  <Navbar1 /> 
  <BrowserRouter>
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/contact' element={<ContactForm/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/test' element={<Test/>}/>
  
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
