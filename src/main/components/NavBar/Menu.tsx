import { useState } from "react";
import { MenuEntry } from "./components/MenuEntry";
import { useMenu } from "./useMenu";

export const MainMenu = () => {
  const [isNavHovered, setIsNavHovered] = useState<boolean>(false);
  const { menuOptions } = useMenu();

  return (
    <nav
      className="flex justify-between items-center bg-slate-400 p-2 sm:p-4 rounded-b-xl opacity-70 hover:opacity-100 hover:p-3 sm:hover:p-4 transition-all duration-500"
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
    >
      <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 flex-grow">
        {menuOptions.map((option, index) => (
          <MenuEntry
            key={index}
            icon={option.icon}
            label={option.label}
            isParentHovered={isNavHovered}
          />
        ))}
      </div>
    </nav>
  );
};
