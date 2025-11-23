import { useState } from "react";
import { createRestaurant } from "../api/restaurants.api";
import { useNavigate } from "react-router-dom";

export default function CreateRestaurant() {
  const [form, setForm] = useState({ name: "", address: "" });
  const navigate = useNavigate();
  const submit = async () => {
    await createRestaurant(form);
    navigate("/restaurants");
  };
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Restaurant</h2>
      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-2 mb-2 rounded" placeholder="Name" />
      <input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} className="w-full border p-2 mb-2 rounded" placeholder="Address" />
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
    </div>
  );
}
