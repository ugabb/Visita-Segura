import Excavator from "./icons/Excavator";
import InteriorDesign from "./icons/InteriorDesign";
import Map from "./icons/Map";
import Office from "./icons/Office";

const Service = () => {
  return (
    <section className="bg-lightBlue py-16 flex flex-col gap-20 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-40">
      <div className="flex flex-col justify-center items-center gap-5">
        <Excavator />
        <h3 className="text-4xl text-secondaryColor font-inter font-bold">
          +260
        </h3>
        <p className="text-md text-slateGray font-inter">Imóveis Novos</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <InteriorDesign />
        <h3 className="text-4xl text-secondaryColor font-inter font-bold">
          +110
        </h3>
        <p className="text-md text-slateGray font-inter">Imóveis Prontos</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <Office />
        <h3 className="text-4xl text-secondaryColor font-inter font-bold">
          +190
        </h3>
        <p className="text-md text-slateGray font-inter">Apartamentos</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <Map />
        <h3 className="text-4xl text-secondaryColor font-inter font-bold">
          +56
        </h3>
        <p className="text-md text-slateGray font-inter">Localizações</p>
      </div>
    </section>
  );
};

export default Service;
