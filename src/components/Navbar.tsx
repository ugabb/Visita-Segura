import React, { useState } from "react";

import { List, X } from "@phosphor-icons/react";

import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className="flex justify-between lg:justify-around p-5 lg:px-10 lg:bg-navbarColor">
      <img src="./logo.png" alt="logo Visita Segura" className="w-[70px]" />

      <List
        size={32}
        weight="light"
        className={`${!menuToggle ? "block" : "hidden"} lg:hidden`}
        onClick={handleMenuToggle}
      />

      {/* Hamburguer MENU */}
      <div
        className={`${
          menuToggle ? "block" : "hidden"
        } border absolute top-0 right-0 bg-white w-full md:w-1/2 lg:hidden flex flex-col justify-end gap-3 p-5 shadow-md opacity-90 font-inter`}
      >
        <X
          size={32}
          weight="light"
          className={`${
            menuToggle ? "block" : "hidden"
          } absolute top-0 right-0`}
          onClick={handleMenuToggle}
        />

        <div className="flex flex-col">
          <a
            href="#"
            className="text-primaryColor font-semibold underline underline-offset-4"
          >
            Home
          </a>
          <a href="#" className="text-slateGray">
            Meus Imóveis
          </a>
        </div>

        <div className="flex items-center gap-3 text-slateGray">
          <p>Charlesinho Barbosa</p>
          <img
            src="./profile-picture.png"
            alt="Profile-Picture"
            className="w-[34px]"
          />
        </div>
      </div>
      {/* Hamburguer MENU */}

      {/* Desktop MENU */}
      <div className="hidden lg:flex gap-10 ">
        <div className="flex items-center gap-5 ">
          <NavLink
            to="/"
            className={`${({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : ""} text-slateGray font-semibold`}
          >
            Home
          </NavLink>

          <NavLink
            to="/meus-imoveis"
            className={`${({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active"
                : ""} text-slateGray font-semibold  hover:text-primaryColor transition-all`}
          >
            Meus Imoveis
          </NavLink>
        </div>

        <div className="flex items-center gap-3 text-slateGray hover:text-primaryColor transition-all cursor-pointer">
          <p>Charlesinho Barbosa</p>
          <img
            src="./profile-picture.png"
            alt="Profile-Picture"
            className="w-[34px] hover:scale-110"
          />
        </div>
      </div>
      {/* Desktop MENU */}
    </nav>
  );
};

export default Navbar;
