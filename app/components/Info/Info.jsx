'use client';

import Counter from '@/utils/Counter';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Train, BadgeCheck } from 'lucide-react'; // Iconlar

const Info = () => {
  const stats = [
    {
      label: "Xodimlar soni",
      value: 850,
      icon: <Users size={56} className="text-[#DDA853]" />,
    },
    {
      label: "Ta'mirlangan vagonlar (1 yilda)",
      value: 1500,
      icon: <Train size={56} className="text-[#DDA853]" />,
    },
    {
      label: "Tajriba (yil)",
      value: 15,
      icon: <BadgeCheck size={56} className="text-[#DDA853]" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="bg-[#183B4E] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#DDA853]/60 to-[#DDA853]/5 hover:shadow-[0_0_40px_#4AD9D980] transition-shadow duration-500"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-[#183B4E] rounded-2xl p-10 h-full text-center transition-all duration-300">
              <div className="flex justify-center items-center mb-4">
                {stat.icon}
              </div>
              <Counter target={stat.value} />
              <p className="mt-3 text-lg font-medium text-white opacity-90">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Info;
