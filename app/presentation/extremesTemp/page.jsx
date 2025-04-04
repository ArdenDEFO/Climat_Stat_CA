'use client';
import { useEffect, useState } from "react";

export default function ExtremesTemp() {
  const [mois, setMois] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExtremes = async () => {
      try {
        const res = await fetch("/api/getData/extremesTemp");
        const json = await res.json();
        setMois(json.mois);
        setProvinces(json.provinces);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
      }
    };
    fetchExtremes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* ✅ Bannière de présentation */}
      <div
        className="h-72 w-full bg-cover bg-center rounded-b-xl shadow-md flex items-center justify-center"
        style={{
          backgroundImage: "url('/temperature.jpg')"
        }}
      >
        <div className="bg-black/50 h-full w-full flex flex-col items-center justify-center text-white text-center p-4 rounded-b-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#28A7FA]">🌡️ Analyse des Températures</h1>
          <p className="text-sm sm:text-lg font-medium">Mois et provinces les plus et les moins froids à l'échelle nationale (2022–2024)</p>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-8">Chargement des données...</p>
      ) : (
        <div className="space-y-8">
          {/* 📝 Paragraphe explicatif */}
          <div className="bg-white shadow-sm rounded-lg p-5 mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              <span className="text-red-600 font-semibold block">⚠ Warning!</span>
              Les données suivantes présentent les températures les plus extrêmes enregistrées au Canada entre 2022 et 2024.
              Ces résultats sont issus des moyennes mensuelles de température dans toutes les provinces canadiennes.
              L’analyse est réalisée à l’échelle nationale et reflète une tendance globale, sans se limiter à une province en particulier.
            </p>

          </div>

          {/* ✅ Section Mois extrêmes */}
          <section className="bg-white shadow-md rounded-lg p-5 sm:p-6 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#28A7FA]">Analyse par mois :</h2>
            <ul className="grid gap-3 text-gray-700 text-sm sm:text-base">
              {mois.map((item, index) => (
                <li key={index} className="hover:bg-gray-50 p-2 rounded-md">
                  <span className="font-bold">{item.Type} :</span>{" "}
                  <span className="capitalize">{item.Mois}</span> ({item.TempMoyenne}°C)
                </li>
              ))}
            </ul>
          </section>

          {/* ✅ Section Provinces extrêmes */}
          <section className="bg-white shadow-md rounded-lg p-5 sm:p-6 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#28A7FA]">Analyse par province :</h2>
            <ul className="grid gap-3 text-gray-700 text-sm sm:text-base">
              {provinces.map((item, index) => (
                <li key={index} className="hover:bg-gray-50 p-2 rounded-md">
                  <span className="font-bold">{item.Type} :</span>{" "}
                  <span>{item.province}</span> ({item.TempGlobale}°C)
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
