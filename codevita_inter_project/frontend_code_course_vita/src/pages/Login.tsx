import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

export default function Login() {
  const { login } = useAuth() as any;
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      // await login(form.email, form.password);
     const res= await axios.post('http://localhost:5000/api/auth/login',{
        email:form.email,
        password:form.password
      })
          localStorage.setItem("token", res.data.token); 
      navigate("/dashboard");
    } catch (error: any) {
      setErr(error?.response?.data?.message || error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="w-full border px-3 py-2 rounded" placeholder="Email" />
        <input value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} className="w-full border px-3 py-2 rounded" placeholder="Password" type="password" />
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
    </div>
  );
}
