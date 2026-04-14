import { motion } from 'framer-motion';
import { Search, BookOpen, Quote, Info } from 'lucide-react';

const glossaryTerms = [
  {
    term: "Stigmatisation",
    definition: "Le processus par lequel un individu est disqualifié socialement en raison d'un attribut jugé déviant par le groupe dominant.",
    example: "L'étiquetage d'un individu comme étant 'immoral' impactant son accès à l'emploi.",
    importance: "Essentiel pour comprendre comment le jugement social brise les parcours de vie et l'estime de soi."
  },
  {
    term: "Construction Sociale",
    definition: "Le processus par lequel la réalité est créée à travers les interactions sociales, le langage et les normes culturelles.",
    example: "L'idée que la 'déviance' n'est pas inhérente à l'acte mais définie par la société.",
    importance: "Permet de déconstruire les préjugés et de voir la prostitution comme un enjeu sociétal complexe."
  },
  {
    term: "Agent de Socialisation",
    definition: "Les instances (famille, école, média) qui transmettent les normes et les valeurs au sein de la société.",
    example: "Le rôle des médias dans la représentation souvent stéréotypée de la prostitution.",
    importance: "Permet de retracer l'origine de l'étiquette et de la stigmatisation dès l'enfance."
  }
];

const Glossary = () => {
  return (
    <div className="pt-32 pb-48 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto mb-6 border border-purple-500/20 shadow-glow">
             <BookOpen size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Glossaire des <span className="italic">concepts</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
             Les fondements théoriques pour décoder les mécanismes de la stigmatisation sociale.
          </p>
        </motion.div>

        {/* Search placeholder */}
        <div className="relative mb-24 max-w-xl mx-auto group">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-purple-400 transition-colors" size={20} />
           <input 
              type="text" 
              placeholder="Rechercher un concept..."
              className="w-full h-16 rounded-[1.2rem] bg-white/5 border border-white/10 pl-16 pr-6 text-white outline-none focus:border-purple-500/50 transition-all font-medium"
           />
           <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-600 bg-white/5 px-2 py-1 rounded">
              ⌘ K
           </div>
        </div>

        <div className="grid gap-8">
           {glossaryTerms.map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               whileHover={{ y: -5 }}
               className="p-12 glass group relative border border-white/5 hover:border-purple-500/20 transition-all duration-300"
             >
                <div className="flex flex-col md:flex-row gap-12">
                   <div className="md:w-1/3">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                         <div className="w-2 h-8 bg-purple-500 rounded-full" />
                         {item.term}
                      </h3>
                      <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full w-fit">
                         <Info size={12} className="text-purple-400" />
                         Concept sociologique
                      </div>
                   </div>
                   
                   <div className="md:w-2/3 space-y-8">
                      <div>
                         <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Quote size={10} /> Définition
                         </p>
                         <p className="text-white text-xl leading-relaxed font-light">
                            {item.definition}
                         </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                         <div>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-3">Exemple Concret</p>
                            <p className="text-zinc-400 text-sm leading-relaxed italic">
                               "{item.example}"
                            </p>
                         </div>
                         <div>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-3">Importance</p>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                               {item.importance}
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
