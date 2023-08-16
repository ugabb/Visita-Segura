import React from "react";
import DefaultButton from "./DefaultButton";
import ImoveisAnunciados from "./widgets/ImoveisAnunciados";
import SearchSection from "./SearchSection";

const ProfileSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-28 pt-5 lg:pt-20 pb-20 px-5 relative bg-[#f4f9ff]">
      <div className="flex flex-col lg:flex-row gap-10 p-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl lg:text-6xl  font-bold font-inter text-secondaryColor mb-5">
            Charlin Meu Filho
          </h1>
          <div className="text-slateGray font-roboto text-lg">
            <p>charles@skymedia.com.br</p>
            <p>CRECI: 8918-F</p>
            <p className="mt-5">
              Sobre o corretor ipsn loren dolor consectum amet dor lorem imun
            </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-start items-center">
            <DefaultButton text="Conheça mais sobre o corretor" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <img
            src="./profile-picture.png"
            alt=""
            className="w-[219px] lg:w-[439px]"
          />
          <ImoveisAnunciados stats={80} />
        </div>

      </div>

      <SearchSection />
    </div>
  );
};

export default ProfileSection;
