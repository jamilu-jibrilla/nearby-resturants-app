import './App.css';
import Map from './Map';
import SearchBox from './SearchBox';
import { useEffect, useState } from 'react';
import { map } from '@tomtom-international/web-sdk-maps';

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
