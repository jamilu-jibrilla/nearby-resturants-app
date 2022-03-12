import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

import "./App.css";
import ViewResturants from "./ViewResturants";
import Map from "./Map";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/ViewResturants" element={<ViewResturants />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
