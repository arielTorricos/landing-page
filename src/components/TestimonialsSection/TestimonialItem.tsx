import { Quote } from 'lucide-react';

interface TestimonialItemProps {
  name: string;
  role: string;
  comment: string;
  image: string;
}

export default function TestimonialItem({ name, role, comment, image }: TestimonialItemProps) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 group backdrop-blur-sm shadow-sm dark:shadow-none">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-400 group-hover:scale-110 transition-transform duration-300">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-secondary-500 p-1.5 rounded-full">
            <Quote size={12} className="text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
          <p className="text-sm text-primary-600 dark:text-primary-300">{role}</p>
        </div>

        <p className="text-slate-600 dark:text-gray-300 italic">"{comment}"</p>
      </div>
    </div>
  );
}
