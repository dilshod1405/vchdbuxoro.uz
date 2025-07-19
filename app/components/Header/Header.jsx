'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo/Logo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import { useLang } from '@/utils/LangContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const langRef = useRef(null);
  const { lang, setLang } = useLang();

  const links = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/services', label: 'Xizmatlar' },
    { href: '/news', label: 'Yangiliklar' },
    { href: '/directors', label: 'Rahbariyat' },
    { href: '/contact', label: 'Aloqa' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangChange = (selectedLang) => {
    setLang(selectedLang);
    setLangDropdown(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo - chapda har doim */}
        <Link href="/" className="text-2xl font-bold text-[#183B4E] cursor-pointer flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav & Language - faqat desktop */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex gap-6 lg:gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-semibold text-base hover:text-[#DDA853] transition duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              aria-label="Tilni tanlash"
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f9f4ec] to-[#fff] border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <LanguageIcon className="text-[#183B4E]" />
              <span className="text-sm font-medium text-[#183B4E]">{lang.toUpperCase()}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${langDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langDropdown && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl z-50 animate-fade-in">
                <button
                  onClick={() => handleLangChange('uz')}
                  className={`flex items-center w-full px-4 py-3 gap-3 hover:bg-gray-100 transition cursor-pointer ${
                    lang === 'uz' ? 'bg-[#f9f4ec]' : ''
                  }`}
                >
                  <Image src="/flags/uz.png" alt="UZ" width={20} height={14} />
                  <span className="text-sm font-medium text-gray-800">O‘zbekcha</span>
                </button>
                <button
                  onClick={() => handleLangChange('ru')}
                  className={`flex items-center w-full px-4 py-3 gap-3 hover:bg-gray-100 transition cursor-pointer ${
                    lang === 'ru' ? 'bg-[#f9f4ec]' : ''
                  }`}
                >
                  <Image src="/flags/ru.png" alt="RU" width={20} height={14} />
                  <span className="text-sm font-medium text-gray-800">Русский</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Telefon raqami - faqat desktop o'ng tomonda */}
        <div className="hidden md:flex items-center gap-2 text-[#DDA853] font-semibold cursor-pointer">
          <LocalPhoneIcon className="text-[#183B4E]" />
          +998 91 644 24 42
        </div>

        {/* Mobile hamburger menu - faqat mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Telefon raqami mobile uchun ham ko‘rinadi */}
          <div className="flex items-center gap-2 text-[#DDA853] font-semibold cursor-pointer">
            <LocalPhoneIcon className="text-[#183B4E]" />
            <span className="text-sm">+998 91 644 24 42</span>
          </div>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#183B4E] cursor-pointer"
            aria-label="Menyu"
          >
            {isMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu ichida hamma qolgan elementlar */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 border-t border-gray-200 bg-white">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 font-semibold text-base hover:text-[#DDA853] transition cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile til tanlash */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => handleLangChange('uz')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image src="/flags/uz.png" alt="UZ" width={20} height={14} />
              <span className={`font-semibold ${lang === 'uz' ? 'text-[#DDA853]' : 'text-gray-700'}`}>UZ</span>
            </button>
            <button
              onClick={() => handleLangChange('ru')}
              className="flex items-center gap-2 cursor-pointer" 
            >
              <Image src="/flags/ru.png" alt="RU" width={20} height={14} />
              <span className={`font-semibold ${lang === 'ru' ? 'text-[#DDA853]' : 'text-gray-700'}`}>RU</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
