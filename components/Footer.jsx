export default function Footer() {
    return (
      <footer className="bg-[#28A7FA] text-white px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Section Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Email : climatstatca@email.com</p>
            <p>Téléphone : +1 (123) 456-7890</p>
          </div>
  
          {/* Section Localisation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Localisation</h3>
            <p>La Cité Collégiale</p>
            <p>Ottawa, ON, Canada</p>
          </div>
  
          {/* Section Droits */}
          <div className="flex flex-col justify-center items-center md:items-end">
            <p className="text-sm">&copy; {new Date().getFullYear()} ClimaStat CA</p>
            <p className="text-sm">Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
  }
  