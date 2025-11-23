export default function Register() {
return (
<div className="p-6 max-w-md mx-auto">
<h2 className="text-2xl font-bold mb-4">Register</h2>
<input className="border p-2 w-full mb-2" placeholder="Name" />
<input className="border p-2 w-full mb-2" placeholder="Email" />
<input className="border p-2 w-full mb-2" type="password" placeholder="Password" />
<button className="bg-green-600 w-full p-2 text-white">Create Account</button>
</div>
);
}