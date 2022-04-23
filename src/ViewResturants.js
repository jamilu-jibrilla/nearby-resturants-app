import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ViewResturants.css";
const ViewResturants = () => {
  const [data, setData] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [inputState, setInputState] = useState();

  const inputElement = useRef();

  navigator.geolocation.getCurrentPosition((position) => {
    setLat(`${position.coords.latitude}`);
    setLong(`${position.coords.longitude}`);
  });

  const handleInputChange = () => {
    setInputState(inputElement.current.value);
  };
  useEffect(() => {
    updateData();
  }, [lat, long]);

  const updateData = () => {
    const options = {
      method: "GET",
      url: "https://api.foursquare.com/v3/places/search",
      params: {
        ll: `${lat},${long}`,
        categories: "13065",
        radius: 100000,
        sort: "DISTANCE",
        limit: "20",
      },
      headers: {
        Accept: "application/json",
        Authorization: "fsq3O/V4qgl9Xwc7/J2XjC24IKwNOvbtI89PeWz/7LeD1+g=",
      },
    };
    axios
      .request(options)
      .then(function (res) {
        let data = res.data.results;
        console.log(data);
        setData(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="ViewResturants">
      <div className="heading side-nav">
        <h2>All resturants</h2>

        <a href="/Map">
          {" "}
          <p>view map</p>{" "}
        </a>
      </div>
      <div className="main">
        {data ? (
          data.map((place) => (
            <div className="card">
              <img width={"200px"} height={"150px"} src={""} />
              <div className="card-body">
                <b>Name:</b> {place.name} <br />
                <b> Address:</b> {place.location.formatted_address}
                <br />
                <b>Distance:</b> {place.distance} <br />
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "2em",
            }}
          >
            "loading...."
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewResturants;
