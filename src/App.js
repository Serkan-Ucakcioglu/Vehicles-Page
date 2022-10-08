import "./App.css";
import HomePage from "./Views/HomePage";
import { Routes, Route } from "react-router-dom";
import VehiclesDetails from "./Views/VehicleDetails";
import Models from "./Views/Models";
import ModelList from "./Views/ModelList";
import Locations from "./Views/Locations";
import Page404 from "./Components/Page404";
import ModelDetails from "./Views/ModelList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model" element={<Models />} />
        <Route path="/location" element={<Locations />} />
        <Route path="/model/:brand" element={<ModelList />} />
        <Route path="/model/:id" element={<ModelDetails />} />
        <Route path="/vehicles/:id" element={<VehiclesDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
