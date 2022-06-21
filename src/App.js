import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
// import Navbar from '../src/Components/Home/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
    </div>
  );
}

export default App;
