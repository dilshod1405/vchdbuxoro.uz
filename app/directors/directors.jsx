'use client';
import React from "react";
import { motion } from "framer-motion";



const directors = [
  {
    id: 1,
    firstName: "Abbasov Akmal Baxronovich",
    lastName: "Ibragimov",
    position: "Rahbar",
    phone: "+998997364240",
    photo: "/images/injener.jpg",
  },
  {
    id: 2,
    firstName: "Ashrapov Jamol",
    lastName: "Jo'rayevich",
    position: "Remont bo'yicha boshliq o'rinbosari",
    phone: "+998946632255, +998987702250",
    photo: "/images/zam.jpg",
  },
  {
    id: 3,
    firstName: "Mavlyanov Farxod",
    lastName: "Abdulloyevich",
    position: "Bosh buxgalter",
    phone: "+998973043715",
    photo: "/images/buxgalter.jpg",
  },
  {
    id: 4,
    firstName: "Gulnoza",
    lastName: "Tursunova",
    position: "Yurist",
    phone: "+998914134732",
    photo: "/images/directors/yurist.jpg",
  },
];


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DirectorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6 sm:px-12 lg:px-24">
      <h1 className="text-5xl font-extrabold mb-16 text-center text-yellow-500 drop-shadow-lg">
        Rahbariyat
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {directors.map(({ id, firstName, lastName, position, phone, photo }) => (
          <motion.div
            key={id}
            variants={item}
            className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl shadow-2xl shadow-yellow-700/30 overflow-hidden cursor-pointer transform transition duration-500 hover:scale-[1.05] hover:shadow-yellow-500/80"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
              <img
                src={photo}
                alt={`${firstName} ${lastName}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
            </div>
            <div className="p-6">
              <h2
                className="text-2xl font-bold mb-1 text-yellow-400 truncate"
                title={`${firstName} ${lastName}`}
              >
                {firstName} {lastName}
              </h2>
              <p className="text-yellow-300 mb-4 font-medium tracking-wide">{position}</p>
              <p className="text-gray-300 text-base select-text">
                Telefon:{" "}
                <a
                  href={`tel:${phone.split(",")[0].trim()}`}
                  className="hover:text-yellow-400 underline transition-colors duration-300"
                  title={phone}
                >
                  {phone}
                </a>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DirectorsPage;



