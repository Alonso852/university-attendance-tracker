import { GraduationCap } from "lucide-react";
import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold tracking-tight">UniPresence</h1>
              <p className="text-sm text-white/80">Système de Gestion de Présence</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className="text-white/90 hover:text-white transition-colors font-medium"
              activeClassName="text-white border-b-2 border-white pb-1"
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/sessions" 
              className="text-white/90 hover:text-white transition-colors font-medium"
              activeClassName="text-white border-b-2 border-white pb-1"
            >
              Séances
            </NavLink>
            <NavLink 
              to="/qrcode" 
              className="text-white/90 hover:text-white transition-colors font-medium"
              activeClassName="text-white border-b-2 border-white pb-1"
            >
              QR Code
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
