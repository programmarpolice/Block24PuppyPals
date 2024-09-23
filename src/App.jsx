import { puppyList } from "./data.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      {featPupId && (
        <div className="header">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li> Age: {featuredPup.age}</li>
            <li> Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App;
