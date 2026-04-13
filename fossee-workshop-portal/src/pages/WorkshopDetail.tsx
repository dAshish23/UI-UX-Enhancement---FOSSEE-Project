import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, CheckCircle2, BookOpen, Clock } from "lucide-react";

export default function WorkshopDetail() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-24 border-b border-foreground/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-accent text-white rounded-none border-none px-3 py-1 text-[9px] uppercase tracking-widest font-bold">Data Science</Badge>
              <Badge variant="outline" className="rounded-none border-foreground/20 px-3 py-1 text-[9px] uppercase tracking-widest font-bold opacity-50">Advanced Level</Badge>
            </div>
            <h1 className="text-6xl md:text-8xl leading-[0.9] max-w-4xl">
              Advanced Python <br />
              <span className="text-prestige italic opacity-50">for Data Science</span>
            </h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl">
              A masterclass in high-performance computing, distributed systems, and industrial-grade data engineering using the FOSSEE ecosystem.
            </p>
          </div>
          
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="aspect-[3/4] prestige-card overflow-hidden">
              <img 
                src="https://picsum.photos/seed/detail/800/1000" 
                className="w-full h-full object-cover grayscale opacity-80"
                alt="Workshop"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Narrative */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50">01</span>
                <h2 className="text-4xl uppercase tracking-tight">The Narrative</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
                <p>
                  Delve into the architectural nuances of high-performance computing using Python. This intensive workshop bridges the gap between basic scripting and industrial-grade data engineering. We explore the memory management of NumPy, the vectorized acceleration of Pandas, and the deployment of distributed processing frameworks.
                </p>
                <p>
                  Participants will engage with real-world datasets from the FOSSEE project, learning to optimize pipelines for multi-terabyte environments while maintaining the highest standards of code integrity and reproducibility.
                </p>
              </div>
            </div>

            {/* Curriculum */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50">02</span>
                <h2 className="text-4xl uppercase tracking-tight">Curriculum</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Memory Profiling", desc: "Analyzing heap allocation and garbage collection in Python." },
                  { title: "Vectorization", desc: "Leveraging SIMD instructions via NumPy and Cython." },
                  { title: "Distributed Dask", desc: "Scaling computations across multi-node clusters." },
                  { title: "Async IO", desc: "Mastering non-blocking data streams for real-time apps." }
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-foreground/5 prestige-card space-y-4">
                    <h4 className="text-lg uppercase tracking-tight font-bold">{item.title}</h4>
                    <p className="text-sm font-light opacity-60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50">03</span>
                <h2 className="text-4xl uppercase tracking-tight">The Expert</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-4">
                  <div className="aspect-square oval-mask prestige-card overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/expert/600/600" 
                      className="w-full h-full object-cover grayscale"
                      alt="Instructor"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="md:col-span-8 space-y-6">
                  <h3 className="text-3xl font-serif italic">Dr. Arjan Newman</h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Lead Researcher • IIT Bombay</p>
                  <p className="text-lg font-light opacity-60 leading-relaxed">
                    A pioneer in computational physics and a core contributor to the SciPy ecosystem. Dr. Newman has led over 50 international workshops on open-source scientific computing.
                  </p>
                  <div className="flex gap-12 pt-4">
                    <div>
                      <p className="text-2xl font-serif">50+</p>
                      <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">Workshops</p>
                    </div>
                    <div>
                      <p className="text-2xl font-serif">12k</p>
                      <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 border border-foreground/10 prestige-card space-y-8 sticky top-32">
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Investment</span>
                <p className="text-4xl font-serif">₹12,500 <span className="text-sm font-sans opacity-40">/ Session</span></p>
              </div>
              
              <div className="space-y-4 pt-8 border-t border-foreground/5">
                <div className="flex items-center gap-4 text-sm font-light">
                  <Calendar className="w-4 h-4 opacity-40" />
                  <span>October 12-14, 2024</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-light">
                  <MapPin className="w-4 h-4 opacity-40" />
                  <span>IIT Bombay Campus, Mumbai</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-light">
                  <Clock className="w-4 h-4 opacity-40" />
                  <span>18 Contact Hours</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-accent">85% Capacity</span>
                  <span className="opacity-40">4 Seats Left</span>
                </div>
                <Progress value={85} className="h-1 bg-foreground/5" />
              </div>

              <div className="pt-8 space-y-4">
                <Button asChild className="prestige-button w-full bg-foreground text-background hover:bg-accent hover:text-white border-none py-8">
                  <Link to="/booking">Initiate Booking</Link>
                </Button>
                <p className="text-[9px] text-center uppercase tracking-widest opacity-40">
                  * Certified by FOSSEE, IIT Bombay
                </p>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
