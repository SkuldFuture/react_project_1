import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Createorder } from './pages/createorder';
import { Home } from './pages/home';
import { Login } from './pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <div className='content'>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/createorder'} element={<Createorder />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
 };

export default App;
