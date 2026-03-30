export const Footer = () => {
  return (
    <footer id="footer" className="bg-black/40 border-t border-white/5">
      <section className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <a
            href="/"
            className="font-extrabold text-2xl tracking-tighter flex items-center gap-2"
          >
            Alturis <span className="text-brand-blue">Innovations</span>
          </a>
          <p className="text-brand-silver max-w-sm leading-relaxed">
             Empowering the physical world with intelligence. Bridging the gap between AI algorithms and physical reality.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6">
           <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Direct Contact</h3>
           <a 
            href="mailto:inquiries@alturis-innovations.com" 
            className="text-2xl md:text-3xl font-light hover:text-brand-blue transition-colors break-all"
           >
             inquiries@alturis-innovations.com
           </a>
           <div className="pt-4 flex gap-8">
              <a href="#philosophy" className="text-xs font-bold uppercase tracking-widest text-brand-silver hover:text-white transition-colors">Philosophy</a>
              <a href="#verticals" className="text-xs font-bold uppercase tracking-widest text-brand-silver hover:text-white transition-colors">Verticals</a>
              <a href="#advantage" className="text-xs font-bold uppercase tracking-widest text-brand-silver hover:text-white transition-colors">Advantage</a>
           </div>
        </div>
      </section>

      <section className="container py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-silver/50">
        <div>
           ALTURIS_INNOVATIONS_CORE_v2.0.26
        </div>
        <div>
          &copy; 2026 Alturis Innovations. All physical rights reserved.
        </div>
      </section>
    </footer>
  );
};
