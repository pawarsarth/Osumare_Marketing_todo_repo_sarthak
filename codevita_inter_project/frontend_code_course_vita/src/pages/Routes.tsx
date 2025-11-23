import { useEffect, useState } from "react";
import { getRoutes } from "../api/routes.api";

export default function RoutesPage() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(()=>{ fetchList() },[]);
  const fetchList = async ()=> {
    const res = await getRoutes();
    setItems(res.data || res.data?.data || []);
  };
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Routes</h2>
      <div className="bg-white rounded shadow divide-y">{items.map(r => (
        <div key={r._id} className="p-3">{new Date(r.date).toLocaleDateString()} — {r.status}</div>
      ))}</div>
    </div>
  );
}
