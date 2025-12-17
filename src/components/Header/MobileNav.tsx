import { Link } from 'react-router-dom';
import { navItems } from '../../constants/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4 px-4 animate-in slide-in-from-top-2 border border-slate-200 dark:border-slate-700 shadow-xl">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          onClick={onClose}
          className="block w-full text-left py-3 text-slate-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg px-2 transition-all capitalize"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}