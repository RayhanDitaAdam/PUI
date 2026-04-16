import React from 'react';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface CardProps {
  type: 'hero' | 'service' | 'feature-flat' | 'about';
  title: string;
  description: string;
  icon?: React.ElementType;
  image?: string;
  badge?: string;
}

const Card: React.FC<CardProps> = ({ type, title, description, icon: Icon, image, badge }) => {
  // 1. Varian Hero / Welcome Card (Node 418-1451)
  if (type === 'hero') {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white shadow-2xl md:p-12">
        <div className="relative z-10 max-w-2xl">
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-blue-400/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              {badge}
            </span>
          )}
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-blue-100">
            {description}
          </p>
          <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition-all hover:bg-blue-50">
            Mulai Sekarang <ArrowRight size={20} />
          </button>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>
    );
  }

  // 2. Varian Service / Feature (Node 418-1452)
  if (type === 'service') {
    return (
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10">
        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            {Icon ? <Icon size={28} /> : <Zap size={28} />}
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
        <button className="mt-8 flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-3">
          Selengkapnya <ArrowRight size={18} />
        </button>
      </div>
    );
  }

  // 3. Varian Why Us / Stats (Node 418-1446)
  if (type === 'feature-flat') {
    return (
      <div className="flex items-start gap-5 p-4 transition-transform hover:scale-105">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-900">{title}</h4>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    );
  }

  // 4. Varian Image Card / About (Node 418-1447)
  if (type === 'about') {
    return (
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <div className="h-64 overflow-hidden md:h-auto">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">{title}</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">{description}</p>
          <div className="space-y-3">
            {['Terdaftar di OJK', 'Proses < 15 Menit', 'Bunga Kompetitif'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Card;
