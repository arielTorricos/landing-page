import { Link } from 'react-router-dom';
import { navItems } from '../../constants/navigation';


export default function DesktopNav() {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className="text-gray-300 hover:text-white transition-colors duration-300 capitalize font-medium hover:scale-105 transform"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}