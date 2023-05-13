import { IconContext } from "react-icons";
import { AiFillEye, AiFillHeart, AiFillShopping } from "react-icons/ai";

const ProductHolder = () => {
  return (
    <div className="item w-44 h-48 rounded bg-white shadow-lg overflow-hidden relative">
      <div className="w-full h-fit px-3 pb-3 opacity-80 absolute bottom-0">
        <div className="product-info transition delay-75">
          <div className="skeleton w-full h-3 mb-[2px] bg-gray-300 rounded-sm"></div>
          <div className="skeleton w-[80%] mb-1 h-3 bg-gray-300 rounded-sm"></div>
          <div className="skeleton w-1/4 mb-1 h-3 bg-gray-300 rounded-sm"></div>
          <div className="skeleton w-[40%] h-3 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
      <div className="item-option absolute bottom-0 w-full h-0 overflow-hidden bg-[#e3e3e3] opacity-70 flex items-center justify-center gap-x-5 transition-all delay-75">
        <button
          title="Add to cart"
          className="srounded-full text-gray-600 hover:text-gray-900"
        >
          <IconContext.Provider
            value={{
              className: "text-lg",
            }}
          >
            <AiFillShopping />
          </IconContext.Provider>
        </button>

        <button
          title="View item"
          className="rounded-full text-gray-600 hover:text-gray-900"
        >
          <IconContext.Provider value={{ className: "text-lg" }}>
            <AiFillEye />
          </IconContext.Provider>
        </button>

        <button
          title="Add to favourite"
          className="rounded-full text-gray-600 hover:text-gray-900"
          onClick={(e) => {
            if (e.target.classList.contains("addFavorite")) {
              e.target.classList.remove("addFavorite");
              e.target.classList.add("removeFavorite");
            } else {
              e.target.classList.remove("removeFavorite");
              e.target.classList.add("addFavorite");
            }
          }}
        >
          <IconContext.Provider value={{ className: "text-lg" }}>
            <AiFillHeart />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default ProductHolder;
