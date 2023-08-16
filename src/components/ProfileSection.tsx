import React from "react";
import DefaultButton from "./DefaultButton";
import ImoveisAnunciados from "./widgets/ImoveisAnunciados";

type Props = {};

const ProfileSection = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center gap-28 mt-20">
      <div>
        <h1 className="text-6xl font-bold font-inter text-secondaryColor mb-5">
          Charlin Meu Filho
        </h1>
        <div className="text-slateGray font-roboto text-lg">
          <p>charles@skymedia.com.br</p>
          <p>CRECI: 8918-F</p>
          <p className="mt-5">
            Sobre o corretor ipsn loren dolor consectum amet dor lorem imun
          </p>
        </div>

        <div className="mt-20">
          <DefaultButton text="Conheça mais sobre o corretor" px="10" py="5" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <img src="./profile-picture.png" alt="" className="w-[439px]" />
        <ImoveisAnunciados stats={80} />
      </div>
    </div>
  );
};

export default ProfileSection;
