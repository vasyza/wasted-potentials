'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className="w-full bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group"
                aria-label="Elias - Frontend Developer">
            <div
              className="w-8 h-8 bg-white rounded-sm flex items-center justify-center group-hover:bg-blue-400 transition-colors">
              <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-black w-1 h-1 rounded-sm"/>
                ))}
              </div>
            </div>
            <span
              className="ml-2 text-white font-semibold text-lg hidden sm:block">Elias</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"
               role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-400 transition-all focus:text-blue-400 active:scale-95"
              aria-label="Go to home section"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-blue-400 transition-all focus:text-blue-400 active:scale-95"
              aria-label="Go to projects section"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-all focus:text-blue-400 active:scale-95"
              aria-label="Go to contact section"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex items-center space-x-4">
            <button
              className="text-white hover:text-blue-400 transition-all focus:text-blue-400 active:scale-95"
              aria-label="Switch language"
            >
              EN
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-blue-400 transition-all focus:text-blue-400 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800"
               role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-400 transition-all text-left focus:text-blue-400 active:scale-95"
                aria-label="Go to home section"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-blue-400 transition-all text-left focus:text-blue-400 active:scale-95"
                aria-label="Go to projects section"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-400 transition-all text-left focus:text-blue-400 active:scale-95"
                aria-label="Go to contact section"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
