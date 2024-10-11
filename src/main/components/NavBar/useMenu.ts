import {
  faGauge,
  faSchool,
  faBookOpen,
  faUsers,
  faGears,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type MenuOptionsProps = {
  icon: IconProp;
  isParentHovered?: boolean;
  onClick?: () => void;
  label?: string;
};

export const useMenu = () => {
  const menuOptions: MenuOptionsProps[] = [
    {
      icon: faGauge,
      label: "Dashboard",
    },
    {
      icon: faSchool,
      label: "Classes",
    },
    {
      icon: faBookOpen,
      label: "Timetable",
    },
    {
      icon: faUsers,
      label: "Grades",
    },
    {
      icon: faGears,
      label: "Settings",
    },
    {
      icon: faRightFromBracket,
      label: "Login",
    },
  ];

  return { menuOptions };
};
