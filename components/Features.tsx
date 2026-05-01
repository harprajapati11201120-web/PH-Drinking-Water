
import React from 'react';
import { MountainIcon, DropletIcon, LeafIcon } from './Icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);


const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            The Essence of Purity
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Every drop of PH water is a testament to nature's perfection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<MountainIcon />}
            title="Pristine Mountain Source"
            description="Naturally filtered through volcanic rock, our water is sourced from protected underground springs, ensuring it's free from pollutants."
          />
          <FeatureCard
            icon={<DropletIcon />}
            title="Perfectly Balanced Minerals"
            description="Enriched with essential minerals like calcium and magnesium, PH water offers a distinctively smooth taste and optimal hydration."
          />
          <FeatureCard
            icon={<LeafIcon />}
            title="Naturally Alkaline"
            description="With a natural pH level of 7.8+, our water helps balance your body's acidity, promoting better overall health and wellness."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
