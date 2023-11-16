// import React, { useState, useEffect, useContext } from 'react';
// import { useAuth } from '../api/AuthContext'; // Importez useAuth pour l'authentification
// import { fetchAssociations, createAssociation, fetchMedecins, fetchPatients } from '../api/api'; // Ajustez le chemin

// function AssociationMedecinPatient() {
//   const { user } = useAuth(); // Obtenez l'utilisateur actuel
//   console.log(user);
//   const [associations, setAssociations] = useState([]);
//   const [selectedMedecin, setSelectedMedecin] = useState('');
//   const [selectedPatient, setSelectedPatient] = useState('');
//   const [medecins, setMedecins] = useState([]); // Liste des médecins
//   const [patients, setPatients] = useState([]); // Liste des patients
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const loadAssociations = async () => {
//       setIsLoading(true);
//       setError('');
//       try {
//         // Charger les associations
//         const data = await fetchAssociations();
//         setAssociations(data);

//         // Charger les médecins et les patients
//         // Vous devez implémenter ces fonctions dans votre API
//         const medecinsData = await fetchMedecins();
//         setMedecins(medecinsData);
//         const patientsData = await fetchPatients();
//         setPatients(patientsData);
//       } catch (error) {
//         setError('Erreur lors du chargement des données');
//         console.error(error);
//       }
//       setIsLoading(false);
//     };

//     loadAssociations();
//   }, []);

//   if (isLoading) {
//     return <p>Chargement...</p>;
//   }

//   if (error) {
//     return <p>Erreur : {error}</p>;
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createAssociation(selectedMedecin, selectedPatient);
//     // Recharger les associations après la création
//   };

//   return (
//     <div>
//       <h1>Association Médecin-Patient</h1>
//       {user && user.role === 'medecin' && (
//         <form onSubmit={handleSubmit}>
//           {/* Sélection du patient */}
//           <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//             {patients.map(patient => (
//               <option key={patient.id} value={patient.id}>{patient.nom}</option>
//             ))}
//           </select>
//           <button type="submit">Associer</button>
//         </form>
//       )}
//       {user && user.role === 'responsable' && (
//         <form onSubmit={handleSubmit}>
//           {/* Sélection du médecin et du patient */}
//           <select value={selectedMedecin} onChange={(e) => setSelectedMedecin(e.target.value)}>
//             {medecins.map(medecin => (
//               <option key={medecin.id} value={medecin.id}>{medecin.nom}</option>
//             ))}
//           </select>
//           <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//             {patients.map(patient => (
//               <option key={patient.id} value={patient.id}>{patient.nom}</option>
//             ))}
//           </select>
//           <button type="submit">Associer</button>
//         </form>
//       )}
//       <div>
//         <h2>Liste des Associations</h2>
//         {associations.map(assoc => (
//           <div key={assoc.id}>
//             Médecin: {assoc.medecin.nom}, Patient: {assoc.patient.nom}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AssociationMedecinPatient;
