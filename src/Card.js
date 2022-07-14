const Card = ({place, images, index}) => {
    return (
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
    )
}

export default Card