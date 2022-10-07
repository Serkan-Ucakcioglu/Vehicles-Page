import "./App.css";
import HomePage from "./Views/HomePage";
import { Routes, Route } from "react-router-dom";
import VehiclesDetails from "./Views/VehicleDetails";
import Models from "./Views/Models";
import ModelDetails from "./Views/ModelDetails";
import Locations from "./Views/Locations";
import Page404 from "./Components/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model" element={<Models />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/model/:brand" element={<ModelDetails />} />
        <Route path="/vehicles/:id" element={<VehiclesDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
