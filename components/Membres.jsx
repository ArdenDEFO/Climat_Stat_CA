export default function Membres() {
    return (
        <div
          className="bg-cover bg-center bg-no-repeat py-16 px-6 text-white rounded-lg"
          style={{ backgroundImage: "url('/nature.jpg')" }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Notre Équipe</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-2">Brenda Guekam</h3>
              <p className="text-sm text-gray-600 mb-3">Chef de projet</p>
              <p>
                Coordination générale du projet, répartition des tâches et suivi de l’avancement.
              </p>
            </div>
    
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-2">Aurelie Tenesso</h3>
              <p className="text-sm text-gray-600 mb-3">Développeur Front-End</p>
              <p>
                Responsable de l’interface utilisateur avec React, Next.js et Tailwind CSS.
              </p>
            </div>
    
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-2">Arden Defo</h3>
              <p className="text-sm text-gray-600 mb-3">Développeuse Back-End</p>
              <p>
                Chargée des bases de données, des procédures stockées et de l'intégration des données météo.
              </p>
            </div>
    
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-2">Kuissang Venus</h3>
              <p className="text-sm text-gray-600 mb-3">Responsable Documentation</p>
              <p>
                En charge de la rédaction du contenu, du suivi du SRS-DDS et de la cohérence globale du projet.
              </p>
            </div>
          </div>
        </div>
      );
}