export default function Reference() {
    return (
        <section className="bg-white py-10 px-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-[#28A7FA] mb-4 text-center">📊 Source des données</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
                Toutes les statistiques météorologiques et environnementales affichées sur cette plateforme proviennent de <b>Statistique Canada</b>.
                Nous avons consulté les bases officielles pour récolter des données fiables sur les températures, les précipitations et la pollution dans chaque province du Canada entre 2022 et 2024.
            </p>
            <div className="text-center mt-4">
                <a
                    href="https://www.statcan.gc.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#28A7FA] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition"
                >
                    🔗 Visiter Statistique Canada
                </a>
            </div>
        </section>

    );
}