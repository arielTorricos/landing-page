interface FooterLinksProps {
  title: string;
  links: string[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <button className="text-gray-400 hover:text-white transition-colors">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}