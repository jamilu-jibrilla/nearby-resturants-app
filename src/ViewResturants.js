import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ViewResturants.css";
const ViewResturants = ({appData}) => {
  console.log(appData)

  return (
    <div className="ViewResturants">
      <div className="heading side-nav  ">
        <h2 className="text-2xl md:mt-0 md:py:1 mt-4 ">All resturants</h2>

        <a href="/Map">
          <button className="rounded py-1 px-4 md:py-1 my-5 text-black  flex items-center  md:px-5 bg-white ">
            view map
          </button>{" "}
        </a>
      </div>
      <div className="main">
        {appData.data ? (
          appData.data.map((place, index) => (
            <div className="card">
              {console.log(appData.pictures[index].length === 0 ? "empty" : appData.pictures[index][0].suffix)}
              <img width={"200px"} height={"150px"} src={appData.pictures[index].length === 0 ? "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/r/z/p53930-15529157675c8f9d37cfcb7.jpg?tr=tr:n-xlarge" : appData.pictures[index][0].prefix+"700x500"+appData.pictures[index][0].suffix}/>
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
              color: "#3f3d56",
            }}
          >
            Loading....
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewResturants;
