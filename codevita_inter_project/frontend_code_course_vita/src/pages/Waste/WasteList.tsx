import { useEffect, useState } from "react";
import { listWaste } from "../../api/waste.api";

export default function WasteList() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(()=>{ fetchList() },[]);
  const fetchList = async ()=> {
    const res = await listWaste();
    setItems(res.data || res.data?.data || []);
  };
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Recent Waste Pickups</h2>
      <div className="space-y-3">
        {items.length===0 && <div className="p-3 bg-yellow-50 rounded">No records</div>}
        {items.map(w => (
          <div key={w._id} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{w.restaurant_id?.name || w.restaurant_id}</div>
              <div className="text-sm text-gray-600">Weight: {w.measurements?.weight_kg ?? w.weight} kg</div>
              <div className="text-sm text-gray-600">Scheduled: {new Date(w.scheduled_at || w.date || w.picked_at || Date.now()).toLocaleString()}</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm ${w.status === "collected" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{w.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
