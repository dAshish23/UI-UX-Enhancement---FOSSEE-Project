import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  MoreVertical, 
  Mail, 
  MapPin,
  ChevronRight,
  Plus
} from "lucide-react";

export default function InstructorPortal() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-16 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50 block">Management Dashboard</span>
            <h1 className="text-6xl md:text-8xl leading-none">
              Curator's <br />
              <span className="text-prestige italic opacity-50">Overview</span>
            </h1>
          </div>
          
          <div className="flex gap-4">
            <Button className="prestige-button bg-foreground text-background hover:bg-accent hover:text-white border-none">
              <Plus className="w-4 h-4 mr-2" /> New Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Requests */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl uppercase tracking-tight">Incoming Requests</h2>
              <Badge variant="outline" className="rounded-none border-accent text-accent px-3 py-1 text-[9px] uppercase tracking-widest font-bold">03 Pending</Badge>
            </div>

            <div className="space-y-6">
              {[
                { 
                  name: "Dr. Amit Khanna", 
                  inst: "BITS Pilani, Goa Campus", 
                  workshop: "Advanced Python for Scientific Computing", 
                  date: "OCT 24, 2024", 
                  pax: "120 PAX", 
                  mode: "REMOTE" 
                },
                { 
                  name: "Prof. Sarah Roy", 
                  inst: "Jadavpur University", 
                  workshop: "Open Source EDA Tools Workshop", 
                  date: "NOV 02, 2024", 
                  pax: "45 PAX", 
                  mode: "IN-PERSON" 
                }
              ].map((req, i) => (
                <div key={i} className="p-8 border border-foreground/10 prestige-card group hover:bg-foreground/5 transition-all duration-500">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="space-y-6 flex-1">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center font-serif italic text-xl">
                          {req.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold uppercase tracking-tight">{req.name}</h3>
                          <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">{req.inst}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-2xl font-serif italic text-accent">{req.workshop}</h4>
                        <div className="flex flex-wrap gap-6 pt-2">
                          <div className="flex items-center gap-2 opacity-40 text-[10px] uppercase tracking-widest font-bold">
                            <Calendar className="w-3 h-3" /> {req.date}
                          </div>
                          <div className="flex items-center gap-2 opacity-40 text-[10px] uppercase tracking-widest font-bold">
                            <Users className="w-3 h-3" /> {req.pax}
                          </div>
                          <div className="flex items-center gap-2 opacity-40 text-[10px] uppercase tracking-widest font-bold">
                            <MapPin className="w-3 h-3" /> {req.mode}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-row md:flex-col gap-3 justify-end">
                      <Button className="rounded-none bg-foreground text-background hover:bg-accent hover:text-white border-none text-[9px] uppercase tracking-widest font-bold px-8 py-4">Accept</Button>
                      <Button variant="outline" className="rounded-none border-foreground/10 text-[9px] uppercase tracking-widest font-bold px-8 py-4 opacity-40 hover:opacity-100">Postpone</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats & Schedule */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Analytics Card */}
            <div className="p-8 border border-foreground/10 prestige-card space-y-8 bg-foreground/5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Annual Trajectory</span>
                <BarChart3 className="w-4 h-4 opacity-40" />
              </div>
              
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 60, 80, 50, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-foreground/10 hover:bg-accent transition-colors cursor-pointer" style={{ height: `${h}%` }} />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/5">
                <div>
                  <p className="text-3xl font-serif">42</p>
                  <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">Workshops</p>
                </div>
                <div>
                  <p className="text-3xl font-serif">2.4k</p>
                  <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">Participants</p>
                </div>
              </div>
            </div>

            {/* Confirmed Schedule */}
            <div className="space-y-8">
              <h2 className="text-2xl uppercase tracking-tight">Confirmed Schedule</h2>
              <div className="space-y-4">
                {[
                  { date: "12", month: "Oct", title: "Quantum Computing Intro", loc: "IIT Madras" },
                  { date: "18", month: "Oct", title: "R-Lang for Data Science", loc: "Delhi University" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 border border-foreground/5 prestige-card hover:bg-foreground/5 transition-colors cursor-pointer group">
                    <div className="text-center min-w-[40px]">
                      <p className="text-xl font-serif leading-none">{item.date}</p>
                      <p className="text-[8px] uppercase tracking-widest font-bold opacity-40">{item.month}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold uppercase tracking-tight">{item.title}</h4>
                      <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">{item.loc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="prestige-button w-full opacity-40 hover:opacity-100">View Full Calendar</Button>
            </div>

          </aside>

        </div>
      </section>
    </div>
  );
}
