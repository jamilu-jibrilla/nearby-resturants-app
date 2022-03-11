import { useState } from 'react';
import './App.css';
import ViewResturants from './ViewResturants';
import Map from './Map';
import Home from './Home';
function App() {
  const [Mapdata,setMapData] = useState({})
  console.log(Mapdata)
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Map Mapdata={Mapdata} setMapData={setMapData}/> */}
      <ViewResturants />
    </div>
  );
}

export default App;
