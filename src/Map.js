import { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

const Map = ({mapLatitude, mapLongtitude  }) => {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);

  const addMarker = (l1, l2, markerText) => {
    let markerElement = document.createElement("div");
    markerElement.className = "marker";
    markerElement.style.backgroundImage = `url("https://ascendfood.com/assets/images/marker.png")`;
    markerElement.style.backgroundSize = "cover";
    markerElement.style.width = "28px";
    markerElement.style.height = "28px";
    let marker = new tt.Marker({ element: markerElement })
      .setLngLat([l1, l2])
      .addTo(map);
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
    marker.togglePopup();
  };

  useEffect(() => {
    if (mapLoaded) {;
      addMarker(mapLongtitude, mapLatitude, "Destination")
      const showPosition = (position) => {
        addMarker(position.coords.longitude, position.coords.latitude, "My location")
      }
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }, [mapLoaded]);

  useEffect(() => {
    
    let map = tt.map({
      key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
      container: mapElement.current,
      center: [mapLongtitude, mapLatitude],
      style: { map: "basic_main" },
      color: "#0A5B6J",
      zoom: 13,
      title: "Basic map",
    });
    setMap(map);
    if (mapLatitude && mapLongtitude) {
      console.log(mapLatitude, mapLongtitude);
      setTimeout(()=> {
        setMapLoaded(true);

      },5)
    }
    return () => map.remove();
  }, []);

  return (
      <div
        style={{ height: "40vh", width: "100vw" }}
        ref={mapElement}
        className="Map"
      ></div>
  );
};
export default Map;
