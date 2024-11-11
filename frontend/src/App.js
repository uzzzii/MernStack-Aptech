import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Navbar1 from './Pages/Navbar';
import Register from './Pages/Register';
import Services from './Pages/Services';
import ContactForm from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar1 /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
