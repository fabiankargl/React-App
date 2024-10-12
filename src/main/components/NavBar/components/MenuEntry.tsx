import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MenuEntryProps = {
  icon: IconProp;
  onClick?: () => void;
  label?: string;
  className?: string;
};

export const MenuEntry = ({
  icon,
  onClick,
  label,
  className,
}: MenuEntryProps) => {
  const iconClasses = `
    flex flex-col items-center p-1
   hover:bg-slate-600 hover:rounded-xl transition-all duration-300 cursor-pointer ${className}`;

  return (
    <div className={iconClasses} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <p>{label}</p>
    </div>
  );
};
