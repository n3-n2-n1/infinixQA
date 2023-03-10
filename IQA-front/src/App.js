import logo from './logo.svg';
import './App.css';
import CTA1 from './components/Button/Buttons.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>

      <Route path="" exact element= { <Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
