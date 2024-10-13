import { navData } from "@/data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5 bg-mainColor flex justify-between items-center">
      {navData.map(({ name, path }) => (
        <NavLink className="nav-link font-medium text-sm text-silver leading-[21px]" to={path} key={name}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
