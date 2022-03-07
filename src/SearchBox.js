const SearchBox = () => {
    const inputStyle ={
        borderRadius: "10px",
        height:"70px",
        width: "500px",
        transition: "width 0.4s ease-in-out",
    }
    return (
        <div classname="SearchBox">
            <input style={inputStyle} type="search" /> 
        </div>
    )
}
export default SearchBox