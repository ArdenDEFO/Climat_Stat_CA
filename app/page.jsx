import Presentation from "@/components/Presentation";
import Reference from "@/components/Reference";
import DateCourante from "@/components/DateCourante";

export default function Home() {
  return (
    <div>
      <section
        className="h-[90vh] w-full bg-cover bg-center flex items-center justify-center text-white px-6 rounded-lg"
        style={{ backgroundImage: "url('/temperature.jpg')" }}
      >
        <div className="bg-black/40 p-8 rounded-lg text-center max-w-2xl">
          <h1 className="text-4xl md:text-3xl font-bold">Voulez vous voir les données météorologiques</h1>
          <h2 className="text-3xl md:text-3xl font-semibold">du Canada de 2022 à 2024 ?</h2>
          <p className="mt-6 text-lg">Explorez les statistiques climatiques du Canada, province par province entre 2022 et 2024.</p>

          <DateCourante />
        </div>
      </section>

      <section
        className="h-[100vh] w-full bg-cover bg-center flex items-center flex flex-col text-white px-6 mt-8 rounded-lg"
        style={{ backgroundImage: "url('/prairie.jpg')" }}
      >
        <Presentation />
      </section>
      <Reference />
    </div>
  );
}
