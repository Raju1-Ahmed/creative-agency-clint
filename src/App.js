import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Footer/Footer';
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/Login/RequireAuth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order";
import Service from "./Components/Dashboard/Service";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="/dashboard/order" element={<Order />} />
          <Route path="/dashboard/servicelist" element={<Service />} />

        </Route>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
