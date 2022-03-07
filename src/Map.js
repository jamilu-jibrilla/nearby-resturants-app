import {useState,useRef,useEffect } from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const Map = () => {

    const mapElement = useRef()
    const [mapLatitude, setMapLatitude] = useState(9.2795);
    const [mapLongtitude, setMapLongtitude] = useState(12.4582);
    const [map, setMap] = useState({});
    const [markerText, setMarkerText] = useState('Default Marker');
    const [initialized, setInitialized] = useState(false);
    const color = '#0A5B6J';
    const language = 'en';
    const style =  'basic_main';
    const title =  'Default Map';

  const addMarker = () => {
    const targetCoordinates = [mapLongtitude, mapLatitude];

    const marker = new tt.Marker({
      color: color
    })
      .setLngLat(targetCoordinates)
      .addTo(map);

    var popupOffsets = {
      top: [0, 0],
      bottom: [0, -50],
      left: [25, -35],
      right: [-25, -35],
    };

    var popup = new tt.Popup({
      offset: popupOffsets,
    }).setHTML(markerText);

    marker.setPopup(popup);
    marker.togglePopup();
  };
  
    useEffect(() => {
        
        var map = tt.map({
            key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
            container: mapElement.current,
            center: [mapLongtitude, mapLatitude],
            style: { map:"basic_night"},
            zoom: 14,
        })
        setMap(map);
        setInitialized(true);
        return () => map.remove();
    })
    useEffect(() => {
        if (initialized) {
          addMarker();
        }
    }, [initialized]);
    

    
    return (
        <div style={{height: "100vh", width: "100vw"}} ref={mapElement} className="Map">
        </div>  
    )
}
export default Map