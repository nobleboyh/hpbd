import logo from './logo.svg';
import './App.css';
import { Login } from './views/Login';
import { Route, Routes } from 'react-router-dom';
import { Hpbd } from './views/Hpbd';
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/hpbd' element={<Hpbd/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
