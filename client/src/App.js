import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"
import Headers from './Components/Headers/Headers';
import Edit from './Pages/Edit/Edit';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
