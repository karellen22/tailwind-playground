import React, { useState } from "react";
import MenuButtonType from "../../constants/MenuButtonType";
import CalendarIcon from "../icons/CalendarIcon";
import ChartPieIcon from "../icons/ChartPieIcon";
import FilmIcon from "../icons/FilmIcon";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import TvIcon from "../icons/TvIcon";
import NavbarBigButton from "./NavbarButtons/NavbarBigButton";

const Navbar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(MenuButtonType.Home);

  function onMenuItemClick(button) {
    console.log("click", button);
    setSelectedMenuItem(button);
  }

  return (
    <div className="hidden flex-col w-24 h-screen bg-gray-100 md_to_infinity:flex">
      <div className="grid w-full self-center gap-4 justify-center">
        <NavbarBigButton
          children={<HomeIcon />}
          text="Home"
          className="mt-4"
          selected={selectedMenuItem === MenuButtonType.Home}
          onMenuItemClick={onMenuItemClick}
          menuButtonType={MenuButtonType.Home}
        />
        <NavbarBigButton
          children={<SearchIcon />}
          text="Search"
          selected={selectedMenuItem === MenuButtonType.Search}
          onMenuItemClick={onMenuItemClick}
          menuButtonType={MenuButtonType.Search}
        />
        <NavbarBigButton
          children={<TvIcon />}
          text="TV Shows"
          selected={selectedMenuItem === MenuButtonType.TvShows}
          onMenuItemClick={onMenuItemClick}
          menuButtonType={MenuButtonType.TvShows}
        />
        <NavbarBigButton
          children={<FilmIcon />}
          text="Movies"
          selected={selectedMenuItem === MenuButtonType.Movies}
          onMenuItemClick={onMenuItemClick}
          menuButtonType={MenuButtonType.Movies}
        />
        <NavbarBigButton
          children={<CalendarIcon />}
          text="Calendar"
          selected={selectedMenuItem === MenuButtonType.Calendar}
          onMenuItemClick={onMenuItemClick}
          menuButtonType={MenuButtonType.Calendar}
        />
        <NavbarBigButton
          children={<ChartPieIcon />}
          text="Statistics"
          selected={selectedMenuItem === MenuButtonType.Statistics}
          onMenuItemClick={onMenuItemClick}
          menuButtonType={MenuButtonType.Statistics}
        />
      </div>
    </div>
  );
};

export default Navbar;
