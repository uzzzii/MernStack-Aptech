import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Navbar1 from './Pages/Navbar';
import Register from './Pages/Register';
import Services from './Pages/Services';
import ContactForm from './Pages/Contact';
import Footer from './Pages/Footer';
import { AdminLayout } from './Layout/AdminLayout';
import AdminContacts from './Pages/AdminContacts';
import AdminUsers from './Pages/AdminUsers';
import AdminEdits from './Pages/AdminEdits';


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
        <Route path='/admin' element={<AdminLayout />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/contacts' element={<AdminContacts />} />
        <Route path='/admin/editUser/:id' element={<AdminEdits />} />
     

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
