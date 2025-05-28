import React from 'react'
import Link from 'next/link';
import Logo from '../Logo/Logo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Header = () => {
  const links = [
    { href: '#', label: 'Bosh sahifa' },
    { href: '#', label: 'Biz haqimizda' },
    { href: '#', label: 'Xizmatlar' },
    { href: '#', label: 'Yangiliklar' },
    { href: '#', label: 'Rahbariyat' },
    { href: '#', label: 'Aloqa' },
  ]

  return (
    <header className="flex justify-between items-center p-2 shadow-md bg-white sticky top-0 z-50">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#183B4E]"><Logo /></div>
        <nav className="space-x-12 hidden md:flex">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-gray-700 hover:text-[#DDA853] hover: transition duration-300 font-semibold">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <LocalPhoneIcon className="text-[#183B4E]" />
          <span className="text-[#DDA853] font-bold">+998 91 644 24 42</span>
        </div>
      </div>
    </header>
  )
}

export default Header