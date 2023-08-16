import { MagnifyingGlass } from "@phosphor-icons/react";
import ButtonWithIcon from "./ButtonWithIcon";

type Props = {};

const SearchSection = (props: Props) => {
  return (
    <form className="my-28 p-5 flex flex-col justify-between items-center gap-2 bg-white w-full">
      <select name="" id="" className="selectArrow">
        <option value="Test">Localização</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>
      <select name="" id="" className="selectArrow">
        <option value="Test">Quartos</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>
      <select name="" id="" className="selectArrow">
        <option value="Test">Garagem</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>
      <select name="" id="" className="selectArrow">
        <option value="Test">Banheiros</option>
        <option value="Test">Test</option>
        <option value="Test">Test</option>
      </select>

      <ButtonWithIcon text="Buscar" icon={<MagnifyingGlass size={32} />} />
    </form>
  );
};

export default SearchSection;
