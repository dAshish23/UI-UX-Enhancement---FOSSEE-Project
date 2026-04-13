import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Filter, ChevronRight, Calendar, Users, ArrowRight } from "lucide-react";

const WORKSHOPS = [
  {
    id: "python-ds",
    title: "Advanced Python for Data Science",
    category: "Scientific Computing",
    institution: "IIT Bombay",
    desc: "Master matrix operations and complex signal processing using open-source tools for engineering excellence.",
    date: "Oct 24, 2024",
    seats: "12 Seats left",
    img: "https://picsum.photos/seed/python-cat/800/1000",
    active: true
  },
  {
    id: "django-sys",
    title: "Architecting Scalable Systems with Django",
    category: "Fullstack Dev",
    institution: "FOSSEE Labs",
    desc: "A deep dive into REST frameworks, middleware optimization, and database security protocols.",
    date: "Nov 02, 2024",
    seats: "42 Seats left",
    img: "https://picsum.photos/seed/django-cat/800/1000",
    active: false
  },
  {
    id: "latex-pub",
    title: "Journal Publication Layouts in LaTeX",
    category: "Typography",
    institution: "Self-Paced",
    desc: "Technical writing standards for international journals using professional typesetting engines.",
    date: "On-Demand",
    seats: "Certified",
    img: "https://picsum.photos/seed/latex-cat/800/1000",
    active: false
  },
  {
    id: "scilab-eng",
    title: "Scientific Computing with Scilab",
    category: "Engineering",
    institution: "IIT Bombay",
    desc: "Numerical analysis and simulation for mechanical and electrical engineering students.",
    date: "Dec 12, 2024",
    seats: "25 Seats left",
    img: "https://picsum.photos/seed/scilab-cat/800/1000",
    active: true
  }
];

export default function Catalog() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-16 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50 mb-8 block">Academic Catalog</span>
          <h1 className="text-6xl md:text-8xl leading-none mb-12">
            Workshop <br />
            <span className="text-prestige italic opacity-50">Inventory</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30 group-focus-within:opacity-100 transition-opacity" />
              <Input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by technology or expert..."
                className="rounded-none border-foreground/10 bg-transparent pl-12 py-6 text-sm font-light focus:ring-accent/20"
              />
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {["All", "Python", "Scilab", "LaTeX", "R"].map((cat) => (
                <Button 
                  key={cat}
                  variant="ghost" 
                  className={`rounded-none text-[10px] uppercase tracking-widest font-bold px-6 ${cat === "All" ? "bg-foreground text-background" : "opacity-50 hover:opacity-100"}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {WORKSHOPS.map((workshop, i) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/workshop/${workshop.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden mb-8 prestige-card">
                    <img
                      src={workshop.img}
                      alt={workshop.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    {workshop.active && (
                      <div className="absolute top-0 right-0 p-4">
                        <Badge className="bg-accent text-white rounded-none border-none px-3 py-1 text-[9px] uppercase tracking-widest font-bold">Enrollment Open</Badge>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-foreground/90 text-background">
                      <p className="text-xs font-light leading-relaxed mb-4">{workshop.desc}</p>
                      <span className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
                        View Syllabus <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">{workshop.category}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-50">{workshop.institution}</span>
                    </div>
                    <h3 className="text-2xl uppercase tracking-tight leading-none group-hover:text-accent transition-colors">{workshop.title}</h3>
                    
                    <div className="pt-4 border-t border-foreground/5 flex justify-between items-center">
                      <div className="flex items-center gap-2 opacity-50">
                        <Calendar className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-50">
                        <Users className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-widest font-bold">{workshop.seats}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination Rail */}
          <div className="mt-32 pt-12 border-t border-foreground/10 flex justify-between items-center">
            <div className="flex items-center gap-8">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-100">01</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-20">02</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-20">03</span>
            </div>
            <Button variant="ghost" className="text-[10px] uppercase tracking-[0.3em] font-bold group">
              Next Page <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
