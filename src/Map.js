import {useState,useRef,useEffect } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const Map = () => {

    const mapElement = useRef()
    const [mapLatitude, setMapLatitude] = useState(9.2795);
    const [mapLongtitude, setMapLongtitude] = useState(12.4582);
    const [map, setMap] = useState({});
    const [mapLoaded, setMapLoaded] = useState(false)

  function addMarker() {
    //   if(mapLoaded) {
    //     var marker = new tt.Marker({
    //     color: ,
    //   }).setLngLat[mapLongtitude, mapLatitude].addTo(map)
    // }
    var markerElement = document.createElement("div")
    markerElement.className = "marker"
    markerElement.style.backgroundColor = "#ABABAB"
    markerElement.style.width = '10px'
    markerElement.style.height = '10px'
     var marker = new tt.Marker({element: markerElement, anchor: 'center',}).setLngLat([mapLongtitude, mapLatitude]).addTo(map)
    return marker
  }
    useEffect(() => {  
        var map = tt.map({
            key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
            container: mapElement.current,
            center: [mapLongtitude, mapLatitude],
            style: { map:"basic_main"},
            color:"#0A5B6J",
            zoom: 15,
            title: "Basic map"
        })
        setMap(map);
        setMapLoaded(true)
        return () => map.remove();
    },[])
    
    useEffect(()=>{
      if(mapLoaded) {
        addMarker()
      }
    },[mapLoaded])

    
    return (
      <div style={{height: "100vh", width: "100vw"}} ref={mapElement} className="Map">
      </div>
    )
}
export default Map