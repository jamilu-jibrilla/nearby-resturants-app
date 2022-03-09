import './App.css';
import MapView from './MapView';
import Map from './Map';
import SearchBox from './SearchBox';
function App() {
  return (
    <div className="App">
      <header>
       <SearchBox />
      </header> 
      
      <Map />
    </div>
  );
}

export default App;
