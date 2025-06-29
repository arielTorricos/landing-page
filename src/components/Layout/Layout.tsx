import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}