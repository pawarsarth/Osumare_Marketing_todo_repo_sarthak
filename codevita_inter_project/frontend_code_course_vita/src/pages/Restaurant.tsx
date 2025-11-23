import { useEffect, useState } from "react";
import { getRestaurants } from "../api/restaurants.api";
import { Link } from "react-router-dom";

export default function Restaurants() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(()=>{ fetchList() },[]);
  const fetchList = async ()=> {
    const res = await getRestaurants();
    setItems(res.data || res.data?.data || []);
  };
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Restaurants</h2>
        <Link to="/restaurants/create" className="bg-blue-600 text-white px-3 py-1 rounded">Add</Link>
      </div>
      <div className="bg-white rounded shadow divide-y">{items.map(r => (
        <div key={r._id} className="p-3">{r.name} — {r.address}</div>
      ))}</div>
    </div>
  );
}
