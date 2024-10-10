import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faAirFreshener,
  faBaseball,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";

export const MainMenu = () => {
  return (
    <nav className="flex felx-col justify-center space-x-8 bg-slate-400 p-4 rounded-xl m-2 hover:p-8 transition-all duration-300">
      <div>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div>
        <FontAwesomeIcon icon={faAirFreshener} />
      </div>
      <div>
        <FontAwesomeIcon icon={faBaseball} />
      </div>
      <div>
        <FontAwesomeIcon icon={faRadio} />
      </div>
    </nav>
  );
};
