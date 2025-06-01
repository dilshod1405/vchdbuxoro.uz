'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const images = [
  '/images/loop1.jpg',
  '/images/loop2.jpg',
  '/images/loop3.jpg',
  '/images/loop4.jpg',
  '/images/loop5.jpg',
  '/images/loop6.jpg',
  '/images/loop7.jpg',
];

const Gallery = () => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40, // katta duration = sekin aylanish
          ease: 'linear',
        },
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className=" py-20 px-6 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#DDA853] mb-10 text-center">Foto lavhalar</h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex w-fit gap-4"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={startAnimation}
        >
          {/* Loop ko'rinishida 2 marta map */}
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-xl overflow-hidden"
              style={{
                width: '240px',
                height: '160px',
              }}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                draggable={false}
                sizes="(max-width: 768px) 80vw, 240px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
