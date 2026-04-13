import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowUpRight,
  Globe,
  BookOpen,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import WorkshopDetail from "./pages/WorkshopDetail";
import Booking from "./pages/Booking";

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-foreground/5" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
            <span className="text-xl font-serif font-bold">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.2em] leading-none">FOSSEE</span>
            <span className="text-[8px] uppercase tracking-[0.3em] opacity-50">IIT Bombay</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/catalog" className="hover:text-accent transition-colors">Catalog</Link>
          <Link to="/booking" className="hover:text-accent transition-colors">Book Now</Link>
          <Button asChild className="prestige-button bg-foreground text-background hover:bg-accent hover:text-white border-none px-6 py-4">
            <Link to="/catalog">Explore</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background flex flex-col justify-center items-center gap-12">
              <Link to="/" className="text-4xl font-serif italic hover:text-accent transition-colors">Home</Link>
              <Link to="/catalog" className="text-4xl font-serif italic hover:text-accent transition-colors">Catalog</Link>
              <Link to="/booking" className="text-4xl font-serif italic hover:text-accent transition-colors">Book Now</Link>
              <Button asChild className="prestige-button bg-foreground text-background w-full max-w-xs py-8 text-lg">
                <Link to="/catalog">Explore Catalog</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/10 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          <div className="lg:col-span-6 space-y-12">
            <h2 className="text-6xl md:text-8xl leading-none">
              Fostering <br />
              <span className="text-prestige italic opacity-50">Open Source</span>
            </h2>
            <p className="text-lg font-light opacity-60 max-w-md leading-relaxed">
              The FOSSEE project promotes the use of open source software in educational institutions to improve the quality of education and reduce dependency on proprietary software.
            </p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Navigation</span>
              <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/catalog" className="hover:text-accent transition-colors">Catalog</Link></li>
                <li><Link to="/booking" className="hover:text-accent transition-colors">Book Now</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Resources</span>
              <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold">
                <li><a href="#" className="hover:text-accent transition-colors">IIT Bombay</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Spoken Tutorial</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Python FOSSEE</a></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Contact</span>
              <p className="text-xs font-light opacity-60 leading-relaxed">
                FOSSEE Project, <br />
                IIT Bombay, Powai, <br />
                Mumbai - 400076
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center">
              <span className="text-xs font-serif font-bold">F</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">© 2024 FOSSEE IIT Bombay</span>
          </div>
          <div className="flex gap-8">
            <Instagram className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            <Twitter className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            <Linkedin className="w-4 h-4 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/workshop/:id" element={<WorkshopDetail />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
