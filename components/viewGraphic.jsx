export default function ViewGraphic({ url }) {
    return (
      <div className="mt-6 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#28A7FA] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-blue-600 transition-colors"
        >
        <p>Voir sous forme graphique</p>
        </a>
      </div>
    );
  }
  