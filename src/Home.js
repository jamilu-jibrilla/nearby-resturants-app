import "./Home.css";
import location from "./location.svg";
const Home = () => {
  return (
    <div className="Home md:h-screen">
      <nav className="  p-7 flex justify-between ">
        <div className="logo cursor-pointer md:ml-7 font-bold md:font-medium text-2xl md:text-4xl ">
          Chopify
        </div>
        <div className="hidden md:flex space-x-8 text-white ml-40 font-medium  mr-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row  md:h-4/5 p-7">
        <div className="pl-7 md:w-3/6 mb-19 sm:flex flex-col items-start justify-center ">
          <h1 className=" text-opacity-5  text-2xl md:text-4xl flex-col-reverse py-3 md:py-5  md:leading-10 font-medium md:mb-3 tracking-wide">
            The Path To Find The Epitome <br className="hidden md:flex" /> Of
            Great Taste
          </h1>
          <a href={"/Map"}>
            <button className="rounded py-1 px-3 md:py-3  md:text-xl  flex items-center text-white md:px-9">
              View Map{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="w-6/6 h-1/6 md:w-3/6 md:mt-7 ">
          <img className="" src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
