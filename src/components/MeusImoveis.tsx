import Footer from "./Footer/Footer";
import ImovelCard from "./ImovelCard/ImovelCard";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

const MeusImoveis = () => {
  return (
    <div className="">
      <Navbar />
      <h3 className="text-primaryColor text-lg text-center font-roboto uppercase my-10">
        Meus Imóveis
      </h3>
      <div className="w-full flex flex-col justify-center items-center text-center gap-5">
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 p-5 gap-5 justify-items-center space-y-5 md:space-y-0">
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
          <ImovelCard />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MeusImoveis;
