import React, {useEffect, useState} from "react"
import axios from "axios";

const MapView = () => {

    const [latitude, setLatitude] = useState("")
    const [longtitude, setLongtitude] = useState("")
    const [Mapdata,setMapData] = useState({
        placeName: "",
        distance: "",
        Address: "",
        image:"",
    })
   


    const options = {
    method: 'GET',
    url: 'https://api.foursquare.com/v3/places/search',
    params: {
        ll:  `${latitude},${longtitude}`,
        radius: '10000',
        categories: '13065',
        sort: 'DISTANCE',
        limit: '1'
    },
    headers: {
        Accept: 'application/json',
        Authorization: 'fsq3ougG8DhN7W7mevzyZX8RO3wAjKMpw5fAGCmJD2IoTjA='
    }
    };

    useEffect(()=> {

        navigator.geolocation.getCurrentPosition(async (position)=> {
            setLatitude(position.coords.latitude)
            setLongtitude(position.coords.longitude)
        })
   
        axios.request(options)
        .then(function (res) {
            console.log(res.data.results)
            // setMapData({
            //     placeName: "",
            //     distance: "",
            //     Address: "",
            //     image:"",
            // });
          }).catch(function (error) {
            console.error(error);
          });
    },[])

 return(
        <div className="MapView">
            <div id = "map">
                <div>{Mapdata.placeName}</div>
                <div>{Mapdata.distance}</div>
                <div>{Mapdata.Address}</div>
                <img src={Mapdata.image}></img>
            </div>
        </div>
    )
}
export default MapView