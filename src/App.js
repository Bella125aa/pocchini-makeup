import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponent from './Componentes/Navbar/NavbarComponent';
import Home from './paginas/Home/Home';
import Agendamento from './paginas/Agendamento/Agendamento';
import Sobre from './paginas/Sobre/Sobre';
import Login from './paginas/login/Login';
import './App.css';
import Cadastro from './paginas/Cadastro/Cadastro';
import MeusAgendamentos from './paginas/MeusAgendamentos/MeusAgendamentos';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/cadastro';

  return (
    <>
      {!isLoginPage && <NavbarComponent />}
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/meusagendamentos" element={<MeusAgendamentos />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
