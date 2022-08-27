import {useState, useEffect} from "react"
import { Route, Routes,  } from "react-router-dom";
import "./App.css";
import ViewResturants from "./ViewResturants";
import Home from "./Home";
import Details from "./Details";


function App() {
  
  const [appData, setAppData] =  useState({
    pictures:[],
    data: [],
    lat: "",
    long: "",
    input:""
  })


  useEffect(()=> {

    const showPosition = (position) => {
      setAppData((prev)=> {
        return {...prev, 
          lat: `${position.coords.latitude}`,
          long: `${position.coords.longitude}`
        }
      })
    }
    
    const showError = (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("please turn on device location")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
        default:
          alert("default value")
      }
    }
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  },[])


  useEffect(()=> {
      async function fetchData() {
        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: 'fsq3gq8f3w+ZSaK/ihwuv1UI9+gJMEQJsq1jYVuM4AkiI04='
          }
        };
        
        let res = await fetch(`https://api.foursquare.com/v3/places/search?ll=${appData.lat}%2C${appData.long}&radius=100000&categories=13065&fields=timezone%2Ccategories%2Cfsq_id%2Cname%2Clocation%2Ctastes%2Cmenu%2Cprice%2Crating%2Chours%2Cdescription%2Cchains%2Cfeatures%2Csocial_media&limit=50`,options)
        let data = await res.json()
        Promise.all(data.results.map( async place => {
          const res = await fetch(`https://api.foursquare.com/v3/places/${place.fsq_id}/photos?limit=40&sort=NEWEST&classifications=food%2Coutdoor%2Cmenu%2Cindoor`, options);
          return await res.json();
        }))    
        .then(images => setAppData(prevState => {
          return {
            ...prevState,
            data:data.results,
            pictures: images  
          }
        })
        )
      }
    fetchData()

  },[appData.long])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ViewResturants"  element={<ViewResturants appData={appData} setAppData={setAppData}/>} />
        <Route path="/:id" element={<Details appData={appData} />} />
      </Routes>
    </div>
  );
}

export default App;
