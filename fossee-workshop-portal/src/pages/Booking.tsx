import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Calendar, User, Mail, Phone, Building, Users, Info } from "lucide-react";

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-16 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-50 mb-8 block">Curation Request</span>
          <h1 className="text-6xl md:text-8xl leading-none mb-8">
            Reserve <br />
            <span className="text-prestige italic opacity-50">your session</span>
          </h1>
          <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Collaborate with IIT Bombay experts to bring world-class FOSSEE workshops to your institution.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Rail */}
          <div className="flex justify-between items-center mb-24 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/5 -z-10" />
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`w-12 h-12 flex items-center justify-center border transition-all duration-500 ${step >= s ? "bg-foreground text-background border-foreground" : "bg-background text-foreground/20 border-foreground/10"}`}
              >
                <span className="text-xs font-bold">{s}</span>
              </div>
            ))}
          </div>

          <form className="space-y-24">
            
            {/* Step 1: Coordinator Details */}
            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl uppercase tracking-tight">Coordinator Details</h2>
                  <p className="text-sm font-light opacity-50">Please provide the primary contact information for the institution.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                    <Input className="rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 py-6 focus:ring-0 focus:border-accent transition-colors" placeholder="e.g. Dr. Amit Shah" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                    <Input className="rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 py-6 focus:ring-0 focus:border-accent transition-colors" placeholder="amit.shah@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                    <Input className="rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 py-6 focus:ring-0 focus:border-accent transition-colors" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Institution</label>
                    <Input className="rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 py-6 focus:ring-0 focus:border-accent transition-colors" placeholder="e.g. IIT Delhi" />
                  </div>
                </div>

                <div className="pt-12">
                  <Button 
                    type="button"
                    onClick={() => setStep(2)}
                    className="prestige-button bg-foreground text-background hover:bg-accent hover:text-white border-none w-full py-8"
                  >
                    Continue to Logistics
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Logistics */}
            {step === 2 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl uppercase tracking-tight">Workshop Logistics</h2>
                  <p className="text-sm font-light opacity-50">Define the parameters for your specialized session.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Preferred Start Date</label>
                    <Input type="date" className="rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 py-6 focus:ring-0 focus:border-accent transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Expected Participants</label>
                    <Input type="number" className="rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 py-6 focus:ring-0 focus:border-accent transition-colors" placeholder="e.g. 50" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[9px] uppercase tracking-widest font-bold opacity-40">Workshop Mode</label>
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-none border-foreground/10 px-8 py-6 text-[10px] uppercase tracking-widest font-bold bg-foreground text-background">In-Person</Button>
                    <Button variant="outline" className="rounded-none border-foreground/10 px-8 py-6 text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100">Online</Button>
                  </div>
                </div>

                <div className="flex gap-4 pt-12">
                  <Button 
                    type="button"
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="prestige-button flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => setStep(3)}
                    className="prestige-button bg-foreground text-background hover:bg-accent hover:text-white border-none flex-[2] py-8"
                  >
                    Review Request
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl uppercase tracking-tight">Final Review</h2>
                  <p className="text-sm font-light opacity-50">Please confirm your request details before submission.</p>
                </div>
                
                <div className="p-12 border border-foreground/10 prestige-card space-y-8 bg-foreground/5">
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest font-bold opacity-40 block mb-2">Coordinator</span>
                      <p className="text-lg font-serif italic">Dr. Amit Shah</p>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest font-bold opacity-40 block mb-2">Institution</span>
                      <p className="text-lg font-serif italic">IIT Delhi</p>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest font-bold opacity-40 block mb-2">Timeline</span>
                      <p className="text-lg font-serif italic">Nov 12, 2024</p>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest font-bold opacity-40 block mb-2">Participants</span>
                      <p className="text-lg font-serif italic">50 Students</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-12">
                  <Button 
                    type="button"
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="prestige-button flex-1"
                  >
                    Edit
                  </Button>
                  <Button 
                    type="submit"
                    className="prestige-button bg-foreground text-background hover:bg-accent hover:text-white border-none flex-[2] py-8"
                  >
                    Submit Booking Request
                  </Button>
                </div>
              </motion.div>
            )}

          </form>
        </div>
      </section>
    </div>
  );
}
