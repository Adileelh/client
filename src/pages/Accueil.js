// Accueil.js
import React from 'react';
import { useAuth } from '../api/AuthContext'; // Ajustez le chemin

function Accueil() {
  const { user } = useAuth();
  // console.log(user);

  return (
    <div>
      <h1>Welcome to the Accueil view!</h1>
      {user && <p>Bonjour, {user.role}!</p>}
      {/* Autre contenu */}
    </div>
  );
}

export default Accueil;