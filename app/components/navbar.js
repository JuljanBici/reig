'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className='relative flex items-center justify-center px-5'>
        <header
          className={`fixed top-5 w-[90%] z-50 transition-all duration-300 ${
            isScrolled
              ? 'backdrop-blur-md rounded-full bg-white/60 dark:bg-black/40 shadow-md'
              : 'bg-transparent'
          }`}
        >
          <nav className='mx-auto max-w-7xl px-6 py-4 md:py-8 md:px-12 xl:px-12 2xl:px-10'>
            <div className='flex items-center justify-between'>
              <Link
                href='/'
                onClick={closeMenu}
                className='text-2xl font-light tracking-widest text-white'
              >
                UNNAMED
              </Link>

              {/* Desktop Nav */}
              <div className='space-x-5 hidden md:block'>
                <Link
                  href='/categories'
                  className='relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10'
                >
                  <span className='relative'>Branded</span>
                </Link>
                <Link
                  href='/about'
                  className='relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10'
                >
                  <span className='relative'>Rreth Nesh</span>
                </Link>
                <Link
                  href={{ pathname: '/', hash: 'contact' }}
                  className='relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10'
                >
                  <span className='relative'>Na kontakto</span>
                </Link>
              </div>

              {/* Hamburger Button */}
              <div className='md:hidden'>
                <button
                  onClick={toggleMenu}
                  className='flex flex-col justify-center items-center w-8 h-8 z-50'
                >
                  <span
                    className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-white my-1 transition duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col justify-center items-center space-y-6 text-2xl text-white md:hidden`}
      >
        <Link href='/categories' onClick={closeMenu}>
          Branded
        </Link>
        <Link href='/about' onClick={closeMenu}>
          Rreth Nesh
        </Link>
        <Link href={{ pathname: '/', hash: 'contact' }} onClick={closeMenu}>
          Na kontakto
        </Link>
      </div>
    </>
  );
}
