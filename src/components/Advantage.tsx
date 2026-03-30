import { Factory, Cog, Zap } from "lucide-react";
import smtImage from "../assets/smt_production_line.png";

export const Advantage = () => {
  return (
    <section id="advantage" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="absolute -inset-1 bg-brand-blue/20 blur-3xl opacity-20 -z-10"></div>
           <div className="aspect-[4/5] bg-gradient-to-b from-brand-dark to-black border border-white/10 rounded-3xl p-0 relative overflow-hidden group">
              <img src={smtImage} alt="SMT Production" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 p-8 opacity-40">
                <Factory size={80} className="text-brand-blue" />
              </div>
              <div className="h-full flex flex-col justify-end">
                <div className="space-y-4">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest">
                      Shenzhen CDRC Electronics
                   </div>
                   <h3 className="text-3xl font-bold italic tracking-tighter">Manufacturing DNA.</h3>
                   <p className="text-brand-silver">
                      Integrated supply chain covering rapid PCBA prototyping, high-yield SMT, and industrial design.
                   </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
           </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Captive Manufacturing <span className="text-brand-blue italic">Backing.</span></h2>
             <p className="text-lg text-brand-silver leading-relaxed">
                We do not operate in a vacuum. Alturis is strategically partnered with <span className="text-white font-bold underline decoration-brand-blue underline-offset-4 tracking-tighter">Shenzhen CDRC Electronics</span>. From rapid PCBA prototyping to high-yield SMT and industrial design, our captive supply chain ensures that our R&D transitions seamlessly from lab to factory floor.
             </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4">
             <div className="p-6 bg-brand-dark border border-white/5 rounded-2xl">
                <Zap className="text-brand-blue mb-4" size={24} />
                <div className="font-bold mb-1">Rapid Prototyping</div>
                <p className="text-xs text-brand-silver font-mono">LAB-TO-PILOT_0-STAGE</p>
             </div>
             <div className="p-6 bg-brand-dark border border-white/5 rounded-2xl">
                <Cog className="text-brand-blue mb-4" size={24} />
                <div className="font-bold mb-1">High-Yield SMT</div>
                <p className="text-xs text-brand-silver font-mono">MASS_PROD_READY</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
