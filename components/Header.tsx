
import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-sky-600 tracking-wider">
          PH
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 font-medium">Home</button>
          <button onClick={() => scrollToSection('benefits')} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 font-medium">Benefits</button>
          <button onClick={() => scrollToSection('order')} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 font-medium">Order Now</button>
        </nav>
        <button
          onClick={() => scrollToSection('order')}
          className="hidden md:block bg-sky-500 text-white font-bold py-2 px-6 rounded-full hover:bg-sky-600 transition-transform duration-300 ease-in-out hover:scale-105 shadow-md"
        >
          Book a Bottle
        </button>
        <div className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
