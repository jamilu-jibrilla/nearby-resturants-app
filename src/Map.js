import {useState,useRef,useEffect } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import axios from "axios";
import SearchBox from './SearchBox';

const Map = ({Mapdata, setMapData}) => {

  const mapElement = useRef()
  const [mapLatitude, setMapLatitude] = useState("");
  const [mapLongtitude, setMapLongtitude] = useState("");
  const [map, setMap] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false)


    const addMarker = (l1,l2,markerText) => {
      let markerElement = document.createElement("div")
      markerElement.className = "marker"
      markerElement.style.backgroundImage = `url("https://ascendfood.com/assets/images/marker.png")`
      markerElement.style.backgroundSize ="cover"
      markerElement.style.width = '32px'
      markerElement.style.height = '32px'
      let marker = new tt.Marker({element: markerElement}).setLngLat([l1,l2]).addTo(map)
      let popupOffsets = {
        top: [0, 0],
        bottom: [0, -30],
        left: [25, -35],
        right: [-25, -35],
      };
  
      let popup = new tt.Popup({
        offset: popupOffsets,
      }).setHTML(markerText);
  
      marker.setPopup(popup);
      marker.togglePopup()
    }

    
    
    useEffect(()=> {
      if(mapLoaded) {
        console.log(mapLatitude, mapLongtitude)
        const options = {
          method: 'GET',
          url: 'https://api.foursquare.com/v3/places/search',
          params: {
              ll:  `${mapLatitude},${mapLongtitude}`,
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
            console.log(data)
            data.map((place)=> {
              addMarker(place.geocodes.main.longitude,place.geocodes.main.latitude,place.name)
                setMapData({...Mapdata,
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
        
      }
  },[mapLoaded])

    useEffect(() => { 
      navigator.geolocation.getCurrentPosition( (position)=> {
        setMapLatitude(`${position.coords.latitude}`)
        setMapLongtitude(`${position.coords.longitude}`)
    }) 
    var map = tt.map({
        key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
        container: mapElement.current,
        center: [mapLongtitude, mapLatitude],
        style: { map:"basic_main"},
        color:"#0A5B6J",
        zoom: 13,
        title: "Basic map"
    })
    setMap(map);
    if(mapLatitude && mapLongtitude) {
      setMapLoaded(true)
    }
    return () => map.remove();
  },[mapLatitude, mapLongtitude])
    
    return (
      <div>
        <div className="top-header">
          <SearchBox />
        </div>
        <div style={{height: "85vh", width: "100vw"}} ref={mapElement} className="Map">
        </div>
      </div>
    )
}
export default Map