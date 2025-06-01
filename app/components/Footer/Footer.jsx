'use client';

import React from 'react';
import Image from 'next/image';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0F2938] text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">

        {/* Logo va manzil */}
        <div className="flex flex-col items-start md:items-start space-y-4 max-w-sm">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Buxoro Vagon Deposi" width={48} height={48} />
            <span className="text-2xl font-extrabold text-[#DDA853]">Buxoro Vagon Deposi</span>
          </div>

          {/* Manzil */}
          <address className="not-italic text-sm sm:text-base leading-relaxed">
            Manzil: O'zbekiston, Buxoro viloyati, Kogon shahar, Bog'i-chinor ko'chasi, 5-uy <br />
            Telefon: <a href="tel:+998901234567" className="hover:text-[#DDA853]">+998 91 644 24 42</a>
          </address>
        </div>

        {/* Linklar */}
        <nav className="flex flex-col sm:flex-row gap-8 md:gap-16">
          <ul className="flex flex-col space-y-2">
            <li><a href="#rahbariyat" className="hover:text-[#DDA853] transition-colors">Rahbariyat</a></li>
            <li><a href="#xizmatlar" className="hover:text-[#DDA853] transition-colors">Xizmatlar</a></li>
            <li><a href="#biz-haqimizda" className="hover:text-[#DDA853] transition-colors">Biz haqimizda</a></li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li><a href="#yangiliklar" className="hover:text-[#DDA853] transition-colors">Yangiliklar</a></li>
            <li><a href="#aloqa" className="hover:text-[#DDA853] transition-colors">Aloqa</a></li>
          </ul>
        </nav>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold mb-2">Ijtimoiy tarmoqlarimiz</h3>
          <div className="flex space-x-6 text-[#DDA853] text-2xl">
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-white transition-colors"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://instagram.com/yourinstagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/yourfacebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Pastki qism: mualliflik huquqi */}
      <div className="mt-12 border-t border-[#DDA853]/30 pt-6 text-center text-sm text-[#DDA853]/70">
        &copy; {new Date().getFullYear()} Buxoro Vagon Deposi. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
