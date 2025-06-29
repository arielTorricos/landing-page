import type { ReactNode } from "react";


interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-400">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}