import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const SidebarCategories = ({ category, subcategories }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="ml-3 mb-4">
      <div className="flex items-center justify-between">
        <Link
          to={category.link}
          className={`text-[0.9rem] ${
            collapsed && "text-[#ffb500]"
          } hover:text-[#ffb500]`}
        >
          {category.name}
        </Link>

        <button onClick={() => setCollapsed(!collapsed)}>
          {!collapsed ? (
            <IconContext.Provider value={{ className: "text-sm" }}>
              <AiOutlinePlus />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: "text-sm" }}>
              <AiOutlineMinus />
            </IconContext.Provider>
          )}
        </button>
      </div>

      <div
        className={`flex flex-col gap-y-2 text-sm pl-3 overflow-hidden ${
          !collapsed ? "max-h-0" : "max-h-fit py-1"
        } transition-all duration-300`}
      >
        {subcategories.map((subcategory) => (
          <Link
            to={subcategory.link}
            className="hover:text-[#ffb500]"
            key={Math.floor(Math.random() * 99999999)}
          >
            {subcategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarCategories;
