export default function Navbar() {
  return (
  <nav className="relative px-12 py-6 text-white bg-black">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-700 via-black to-black opacity-90" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://png.pngtree.com/element_our/sm/20180516/sm_5afc76eed0142.jpg"
            alt="Homyz Logo"
            className="h-10"
          />
          <span className="text-2xl font-bold">
            Home<span className="text-blue-500">.</span>
          </span>
        </div>

  {/* Links */}
  <ul className="flex items-center gap-12 ml-auto mr-8 text-lg font-semibold">
    <li
        onClick={() =>
            document.getElementById("residencies").scrollIntoView({
                behavior: "smooth",
            })
        }
        className="text-lg font-semibold cursor-pointer hover:text-blue-400">
        Residencies
    </li>
    <li
        onClick={() =>
            document.getElementById("value").scrollIntoView({
                behavior: "smooth",
            })
        }
        className="text-lg font-semibold cursor-pointer hover:text-blue-400"
>
        Our Value
    </li>
    <li
        onClick={() =>
            document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
            })
        }
        className="text-lg font-semibold cursor-pointer hover:text-blue-400">
        Contact Us
    </li>
        <li
        onClick={() =>
            document.getElementById("cta").scrollIntoView({
                behavior: "smooth",
            })
        }
        className="text-lg font-semibold cursor-pointer hover:text-blue-400">
        Get Started
    </li>

  </ul>
  <a
    href="#contact"
      className="px-6 py-2 text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-700"
  >
    Contact
  </a>
</div>
</nav>

  );
}
