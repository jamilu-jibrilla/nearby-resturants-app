import { useEffect, useState } from "react"
import axios from "axios"
import "./ViewResturants.css"
const ViewResturants = ()=> {
    const [data, setData] = useState()
    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    console.log(data)
    const updateData=()=> {
        if(lat && long) {
        console.log(lat, long)
        const options = {
          method: 'GET',
          url: 'https://api.foursquare.com/v3/places/search',
          params: {
              ll: `${lat},${long}`,
              categories: '13065',
              sort: 'DISTANCE',
              limit: '10'
          },
          headers: {
              Accept: 'application/json',
              Authorization: 'fsq3ZTIrxgFWdcx1KJoBHbrWXC1QzLWY3G6Ds7BywNYTEDw='
          }
          };
        axios.request(options)
        .then(function (res) {
            let data = res.data.results
            setData(data)
            
        }).catch(function (error) {
            console.error(error);
        });
        
      }
    }

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition( (position)=> {
        setLat(`${position.coords.latitude}`)
        setLong(`${position.coords.longitude}`)
    })
        updateData()
    },[long,lat])


    return (
        <div className="ViewResturants">
            <div className="heading side-nav">
                <h2>All resturants</h2>
                <p>sort by: </p>
                mile radius: <input step={100} type={"number"} /> <br/> 
                <button onClick={updateData}>search</button>
            </div>
            <div className="main">
                ...loading
            </div>
        </div>
    )
}
export default ViewResturants