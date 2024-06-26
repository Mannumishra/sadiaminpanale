import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import User from './Components/Users/User';
import Contact from './Components/Contact/Contact';
import Userdetails from './Components/userdetails/Userdetails';
import Testimonial from './Components/Testimonial/Testimonial';
import CreateTestimonial from './Components/Testimonial/CreateTestimonial';
import UpdateTestimonial from './Components/Testimonial/UpdateTestimonial';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<User />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/userdetails/:_id' element={<Userdetails />} />
          <Route path='/success' element={<Testimonial />} />
          <Route path='/createsuccess' element={<CreateTestimonial />} />
          <Route path='/updatesuccess/:_id' element={<UpdateTestimonial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
