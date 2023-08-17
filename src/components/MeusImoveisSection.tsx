
import ImovelCard from "./ImovelCard/ImovelCard";


const MeusImoveisSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center gap-5 py-20 ">
      <h3 className="text-primaryColor text-lg font-roboto uppercase">
        Meus Imóveis
      </h3>
      <h2 className="text-black text-2xl font-bold  font-roboto uppercase">
        Veja nossa ofertas
      </h2>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 p-5 gap-5 justify-items-center space-y-5 md:space-y-0">
        <ImovelCard />
        <ImovelCard />
        <ImovelCard />
        <ImovelCard />
        <ImovelCard />
        <ImovelCard />
      </div>
    </div>
  );
};

export default MeusImoveisSection;
