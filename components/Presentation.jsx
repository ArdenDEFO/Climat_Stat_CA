export default function Presentation() {
    return (
        <section className="max-w-5xl mx-auto p-6 mt-6 space-y-6">
      {/* Bloc météo */}
      <div className="flex flex-col sm:flex-row bg-blue-100 rounded shadow overflow-hidden">
        {/* Partie gauche */}
        <div className="bg-sky-500 text-white p-6 flex-1">
          <h2 className="text-xl font-bold mb-2">Météo Ottawa - ON</h2>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-6xl font-bold">7°</div>
              <div className="text-sm">Sensation de 5°</div>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Sud-ouest</p>
              <p>17 - 44 km/h</p>
            </div>
          </div>
        </div>

        {/* Partie droite */}
        <div className="p-6 bg-white flex-1 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">🕒</span>
            <div>
              <p className="font-semibold text-blue-900">Heure par heure</p>
              <p className="text-sm text-gray-600">Ciel couvert dans les prochaines heures</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">🌡️</span>
            <div>
              <p className="font-semibold text-blue-900">Les températures baissent</p>
              <p className="text-sm text-gray-600">Durant la journée de demain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc de description du site */}
      <div className="bg-black/30 rounded shadow p-6 text-gray-800">
        <h3 className="text-2xl font-bold text-blue-300 mb-4">Bienvenue sur ClimaStat CA</h3>
        <p className="mb-3 text-white">
          <b>ClimaStat CA</b> est une plateforme qui vous donne accès aux statistiques météorologiques
          des 13 provinces et territoires du Canada de 2022 à 2024. Vous pouvez consulter :
        </p>
        <ul className="list-disc list-inside mb-3 mb-3 text-white">
          <li>Les températures mensuelles de chacune des 13 provinces.</li>
          <li>Les niveaux de pollution enregistrés dans chaque province.</li>
          <li>Les précipitations (pluie, neige) par mois et par province.</li>
          <li>Des comparaisons interactives entre provinces ou périodes.</li>
        </ul>
        <p className="text-white">Naviguez via le menu ci-dessus pour explorer les données en détail. Bonne visite !</p>
      </div>
    </section>
    );
}