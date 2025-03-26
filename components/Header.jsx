'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/logo.jpeg";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(menu === activeMenu ? null : menu);
        setSelectedProvince(null); // reset province when switching menu
    };

    const provinces = [
        'Ontario', 'Québec', 'Colombie-Britannique', 'Alberta', 'Manitoba',
        'Saskatchewan', 'Nouvelle-Écosse', 'Nouveau-Brunswick', 'Terre-Neuve-et-Labrador',
        'Île-du-Prince-Édouard', 'Yukon', 'Territoires du Nord-Ouest', 'Nunavut'
    ];

    const years = ['2022', '2023', '2024'];

    return (
        <header className="bg-[#28A7FA] text-white px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex">
                    <Image src={logo} alt="Logo ClimaStat" width={90} height={90} className='rounded-full' />
                    <h1 className="text-2xl font-bold  mt-7 ml-1">ClimaStat CA</h1>
                </Link>
            </div>

            <nav className="flex gap-6 font-semibold relative">
                <Link href="/" className="hover:underline">Accueil</Link>
                {['Températures', 'Précipitations', 'Pollution'].map((menu) => (
                    <div className="relative" key={menu}>
                        <button onClick={() => toggleMenu(menu)}>{menu}</button>
                        {activeMenu === menu && (
                            <div className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10 w-60">
                                {!selectedProvince ? (
                                    provinces.map((prov) => (
                                        <div
                                            key={prov}
                                            onClick={() => setSelectedProvince(prov)}
                                            className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                                        >
                                            {prov}
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        <div className="font-bold mb-2">Année pour {selectedProvince}</div>
                                        {years.map((year) => (
                                            <div
                                                key={year}
                                                className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                                            >
                                                {year}
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {/* Comparaison */}
                <div className="relative">
                    <button onClick={() => toggleMenu('Comparaison')}>Comparaison</button>
                    {activeMenu === 'Comparaison' && (
                        <div className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10 w-60">
                            <div className="font-bold mb-2">Par mois</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Mois le plus chaud</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Mois le plus froid</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Mois le plus pollué</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Mois le moins pollué</div>
                            <div className="font-bold mt-3 mb-2">Par province</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Province la plus chaude</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Province la plus froide</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Province la plus polluée</div>
                            <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Province la moins polluée</div>
                        </div>
                    )}
                </div>
                <Link href="/Apropos" className="hover:underline">À propos</Link>
            </nav>
        </header>
    );
}
