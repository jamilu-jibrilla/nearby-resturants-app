import "./SearchBox.css"
const SearchBox = () => {
    return (
        <div className="SearchBox">
            <span>Resturant Locator Map</span>
            <input placeholder=" search..." type="search" /> 
            <a href={"/ViewResturants"}>View All</a>
        </div>
    )
}
export default SearchBox