import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/restaurants" className="p-4 bg-white rounded shadow">Restaurants</Link>
        <Link to="/drivers" className="p-4 bg-white rounded shadow">Drivers</Link>
        <Link to="/vehicles" className="p-4 bg-white rounded shadow">Vehicles</Link>
        <Link to="/routes" className="p-4 bg-white rounded shadow">Routes</Link>
      </div>
    </div>
  );
}
