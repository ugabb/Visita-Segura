import { MagnifyingGlass } from "@phosphor-icons/react";
import ButtonWithIcon from "./ButtonWithIcon";

type Props = {};

const SearchSection = (props: Props) => {
  return (
    <form className="lg:absolute lg:-bottom-12 p-5 flex flex-col lg:flex-row lg:w-auto justify-between lg:justify-center items-center gap-2 bg-white w-full md:w-2/3 mx-auto shadow-md rounded-md">
      <select name="" id="" className="selectArrow lg:w-40">
        <option value="Test">Localização</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>
      <select name="" id="" className="selectArrow lg:w-40">
        <option value="Test">Quartos</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>
      <select name="" id="" className="selectArrow lg:w-40">
        <option value="Test">Garagem</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>
      <select name="" id="" className="selectArrow lg:w-40">
        <option value="Test">Banheiros</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>

      <div className="lg:w-auto">
        <ButtonWithIcon text="Buscar" icon={<MagnifyingGlass size={32} />} />
      </div>
    </form>
  );
};

export default SearchSection;
