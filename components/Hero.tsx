
import React from 'react';

const Hero: React.FC = () => {
    const scrollToOrder = () => {
        document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="relative text-center py-24 md:py-40 px-6 bg-gradient-to-br from-sky-100 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative container mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Experience Pure Hydration.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Sourced from pristine springs, PH delivers unparalleled purity and a crisp, refreshing taste that revitalizes your body and mind.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                    onClick={scrollToOrder}
                    className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                    Order Now
                </button>
                 <button 
                    onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-all duration-300 ease-in-out transform hover:scale-105 ring-1 ring-inset ring-slate-300 w-full sm:w-auto"
                >
                    Learn More
                </button>
            </div>
        </div>
    </section>
  );
};

export default Hero;
