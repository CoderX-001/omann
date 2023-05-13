import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SmallNav from "../components/SmallNav";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import SkeletonLoadingMain from "../components/sub-components/SkeletonLoadingMain";
import ProductHolder from "../components/ProductHolder";
import { Link } from "react-router-dom";
import { getRemainingHour, getRemainingMinute, getSeconds } from "../functions/DateHandler";

const Home = () => {
  const screen = window.innerWidth;
  const height = window.innerHeight;
  const [screenWidth, setScreenWidth] = useState(screen);
  const [screenHeight, setScreenHeight] = useState(height);
  window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  window.addEventListener("resize", () => setScreenHeight(window.innerHeight));

  // const [products, setProducts] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/get/products")
      .then((res) => {
        setIsPending(false);
        console.log(res);
      })
      .catch((err) => {
        // setIsPending(false)
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  const currentSecond = getSeconds()
  const currentMinute = getRemainingMinute()
  const currentHour = getRemainingHour(24);
  const [seconds, setSeconds] = useState(currentSecond);
  const [minutes, setMinutes] = useState(currentMinute);
  const [hours, setHours] = useState(currentHour)

  setInterval(() => {
    getSeconds() === 60 ? setSeconds(0) : setSeconds(getSeconds());

    seconds === 0 && setMinutes(getRemainingMinute())

    minutes === 0 || minutes === 60 && setHours(getRemainingHour(24))
  }, 1000);

  return (
    <>
      <div
        onClick={() => setError("")}
        className={`fixed z-[80] ${
          !error ? "-top-full" : "top-16"
        } left-1/2 -translate-x-1/2 bg-red-400 text-white px-4 py-2 rounded transition-all cursor-pointer`}
      >
        <p className="text-center">{error}!</p>
        <p className="text-[.8rem] mt-[2px]">Click to close this message.</p>
      </div>
      {screenWidth > 767 ? <Navbar /> : <SmallNav />}

      <div className="w-full">
        {screenWidth > 767 && <Sidebar />}

        <main className="w-full mt-16 gap-x-2 md:w-[80%] md:float-right lg:flex">
          <div className="w-full pt-1 rounded md:px-4 lg:w-3/4">
            {isPending && <SkeletonLoadingMain />}
            {/* Set the display for when the items are retrieved */}

            <div className="w-[95%] mx-auto mt-8 mb-16">
              <div className="flex items-center justify-between bg-red-500 py-2 px-3 capitalize text-white rounded mb-6">
                <h3>New Arrivals</h3>
                <Link to="/shop/new" className="text-xs">
                  See more
                </Link>
              </div>

              <div className="product-holder flex items-start gap-x-4 overflow-auto">
                <ProductHolder />
                <ProductHolder />
                <ProductHolder />
                <ProductHolder />
              </div>
            </div>

            <div className="w-[95%] mx-auto mt-8 mb-16">
              <div className="bg-blue-300 py-2 px-3 capitalize text-white rounded mb-6 flex items-center justify-between">
                <h3>Deals of the day</h3>
                <div>
                  {`${hours.toString().length === 1 ? "0" : ""}` + hours}&nbsp;:&nbsp; 
                  {`${minutes.toString().length === 1 ? "0" : ""}` + minutes}&nbsp;:&nbsp; 
                  {`${seconds.toString().length === 1 ? "0" : ""}` + seconds}
                </div>
              </div>

              <div className="product-holder flex items-start gap-x-4">
                <ProductHolder />
                <ProductHolder />
              </div>
            </div>
          </div>

          {screenWidth > 1023 && (
            <div
              style={{ height: screenHeight - 64 }}
              className="w-[20%] fixed top-16 right-0 p-2 rounded bg-gray-50 shadow-md"
            >
              <h1>New sidebar</h1>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
