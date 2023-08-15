import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Main from './components/Main'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
        
       <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Main" element={<Main />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
