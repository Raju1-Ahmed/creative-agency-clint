import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Footer/Footer';
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/Login/RequireAuth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Service from "./Components/Dashboard/Service";
import Review from "./Components/Dashboard/Review";
import AddToCard from "./Components/Home/AddToCard/AddToCard";
import MakeAdmin from "./Components/Dashboard/MakeAdmin";
import AddService from "./Components/Dashboard/AddService";
import MyOrders from "./Components/Dashboard/MyOrders";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path='/addtocard/:serviceId' element={<RequireAuth><AddToCard></AddToCard></RequireAuth>}></Route>


        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="/dashboard/servicelist" element={<Service />} />
          <Route path="/dashboard/review" element={<Review />} />
          <Route path="/dashboard/users" element={<MakeAdmin />} />
          <Route path="/dashboard/addservice" element={<AddService />} />
          <Route path="/dashboard/myorders" element={<MyOrders />} />

        </Route>


      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
