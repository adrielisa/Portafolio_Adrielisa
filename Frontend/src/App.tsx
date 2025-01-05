import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Main from './pages/Principal';
import Proyects from './pages/Proyects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      {/* Background envuelve todas las rutas */}
      <Background>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Background>
    </Router>
  );
};

export default App;
