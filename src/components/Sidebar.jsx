import { useState } from "react";
import SidebarCategories from "./SidebarCategories";
import { IconContext } from "react-icons";
import { HiOutlineViewGrid, HiViewGrid } from "react-icons/hi";

const Sidebar = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  
  return (
    <aside
      style={{ height: windowHeight - 64 + "px" }}
      className="fixed top-16 z-10 w-[20%] bg-gray-50 text-black px-4 rounded-se-md shadow-lg overflow-auto"
    >
      <section className="pt-6">
        <h3 className="mb-3 text-[#ffb500] flex items-center gap-x-2">
          <IconContext.Provider value={{ className: "text-2xl" }}>
            <HiOutlineViewGrid />
          </IconContext.Provider>
          <span>Categories</span>
        </h3>
        <SidebarCategories
          category={{ name: "Accessories", link: "/shop/accessories" }}
          subcategories={[
            { name: "Fashion", link: "/shop/accessories/fashion" },
            { name: "Mobile phones", link: "/shop/accessories/mobile-phones" },
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
    </aside>
  );
};

export default Sidebar;
