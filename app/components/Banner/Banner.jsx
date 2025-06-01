'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative text-white text-center py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#183B4E]/20 to-[#183B4E]/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#183B4E]/100 to-[#fff]/10 z-10"></div>
      </div>

      <motion.div
        className="relative z-20 max-w-4xl mx-auto"
        animate={{ transform: 'translateY(0)', opacity: 1 }}
        initial={{ transform: 'translateY(50px)', opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Buxoro vagon deposi
        </h1>
        <p className="text-md sm:text-lg md:text-xl mb-8 leading-relaxed">
          Yo'lovchilar va ularning yuklari o'z manziliga xavfsiz va muammosiz yetib borishi uchun barcha texnik xizmatlarni amalga oshirish bizning mas'uliyatli burchimizdir
        </p>
        <Link href="/about" className="inline-block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#DDA853] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:cursor-pointer text-lg font-semibold"
          >
            <span className='text-[#183B4E]'>Batafsil ma'lumot</span>
          </motion.button>
        </Link>
      </motion.div>
    </section>

  )
}

export default Banner;