const SkeletonLoadingMain = () => {
  return (
    <>
      <div className="skeleton bg-[#ddd] w-[95%] mx-auto h-80 mt-6 rounded-md relative">
        <div className="w-full flex items-end absolute bottom-0 left-0 px-4">
          <div className="w-full h-28">
            <div className="skeleton-text bg-gray-400 delay-300 w-[80%] h-3 rounded mb-1"></div>
            <div className="skeleton-text bg-gray-400 delay-300 w-[70%] h-3 rounded mb-3"></div>
            <div className="skeleton-text bg-gray-400 delay-300 w-[20%] h-3 rounded mb-4"></div>
            <div className="skeleton-text bg-gray-400 delay-300 w-[10%] h-3 rounded"></div>
          </div>
          <div className="skeleton-text bg-gray-400 delay-300 w-[20%] h-8 rounded mb-8"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoadingMain;
