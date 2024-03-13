'use client';
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import heroimage from "../../../public/images/merlin_148147761_ffacc318-39d9-4a00-a977-3ee521f049be-superJumbo.jpg"

function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col items-start px-12 py-12 text-white h-[500px] md:h-[793px] max-md:px-5">
      <Image
        src={heroimage}
        alt="Montessori themed background"
        className="object-cover absolute inset-0 size-full"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 opacity-90"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-20 md:mt-48 text-6xl  font-bold  max-md:max-w-full max-md:text-4xl">
        Your Montessori home
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="relative mt-8 md:text-2xl max-md:mt-10 max-md:max-w-full">
          Here to nature young minds, boost their independence, self-motivation, 
          <br></br>
          and learning process for a brighter future, <br></br>
          Discover the elegance of Montessori education with us.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;

// TODO add an arrow to aid in moving to the next section
