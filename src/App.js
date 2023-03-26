import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path= '/login' element = {<Login/>}/>
      </Routes>
    </div>
    </Router> 
  );
}

export default App;
