import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Baby, GraduationCap, Briefcase, Zap, Info } from 'lucide-react';

const Sociology = () => {
  const [stigmatized, setStigmatized] = useState(false);

  const lifeStages = [
    {
      id: "enf",
      title: "Enfance",
      icon: <Baby size={24} />,
      agent: "Famille & École",
      desc: "La socialisation primaire forge les premières bases de l'identité et de l'appartenance sociale.",
      brokenDesc: "La stigmatisation peut débuter par des étiquettes précoces, altérant l'estime de soi dès le jeune âge."
    },
    {
      id: "ado",
      title: "Adolescence",
      icon: <GraduationCap size={24} />,
      agent: "Pairs & Médias",
      desc: "L'individu cherche sa place, influencé par les normes de son groupe de référence.",
      brokenDesc: "Le rejet social et l'étiquetage 'déviant' brisent les liens avec les pairs sains, poussant vers la marge."
    },
    {
      id: "adu",
      title: "Vie Adulte",
      icon: <Briefcase size={24} />,
      agent: "Travail & État",
      desc: "L'intégration professionnelle et citoyenne complète le parcours de socialisation.",
      brokenDesc: "La stigmatisation systémique crée des barrières insurmontables à l'emploi et au logement, isolant l'individu."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full inline-flex mb-6 text-sm font-bold border border-purple-500/20">
            Dimension Sociologique
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">La Construction de <span className="text-purple-400">l'Étiquette</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explorez l'impact de la stigmatisation sur le parcours de vie à travers notre simulateur interactif d'agents de socialisation.
          </p>
        </motion.div>

        {/* Interaction Toggle */}
        <div className="flex justify-center mb-24">
          <div className="p-1 glass flex rounded-2xl border border-white/5">
            <button 
              onClick={() => setStigmatized(false)}
              className={`px-8 py-3 rounded-xl transition-all duration-300 font-semibold ${!stigmatized ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              Parcours Standard
            </button>
            <button 
              onClick={() => setStigmatized(true)}
              className={`px-8 py-3 rounded-xl transition-all duration-300 font-semibold flex items-center gap-2 ${stigmatized ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'text-zinc-500 hover:text-red-400'}`}
            >
              <AlertCircle size={18} />
              Appliquer la Stigmatisation
            </button>
          </div>
        </div>

        {/* Life Path */}
        <div className="relative">
          {/* Main Path Line */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[4px] bg-zinc-800 -z-10 overflow-hidden">
             <motion.div 
                initial={false}
                animate={{ 
                  backgroundColor: stigmatized ? "#ef4444" : "#a855f7",
                  width: "100%",
                }}
                className="h-full shadow-[0_0_15px_currentColor]"
             />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {lifeStages.map((stage, idx) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div className="mb-12 flex flex-col items-center">
                   <motion.div 
                    animate={{ 
                      backgroundColor: stigmatized ? '#1a1a1a' : '#27272a',
                      borderColor: stigmatized ? '#ef4444' : '#a855f7',
                      color: stigmatized ? '#ef4444' : '#a855f7',
                      rotate: stigmatized ? [0, -5, 5, 0] : 0
                    }}
                    transition={stigmatized ? { duration: 0.5, repeat: Infinity, repeatType: 'reverse' } : {}}
                    className={`w-24 h-24 rounded-3xl border-2 flex items-center justify-center bg-zinc-900 shadow-xl relative z-20 transition-colors mb-6`}
                   >
                     {stage.icon}
                   </motion.div>
                </div>

                <div className={`p-8 glass transition-all duration-500 ${stigmatized ? 'border-red-500/20 bg-red-500/5 translate-y-4' : 'border-white/5 hover:-translate-y-2'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${stigmatized ? 'text-red-400' : 'text-white'}`}>{stage.title}</h3>
                    <div className="text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded text-zinc-500 font-bold">
                       {stage.agent}
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-zinc-400 mb-6">
                    {stigmatized ? stage.brokenDesc : stage.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 mt-auto">
                    <Zap size={12} className={stigmatized ? 'text-red-500 animate-pulse' : 'text-purple-400'} />
                    {stigmatized ? "Effet de stigmate" : "Étape de socialisation"}
                  </div>
                </div>

                {/* Broken Path Effect */}
                <AnimatePresence>
                  {stigmatized && idx < 2 && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="hidden md:block absolute -right-6 top-[48px] text-red-500 z-30"
                    >
                      <X className="w-12 h-12 stroke-[3]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <motion.div 
          animate={{ opacity: stigmatized ? 1 : 0, y: stigmatized ? 0 : 20 }}
          className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-red-500/10 via-zinc-900 to-transparent border border-red-500/20"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
               <Info size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-red-400">L'impact structurel du stigmate</h4>
              <p className="text-zinc-300 leading-relaxed">
                Lorsqu'une personne est stigmatisée au sein de la prostitution, ce n'est pas seulement un jugement moral, c'est une barrière sociale concrète. Les "chemins" de réussite traditionnelle se brisent car les agents de socialisation (famille, collègues, institutions) changent leur comportement, créant une prophétie auto-réalisatrice d'exclusion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import { X } from 'lucide-react';

export default Sociology;
