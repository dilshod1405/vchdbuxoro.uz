'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import {
  HiOutlineNewspaper,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiArrowRight,
} from "react-icons/hi";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Sana formatlash
const formatDate = (isoString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(isoString).toLocaleDateString(undefined, options);
};

// Sahifalar massivini olish funksiyasi (1 … (current–2) (current–1) [current] (current+1) (current+2) … total)
const getPageNumbers = (current, total) => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l > 2) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const totalPages = Math.ceil(count / pageSize);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/content/information/?page=${page}&ordering=-created_at`
      )
      .then((res) => {
        const data = res.data;
        if (data.results) {
          setNews(data.results);
          setCount(data.count);
          setPageSize(data.results.length || 1);
        } else {
          setNews(data);
          setCount(data.length);
          setPageSize(1);
        }
      })
      .catch((err) => console.error("News API error:", err));
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 sm:px-12 lg:px-28 font-sans">
      <h1 className="text-5xl font-bold mb-16 text-center text-[#DDA853]">
        Yangiliklar
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {news.map(({ id, title, content, photo, created_at, updated_at }) => (
          <motion.article
            key={id}
            variants={item}
            className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Rasm qismi */}
            <div className="relative h-72 rounded-t-xl overflow-hidden border-b border-gray-200 group">
              <img
                src={photo}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl flex items-end p-4">
                <h3 className="text-white text-2xl font-semibold drop-shadow-md">
                  {title}
                </h3>
              </div>
            </div>

            {/* Kontent va metadata */}
            <div className="p-6 flex flex-col flex-grow space-y-3">
              <div className="flex items-center text-[#0F2938] font-semibold text-lg space-x-2">
                <HiOutlineNewspaper size={22} />
                <h2 className="line-clamp-2" title={title}>
                  {title}
                </h2>
              </div>

              <div className="flex items-start text-gray-700 text-sm space-x-2">
                <HiOutlineDocumentText size={18} className="mt-1 flex-shrink-0" />
                <p className="line-clamp-4">
                  {content.length > 100 ? content.slice(0, 100) + "..." : content}
                </p>
              </div>

              <div className="flex items-center text-gray-500 text-xs space-x-4 mt-auto pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-1">
                  <HiOutlineCalendar size={16} />
                  <span title={`Yaratilgan sana: ${formatDate(created_at)}`}>
                    Yaratilgan: {formatDate(created_at)}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <HiOutlineCalendar size={16} />
                  <span title={`Yangilangan sana: ${formatDate(updated_at)}`}>
                    Yangilangan: {formatDate(updated_at)}
                  </span>
                </div>
              </div>

              <Link href={`/news/${id}`} passHref>
                <p className="self-start inline-flex items-center px-5 py-2 bg-[#0F2938] text-white font-semibold rounded-lg hover:bg-[#DDA853] hover:text-[#0F2938] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0F2938] cursor-pointer">
                  Batafsil ko‘rish
                  <HiArrowRight className="ml-2" size={20} />
                </p>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-12 flex-wrap">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded"
          >
            Oldingi
          </button>

          {getPageNumbers(page, totalPages).map((num, idx) => (
            <button
              key={idx}
              onClick={() => typeof num === "number" && setPage(num)}
              className={`px-4 py-2 rounded ${
                num === page
                  ? "bg-[#DDA853] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } ${typeof num !== "number" && "cursor-default"}`}
              disabled={typeof num !== "number"}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded"
          >
            Keyingi
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsList;
