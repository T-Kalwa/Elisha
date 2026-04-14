import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Psychologique = () => {
  return (
    <div className="pt-48 pb-48 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-16 h-16 rounded-[1.5rem] bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mx-auto mb-12 shadow-glow"
        >
           <Brain size={32} />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Dimension <span className="text-pink-400 italic">Psychologique</span></h1>
        
        <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl mx-auto mb-20">
           L’impact de la stigmatisation sur le bien-être mental et la perception de soi. 
           Comment l'étiquette s'intériorise et modifie la résilience psychologique.
        </p>

        <div className="p-20 glass rounded-[4rem] text-center border-dashed border-2 border-zinc-900 group">
           <div className="w-12 h-12 rounded-full bg-zinc-900 mx-auto mb-6 flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
           </div>
           <h4 className="text-2xl font-bold text-zinc-600 mb-4 group-hover:text-zinc-400 transition-colors">Section en cours de recherche</h4>
           <p className="text-zinc-700 max-w-sm mx-auto group-hover:text-zinc-500 transition-colors">
              Les données pour cette analyse psychologique seront intégrées lors de la prochaine phase du projet.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Psychologique;
