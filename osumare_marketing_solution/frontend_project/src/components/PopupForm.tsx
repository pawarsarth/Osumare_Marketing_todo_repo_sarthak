import { useState } from "react";

export default function PopupForm({ close }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => close(), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96 relative">

        <button
          onClick={close}
          className="absolute top-2 right-3 text-xl font-semibold"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 className="text-xl font-bold mb-4">Get Started</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border rounded"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="text"
                placeholder="Phone Number"
                required
                className="w-full p-3 border rounded"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <button className="w-full bg-pink-600 text-white py-3 rounded-lg">
                Submit
              </button>
            </form>
          </>
        ) : (
          <h2 className="text-xl font-bold text-center text-green-600">
            Thank you! We’ll get back to you soon.
          </h2>
        )}
      </div>
    </div>
  );
}
