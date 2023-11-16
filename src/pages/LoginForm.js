import React, { useState } from 'react';
import { loginUser } from '../api/api';
import { useAuth } from '../api/AuthContext'; // Ajustez le chemin
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedIn = await loginUser(username, password);
    if (loggedIn) {
      // Mise à jour de l'état d'authentification
      setUser({ username });
      // Redirection vers la page d'accueil
      navigate('/accueil');
    } else {
      alert('Erreur de connexion');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
