export default function Navbar() {
  return (
    <nav className="w-full py-4 shadow bg-white fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-xl font-bold">TodoApp</h1>
        <button className="px-4 py-2 bg-pink-600 text-white rounded-lg">
          Download App
        </button>
      </div>
    </nav>
  );
}
