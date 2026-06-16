import foto1 from "../public/photo1.png";
import foto2 from "../public/photo2.png";
import foto3 from "../public/photo3.png";
import foto4 from "../public/photo4.png";
import foto5 from "../public/photo5.png";
import foto6 from "../public/photo6.png";

function Crew() {
  return (
    <>
      <header className="px-4 flex flex-col lg:flex-row">
        <div className="flex lg:w-[60%] ">
          <h1 className="py-5 font-bold text-2xl w-70 lg:p-10">
            The creative crew
          </h1>
          <button className="hidden">🌙</button>
        </div>
        <section className="flex flex-col mt-2 pl-6 justify-center lg:w-[30%] lg:py-4">
          <span className="flex  w-60">
            <button className="hidden lg:flex lg:justify-end lg:w-100">
              🌙
            </button>
          </span>
          <h2 className="font-bold">Who are we</h2>
          <p>
            We are a team of creatively diverse, driven. innovate individuals
            working in various locations from the world
          </p>
        </section>
      </header>
      <main className="grid grid-cols-2 px-5 gap-4 mt-6 lg:px-10 lg:grid-cols-3">
        <div className="relative mb-1 w-40 lg:w-70">
          <span className="flex flex-col w-full">
            <img src={foto1} alt="" className="w-35 lg:w-50" />
            <p className="font-bold">Bill Mahoney</p>
          </span>
          <p className="absolute rotate-90 left-17 top-18 w-40 text-[12px] lg:left-32">
            PRODUCT OWNER
          </p>
        </div>
        <div className="relative mt-10 w-40 lg:w-70">
          <span className="flex flex-col w-full">
            <img src={foto2} alt="" className="w-35 lg:w-50" />
            <p className="font-bold">Saba Cabrera</p>
          </span>
          <p className="absolute rotate-90 left-17 top-18 w-40 text-[12px] lg:left-32">
            ART DIRECTOR
          </p>
        </div>
        <div className="relative w-40 lg:w-70">
          <span className="flex flex-col w-full">
            <img src={foto3} alt="" className="w-35 lg:w-50" />
            <p className="font-bold">Shae Le</p>
          </span>
          <p className="absolute rotate-90 left-17 top-18 w-40 text-[12px] lg:left-32">
            TECHLAND
          </p>
        </div>
        <div className="relative w-40 mt-6 lg:w-70">
          <span className="flex flex-col w-full">
            <img src={foto4} alt="" className="w-35 lg:w-50" />
            <p className="font-bold">Skylah Luh</p>
          </span>
          <p className="absolute rotate-90 left-17 top-18 w-40 text-[12px] lg:left-32">
            UX DESIGNER
          </p>
        </div>
        <div className="relative w-40 lg:w-70 lg:mt-15">
          <span className="flex flex-col w-full">
            <img src={foto5} alt="" className="w-35 lg:w-50" />
            <p className="font-bold">Griff Richards</p>
          </span>
          <p className="absolute rotate-90 top-18 left-17 w-40 text-[12px] lg:left-32">
            DEVELOPER
          </p>
        </div>
        <div className="relative w-40 mt-6 lg:w-70">
          <span className="flex flex-col w-full">
            <img src={foto6} alt="" className="w-35 lg:w-50" />
            <p className="font-bold">Stan John</p>
          </span>
          <p className="absolute rotate-90 top-18 left-17 w-40 text-[12px] lg:left-32">
            DEVELOPER
          </p>
        </div>
      </main>
    </>
  );
}

export default Crew;
