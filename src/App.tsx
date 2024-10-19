import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ProtectedLogin from './ProtectedLogin';
import ProtectedPage from './ProtectedPage';
import HomePage from './HomePage';
import NavBar from './Navbar1';
import SuccessPage from './SuccessPage';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected-login" element={<ProtectedLogin />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
