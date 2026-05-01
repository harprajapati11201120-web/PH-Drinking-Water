
import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-2xl font-bold text-sky-600">
            PH
          </div>
          <p className="mt-4 text-sm text-slate-500 sm:mt-0">
            © 2024 PH Mineral Water Inc. All rights reserved.
          </p>
          <div className="flex -mx-2 mt-4 sm:mt-0">
            <a href="#" className="mx-2 text-slate-500 hover:text-sky-500 transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="mx-2 text-slate-500 hover:text-sky-500 transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="mx-2 text-slate-500 hover:text-sky-500 transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
