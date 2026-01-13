export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <h1 className="font-bold text-xl text-red-500">MANIMA</h1>

      <ul className="hidden md:flex gap-6 text-sm">
        <li>Services</li>
        <li>About Us</li>
      </ul>

      <div className="flex items-center gap-4">
        <input
          className="border rounded-full px-4 py-1 text-sm"
          placeholder="Search for Birthday puja"
        />
        <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
          Sign In
        </button>
      </div>
    </nav>
  );
}
