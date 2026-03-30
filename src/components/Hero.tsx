import { Button } from "./ui/button";
import heroImage from "../assets/hero_laser_scan.png";

export const Hero = () => {
  return (
    <section className="container min-h-[90vh] grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest animate-pulse">
           Deep-Tech Studio
        </div>
        <main className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
          <h1>
            Physicalizing <br />
            <span className="text-brand-blue">Artificial Intelligence.</span>
          </h1>
        </main>

        <p className="text-xl text-brand-silver md:w-10/12 mx-auto lg:mx-0 leading-relaxed">
          Alturis Innovations is a deep-tech commercialization studio. We seamlessly integrate cutting-edge AI algorithms with high-precision automation and kinetic hardware.
        </p>

        <div className="pt-4">
          <Button 
            size="lg" 
            className="bg-brand-blue text-brand-dark hover:bg-brand-blue/90 font-bold px-8 rounded-full transition-all hover:scale-105"
            onClick={() => window.location.href = 'mailto:inquiries@alturis-innovations.com'}
          >
            Partner With Us
          </Button>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-brand-blue/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative aspect-square md:aspect-video w-full max-w-[600px] bg-brand-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
           <img 
            src={heroImage} 
            alt="Physical AI Scanning" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
           <div className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-blue/40">
              SYSTEM_SCAN::ACTIVE <br />
              COORD_X: 42.001 <br />
              COORD_Y: 88.012
           </div>
        </div>
      </div>
    </section>
  );
};
