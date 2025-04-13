'use client';
import { useEffect, useState } from "react";
import { getParams } from "@/utils/storeParams";
import ViewGraphic from "@/components/viewGraphic";

export default function DisplayPollution() {
    const { menu, province, year } = getParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (menu && province && year) {
                const res = await fetch(`/api/getData/pollutions?province=${province}&year=${year}`);
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
            "ontario_2022": "https://public.tableau.com/views/Pollutionontario2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "ontario_2023": "https://public.tableau.com/views/PollutionQuebec2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "ontario_2024": "https://public.tableau.com/views/PollutionQuebec2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "québec_2022": "https://public.tableau.com/views/PollutionQuebec2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "québec_2023": "https://public.tableau.com/views/PrcipitationsQubec2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "québec_2024": "https://public.tableau.com/views/PrcipitationsQubec2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "colombie-britannique_2022": "https://public.tableau.com/views/Pollutioncolombie-britannique2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "colombie-britannique_2023": "https://public.tableau.com/views/Pollutioncolombie-britannique2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "colombie-britannique_2024": "https://public.tableau.com/views/Pollutioncolombie-britannique2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "alberta_2022": "https://public.tableau.com/views/PollutionAlberta2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "alberta_2023": "https://public.tableau.com/views/PollutionAlberta2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "alberta_2024": "https://public.tableau.com/views/PollutionAlberta2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "manitoba_2022": "https://public.tableau.com/views/Pollutionmanitoba2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "manitoba_2023": "https://public.tableau.com/views/Pollutionmanitoba2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "manitoba_2024": "https://public.tableau.com/views/Pollutionmanitoba2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "saskatchewan_2022": "https://public.tableau.com/views/Pollutionsaskatchewan2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "saskatchewan_2023": "https://public.tableau.com/views/Pollutionsaskatchewan2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "saskatchewan_2024": "https://public.tableau.com/views/Pollutionsaskatchewan2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nouvelle-écosse_2022": "https://public.tableau.com/views/Pollutionnouvelle-cosse2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouvelle-écosse_2023": "https://public.tableau.com/views/Pollutionnouvelle-cosse2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouvelle-écosse_2024": "https://public.tableau.com/views/Pollutionnouvelle-cosse2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nouveau-brunswick_2022": "https://public.tableau.com/views/Pollutionnouveau-brunswick2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouveau-brunswick_2023": "https://public.tableau.com/views/Pollutionnouveau-brunswick2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nouveau-brunswick_2024": "https://public.tableau.com/views/Pollutionnouveau-brunswick2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "terre-neuve-et-labrador_2022": "https://public.tableau.com/views/Pollutionterre-neuve-et-labrador2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "terre-neuve-et-labrador_2023": "https://public.tableau.com/views/Pollutionterre-neuve-et-labrador2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "terre-neuve-et-labrador_2024": "https://public.tableau.com/views/Pollutionterre-neuve-et-labrador2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "île-du-prince-édouard_2022": "https://public.tableau.com/views/Pollutionle-du-prince-douard2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "île-du-prince-édouard_2023": "https://public.tableau.com/views/Pollutionle-du-prince-douard2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "île-du-prince-édouard_2024": "https://public.tableau.com/views/Pollutionle-du-prince-douard2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "yukon_2022": "https://public.tableau.com/views/Pollutionyukon2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "yukon_2023": "https://public.tableau.com/views/Pollutionyukon2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "yukon_2024": "https://public.tableau.com/views/Pollutionyukon2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "territoires du nord-ouest_2022": "https://public.tableau.com/views/Pollutionterritoiresdunord-ouest2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "territoires du nord-ouest_2023": "https://public.tableau.com/views/Pollutionterritoiresdunord-ouest2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "territoires du nord-ouest_2024": "https://public.tableau.com/views/Pollutionterritoiresdunord-ouest2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

            "nunavut_2022": "https://public.tableau.com/views/Pollutionnunavut2022/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nunavut_2023": "https://public.tableau.com/views/Pollutionnunavut2023/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            "nunavut_2024": "https://public.tableau.com/views/Pollutionnunavut2024/Sheet1?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
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
                    Teneur moyenne en CO₂ mensuelle (en Mt de CO₂) :
                </h2>

                {data.length > 0 ? (
                    <>
                        <table className="min-w-full border border-gray-300 shadow-sm rounded-md overflow-hidden">
                            <thead className="bg-[#28A7FA] text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Mois</th>
                                    <th className="py-2 px-4 text-left">Pollution (Mt de CO₂)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 capitalize">{item.mois}</td>
                                        <td className="py-2 px-4">{item.pollution}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <ViewGraphic/>
                    </>

                ) : (
                    <p className="text-gray-600 mt-4">Chargement ou aucune donnée disponible.</p>
                )}
            </div>
        </div>
    );
}
