import { motion } from "framer-motion";
import { weddingData } from "../../data/weddingData";

export default function Blessing() {
  return (
    <section className="min-h-screen bg-[#FFF9F1] flex items-center justify-center px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl w-full border border-[#C89B3C] rounded-3xl bg-white/80 backdrop-blur-sm p-8 sm:p-12 md:p-16 shadow-2xl text-center"
      >
        {/* Om */}
        <div className="text-5xl sm:text-6xl md:text-7xl mb-5">
          🕉
        </div>

        {/* Sanskrit */}
        <div
          style={{ fontFamily: "Cinzel" }}
          className="text-[#9A6B00] text-xs sm:text-sm md:text-base tracking-[3px] sm:tracking-[5px] uppercase"
        >
          Sriastu │ Shubhamastu │ Avighnamastu
        </div>

        {/* Title */}
        <h1
          style={{ fontFamily: "Great Vibes" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#9A6B00] mt-6 sm:mt-8"
        >
          Wedding Invitation
        </h1>

        {/* Divider */}
        <div className="w-24 sm:w-32 md:w-40 h-[2px] bg-[#C89B3C] mx-auto my-6 sm:my-8" />

        {/* Blessing */}
        <p
          style={{ fontFamily: "Cormorant Garamond" }}
          className="text-lg sm:text-2xl md:text-3xl text-gray-700 leading-relaxed"
        >
          With the divine blessings of
        </p>

        <h2
          style={{ fontFamily: "Cinzel" }}
          className="text-2xl sm:text-3xl md:text-4xl text-[#7A5200] mt-4 leading-snug"
        >
          {weddingData.blessings.elder}
        </h2>
      </motion.div>
    </section>
  );
}