import './style/App.css';
import {
  Route,
  Routes
} from 'react-router-dom'

import Login from "./pages/LoginUi"
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
   </Routes>
    </div>
  );
}

export default App;
