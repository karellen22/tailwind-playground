import React from "react";

const NavbarBigButton = ({
  children,
  text,
  className,
  selected,
  onMenuItemClick,
  menuButtonType,
}) => {
  return (
    <div
      className={`w-20 h-[60px] ${className} hover:cursor-pointer`}
      onClick={() => onMenuItemClick(menuButtonType)}
    >
      <div className={`${selected ? "bg-gray-200" : ""} flex ring-offset-4 hover:bg-gray-200 w-14 h-8 rounded-full items-center justify-center m-auto relative`}>
        {children}
      </div>
      <div className="text-xs text-center font-medium">{text}</div>
    </div>
  );
};

export default NavbarBigButton;
