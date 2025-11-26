export default function Testimonials() {
  const list = [
    {
      img: "/src/assets/testimonial1.png",
      name: "Aarav",
      review:
        "Using this app made my daily task planning so smooth and stress-free!",
    },
    {
      img: "/src/assets/testimonial2.png",
      name: "Priya",
      review:
        "The best task manager I’ve ever used. Beautiful, fast, and reliable.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {list.map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <div className="flex items-center gap-4">
                <img src={t.img} className="w-16 h-16 rounded-full" />
                <h3 className="font-bold text-lg">{t.name}</h3>
              </div>
              <p className="text-gray-600 mt-4">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
