import "./ViewResturants.css";
const ViewResturants = ({appData, setAppData}) => {


  const filterByName = (e) => {
    setAppData({
      ...appData,
      input:e.target.value
    })
  } 
  
  let images = []

  let filteredData =  appData.data.filter((item, index) => {
    if(item.name.toLowerCase().includes(appData.input.toLowerCase())) {
       images.push(appData.pictures[index])
       return item 
    }
  })
  
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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

  window.addEventListener("scroll", toggleButton)

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
        {filteredData.length > 0 ? (
          filteredData.map((place, index) => (          
            <div key={place.fsq_id} className="card mx-7 my-4  c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div className="relative pb-48 overflow-hidden">
                  <img className="absolute inset-0 h-full w-full object-cover" src={images[index].length < 1 ? "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" : images[index][Math.floor(Math.random() * images[index].length)].prefix+"500x300"+images[index][Math.floor(Math.random() * images[index].length)].suffix} alt="restaurants pic"/>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{place.hours.open_now ? "open now" : "closed now"}</span>
                <h2 className="mt-2 mb-2  font-bold">{place.name}</h2>
                <p className="text-sm">{place.description ?  place.description : 'No description'}.</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold"> {place.hours.display}</span>&nbsp;<span className="font-bold text-xl"></span>&nbsp;<span className="text-sm font-semibold"></span>
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center mb-1">
                  <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{place.categories[0].name}
                </span> 
                <span className="flex items-center">
                  <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> {place.location.formatted_address}
                </span>        
              </div>
              <div className="p-4 flex items-center text-sm text-gray-600">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 fill-current ${place.rating/2 >= 1 ? "text-yellow-500":"text-gray-400"}`}><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 fill-current ${place.rating/2 >= 2 ? "text-yellow-500":"text-gray-400"}`}><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 fill-current ${place.rating/2 >= 3 ? "text-yellow-500":"text-gray-400"}`}><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 fill-current ${place.rating/2 >= 4 ? "text-yellow-500":"text-gray-400"}`}><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 fill-current ${place.rating/2 >= 5 ? "text-yellow-500":"text-gray-400"}`}><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span className="ml-2">{place.rating ? (place.rating/2).toFixed(1): "no rating"}</span></div>
          </div>
          
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "4em",
              color: "#3f3d56",
            }}
          >
            <p> 
                Loading 
            <svg className=" animate-spin h-5 w-5 absolute inline-block ml-4 border s  ..." viewBox="0 0 24 24">
            </svg> <br></br>
                Ensure sure your location is on.
            </p>
          </div>
        )}
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
