import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialIcons = [
  { Icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com' },
  { Icon: Twitter, name: 'Twitter', url: 'https://x.com/?lang=es' },
  { Icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com' },
  { Icon: Linkedin, name: 'LinkedIn', url: 'https://bo.linkedin.com' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialIcons.map(({ Icon, name, url }) => (
        <button
          key={name}
          className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-slate-600 dark:text-gray-400 hover:text-white hover:bg-primary-500 dark:hover:bg-primary-500 transition-all duration-300 transform hover:scale-110"
          aria-label={name}
          onClick={() => window.open(url, '_blank')}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
}