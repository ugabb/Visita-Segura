import {
  Bathtub,
  Bed,
  Car,
  Clock,
  MapPin,
  SquaresFour,
} from "@phosphor-icons/react";

import TextWithIcon from "./TextWithIcon";

const ImovelCard = () => {
  return (
    <div className="w-full md:w-[355px] lg:w-[325px]  flex flex-col gap-5 shadow-lg">
      <img src="./1-imovel.jpeg" alt="" className="aspect-video" />
      <div className="flex flex-col gap-1 px-5">
        <h4 className="text-center font-inter text-xl font-semibold text-black">
          Casa ampla com 200 metros
        </h4>

        <div className="flex items-center justify-center">
          <TextWithIcon
            icon={
              <MapPin size={16} weight="fill" className="text-primaryColor" />
            }
            text="Brasília, CA 90210"
          />
        </div>
      </div>

      <div className="flex justify-between border border-y border-x-0 border-[#dcdcdc] py-3 mx-5">
        <div className="flex flex-col gap-3 ">
          <TextWithIcon
            icon={<SquaresFour size={16} weight="fill" color="#004e81" />}
            text="2400 m2"
          />
          <TextWithIcon
            icon={<Bed size={16} weight="fill" color="#004e81" />}
            text="20 Quadros"
          />
        </div>

        <div className="flex flex-col gap-3">
          <TextWithIcon
            icon={<Car size={16} weight="fill" color="#004e81" />}
            text="3 Garagens"
          />

          <TextWithIcon
            icon={<Bathtub size={16} weight="fill" color="#004e81" />}
            text="11 Quartos"
          />
        </div>
      </div>

      <div className="flex justify-end mx-5">
        <TextWithIcon
          icon={<Clock size={16} color="#004e81" />}
          text="5 dias atrás"
        />
      </div>

      <div>
        <button
          className={`text-xl uppercase font-inter w-full bg-primaryColor text-white py-3`}
        >
          R$124.780,00
        </button>
        <button
          className={`text-xl uppercase font-inter w-full bg-green text-white py-3`}
        >
          Agendar Visita
        </button>
      </div>
    </div>
  );
};

export default ImovelCard;
