'use client';
import ViewGraphic from "@/components/viewGraphic";
import { useEffect, useState } from "react";
import { getParams } from "@/utils/storeParams";

export default function DisplayTemperature() {

    const { menu, province, year } = getParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (menu && province && year) {
                const res = await fetch(`/api/getData/temperatures?province=${province}&year=${year}`);
                const json = await res.json();
                setData(json);
            }
        };

        fetchData();
    }, [menu, province, year]);

    // récupération du lien de visualisation sous forme graphique
    const getTableauUrl = (province, year) => {
        const key = `${province.toLowerCase()}_${year}`;
        const urls = {
            "ontario_2022": "https://public.tableau.com/views/TempratureOttawa2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "ontario_2023": "https://public.tableau.com/views/TempratureOttawa2023/Sheet2?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "ontario_2024": "https://public.tableau.com/views/TempratureOttawa2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "québec_2022": "https://public.tableau.com/views/TempratureQuebec2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "québec_2023": "https://public.tableau.com/views/TempratureQuebec2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "québec_2024": "https://public.tableau.com/views/TempratureQuebec2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "colombie-britannique_2022": "https://public.tableau.com/views/TempratureCB2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "colombie-britannique_2023": "https://public.tableau.com/views/TempratureCB2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "colombie-britannique_2024": "https://public.tableau.com/views/TempratureCB2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "alberta_2022": "https://public.tableau.com/views/TempratureAlberta2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "alberta_2023": "https://public.tableau.com/views/TempratureAlberta2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "alberta_2024": "https://public.tableau.com/views/TempratureAlberta2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "manitoba_2022": "https://public.tableau.com/views/TempratureManitoba2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "manitoba_2023": "https://public.tableau.com/views/TempratureManitoba2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "manitoba_2024": "https://public.tableau.com/views/TempratureManitoba2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "saskatchewan_2022": "https://public.tableau.com/views/Tempraturesaskatchewan2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "saskatchewan_2023": "https://public.tableau.com/views/Tempraturesaskatchewan2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "saskatchewan_2024": "https://public.tableau.com/views/Tempraturesaskatchewan2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nouvelle-écosse_2022": "https://public.tableau.com/views/TempratureNouvelle-Ecosse2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouvelle-écosse_2023": "https://public.tableau.com/views/TempratureNouvelle-Ecosse2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouvelle-écosse_2024": "https://public.tableau.com/views/TempratureNouvelle-Ecosse2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nouveau-brunswick_2022": "https://public.tableau.com/views/Tempraturenouveau-brunswick2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouveau-brunswick_2023": "https://public.tableau.com/views/Tempraturenouveau-brunswick2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouveau-brunswick_2024": "https://public.tableau.com/views/Tempraturenouveau-brunswick2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "terre-neuve-et-labrador_2022": "https://public.tableau.com/views/TempratureTerre-Neuve-et-Labrador2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "terre-neuve-et-labrador_2023": "https://public.tableau.com/views/TempratureTerre-Neuve-et-Labrador2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "terre-neuve-et-labrador_2024": "https://public.tableau.com/views/TempratureTerre-Neuve-et-Labrador2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "île-du-prince-édouard_2022": "https://public.tableau.com/views/Tempraturele-du-prince-Edouard2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "île-du-prince-édouard_2023": "https://public.tableau.com/views/Tempraturele-du-prince-Edouard2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "île-du-prince-édouard_2024": "https://public.tableau.com/views/Tempraturele-du-prince-Edouard2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "yukon_2022": "https://public.tableau.com/views/TempratureYukon2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "yukon_2023": "https://public.tableau.com/views/TempratureYukon2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "yukon_2024": "https://public.tableau.com/views/TempratureYukon2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "territoires du nord-ouest_2022": "https://public.tableau.com/views/TempratureTerritoiresduNord-Ouest2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "territoires du nord-ouest_2023": "https://public.tableau.com/views/TempratureTerritoiresduNord-Ouest2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "territoires du nord-ouest_2024": "https://public.tableau.com/views/TempratureTerritoiresduNord-Ouest2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nunavut_2022": "https://public.tableau.com/views/TempratureNunavut2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nunavut_2023": "https://public.tableau.com/views/TempratureNunavut2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nunavut_2024": "https://public.tableau.com/views/TempratureNunavut2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        };

        return urls[key] || "#"; // lien par défaut si non trouvé
    };
    const url = getTableauUrl(province, year);

    return (
        <div className="max-w-4xl mx-auto">
            {/* ✅ Bannière avec informations */}
            <div
                className="h-72 w-full bg-cover bg-center rounded-b-lg shadow-md flex items-center justify-center"
                style={{
                    backgroundImage: "url('/sun.jpg')"
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
                    Températures moyennes mensuelles :
                </h2>

                {data.length > 0 ? (
                    <div>
                        <table className="min-w-full border border-gray-300 shadow-sm rounded-md overflow-hidden">
                            <thead className="bg-[#28A7FA] text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Mois</th>
                                    <th className="py-2 px-4 text-left">Température (°C)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 capitalize">{item.mois}</td>
                                        <td className="py-2 px-4">{item.temperature}°C</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <ViewGraphic url={url} />
                    </div>

                ) : (
                    <p className="text-gray-600 mt-4">Chargement ou aucune donnée disponible.</p>
                )}
            </div>
        </div>
    );
}