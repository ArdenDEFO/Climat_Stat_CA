export default function Motivation() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat mb-6 py-16 px-8 text-white rounded-lg"
      style={{ backgroundImage: "url('/umbrella.jpg')" }} 
    >
      <div className="max-w-5xl mx-auto bg-black/50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          À propos de ClimaStat CA
        </h1>

        <p className="text-lg text-justify leading-relaxed">
          ClimaStat CA est né de notre passion commune pour les données météorologiques et notre volonté
          d'offrir aux Canadiens un accès clair et précis aux statistiques sur la température, les précipitations
          et la pollution. Notre objectif est de permettre à chacun de visualiser facilement les tendances
          climatiques par province, sur plusieurs années, à travers des graphes et des données fiables.
        </p>
      </div>
    </div>
  );
}
