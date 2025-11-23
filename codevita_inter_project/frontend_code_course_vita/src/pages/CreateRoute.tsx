import { useState } from "react";
import { createRoute } from "../api/routes.api";
import { useNavigate } from "react-router-dom";

export default function CreateRoute() {
  const [form, setForm] = useState({ date: "", driver_id: "", vehicle_id: "" });
  const navigate = useNavigate();
  const submit = async () => {
    const payload = { ...form, date: form.date || new Date().toISOString() };
    await createRoute(payload);
    navigate("/routes");
  };
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Route</h2>
      <input value={form.date} onChange={e=>setForm({...form,date:e.target.value})} placeholder="YYYY-MM-DD" className="w-full border p-2 mb-2 rounded"/>
      <input value={form.driver_id} onChange={e=>setForm({...form,driver_id:e.target.value})} placeholder="Driver ID" className="w-full border p-2 mb-2 rounded"/>
      <input value={form.vehicle_id} onChange={e=>setForm({...form,vehicle_id:e.target.value})} placeholder="Vehicle ID" className="w-full border p-2 mb-2 rounded"/>
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
    </div>
  );
}
