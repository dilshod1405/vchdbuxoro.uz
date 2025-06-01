'use client';

import React, { useState, useRef, useEffect } from 'react'; // useRef va useEffect qo'shildi
import Link from 'next/link';
import Logo from '../Logo/Logo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Menyu elementiga murojaat qilish uchun

  // Links array
  const links = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqimizda' },
    { href: '/services', label: 'Xizmatlar' },
    { href: '/news', label: 'Yangiliklar' },
    { href: '/directors', label: 'Rahbariyat' },
    { href: '/contact', label: 'Aloqa' },
  ];

  // isMenuOpen holati o'zgarganda menyu balandligini o'rnatish uchun useEffect
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        menuRef.current.style.maxHeight = menuRef.current.scrollHeight + 'px';
      } else {
        menuRef.current.style.maxHeight = '0px';
      }
    }
  }, [isMenuOpen]);

  return (
    <header className="flex justify-center items-center p-2 shadow-md bg-white sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
        <div className="text-2xl font-bold text-[#183B4E]">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop navigatsiya */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-[#DDA853] transition duration-300 font-semibold text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Telefon raqami */}
        <div className="flex items-center space-x-2">
          <LocalPhoneIcon className="text-[#183B4E]" />
          <span className="text-[#DDA853] font-bold whitespace-nowrap">+998 91 644 24 42</span>
        </div>

        {/* Mobil menyu tugmasi */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#183B4E] focus:outline-none">
            {isMenuOpen ? (
              <CloseIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil menyu (ochilgan holatda) */}
      <div
        ref={menuRef} // useRef bog'langan
        className={`
          md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-0 overflow-hidden
          transition-max-height duration-500 ease-in-out
          ${isMenuOpen ? 'border-t border-gray-200' : ''}
        `}
        style={{ maxHeight: isMenuOpen ? 'fit-content' : '0px' }}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-[#DDA853] transition duration-300 font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;