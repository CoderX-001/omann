import { Link, NavLink } from "react-router-dom"
import { IconContext } from "react-icons"
import { AiOutlineShopping } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { useState } from "react";

const Navbar = () => {
  const [searchText, setSearchText] = useState("")

  return (
    <nav className="fixed top-0 z-50 w-full h-16 px-6 flex items-center justify-between bg-[#fafad2] md:text-sm lg:px-16">
      <div className="flex items-center">
        <span className="font-Bruno font-black text-4xl text-[#ffb500]">O</span>
        <p>mann</p>
      </div>

      {/* Search bar */}
      <form
        method="get"
        className="w-[30%] py-[3px] bg-white flex justify-between pl-3 pr-1 rounded-md shadow-md lg:w-[45%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IconContext.Provider
          value={{ className: "h-7 text-xl mr-[5px] g-orange-400" }}
        >
          <BiSearch />
        </IconContext.Provider>
        <input
          type="search"
          name="search"
          id="search"
          className="w-11/12 py-[2px] px-1 bg-transparent text-[.75rem] outline-none lg:text-sm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#ffb500] px-[0.6rem] rounded shadow text-sm"
        >
          Search
        </button>
      </form>

      {/* Links */}
      <div className="flex items-center gap-x-8 lg:gap-x-16">
        <div className="flex items-center gap-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop" className="hover:text-[#ffb500]">
            Shop
          </NavLink>
          <NavLink to="/blog" className="hover:text-[#ffb500]">
            Blog
          </NavLink>
        </div>

        <div className="flex items-center gap-x-4">
          <Link to="/cart" className="relative px-[6px]">
            <IconContext.Provider
              value={{ className: "text-[#ffb500] text-2xl" }}
            >
              <AiOutlineShopping />
            </IconContext.Provider>
            {/* <div className="w-[5px] h-[5px] bg-red-500 rounded-full absolute top-[2px] right-[2px]"></div> */}
          </Link>

          {/* Toggle if user is logged in */}
          <Link
            to="/join/login"
            className="bg-white shadow-md px-4 pt-[2px] pb-1 border-[1px] border-transparent text-[#ffb500] rounded hover:border-[#ffb500]"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;