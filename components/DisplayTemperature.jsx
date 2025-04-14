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
            "ontario_2022": "https://public.tableau.com/views/TemperatureOntario2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "ontario_2023": "https://public.tableau.com/views/TemperatureOntario2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "ontario_2024": "https://public.tableau.com/views/TemperatureOntario2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "québec_2022": "https://public.tableau.com/views/TemperatureQubec2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "québec_2023": "https://public.tableau.com/views/TemperatureQubec2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "québec_2024": "https://public.tableau.com/views/TemperatureQubec2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "colombie-britannique_2022": "https://public.tableau.com/views/TemperatureColombie-Britannique2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "colombie-britannique_2023": "https://public.tableau.com/views/TemperatureColombie-Britannique2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "colombie-britannique_2024": "https://public.tableau.com/views/TemperatureColombie-Britannique2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "alberta_2022": "https://public.tableau.com/views/TemperatureAlberta2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "alberta_2023": "https://public.tableau.com/views/TemperatureAlberta2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "alberta_2024": "https://public.tableau.com/views/TemperatureAlberta2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "manitoba_2022": "https://public.tableau.com/views/TemperatureManitoba2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "manitoba_2023": "https://public.tableau.com/views/TemperatureManitoba2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "manitoba_2024": "https://public.tableau.com/views/TemperatureManitoba2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "saskatchewan_2022": "https://public.tableau.com/views/TemperatureSaskatchewan2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "saskatchewan_2023": "https://public.tableau.com/views/TemperatureSaskatchewan2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "saskatchewan_2024": "https://public.tableau.com/views/TemperatureSaskatchewan2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nouvelle-écosse_2022": "https://public.tableau.com/views/TemperatureNouvelle-Ecosse2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouvelle-écosse_2023": "https://public.tableau.com/views/TemperatureNouvelle-Ecosse2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouvelle-écosse_2024": "https://public.tableau.com/views/TemperatureNouvelle-Ecosse2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nouveau-brunswick_2022": "https://public.tableau.com/views/TemperatureNouveau-Brunswick2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouveau-brunswick_2023": "https://public.tableau.com/views/TemperatureNouveau-Brunswick2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouveau-brunswick_2024": "https://public.tableau.com/views/TemperatureNouveau-Brunswick2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "terre-neuve-et-labrador_2022": "https://public.tableau.com/views/TemperatureTerre-neuve-et-labrador2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "terre-neuve-et-labrador_2023": "https://public.tableau.com/views/TemperatureTerre-neuve-et-labrador2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "terre-neuve-et-labrador_2024": "https://public.tableau.com/views/TemperatureTerre-neuve-et-labrador2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "île-du-prince-édouard_2022": "https://public.tableau.com/views/Temperaturele-du-prince-Edouard2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "île-du-prince-édouard_2023": "https://public.tableau.com/views/Temperaturele-du-prince-Edouard2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "île-du-prince-édouard_2024": "https://public.tableau.com/views/Temperaturele-du-prince-Edouard2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "yukon_2022": "https://public.tableau.com/views/TemperatureYukon2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "yukon_2023": "https://public.tableau.com/views/TemperatureYukon2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "yukon_2024": "https://public.tableau.com/views/TemperatureYukon2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "territoires du nord-ouest_2022": "https://public.tableau.com/views/TemperatureTerritoiresdunord-ouest2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "territoires du nord-ouest_2023": "https://public.tableau.com/views/TemperatureTerritoiresdunord-ouest2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "territoires du nord-ouest_2024": "https://public.tableau.com/views/TemperatureTerritoiresdunord-ouest2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nunavut_2022": "https://public.tableau.com/views/TemperatureNunavut2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nunavut_2023": "https://public.tableau.com/views/TemperatureNunavut2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nunavut_2024": "https://public.tableau.com/views/TemperatureNunavut2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
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