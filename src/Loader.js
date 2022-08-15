const Loader = ({text, show}) => {
    return(
        <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "8rem",
              color: "#3f3d56",
            }}
          >
            <p className={`${show ? "none": ""}`} > 
                Loading 
            <svg className=" animate-spin h-5 w-5 absolute inline-block ml-4 border s  ..." viewBox="0 0 24 24">
            </svg> <br></br>
                Ensure sure your location is on.
            </p>

            <p className={`${show ? "": "none"}`}>search item doesn't exist</p>

          </div>
    )
}
export default Loader