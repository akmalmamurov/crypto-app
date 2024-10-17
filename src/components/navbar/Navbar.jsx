import { navData } from "@/data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[62px] bg-mainColor flex justify-between items-center px-[14px]">
      {navData.map(({ name, path, icon: Icon }) => (
        <NavLink
          className="nav-link font-medium text-sm text-silver leading-[21px] flex flex-col items-center "
          to={path}
          key={name}
        >
          <span>
            <Icon className="min-h-[30px]"/>
          </span>
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
