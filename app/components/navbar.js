'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
      <>
        <div className='relative flex items-center justify-center px-5'>
          <header className={`fixed top-5 w-[90%] z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md rounded-full bg-white/60 dark:bg-black/40 shadow-md'
            : 'bg-transparent'
        }`}>
              <nav className="mx-auto max-w-7xl px-6 py-4 md:py-8 md:px-12 xl:px-12 2xl:px-10">
                  <div className="flex items-center justify-between">
                      <Link href="/" className="text-2xl font-light tracking-widest text-white">UNNAMED</Link>
                      <div className='space-x-5'>
                        <Link href="/categories" className="relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Branded</span>
                        </Link>
                        <Link href="/about" className="relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Rreth Nesh</span>
                        </Link>
                        <Link href={{ pathname: '/', hash: 'contact' }} className="relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                            <span className="relative">Na kontakto</span>
                        </Link>
                      </div>
                  </div>
              </nav>
          </header>
        </div>
      </>
    );
  }
  