import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Admin from './pages/Admin';
import Home from './pages/home';
import Cart from './pages/Cart';
import ThankYou from './pages/ThankYou';

// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalProvider from './state/GlobalProvider';



function App() {

  return (
  <GlobalProvider>
    <BrowserRouter>
      <Navbar></Navbar>


      <Routes>
      <Route path='/' element={<Home></Home>} />
        <Route path='/catalog' element={<Catalog></Catalog>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/admin' element={<Admin></Admin>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/thankyou' element={<ThankYou></ThankYou>} />


      </Routes>
    
      <Footer></Footer>
    </BrowserRouter>
  </GlobalProvider>
  )
}

export default App;
