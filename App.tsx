
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
