import React, { useState } from "react";
import MenuButtonType from "../../constants/MenuButtonType";
import HamburgerIcon from "../icons/HamburgerIcon";
import NavbarBigButton from "./NavbarButtons/NavbarBigButton";
import NavbarLongButton from "./NavbarButtons/NavbarLongButton";
import { navbarItems } from "./navbarItems";

const Navbar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(MenuButtonType.Home);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  function onMenuItemClick(button) {
    setSelectedMenuItem(button);
  }

  const onHamburgerClick = () => setShowHamburgerMenu(!showHamburgerMenu);

  return (
    <>
      <div className="hidden flex-col w-24 h-screen bg-gray-100 md:flex">
        <div className="grid w-full self-center gap-4 justify-center">
          {navbarItems.map((item) => (
            <NavbarBigButton
              children={item.icon}
              text={item.text}
              className={item.className}
              selected={item.menuButtonType === selectedMenuItem}
              onMenuItemClick={onMenuItemClick}
              menuButtonType={item.menuButtonType}
            />
          ))}
        </div>
      </div>
      <div>
        <div
          className={`${
            showHamburgerMenu ? "hidden" : ""
          } flex flex-row md:hidden`}
        >
          <div
            className="m-1 hover:bg-gray-200 hover:cursor-pointer flex ring-offset-4 w-12 h-12 rounded-full items-center justify-center relative"
            onClick={onHamburgerClick}
          >
            <HamburgerIcon className="w-6 h-6 ring-offset-4" />
          </div>
        </div>
        <div
          className={
            !showHamburgerMenu
              ? "opacity-0 w-0 h-0"
              : ` bg-white w-80 absolute h-screen md:hidden rounded-tr-2xl rounded-br-2xl transition-width duration-250 ease-in-out`
          }
        >
          <div className="m-1 flex flex-row md:hidden">
            <div
              className="hover:bg-gray-200 hover:cursor-pointer flex ring-offset-4 w-12 h-12 rounded-full items-center justify-center relative"
              onClick={onHamburgerClick}
            >
              <HamburgerIcon className="w-6 h-6 ring-offset-4" />
            </div>
          </div>
          {navbarItems.map((item) => (
            <NavbarLongButton
              children={item.icon}
              text={item.text}
              className={item.className + ` ${!showHamburgerMenu ? " hidden" : ""}`}
              selected={item.menuButtonType === selectedMenuItem}
              onMenuItemClick={onMenuItemClick}
              menuButtonType={item.menuButtonType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
