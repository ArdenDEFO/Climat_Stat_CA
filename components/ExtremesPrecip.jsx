'use client';
import { useEffect, useState } from "react";

export default function ExtremesPrecip() {
  const [mois, setMois] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExtremes = async () => {
      try {
        const res = await fetch('/api/getData/extremesPrecip');
        const json = await res.json();
        setMois(json.mois);
        setProvinces(json.provinces);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchExtremes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* ✅ Bannière de présentation */}
      <div
        className="h-72 w-full bg-cover bg-center rounded-b-xl shadow-md flex items-center justify-center"
        style={{ backgroundImage: "url('/rain.jpeg')" }}
      >
        <div className="bg-black/50 h-full w-full flex flex-col items-center justify-center text-white text-center p-4 rounded-b-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#28A7FA]">🌧️ Analyse des Précipitations</h1>
          <p className="text-sm sm:text-lg font-medium">Mois et provinces les plus et les moins arrosés à l'échelle nationale (2022–2024)</p>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-8">Chargement des données...</p>
      ) : (
        <div className="space-y-8">
          {/* 📝 Avertissement */}
          <div className="bg-white rounded-lg shadow-sm p-5 mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              <span className="text-red-600 font-semibold block">⚠ Warning!</span>
              Les résultats ci-dessous sont issus d'une analyse des moyennes mensuelles de précipitations (en mm) sur l'ensemble des provinces canadiennes.
              Cette étude couvre les années 2022, 2023 et 2024 à l’échelle nationale et ne reflète pas nécessairement des événements locaux spécifiques.
            </p>
          </div>

          {/* ✅ Section Mois extrêmes */}
          <section className="mt-8 bg-white shadow-md rounded-lg p-5 sm:p-6 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#28A7FA]">Analyse par mois :</h2>
            <ul className="grid gap-3 text-gray-700 text-sm sm:text-base">
              {mois.map((item, idx) => (
                <li key={idx} className="hover:bg-gray-50 p-2 rounded-md">
                  <span className="font-bold">{item.Type} :</span> {item.Mois} ({Number(item.PluieMoyenne).toFixed(2)} mm)
                </li>
              ))}
            </ul>
          </section>

          {/* ✅ Section Provinces extrêmes */}
          <section className="mt-6 bg-white shadow-md rounded-lg p-5 sm:p-6 transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#28A7FA]">Analyse par province :</h2>
            <ul className="grid gap-3 text-gray-700 text-sm sm:text-base">
              {provinces.map((item, idx) => (
                <li key={idx} className="hover:bg-gray-50 p-2 rounded-md">
                  <span className="font-bold">{item.Type} :</span> {item.province} ({Number(item.PluieGlobale).toFixed(2)} mm)
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
