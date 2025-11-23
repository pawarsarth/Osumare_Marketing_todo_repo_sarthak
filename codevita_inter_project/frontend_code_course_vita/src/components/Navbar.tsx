import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth() as any;
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">WasteTrack</Link>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-700">Dashboard</Link>
            {user ? (
              <>
                <Link to="/restaurants" className="text-gray-700">Restaurants</Link>
                <Link to="/drivers" className="text-gray-700">Drivers</Link>
                <Link to="/vehicles" className="text-gray-700">Vehicles</Link>
                <Link to="/routes" className="text-gray-700">Routes</Link>
                <Link to="/waste" className="text-gray-700">Waste</Link>
                <button onClick={logout} className="ml-2 bg-red-500 text-white px-3 py-1 rounded">Logout</button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
