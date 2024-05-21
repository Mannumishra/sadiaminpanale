import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path='/home' element ={<Home />} />
        <Route path='/login' element ={<Login />} />

      </Routes>
   <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
