import {useState, useEffect} from "react"
import { Route, Routes,  } from "react-router-dom";
import "./App.css";
import ViewResturants from "./ViewResturants";
import Home from "./Home";

function App() {
  
  const [appData, setAppData] =  useState({
    pictures:[],
    data: [],
    lat: "",
    long: "",
    input:""
  })


  useEffect(()=> {
    navigator.geolocation.getCurrentPosition( (position) => {
      setAppData({
        ...appData,
        lat: `${position.coords.latitude}`,
        long: `${position.coords.longitude}`
      })
    });
  },[])


  useEffect(()=> {
      async function fetchData() {
        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'fsq3O/V4qgl9Xwc7/J2XjC24IKwNOvbtI89PeWz/7LeD1+g='
          }
        };
        
        let res = await fetch(`https://api.foursquare.com/v3/places/search?ll=${appData.lat}%2C${appData.long}&radius=100000&categories=13065&fields=timezone%2Ccategories%2Cfsq_id%2Cname%2Clocation%2Ctastes%2Cmenu%2Cprice%2Crating%2Chours%2Cdescription%2Cchains%2Cfeatures%2Csocial_media&limit=50`,options)
        let data = await res.json()
        Promise.all(data.results.map( async place => {
          const res = await fetch(`https://api.foursquare.com/v3/places/${place.fsq_id}/photos?limit=40&sort=NEWEST&classifications=food%2Coutdoor%2Cmenu%2Cindoor`, options);
          return await res.json();
        }))    
        .then(images => setAppData({
          ...appData,
          data:data.results,
          pictures: images  
        }))
      }
    fetchData()

  },[appData.long])



  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ViewResturants"  element={<ViewResturants appData={appData} setAppData={setAppData}/>} />
      </Routes>
    </div>
  );
}

export default App;
