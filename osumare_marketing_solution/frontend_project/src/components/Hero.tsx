export default function Hero({ openForm }) {
  return (
    <section className="pt-28 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        <div>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Organize. <br />
            Achieve. <br /> Relax.
          </h1>
          <p className="text-gray-600 mb-6">
            Simplify your life with our modern Todo App.
          </p>

          <button
            onClick={openForm}
            className="px-6 py-3 bg-pink-600 text-white text-lg font-medium rounded-lg"
          >
            Start Organizing
          </button>
        </div>

        <div>
          <img src="/src/assets/hero-image.png" alt="Hero" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
