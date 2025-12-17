import type { ReactNode } from "react";

interface BenefitItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}