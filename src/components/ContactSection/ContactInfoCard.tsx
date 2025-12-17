import type { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  content: string;
  color: 'purple' | 'pink' | 'blue';
}

export default function ContactInfoCard({ icon, title, content, color }: ContactInfoCardProps) {
  const colorClasses = {
    purple: 'bg-primary-500',
    pink: 'bg-secondary-500',
    blue: 'bg-primary-600',
  };

  return (
    <div className="bg-white/80 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`${colorClasses[color]} p-3 rounded-xl`}>
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
          <p className="text-slate-600 dark:text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
}