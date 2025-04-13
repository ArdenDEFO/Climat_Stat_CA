import Image from "next/image";

export default function Membres() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-16 px-6 text-white rounded-lg"
      style={{ backgroundImage: "url('/nature.jpg')" }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Notre Équipe</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* ✅ Membre 1 */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <Image
            src="/Brenda.jpeg"
            alt="Brenda"
            width={150}
            height={150}
            className="mx-auto mb-4 rounded-md shadow-md object-cover"
          />
          <h3 className="font-bold text-xl mb-2">Brenda Guekam</h3>
          <p className="text-sm text-gray-600 mb-3">Chef de projet</p>
          <p>
            Coordination générale du projet, répartition des tâches, suivi de l’avancement et conception du document de présentaion.
          </p>
        </div>

        {/* ✅ Membre 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <Image
            src="/Aurelie.jpeg"
            alt="Aurelie"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-md shadow-md object-cover"
          />
          <h3 className="font-bold text-xl mb-2">Aurelie Tenesso</h3>
          <p className="text-sm text-gray-600 mb-3">Développeur Front-End</p>
          <p>
            Responsable de l’interface utilisateur et collecte des données.
          </p>
        </div>

        {/* ✅ Membre 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <Image
            src="/Arden.jpg"
            alt="Arden"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-md shadow-md object-cover"
          />
          <h3 className="font-bold text-xl mb-2">Arden Defo</h3>
          <p className="text-sm text-gray-600 mb-3">Développeuse Back-End</p>
          <p>
            Chargée des bases de données, des procédures stockées, des API de communication avec la base de données, de l'intégration des données météo et de l'hébergement.
          </p>
        </div>

        {/* ✅ Membre 4 */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <Image
            src="/Helena.jpeg"
            alt="Helena"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-md shadow-md object-cover"
          />
          <h3 className="font-bold text-xl mb-2">Kuissang Venus</h3>
          <p className="text-sm text-gray-600 mb-3">Responsable Documentation</p>
          <p>
            En charge de la rédaction du contenu, du suivi du SRS-DDS, de la cohérence globale du projet et de la collecte des données.
          </p>
        </div>
      </div>
    </div>
  );
}
