import { useEffect, useState } from "react";
import { getVehicles, createVehicle } from "../api/vehicles.api";

export default function Vehicles() {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({ registration_no: "", type: "", capacity_kg: 0 });

  useEffect(()=>{ fetchList() },[]);
  const fetchList = async ()=> {
    const res = await getVehicles();
    setItems(res.data || res.data?.data || []);
  };
  const submit = async ()=> {
    if(!form.registration_no) return;
    await createVehicle(form);
    setForm({ registration_no: "", type: "", capacity_kg: 0 });
    fetchList();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Vehicles</h2>
      <div className="mb-4 flex gap-2">
        <input value={form.registration_no} onChange={e=>setForm({...form,registration_no:e.target.value})} placeholder="Reg No" className="border p-2 rounded"/>
        <input value={form.type} onChange={e=>setForm({...form,type:e.target.value})} placeholder="Type" className="border p-2 rounded"/>
        <input value={form.capacity_kg} onChange={e=>setForm({...form,capacity_kg:parseInt(e.target.value||'0')})} placeholder="Capacity" type="number" className="border p-2 rounded"/>
        <button onClick={submit} className="bg-blue-600 text-white px-3 rounded">Create</button>
      </div>
      <div className="bg-white rounded shadow divide-y">{items.map(v => (
        <div key={v._id} className="p-3">{v.registration_no} — {v.type} — {v.capacity_kg}kg</div>
      ))}</div>
    </div>
  );
}
