import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faSchool,
  faBookOpen,
  faUsers,
  faGears,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const MainMenu = () => {
  const [isNavHovered, setIsNavHovered] = useState<boolean>(false);

  const iconClasses = `${
    isNavHovered && "flex flex-col items-center p-1 sm:p-2"
  } hover:bg-slate-600 hover:rounded-xl transition-all duration-300`;

  return (
    <nav
      className="flex justify-between items-center bg-slate-400 p-2 sm:p-4 rounded-b-xl opacity-70 hover:opacity-100 hover:p-3 sm:hover:p-4 transition-all duration-300"
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
    >
      <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 flex-grow">
        <div className={iconClasses}>
          <FontAwesomeIcon icon={faGauge} />
          {isNavHovered && <p>Dashboard</p>}
        </div>
        <div className={iconClasses}>
          <FontAwesomeIcon icon={faSchool} />
          {isNavHovered && <p>Classes</p>}
        </div>
        <div className={iconClasses}>
          <FontAwesomeIcon icon={faBookOpen} />
          {isNavHovered && <p>Timetable</p>}
        </div>
        <div className={iconClasses}>
          <FontAwesomeIcon icon={faUsers} />
          {isNavHovered && <p>Grades</p>}
        </div>
        <div className={iconClasses}>
          <FontAwesomeIcon icon={faGears} />
          {isNavHovered && <p>Settings</p>}
        </div>
      </div>
      <div className={`w-6 sm:w-8 ${iconClasses} min-w-[48px] sm:min-w-[64px]`}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        {isNavHovered && <p>Logout</p>}
      </div>
    </nav>
  );
};
