import "./Home.css";
import location from "./location.svg";
const Home = () => {
  return (
    <div className="Home md:h-screen">
      <nav className="  p-7 flex justify-between items-center">
        <div className="logo cursor-pointer md:ml-7 font-bold text-3xl md:text-4xl ">
          Chopify
        </div>
        <div className="hidden md:flex space-x-12 text-white ml-40 font-medium  mr-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </div>
        <div className="md:hidden">
          <div className="line"></div >
          <div className="line"></div >
          <div className="line"></div >
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row md:h-4/5 p-7">
        <div className="md:pl-7 md:w-4/6 sm:w-6/6 mb-19 sm:flex flex-col items-start justify-center ">
          <h1 className="  font-bold  text-2xl md:text-5xl flex-col-reverse pt-6 md:pt-0 ">
            Find all the resturants <br /> that are around you. <br  />
            {/* The Path To Find The Epitome <br className="hidden md:flex" /> Of
            Great Taste */}
          </h1>
          <span className=" pb-4 text-lg">Discover all local resturants in your area  <br className="hidden md:flex" /> depending on your specific location.</span>

          <a href={"/ViewResturants"}>
            <button className="rounded py-1 px-3 md:py-2  md:text-xl  flex items-center text-white md:px-7">
              Checkout{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className=" md:w-3/6 md:mt-7 ">
          <img width="90%" className="" src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
