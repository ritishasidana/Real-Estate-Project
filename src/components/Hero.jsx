import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-black to-black opacity-90" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-10 mx-auto text-white py-28 md:flex-row max-w-7xl">
        {/* LEFT */}
        <motion.div
          className="flex-1"
          initial={{ x: -80, opacity: 0 }}  //Starting position (before animation) -> start 80px left , completely invisible
          animate={{ x: 0, opacity: 1 }}    //Final position (after animation) -> move to original place, fully visible
          transition={{ duration: 0.9, ease: "easeOut" }}  //How the animation moves-> animation lasts 0.9 seconds , smooth finish
        >
          <motion.h1
            className="relative text-5xl font-bold leading-tight sm:text-6xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}   //delay:0.2 -> wait 0.2 seconds, then animate
          >
            Discover
            <br />
            Most Suitable <br />
            Property
          </motion.h1>

          <motion.p
            className="max-w-md mt-6 text-gray-300"
            initial={{ y: 20, opacity: 0 }}    //Element starts 20px lower , Moves up smoothly
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}  //delay is increased
          >
            Find a variety of properties that suit you very easily.
            Forget all difficulties in finding a residence for you.
          </motion.p>

          {/* Search bar */}
          <motion.div
            className="flex items-center w-full max-w-md p-2 mt-8 bg-white rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}  //scale controls size -> scale:0.5 means half size (50%) of original
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          > 
            <input
              type="text"
              placeholder="Search location"
              className="flex-1 px-3 text-black outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white bg-blue-600 rounded-md"
            >
              Search
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-10 mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <Stat number="9K+" label="Premium Products" />
            <Stat number="2K+" label="Happy Customers" />
            <Stat number="28+" label="Awards Winning" />
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative flex justify-center flex-1 -translate-x-6"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="w-[440px] h-[540px] rounded-t-full overflow-hidden border-[6px] border-gray-700"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://homyz-in.netlify.app/hero-image.png"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


function Stat({ number, label }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        {number} <span className="text-orange-400">+</span>
      </h2>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
} 
