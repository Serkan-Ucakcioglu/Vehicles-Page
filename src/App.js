import "./App.css";
import HomePage from "./Views/HomePage";
import { Routes, Route } from "react-router-dom";
import VehiclesDetails from "./Views/VehicleDetails";
import Models from "./Views/Models";
import ModelLists from "./Views/ModelList";
import Locations from "./Views/Locations";
import Page404 from "./Components/Page404";
import ModelDetails from "./Views/ModelDetails";
import Vehicles from "./Views/Vehicles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index={true} element={<Vehicles />} />
          <Route path="/model" element={<Models />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/model/:brand" element={<ModelLists />} />
          <Route path="/models/:id" element={<ModelDetails />} />
          <Route path="/vehicles/:id" element={<VehiclesDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
