import { useEffect, useState } from "react";
import { getDrivers, createDriver } from "../api/drivers.api";

export default function Drivers() {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", license_no: "" });

  useEffect(()=>{ fetchList() },[]);
  const fetchList = async ()=> {
    const res = await getDrivers();
    setItems(res.data || res.data?.data || []);
  };
  const submit = async ()=> {
    if(!form.name) return;
    await createDriver(form);
    setForm({ name: "", phone: "", license_no: "" });
    fetchList();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Drivers</h2>
      <div className="mb-4 flex gap-2">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="border p-2 rounded"/>
        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="border p-2 rounded"/>
        <input value={form.license_no} onChange={e=>setForm({...form,license_no:e.target.value})} placeholder="License" className="border p-2 rounded"/>
        <button onClick={submit} className="bg-blue-600 text-white px-3 rounded">Create</button>
      </div>
      <div className="bg-white rounded shadow divide-y">{items.map(d => (
        <div key={d._id} className="p-3">{d.name} — {d.phone}</div>
      ))}</div>
    </div>
  );
}
