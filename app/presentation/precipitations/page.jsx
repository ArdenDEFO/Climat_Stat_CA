'use client';
import { useEffect, useState } from "react";
import { getParams } from "@/utils/storeParams";

export default function Précipitations() {
  const { menu, province, year } = getParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (menu && province && year) {
        const res = await fetch(`/api/getData/precipitations?province=${province}&year=${year}`);
        const json = await res.json();
        setData(json);
      }
    };

    fetchData();
  }, [menu, province, year]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* ✅ Bannière */}
      <div
        className="h-72 w-full bg-cover bg-center rounded-b-lg shadow-md flex items-center justify-center"
        style={{
          backgroundImage: "url('/sun.jpg')" // Tu peux remplacer par une image plus appropriée
        }}
      >
        <div className="bg-black/50 h-full w-full flex flex-col items-center justify-center text-white text-center p-4 rounded-b-lg">
          <h1 className="text-4xl font-bold mb-2">Présentation des Données</h1>
          <p className="text-lg"><span className="font-semibold">Menu :</span> {menu}</p>
          <p className="text-lg"><span className="font-semibold">Province :</span> {province}</p>
          <p className="text-lg"><span className="font-semibold">Année :</span> {year}</p>
        </div>
      </div>

      {/* ✅ Tableau */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
          Précipitations mensuelles moyennes :
        </h2>

        {data.length > 0 ? (
          <table className="min-w-full border border-gray-300 shadow-sm rounded-md overflow-hidden">
            <thead className="bg-[#28A7FA] text-white">
              <tr>
                <th className="py-2 px-4 text-left">Mois</th>
                <th className="py-2 px-4 text-left">Précipitation (mm)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 capitalize">{item.mois}</td>
                  <td className="py-2 px-4">{item.precipitation} mm</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 mt-4">Chargement ou aucune donnée disponible.</p>
        )}
      </div>
    </div>
  );
}
