export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto max-w-[1536px] px-6 flex items-center justify-between h-16">
        
        {/* Left */}
        <div className="flex items-center gap-8">
          <div className="bg-red-500 w-35 h-12 rounded"></div>

          <ul className="hidden md:flex gap-12 text-xl font-normal tracking-wider">
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for Birthday puja"
            className="hidden sm:block px-4 py-1.5 text-sm rounded-full border outline-none"
          />

          <button className="bg-red-500 text-white px-4 py-1.5 rounded-full text-sm">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  );
}
