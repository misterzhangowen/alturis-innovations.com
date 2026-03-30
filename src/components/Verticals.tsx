import { Cpu, Eye, Activity, Box } from "lucide-react";
import industrialImage from "../assets/industrial_vision_probe.png";

const verticalDetails = [
  {
    title: "Industrial Machine Vision",
    headline: "Next-Gen Industrial Metrology",
    description: "Deploying computational optics and edge-AI to break physical diffraction limits. We build ultra-high-throughput defect detection probes for semiconductor and precision PCB manufacturing.",
    icon: <Eye className="w-8 h-8 text-brand-blue" />,
    image: industrialImage
  },
  {
    title: "Intelligent Sports Automation",
    headline: "Adaptive Robotic Sports Systems",
    description: "Redefining athletic training. Fusing binocular AI vision with high-speed multi-axis motion control to create adaptive, intelligent badminton robotics that react to human biomechanics in real-time.",
    icon: <Activity className="w-8 h-8 text-brand-blue" />,
    imagePlaceholder: "IMAGE_SPORTS_ROBOTICS"
  }
];

export const Verticals = () => {
  return (
    <section id="verticals" className="container py-24 sm:py-32 bg-black/30">
      <div className="grid lg:grid-cols-2 gap-8">
        {verticalDetails.map((v, i) => (
          <div key={i} className="group relative bg-brand-dark p-8 border border-white/5 rounded-2xl hover:border-brand-blue/30 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              {v.icon}
            </div>
            <div className="mb-6 flex items-center gap-4">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-lg">
                {v.icon}
              </div>
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">{v.title}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{v.headline}</h3>
            <p className="text-brand-silver leading-relaxed mb-8">
              {v.description}
            </p>
            <div className="aspect-[16/9] bg-black/50 border border-white/5 rounded-xl overflow-hidden relative">
               {v.image ? (
                 <img src={v.image} alt={v.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/20">
                    [{v.imagePlaceholder}_PROBE_SCANNING]
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
