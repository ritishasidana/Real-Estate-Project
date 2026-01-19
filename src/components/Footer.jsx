export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-10 text-gray-500">
      
      {/* Footer Logo + Text */}
      <div>
        <div className="flex items-center gap-1">
          <img
            src="https://png.pngtree.com/element_our/sm/20180516/sm_5afc76eed0142.jpg"
            alt="Homyz Logo"
            className="h-10"
          />
          <span className="text-2xl font-bold text-gray-800">
            Home<span className="text-blue-500">.</span>
          </span>
        </div>

        <p className="mt-1 text-lg">
          Making the best place to live.
        </p>
      </div>

      {/* Footer Links */}
    <div className="flex gap-10 text-lg font-semibold text-gray-600">
        <span className="cursor-pointer hover:text-blue-500">
            Property
        </span>
        <span className="cursor-pointer hover:text-blue-500">
            Services
        </span>
        <span className="cursor-pointer hover:text-blue-500">
            Product
        </span>
        <span className="cursor-pointer hover:text-blue-500">
            About Us
        </span>
    </div>

    </footer>
  );
}

