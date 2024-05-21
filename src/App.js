import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   
   <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
