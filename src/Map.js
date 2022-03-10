import {useState,useRef,useEffect } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import axios from "axios";


const Map = () => {

  const mapElement = useRef()
  const [mapLatitude, setMapLatitude] = useState(9.2795);
  const [mapLongtitude, setMapLongtitude] = useState(12.4582);
  const [map, setMap] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false)

  const [Mapdata,setMapData] = useState({})

    const addMarker = (l1,l2) => {
      let markerElement = document.createElement("div")
      markerElement.className = "marker"
      markerElement.style.backgroundColor = "red"
      // markerElement.style.backgroundImage = "url()"
      markerElement.style.width = '12px'
      markerElement.style.height = '12px'
      let marker = new tt.Marker({element: markerElement}).setLngLat([l1,l2]).addTo(map)
    }


    useEffect(()=> {
      navigator.geolocation.getCurrentPosition( (position)=> {
          setMapLatitude(position.coords.latitude)
          setMapLongtitude(position.coords.longitude)
      })
      const options = {
      method: 'GET',
      url: 'https://api.foursquare.com/v3/places/search',
      params: {
          ll:  "9.2573,12.4716",
          radius: '50000',
          categories: '13065',
          sort: 'DISTANCE',
          limit: '7'
      },
      headers: {
          Accept: 'application/json',
          Authorization: 'fsq3ougG8DhN7W7mevzyZX8RO3wAjKMpw5fAGCmJD2IoTjA='
      }
      };
      
      axios.request(options)
      .then(function (res) {
          let data = res.data.results
          data.map((place)=> {
            addMarker(place.geocodes.main.longitude,place.geocodes.main.latitude)
              setMapData({
                ...Mapdata,
                  placeName: place.name,
                  Address: place.location.formatted_address,
                  distance: place.distance,
                  image:place.categories[0].icon.prefix,
                  coords: [place.geocodes.main.latitude,place.geocodes.main.longitude],
              });
          })
      }).catch(function (error) {
          console.error(error);
      });
      
  },[mapLoaded,Mapdata])
 


    useEffect(() => {  
    var map = tt.map({
        key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
        container: mapElement.current,
        center: [mapLongtitude, mapLatitude],
        style: { map:"basic_main"},
        color:"#0A5B6J",
        zoom: 9,
        title: "Basic map"
    })
    setMap(map);
    setMapLoaded(true)
    return () => map.remove();
  },[])
    
    return (
      <div style={{height: "100vh", width: "100vw"}} ref={mapElement} className="Map">
      </div>
    )
}
export default Map