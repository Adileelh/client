import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/login">Connexion</Link>
      <Link to="/accueil">Accueil</Link>
      <Link to="/association-medecin-patient">Association Medecin Patient</Link>
      {/* Autres liens de navigation */}
    </nav>
  );
};

export default Navigation;