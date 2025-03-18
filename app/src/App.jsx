import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catalog from './pages/catalog'

// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  return (
    <>
      <Navbar></Navbar>
    
     <Catalog></Catalog>

      <Footer></Footer>
    </>
  )
}

export default App
