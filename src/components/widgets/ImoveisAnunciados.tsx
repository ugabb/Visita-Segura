type Props = {
  stats: number;
};

const ImoveisAnunciados = ({ stats }: Props) => {
  return (
    <div className="w-[230px] h-[182px] flex flex-col justify-center items-center bg-white text-slateGray font-roboto rounded-md shadow-xl hover:scale-105 transition-all">
      <p className="text-xl">Imoveis Anunciados</p>
      <p className="text-4xl text-primaryColor font-bold">{stats}+</p>
      <p className="text-xl">Avaliações</p>
      <button
        className={`text-white text-sm font-inter bg-primaryColor rounded-md px-3 py-2 hover:bg-lightBlue hover:text-primaryColor transition-all`}
      >
        Ver Detalhes
      </button>
    </div>
  );
};

export default ImoveisAnunciados;
