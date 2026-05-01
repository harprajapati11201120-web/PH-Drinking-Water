
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [bottleSize, setBottleSize] = useState('1 Liter');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMobile('');
      setAddress('');
      setBottleSize('1 Liter');
      setQuantity('');
      setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
    }, 1500);
  };

  return (
    <section id="order" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Get PH Delivered to You</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Ready to experience the difference? Fill out the form to get our premium mineral water delivered straight to your door.
              </p>
              
              {isSubmitted ? (
                 <div className="mt-8 p-4 bg-green-100 border border-green-200 text-green-800 rounded-lg">
                    <h3 className="font-bold">Thank you for your order!</h3>
                    <p>Get PH team Connect with you</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                    <div className="mt-1">
                      <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="py-3 px-4 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md bg-white text-gray-900" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-3 px-4 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md bg-white text-gray-900" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <div className="mt-1">
                      <input id="mobile" name="mobile" type="tel" required autoComplete="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className="py-3 px-4 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md bg-white text-gray-900" />
                    </div>
                  </div>
                   <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
                    <div className="mt-1">
                      <textarea id="address" name="address" rows={4} required value={address} onChange={(e) => setAddress(e.target.value)} className="py-3 px-4 block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md bg-white text-gray-900"></textarea>
                    </div>
                  </div>
                  <div>
                     <label htmlFor="bottleSize" className="block text-sm font-medium text-gray-700">Bottle Selection</label>
                      <select id="bottleSize" name="bottleSize" value={bottleSize} onChange={(e) => setBottleSize(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md border text-gray-900 bg-white">
                        <option value="1 Liter">1 Liter</option>
                        <option value="500 ML">500 ML</option>
                        <option value="250 ML">250 ML</option>
                      </select>
                  </div>
                  <div>
                     <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity (cases)</label>
                     <input type="number" id="quantity" name="quantity" min="1" required value={quantity} onChange={(e) => setQuantity(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md border text-gray-900 bg-white" placeholder="Enter quantity" />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" disabled={isLoading} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-slate-400 transition-colors">
                      {isLoading ? 'Placing Order...' : 'Book My Bottle'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="relative aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-none lg:h-full">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://picsum.photos/id/1060/800/1200" alt="PH Water bottle in nature" />
             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
