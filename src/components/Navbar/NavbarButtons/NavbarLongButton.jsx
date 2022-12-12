import React from "react";

const NavbarLongButton = ({
  children,
  text,
  className,
  selected,
  onMenuItemClick,
  menuButtonType,
}) => {
  return (
    <div
      className={`${
        selected ? "bg-gray-300" : ""
      } hover:bg-gray-200 m-auto w-[90%] h-[50px] p-3 ${className} hover:cursor-pointer rounded-full `}
      onClick={() => onMenuItemClick(menuButtonType)}
    >
      <div
        className={`flex relative ml-2`}
      >
        {children}
        <div className="text-l font-semibold select-none ml-5">
          {text}
        </div>
      </div>
    </div>
  );
};

export default NavbarLongButton;
