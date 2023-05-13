import { useState } from "react";
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { HiOutlineViewGrid } from "react-icons/hi"
import { AiOutlineShopping } from "react-icons/ai";
import { FaTimes } from "react-icons/fa"
import NavigationSm from "./NavigationSm";
import SidebarCategories from "./SidebarCategories";

const SmallNav = () => {
  const [navState, setNavState] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-50 px-6 w-full h-16 flex items-center justify-between shado bg-[#fafad2]">
        {/* Menu button */}
        <button onClick={() => setNavState(true)}>
          <IconContext.Provider
            value={{ className: "text-black text-[1.8rem]" }}
          >
            <HiOutlineViewGrid />
          </IconContext.Provider>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-Bruno font-black text-4xl text-[#ffb500]">
            O
          </span>
        </Link>

        {/* Search icon */}
        <Link to="/cart" className="relative px-[5px]">
          <IconContext.Provider value={{ className: "text-black text-3xl" }}>
            <AiOutlineShopping />
          </IconContext.Provider>
          {/* <div className="w-[6px] h-[6px] bg-red-500 rounded-full absolute top-[2px] right-[2px]"></div> */}
        </Link>
      </nav>

      {navState && 
        <div className="fixed top-0 left-0 z-[9999] w-full h-screen bg-white py-6 px-4">
          <button onClick={() => setNavState(false)} className="float-right mt-2">
            <IconContext.Provider value={{ className: "text-xl" }}>
              <FaTimes />
            </IconContext.Provider>
          </button>
          <section className="pt-12">
            <h3 className="text-lg mb-3">Categories</h3>
            <SidebarCategories
              category={{ name: "Accessories", link: "/shop/accessories" }}
              subcategories={[
                { name: "Fashion", link: "/shop/accessories/fashion" },
                {
                  name: "Mobile phones",
                  link: "/shop/accessories/mobile-phones",
                },
                { name: "Laptops", link: "/shop/accessories/laptops" },
              ]}
            />
            <SidebarCategories
              category={{ name: "Beauty", link: "/shop/beauty" }}
              subcategories={[
                { name: "Skincare", link: "/shop/beauty/skincare" },
                { name: "Haircare", link: "/shop/beauty/haircare" },
                { name: "Make-ups", link: "/shop/beauty/make-ups" },
                { name: "Jewelries", link: "/shop/beauty/jewelries" },
              ]}
            />
          </section>
        </div>
      }

      <NavigationSm />
    </>
  );
};

export default SmallNav;