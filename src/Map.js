import { useState, useRef, useEffect } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import * as ttservice from "@tomtom-international/web-sdk-services";

const Map = ({ mapLatitude, mapLongtitude, res }) => {

  const mapElement = useRef();
  //states
  const [map, setMap] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const [result, setResult] = useState({});

  const addMarker = (l1, l2, markerText) => {
    let markerElement = document.createElement("div");
    markerElement.className = "marker";
    markerElement.style.backgroundImage = `url("https://static.thenounproject.com/png/568419-200.png")`;
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

  const calculateRoute = (startLatitude, startLongitude, destinationLatitude, destinationLongitude) => {
    ttservice.services
      .calculateRoute({
        key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
        locations: `${startLatitude},${startLongitude}:${destinationLatitude},${destinationLongitude}`
      })
      .then(function (routeData) {
        map.setCenter([parseFloat(startLongitude), parseFloat(startLatitude)]);
        map.setZoom(13)
        const data = routeData.toGeoJson();
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let map = tt.map({
      key: "qQMtZMYW4RAyf2frPAyIW1Az1jjBRAYC",
      container: mapElement.current,
      center: [mapLongtitude, mapLatitude],
      style: { map: "basic_night" },
      color: "#0A5B6J",
      zoom: 13,
      title: "Basic map",
    });
    setMap(map);
    if (mapLatitude && mapLongtitude) {
      setTimeout(() => {
        setMapLoaded(true);
      }, 2000);
    }
    
    return () => map.remove();
  }, []);



  useEffect(() => {
    if (mapLoaded) {
      addMarker(mapLongtitude, mapLatitude, "Destination")
      const showPosition = (position) => {
        addMarker(position.coords.longitude, position.coords.latitude, "My location")
        calculateRoute(position.coords.latitude, position.coords.longitude, mapLatitude, mapLongtitude)
      }
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }, [mapLoaded]);


  const resultList = result.features ? (
    <div className="flex flex-col md:flex-row md:text-justify w-[100%] md:pl-[7rem] my-0" key={result.id}>
      <div className="m-5">
        <h4 className='text-3xl  mb-5 font-bold text-[red]'> Description </h4>
        <h4 className="mb-2">
          Reataurant name: {res.name}
        </h4>
        <h4 className="mb-2">
          Address: {res.location.address ? res.location.address : 'no address found'}
        </h4>
        <div >
          <h4 className="mb-2">
            Distance in KiloMeters : {(result.features[0].properties.summary.lengthInMeters / 1000).toFixed(1)}
          </h4>
          <h4>
            Time Estimate for Journey is
            {` ${(result.features[0].properties.summary.travelTimeInSeconds / 60).toFixed(1)} minutes`}
          </h4>
        </div>
      </div>
    </div>
  ) : (
    <>
      <h4 className="ml-[2rem] mt-4 md:ml-[8rem] md:mt-10 text-3xl  mb-5 font-bold text-[red]" >Description</h4>
      <h4 className="ml-[2rem] md:ml-[8rem] mt-2 md:mt-3" >No Description</h4>
    </>
  );

  
  return (
    <>
      <div
        style={{ height: "45vh", width: "100vw" }}
        ref={mapElement}
        className="Map "
      ></div>
      <div>
        {resultList}
      </div>
    </>
  );
};
export default Map;
