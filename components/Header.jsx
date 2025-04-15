'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { setParams } from '@/utils/storeParams';
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/logo.jpeg";

export default function Header() {
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const navRef = useRef(null);


    const toggleMenu = (menu) => {
        setActiveMenu(menu === activeMenu ? null : menu);
        setSelectedProvince(null); // reset province when switching menu
    };

    useEffect(() => { // Fonction de détection de clic en dehors du menu
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveMenu(null);
                setSelectedProvince(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


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

            <nav ref={navRef} className="flex gap-6 font-semibold relative">
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
                                                onClick={() => {
                                                    setParams(menu, selectedProvince, year);

                                                    const lowerMenu = menu.toLowerCase();
                                                    if (lowerMenu === "températures") {
                                                        router.push('/presentation/temperatures');
                                                    } else if (lowerMenu === "pollution") {
                                                        router.push('/presentation/pollutions');
                                                    } else if (lowerMenu === "précipitations") {
                                                        router.push('/presentation/precipitations');
                                                    }

                                                }}
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

                {/* Analyse */}
                <div className="relative">
                    <button onClick={() => toggleMenu('Analyse')}>Analyse</button>
                    {activeMenu === 'Analyse' && (
                        <div className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10 w-60">
                            <div
                                className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                                onClick={() => router.push('/presentation/extremesTemp')}
                            >
                                Température
                            </div>
                            <div
                                className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                                onClick={() => router.push('/presentation/extremesPol')}
                            >
                                Pollution
                            </div>
                            <div
                                className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                                onClick={() => router.push('/presentation/extremesPrecip')}
                            >
                                Précipitations
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/Apropos" className="hover:underline">À propos</Link>
            </nav>
        </header>
    );
}
