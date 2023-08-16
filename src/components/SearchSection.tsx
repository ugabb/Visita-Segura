import { useEffect, useState } from "react";

import { MagnifyingGlass } from "@phosphor-icons/react";
import ButtonWithIcon from "./ButtonWithIcon";

const SearchSection = () => {
  const [searchImovel, setSearchImovel] = useState({
    localizacao: "",
    quartos: 0,
    garagem: 0,
    banheiros: 0,
  });
  useEffect(() => {
    console.log(searchImovel);
  }, [searchImovel]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setSearchImovel((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   console.log("change", searchImovel);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchImovel({
      localizacao: e.currentTarget.localizacao.value,
      quartos: parseInt(e.currentTarget.quartos.value),
      garagem: parseInt(e.currentTarget.garagem.value),
      banheiros: parseInt(e.currentTarget.banheiros.value),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:absolute lg:-bottom-12 p-5 flex flex-col lg:flex-row lg:w-auto justify-between lg:justify-center items-center gap-2 bg-white w-full md:w-2/3 mx-auto shadow-md rounded-md"
    >
      <select
        name="localizacao"
        id=""
        className="selectArrow lg:w-40 xl:w-[246px]"
        // onChange={handleInputChange}
      >
        <option value="">Localização</option>
        <option value="Hogwarts">Hogwarts</option>
        <option value="Gotham City">Gotham City</option>
      </select>
      <select
        name="quartos"
        id=""
        className="selectArrow lg:w-40 xl:w-[246px]"
        // onChange={handleInputChange}
      >
        <option value="">Quartos</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <select
        name="garagem"
        id=""
        className="selectArrow lg:w-40 xl:w-[246px]"
        // onChange={handleInputChange}
      >
        <option value="">Garagem</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>
      <select
        name="banheiros"
        id=""
        className="selectArrow lg:w-40 xl:w-[246px]"
        // onChange={handleInputChange}
      >
        <option value="">Banheiros</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>

      <div className="lg:w-auto">
        <ButtonWithIcon text="Buscar" icon={<MagnifyingGlass size={32} />} />
      </div>
    </form>
  );
};

export default SearchSection;
