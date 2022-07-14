import "./ViewResturants.css";
import Card from "./Card";
import Loader from "./Loader";

const ViewResturants = ({appData, setAppData}) => {

  const filterByName = (e) => {
    setAppData({
      ...appData,
      input:e.target.value
    })
  } 

  
  const toggleButton = () => {
    let length = document.documentElement.scrollTop
    let scrollBtn = document.querySelector(".scroll")
    if(length > 300) {
      scrollBtn.style.display = "inline-block"
    }  else {
      scrollBtn.style.display = ""
    }
  }

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  window.addEventListener("scroll", toggleButton)

  
  let images = []

  let filteredData =  appData.data.filter((item, index) => {
    if(item.name.toLowerCase().includes(appData.input.toLowerCase())) {
       images.push(appData.pictures[index])
       return item 
    }
  })
  return (
    <div className="ViewResturants">
     
      <div className="heading flex items-center justify-center">
        <div className="relative flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-6 searchbtn absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input onChange={filterByName} type="text" placeholder="Search resturants..." className="relative"/>
        </div>
      </div>

      <div className="main flex justify-center flex-wrap">
        {appData.data.length > 0 ? (
          filteredData.length > 0 ? (
          filteredData.map((place, index) => (
           <Card place={place} images={images} index={index} />
          )) ) : <Loader show={true}/>
        ) : <Loader/>
        }
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="scroll  p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out hidden bottom-8 right-7 fixed"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-4 h-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
    </button>
    </div>
  );
};
export default ViewResturants;
