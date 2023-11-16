import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Accueil from './pages/Accueil';
import Navigation from './components/Navigation';
import { AuthProvider } from './api/AuthContext'; // Ajustez le chemin selon votre structure
// import AssociationMedecinPatient from './pages/AssociationMedecinPatient';
// Importez d'autres composants si nécessaire

const App = () => {
  return (
    <AuthProvider>

      <Router>
        < Navigation />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/accueil" element={<Accueil />} />
          {/* <Route path="/association-medecin-patient" element={<AssociationMedecinPatient />} /> */}

          {/* Ajoutez d'autres routes ici */}

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
