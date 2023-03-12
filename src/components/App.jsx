import { useState } from "react";
import CityList from "./CityList";
import AddForm from "./AddForm";
import SortBy from "./SortBy";
import { wishes } from "../constants.js";

function App() {
  const [wishItem, setWish] = useState(wishes);
  const [isVisited, setIsVisited] = useState('all');

  return (
    <div className="App">
      <h1>Travel wish list</h1>
      <AddForm wishItem={wishItem} setWish={setWish} />
      <div className="visit-info">
        <p className="visit-info__status-column">Visited</p>
        <SortBy 
          isVisited={isVisited}
          setIsVisited={setIsVisited}
        />
      </div>
      <CityList isVisited={isVisited} wishItem={wishItem} setWish={setWish} />
    </div>
  );
}

export default App;
