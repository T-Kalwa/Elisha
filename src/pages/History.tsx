import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Scale, Globe, Users } from 'lucide-react';

const events = [
  {
    year: "Antiquité",
    title: "Le cadre ancestral",
    desc: "La prostitution a traversé les époques sous diverses régulations religieuses et sociales.",
    icon: <Globe />,
    color: "from-purple-500 to-indigo-500"
  },
  {
    year: "19e Siècle",
    title: "Prostitution & Contrôle",
    desc: "Émergence des premières législations visant le contrôle sanitaire et moral de la ville.",
    icon: <Scale />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "Lois Actuelles",
    title: "Le Modèle Nordique",
    desc: "Transition vers la criminalisation de l'achat et la décriminalisation de la vente au Canada (LPCVR).",
    icon: <Users />,
    color: "from-teal-500 to-emerald-500"
  },
  {
    year: "Ère Moderne",
    title: "Stigmatisation et Numérique",
    desc: "Défis contemporains de l'étiquetage social à l'ère des plateformes numériques.",
    icon: <Calendar />,
    color: "from-rose-500 to-orange-500"
  }
];

const History = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="pt-32 pb-48 px-6 overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center mb-32"
        >
          <div className="text-sm font-bold tracking-widest uppercase text-purple-400 mb-4 px-4 py-1.5 glass rounded-full inline-block border border-white/5">
            L'Évolution du Regard
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8">Histoire & <span className="italic font-normal">Législation</span></h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
             Du contrôle moral à la réalité juridique moderne : comment les lois ont façonné la stigmatisation de la prostitution au Québec.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-zinc-900 -translate-x-1/2 z-0 hidden md:block">
            <motion.div 
               style={{ scaleY }}
               className="h-full w-full bg-gradient-to-b from-purple-500 via-cyan-400 to-rose-500 origin-top shadow-[0_0_20px_white/10]"
            />
          </div>

          <div className="space-y-32">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Circle on Line */}
                <div className="absolute left-[30px] md:left-1/2 w-16 h-16 rounded-3xl bg-zinc-950 border-4 border-zinc-900 -translate-x-1/2 z-20 flex items-center justify-center shadow-2xl overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 transition-opacity group-hover:opacity-40`} />
                  <div className="relative z-10 text-white/80">
                    {event.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 space-y-6 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 text-left'}`}>
                  <div className={`inline-block px-4 py-1.5 rounded-xl bg-gradient-to-r ${event.color} text-white font-bold text-sm shadow-lg`}>
                    {event.year}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {event.desc}
                  </p>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-[2rem] bg-white/5 border border-white/10 glass text-left group cursor-pointer hover:bg-white/10 transition-colors"
                  >
                     <p className="text-sm font-semibold text-zinc-500 flex items-center gap-2 mb-2 group-hover:text-purple-400 transition-colors">
                        CONCEPTS CLÉS <div className="w-1 h-1 rounded-full bg-current" />
                     </p>
                     <p className="text-zinc-400">
                        Explorer en détail l'impact de cette période sur la construction émotionnelle de la stigmatisation...
                     </p>
                  </motion.div>
                </div>
                
                {/* Empty space for grid alignment */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
