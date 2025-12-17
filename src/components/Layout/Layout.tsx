import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 transition-opacity duration-500">
        {/* Dark Mode Background */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Dark Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        </div>

        {/* Light Mode Background */}
        <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-500">
          <img
            src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop"
            alt="Light Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
      </div>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}