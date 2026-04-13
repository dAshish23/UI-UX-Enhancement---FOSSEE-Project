import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, CheckCircle2, AlertCircle, LayoutDashboard, Settings, LogOut, ChevronRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-16 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50 block">Student Dashboard</span>
            <h1 className="text-6xl md:text-8xl leading-none">
              Welcome, <br />
              <span className="text-prestige italic opacity-50">Dr. Arjun</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6 p-6 border border-foreground/10 prestige-card">
            <div className="w-16 h-16 oval-mask overflow-hidden prestige-card">
              <img src="https://picsum.photos/seed/student/200/200" className="w-full h-full object-cover grayscale" alt="Profile" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-lg font-serif italic">Academic Curator</p>
              <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">IIT Bombay Portal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-4">
            {[
              { label: "Overview", icon: <LayoutDashboard className="w-4 h-4" />, active: true },
              { label: "My Bookings", icon: <BookOpen className="w-4 h-4" />, active: false },
              { label: "Certifications", icon: <CheckCircle2 className="w-4 h-4" />, active: false },
              { label: "Settings", icon: <Settings className="w-4 h-4" />, active: false },
              { label: "Logout", icon: <LogOut className="w-4 h-4" />, active: false },
            ].map((item) => (
              <Button 
                key={item.label}
                variant="ghost" 
                className={`w-full justify-start rounded-none px-6 py-8 text-[10px] uppercase tracking-widest font-bold border-l-2 transition-all ${item.active ? "border-accent bg-foreground/5 opacity-100" : "border-transparent opacity-40 hover:opacity-100 hover:bg-foreground/5"}`}
              >
                <span className="mr-4">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </aside>

          {/* Dashboard Content */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Workshops", value: "12", icon: <BookOpen className="w-4 h-4" /> },
                { label: "Hours", value: "48", icon: <Clock className="w-4 h-4" /> },
                { label: "Pending", value: "02", icon: <AlertCircle className="w-4 h-4" /> },
                { label: "Completed", value: "10", icon: <CheckCircle2 className="w-4 h-4" /> },
              ].map((stat, i) => (
                <div key={i} className="p-8 border border-foreground/10 prestige-card space-y-4">
                  <div className="opacity-40">{stat.icon}</div>
                  <div>
                    <p className="text-3xl font-serif">{stat.value}</p>
                    <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl uppercase tracking-tight">Recent Bookings</h2>
                <Button variant="link" className="text-[10px] uppercase tracking-widest font-bold opacity-50 hover:opacity-100">View All</Button>
              </div>
              
              <div className="border border-foreground/10 prestige-card overflow-hidden">
                <Table>
                  <TableHeader className="bg-foreground/5">
                    <TableRow className="border-foreground/10">
                      <TableHead className="text-[9px] uppercase tracking-widest font-bold px-8 py-6">Workshop</TableHead>
                      <TableHead className="text-[9px] uppercase tracking-widest font-bold px-8 py-6">Date</TableHead>
                      <TableHead className="text-[9px] uppercase tracking-widest font-bold px-8 py-6">Status</TableHead>
                      <TableHead className="text-[9px] uppercase tracking-widest font-bold px-8 py-6 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Python for Data Science", date: "Oct 24, 2024", status: "Confirmed" },
                      { name: "Scilab Engineering", date: "Nov 12, 2024", status: "Pending" },
                      { name: "LaTeX Typography", date: "Dec 05, 2024", status: "Completed" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-foreground/5 hover:bg-foreground/5 transition-colors">
                        <TableCell className="px-8 py-6">
                          <p className="text-sm font-bold uppercase tracking-tight">{row.name}</p>
                          <p className="text-[9px] uppercase tracking-widest opacity-40">IIT Bombay</p>
                        </TableCell>
                        <TableCell className="px-8 py-6 text-sm font-light opacity-60">{row.date}</TableCell>
                        <TableCell className="px-8 py-6">
                          <Badge className={`rounded-none border-none px-3 py-1 text-[8px] uppercase tracking-widest font-bold ${row.status === "Confirmed" ? "bg-accent text-white" : row.status === "Pending" ? "bg-foreground/10 text-foreground" : "bg-foreground text-background"}`}>
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-8 py-6 text-right">
                          <Button variant="ghost" size="icon" className="opacity-40 hover:opacity-100">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
