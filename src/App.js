import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Footer/Footer';
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
