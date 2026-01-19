import { motion } from "framer-motion";
export default function CTA() {
  return (
    <section id="cta" className="px-10 py-20">
    <section className="py-16 mx-10 my-20 text-center text-white bg-indigo-600 rounded-xl">
      <h2 className="mb-4 text-4xl font-bold">
        Get started with Homyz
      </h2>
      <p className="mb-6 text-indigo-200">
        Subscribe and find your dream residence easily.
      </p>
      <motion.button 
        whileHover={{ scale: 1.05 }} //Runs animation on hover
        whileTap={{ scale: 0.95 }}  //Runs animation on click/tap
        className="px-8 py-3 font-semibold text-white transition border-2 border-white rounded-xl hover:bg-white hover:text-indigo-600">
        Get Started
      </motion.button>
    </section>
    </section>
  );
}
