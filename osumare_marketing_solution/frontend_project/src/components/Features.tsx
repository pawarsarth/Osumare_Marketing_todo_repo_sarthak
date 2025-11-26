export default function Features() {
  const data = [
    { title: "Smart Tasking", desc: "Organize tasks easily and quickly." },
    { title: "Cloud Sync", desc: "Access anywhere on any device." },
    { title: "Daily Planner", desc: "Plan your entire day effortlessly." },
    { title: "Reminder Alerts", desc: "Never miss an important task." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Transform Your Productivity
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {data.map((f, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
