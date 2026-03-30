export const Philosophy = () => {
  return (
    <section id="philosophy" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            The Era of Software is Over. <br />
            <span className="text-brand-blue">The Era of Embodied AI is Here.</span>
          </h2>
          <p className="text-lg text-brand-silver leading-relaxed">
            Algorithms alone cannot manipulate the physical world. Leveraging our DNA in automation, electronics, and mass manufacturing, we translate lines of code into sub-micron optical detection and precision kinetic movements.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-brand-blue to-transparent self-center"></div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video bg-brand-dark border border-white/10 rounded-lg overflow-hidden flex items-center justify-center">
             {/* Placeholder for an image or animation */}
             <div className="text-brand-blue/20 font-mono text-xs overflow-hidden h-full w-full p-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="whitespace-nowrap">
                    {`01010110 01001001 01010011 01001001 01001111 01001110 -> PHYSICAL_EXECUTION_${i}`}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
