import {useState,useRef,useEffect } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const Map = () => {
    const mapElement = useRef()
    
    const [mapLatitude, setMapLatitude] = useState(9.2795);
    const [mapLongtitude, setMapLongtitude] = useState(12.4582);
    const [Map, setMap] = useState({});
     
    useEffect(() => {
        let map = tt.map({
             key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
             container: mapElement.current,
             center: [mapLongtitude, mapLatitude],
             zoom: 10,
            })
             setMap(Map);
             return () => map.remove();
    },[])
    
    
    return(
        <div style={{height: "50vh", width: "50vw"}} ref={mapElement} className="Map">
            hi
        </div>  
    )
}
export default Map