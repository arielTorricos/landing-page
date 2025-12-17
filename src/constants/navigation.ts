export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Inicio", path: "/" },
  { id: "services", label: "Servicios", path: "/servicios" },
  { id: "benefits", label: "Beneficios", path: "/beneficios" },
  { id: "testimonials", label: "Testimonios", path: "/testimonios" },
  { id: "contact", label: "contacto", path: "/contacto" },
];
