// export default async function Page({ params }) {
//     const { meteo, province, year } = params;

//     const res = await fetch(
//       `http://localhost:3000/api/data?type=${meteo}&province=${province}&year=${year}`,
//       { cache: 'no-store' } // Ne garde pas les anciennes réponses en cache
//     );

//     const data = await res.json();

//     return (
//       <div className="max-w-5xl mx-auto p-6">
//         <h1 className="text-2xl font-bold text-blue-800 mb-4 capitalize">
//           Données : {meteo} - {province.replaceAll('-', ' ')} ({year})
//         </h1>

//         {data.length > 0 ? (
//           <ul className="list-disc pl-6 text-gray-800">
//             {data.map((item, index) => (
//               <li key={index}>
//                 Mois : {item.month} — Valeur : {item.value}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600">Aucune donnée disponible pour cette combinaison.</p>
//         )}
//       </div>
//     );
//   }
'use client'
import { getParams } from "@/utils/storeParams"; // nom correct du fichier

export default function Presentation() {
    const { menu, province, year } = getParams();
    console.log("menu :", menu);    // "temperature"
    console.log(province); // "quebec"
    console.log(year);     // "2023"

    return (
        <div>
            Page de présentation des données
            <p>Menu sélectionné : {menu}</p>
            <p>Province : {province}</p>
            <p>Année : {year}</p>
        </div>
    );
}
