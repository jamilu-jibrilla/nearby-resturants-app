import "./Home.css";
import location from "./location.svg";
import ban from "./icons/ban.png"
import business from "./icons/business.png"
import rocket from "./icons/rocket.png"

const Home = () => {
  return (
    <div className="Home">

      <div className="h-screen">
        <nav className="px-7 py-5 flex justify-between items-center shadow-sm mb-7">
          <div className="logo cursor-pointer md:ml-7 font-bold text-3xl md:text-4xl ">
            Chopify
          </div>
          <div className="hidden md:flex space-x-12 text-white ml-40 font-medium  mr-4">
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
        <div className="flex flex-col-reverse md:flex-row md:h-4/5 p-8">
          <div className="md:pl-7 md:w-4/6 sm:w-6/6 mb-19 sm:flex flex-col items-start justify-center ">
            <h1 className="  font-bold  text-2xl md:text-5xl flex-col-reverse pt-6 md:pt-0 ">
              Find all the resturants <br /> that are around you.<br />
            </h1>
            <span className=" pb-4 text-lg">Discover all local resturants in your area  <br className="hidden md:flex" /> depending on your specific location.</span>

            <a href={"/ViewResturants"}>
              <button className="rounded mt-1 py-1 px-3 md:py-2  md:text-xl  flex items-center text-white md:px-7">
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

      <div className="md:h-[80vh] flex flex-col items-center md:flex-row rounded-lg pt-10 md:pt-0 bg-[#E5E5E5]  mt-4  justify-around">
        <div className="card w-[30%]  mb-5 h-[350px] rounded-lg flex flex-col items-center justify-center bg-white">
          <img src={ban} alt="icon" />
          <h2 className="font-bold mt-5">Free</h2>
        </div>

        <div className="card w-[30%] p-7 mb-5 h-[350px] rounded-lg flex flex-col items-center justify-center bg-white">
          <div>
            <img src={business} alt="icon" />
            <h2 className="font-bold mt-3">Time Efficient</h2>
          </div>
          <h2 className="font-bold mt-5 text-center">Get to your destination in a quick and efficient manner </h2>
        </div>

        <div className="card w-[30%] mb-5 h-[350px] p-7 rounded-lg flex flex-col items-center justify-center bg-white">
          <div>
            <img src={rocket} alt="icon" />
            <h2 className="font-bold mt-3">Technological</h2>
          </div>
          <h2 className="font-bold mt-5 text-center">We use modern technology to make it easier to locate places</h2>
        </div>
      </div>

      <footer className="footer p-9 md:p-14  bg-gray-900 text-white md:h-[50vh] flex flex-col md:flex-row justify-between">
        <div className="w-[100%] md:w-2/6 mb-10">
          <h3 className="font-bold text-2xl mb-5">CHOPIFY</h3>
          <h3 className=" text-gray-400">
            is an app that shows you lists of restaurant's around your area depending on your specific location and the details of the restaurants like, their name, brief description, what time they open or close.
          </h3>
        </div>
        <div className="flex justify-between w-[100%] md:w-[50%] flex-col md:flex-row">
          <div className="mr-28 mb-10">
            <h2 className="text-xl mb-4">Community</h2>
            <h4 className="text-gray-400 mb-4">Instagram</h4>
            <h4 className="text-gray-400 mb-4">Twitter</h4>
            <h4 className="text-gray-400 mb-4">Facebook</h4>
            <h4 className="text-gray-400 mb-4">LinkedIn</h4>
          </div>
          <div className="mr-28 mb-10">
          <h2 className="text-xl mb-4">About</h2>
            <h4 className="text-gray-400 mb-4">Team</h4>
            <h4 className="text-gray-400 mb-4">Copyright</h4>
            <h4 className="text-gray-400 mb-4">Privacy policy</h4>
            <h4 className="text-gray-400 mb-4">Terms & conditions</h4>
          </div>
          <div className="mr-10">
          <h2 className="text-xl mb-4">Help</h2>
            <h4 className="text-gray-400 mb-4">Support</h4>
            <h4 className="text-gray-400 mb-4">Contact</h4>
            <h4 className="text-gray-400 mb-4">Account</h4>
            <h4 className="text-gray-400 mb-4">Trouble shooting</h4>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Home;
