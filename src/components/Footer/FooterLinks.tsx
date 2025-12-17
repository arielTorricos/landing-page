interface FooterLinksProps {
  title: string;
  links: string[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-slate-900 dark:text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <button className="text-slate-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-white transition-colors">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}