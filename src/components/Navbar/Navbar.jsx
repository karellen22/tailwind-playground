import React, { useState } from "react";
import MenuButtonType from "../../constants/MenuButtonType";
import NavbarBigButton from "./NavbarButtons/NavbarBigButton";
import { navbarItems } from "./navbarItems";

const Navbar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(MenuButtonType.Home);

  function onMenuItemClick(button) {
    setSelectedMenuItem(button);
  }

  return (
    <div className="hidden flex-col w-24 h-screen bg-gray-100 md_to_infinity:flex">
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
  );
};

export default Navbar;
