import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MenuEntryProps = {
  icon: IconProp;
  isParentHovered?: boolean;
  onClick?: () => void;
  label?: string;
};

export const MenuEntry = ({ icon, isParentHovered, onClick, label }: MenuEntryProps) => {
  const iconClasses = `${
    isParentHovered && "flex flex-col items-center p-1 sm:p-2"
  } hover:bg-slate-600 hover:rounded-xl transition-all duration-300 cursor-pointer`;

  return (
    <div className={iconClasses} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      {isParentHovered && <p>{label}</p>}
    </div>
  );
};
