import { useState } from "react";
import { scheduleWaste } from "../../api/waste.api";

export default function ScheduleWaste() {
  const [scheduled_at, setScheduledAt] = useState("");
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await scheduleWaste({ scheduled_at, weight: Number(weight), note });
      setMsg("Scheduled successfully");
      setScheduledAt("");
      setWeight("");
      setNote("");
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Schedule Pickup</h2>
      {msg && <div className="p-2 mb-3 bg-blue-100 text-blue-800 rounded">{msg}</div>}
      <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
        <input type="datetime-local" value={scheduled_at} onChange={e=>setScheduledAt(e.target.value)} className="w-full border p-2 rounded" required/>
        <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full border p-2 rounded" placeholder="Weight (kg)" required/>
        <textarea value={note} onChange={e=>setNote(e.target.value)} className="w-full border p-2 rounded" placeholder="Note (optional)"/>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Schedule</button>
      </form>
    </div>
  );
}
