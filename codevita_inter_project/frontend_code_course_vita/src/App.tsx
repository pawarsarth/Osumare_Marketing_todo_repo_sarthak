import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Restaurants from "./pages/Restaurant";
import CreateRestaurant from "./pages/CreateRestaurant";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import RoutesPage from "./pages/Routes";
import CreateRoute from "./pages/CreateRoute";
import WasteList from "./pages/Waste/WasteList";
import ScheduleWaste from "./pages/Waste/ScheduleWaste";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
           
              <Dashboard />
            
          }
        />

        <Route
          path="/restaurants"
          element={
            
              <Restaurants />
           
          }
        />
        <Route
          path="/restaurants/create"
          element={
           
              <CreateRestaurant />
            
          }
        />
        <Route
          path="/drivers"
          element={
         
              <Drivers />
          
          }
        />
        <Route
          path="/vehicles"
          element={
            
              <Vehicles />
            
          }
        />
        <Route
          path="/routes"
          element={
     
              <RoutesPage />
            
          }
        />
        <Route
          path="/routes/create"
          element={
         
              <CreateRoute />
           
          }
        />

        <Route
          path="/waste"
          element={
        
              <WasteList />
         
          }
        />
        <Route
          path="/waste/schedule"
          element={
          
              <ScheduleWaste />
           
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
