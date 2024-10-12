import { MenuEntry } from "./components/MenuEntry";
import { useMenu } from "./useMenu";

export const MainMenu = () => {
  const { menuOptions } = useMenu();

  return (
    <nav className="flex justify-between items-center bg-slate-400 p-2  rounded-b-xl opacity-80 hover:opacity-100  transition-all duration-500">
      <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 flex-grow">
        {menuOptions.map((option, index) => (
          <MenuEntry key={index} icon={option.icon} label={option.label} />
        ))}
      </div>
    </nav>
  );
};
