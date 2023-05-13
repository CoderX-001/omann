import { IconContext } from "react-icons";
import { AiFillShop } from "react-icons/ai";
import { BiLogIn, BiNews, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const NavigationSm = () => {
  return (
    <div className="w-full h-[3.5rem] bg-gray-50 fixed z-50 bottom-0 text-black flex flex-wrap items-center justify-between px-[8%]">
      <NavLink to="/" className="flex flex-col items-center">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <HiHome />
        </IconContext.Provider>
        <span className="text-xs">Home</span>
      </NavLink>

      <NavLink to={window.location.href} className="flex flex-col items-center">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <BiSearch />
        </IconContext.Provider>
        <span className="text-xs">Search</span>
      </NavLink>

      <NavLink to="/shop" className="flex flex-col items-center">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <AiFillShop />
        </IconContext.Provider>
        <span className="text-xs">Shop</span>
      </NavLink>

      <NavLink to="/blog" className="flex flex-col items-center">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <BiNews />
        </IconContext.Provider>
        <span className="text-xs">Blog</span>
      </NavLink>

      <NavLink to="/join/login" className="flex flex-col items-center">
        <IconContext.Provider value={{ className: "text-2xl" }}>
          <BiLogIn />
        </IconContext.Provider>
        <span className="text-xs">Login</span>
      </NavLink>
    </div>
  );
};

export default NavigationSm;