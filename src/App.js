import './App.css';
import Map from './Map';
import Home from './Home';
import SearchBox from './SearchBox';

function App() {
  return (
    <div className="App">
      <header>
       <SearchBox />
      </header> 
      <Home />
      {/* <Map /> */}
    </div>
  );
}

export default App;
