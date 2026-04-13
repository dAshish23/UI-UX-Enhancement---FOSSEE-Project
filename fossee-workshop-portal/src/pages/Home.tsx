import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Users, Calendar, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FEATURED_WORKSHOPS = [
  {
    id: "python-ds",
    title: "Advanced Data Science with Python",
    category: "Data Science",
    instructor: "Dr. Rajesh Kumar",
    image: "https://picsum.photos/seed/python/800/1000",
  },
  {
    id: "scilab-eng",
    title: "Scientific Computing with Scilab",
    category: "Engineering",
    instructor: "Prof. Sunita Sharma",
    image: "https://picsum.photos/seed/scilab/800/1000",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center pt-32 overflow-hidden border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[12vw] lg:text-[8vw] leading-[0.85] mb-12">
                Master <br />
                <span className="text-prestige lowercase font-normal opacity-50">the</span> Art <br />
                <span className="text-accent italic">of</span> Open Source
              </h1>
              <p className="max-w-md text-lg text-muted-foreground font-light leading-relaxed">
                Elevate your institution's technical prowess with specialized workshops led by India's leading open-source experts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-6"
            >
              <Button asChild className="prestige-button bg-foreground text-background hover:bg-accent hover:text-white border-none">
                <Link to="/catalog">Explore Catalog</Link>
              </Button>
              <Button asChild variant="outline" className="prestige-button">
                <Link to="/booking">Book a Session</Link>
              </Button>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="aspect-[4/5] relative overflow-hidden"
            >
              <img
                src="https://picsum.photos/seed/iitb/1000/1250"
                alt="IIT Bombay Campus"
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </motion.div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-background border border-foreground/10 p-8 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-serif leading-none mb-2">500+</span>
              <span className="text-[8px] uppercase tracking-widest font-bold opacity-50">Workshops Conducted</span>
            </div>
          </div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="vertical-text">Excellence in Open Source Education</span>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Curated Selection</span>
              <h2 className="text-6xl md:text-8xl">Featured <br /> <span className="text-prestige">Sessions</span></h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground italic font-light leading-relaxed">
              Our most sought-after workshops, designed for deep institutional impact and technical mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {FEATURED_WORKSHOPS.map((workshop, i) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`group cursor-pointer ${i % 2 !== 0 ? "md:translate-y-32" : ""}`}
              >
                <Link to={`/workshop/${workshop.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 prestige-card">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">{workshop.category}</span>
                      <h3 className="text-3xl uppercase tracking-tight leading-none">{workshop.title}</h3>
                      <p className="text-sm font-serif italic opacity-60">Led by {workshop.instructor}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Rail */}
      <section className="border-y border-foreground/10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Institutions", value: "120+" },
              { label: "Experts", value: "45" },
              { label: "Participants", value: "15k+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="p-12 border-r border-foreground/10 last:border-r-0 flex flex-col items-center text-center space-y-4">
                <span className="text-4xl font-serif">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-48 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-8xl leading-none">
            Ready to <br />
            <span className="text-prestige lowercase font-normal opacity-50">transform your</span> <br />
            Curriculum?
          </h2>
          <p className="text-xl font-light opacity-60 leading-relaxed max-w-2xl mx-auto">
            Join the ranks of premier institutions fostering open-source excellence. Book your specialized workshop session today.
          </p>
          <div className="pt-8">
            <Button asChild className="prestige-button bg-background text-foreground hover:bg-accent hover:text-white border-none px-16 py-8 text-lg">
              <Link to="/booking">Initiate Booking Request</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
