import axios from 'axios';


const API_URL = 'http://localhost:8000'; // URL de votre API

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/token/`, {
      username,
      password
    }, {
      withCredentials: true // Pour inclure les cookies
    });
    return response.status === 200;
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    return false;
  }
};

export const fetchCurrentUserDetails = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/retrieve-user/`, {
      withCredentials: true // Pour les cookies JWT
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Erreur lors de la récupération des informations de l'utilisateur courant");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des informations de l'utilisateur courant", error);
    return null;
  }
};


export const refreshToken = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/token/refresh/`, {}, {
      withCredentials: true // Nécessaire pour les cookies HttpOnly
    });

    return response.status === 200;
  } catch (error) {
    console.error('Erreur lors du rafraîchissement du token', error);
    return false;
  }
};

// export const fetchAssociations = async () => {
//   try {
//     const response = await fetch(`${API_URL}/api/association-medecin-patient/`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // Pour inclure les cookies JWT
//     });

//     if (response.ok) {
//       const data = await response.json();
//       return data; // Retourne la liste des associations
//     } else {
//       console.error('Erreur lors de la récupération des associations');
//       return []; // Retourne une liste vide en cas d'erreur
//     }
//   } catch (error) {
//     console.error('Erreur lors de la récupération des associations', error);
//     return [];
//   }
// };

// export const createAssociation = async (medecinId, patientId) => {
//   try {
//     const response = await fetch(`${API_URL}/api/association-medecin-patient/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // Pour inclure les cookies JWT
//       body: JSON.stringify({ medecinId, patientId }), // Adaptez le format du body selon votre backend
//     });

//     if (response.ok) {
//       const data = await response.json();
//       return data; // Retourne les données de l'association créée
//     } else {
//       console.error('Erreur lors de la création de l\'association');
//       return null; // Retourne null en cas d'erreur
//     }
//   } catch (error) {
//     console.error('Erreur lors de la création de l\'association', error);
//     return null;
//   }
// };

// export const fetchMedecins = async () => {
//   try {
//     const response = await fetch(`${API_URL}/api/retrieve-medecin/`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // Pour inclure les cookies JWT
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("data", data)
//       return data; // Retourne la liste des médecins

//     } else {
//       console.error('Erreur lors de la récupération des médecins');
//       return []; // Retourne une liste vide en cas d'erreur
//     }
//   } catch (error) {
//     console.error('Erreur lors de la récupération des médecins', error);
//     return [];
//   }
// }

// export const fetchPatients = async () => {
//   try {
//     const response = await fetch(`${API_URL}/api/retrieve-patient/`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // Pour inclure les cookies JWT
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("data", data)
//       return data; // Retourne la liste des patients
//     } else {
//       console.error('Erreur lors de la récupération des patients');
//       return []; // Retourne une liste vide en cas d'erreur
//     }
//   } catch (error) {
//     console.error('Erreur lors de la récupération des patients', error);
//     return [];
//   }
// }