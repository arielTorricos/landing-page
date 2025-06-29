import type { ReactNode } from "react";


interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  content: string;
  color: 'purple' | 'pink' | 'blue';
}

export default function ContactInfoCard({ icon, title, content, color }: ContactInfoCardProps) {
  const colorClasses = {
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    blue: 'bg-blue-500',
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`${colorClasses[color]} p-3 rounded-xl`}>
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
}