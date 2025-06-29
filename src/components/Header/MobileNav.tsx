import { Link } from 'react-router-dom';
import { navItems } from '../../constants/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 py-4 px-4 animate-in slide-in-from-top-2">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          onClick={onClose}
          className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors capitalize"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}