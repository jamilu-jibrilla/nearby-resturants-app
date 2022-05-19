import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ViewResturants.css";
const ViewResturants = ({appData}) => {
  console.log(appData)

  return (
    <div className="ViewResturants">
      <div className="heading flex items-center justify-between p-4 md:pt-8 md:px-32">
        <h2 className="text-2xl text-white">All resturants</h2>

        <a href="/">
          <button className="  text-black  flex items-center  md:px-5 bg-white p-2 ">
            Home
          </button>{" "}
        </a>
      </div>
      <div className="main flex justify-center flex-wrap pt-20 md:pt-28">
        {appData.data ? (
          appData.data.map((place, index) => (
            <div className="card mx-4  w-34 my-12 h-96">
              <div className="card-image" >
                <img width={"200px"} height={"150px"} src={appData.pictures[index].length === 0 ? "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/r/z/p53930-15529157675c8f9d37cfcb7.jpg?tr=tr:n-xlarge" : appData.pictures[index][0].prefix+"500x300"+appData.pictures[index][0].suffix}/> 
              </div>
              <div className="card-text" >
                <h4 className="py-2 px-2 font-medium">{place.name}</h4>
                <h6 className="py-1 px-2 text-sm">{place.location.formatted_address}</h6>
                <div className="flex ratings py-1 px-2">
                <img src="https://img.icons8.com/fluency/48/000000/star.png"/>
                <img src="https://img.icons8.com/fluency/48/000000/star.png"/>
                <img src="https://img.icons8.com/fluency/48/000000/star.png"/>
                <img src="https://img.icons8.com/fluency/48/000000/star.png"/>
                <img src="https://img.icons8.com/fluency/48/000000/star.png"/>
                </div>
                <a className="down" href={"#"}>
            <button className="rounded py-1 px-3 md:py-2  md:text-xl  flex items-center text-white md:px-7">
              view more{" "}
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
