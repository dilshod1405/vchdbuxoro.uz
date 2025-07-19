'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/depo3.jpg', alt: 'Xizmat jarayoni' },
  { src: '/images/depo2.jpg', alt: 'Vagon tekshiruv' },
  { src: '/images/depo.jpg', alt: 'Texnik xizmat' },
];

const About = () => {
  return (
    <section className="bg-[#0F2938] text-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-wide">
            <span className="text-[#DDA853]">Buxoro</span> vagon <br />
            <span className="text-[#DDA853]">deposi</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left text-[#F0E7D8]">
            Buxoro vagon deposining asosiy ish vazifasi yuk vagonlarini ta'mirlash va ekspluatatsiya uchastkasida vagonlarga texnik xizmat ko'rsatishdan iborat
          </p>
        </motion.div>

        {/* Overlapping cards responsive */}
        <div className="lg:w-1/2 relative flex flex-col lg:flex-row items-center lg:items-start justify-center h-auto lg:h-[420px] gap-8 lg:gap-0">
          {images.map((img, i) => {
            // Desktop uchun absolute pozitsiyalar
            const baseLeft = i * 40;
            const baseTop = i * 30;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  y: -10,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
                // Mobilda position static, desktopda absolute
                className={`w-full max-w-[480px] rounded-2xl overflow-hidden cursor-pointer bg-[#183B4E] shadow-[0_8px_20px_rgba(0,0,0,0.4)] 
                  lg:absolute`}
                style={{
                  top: `${baseTop}px`,
                  left: `${baseLeft}px`,
                  aspectRatio: '3 / 2',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                  draggable={false}
                  priority
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
