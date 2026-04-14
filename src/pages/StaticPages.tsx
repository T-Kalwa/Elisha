import { motion } from 'framer-motion';
import { Megaphone, Play, Video, Mic, Volume2 } from 'lucide-react';

export const Reportages = () => (
  <div className="pt-48 pb-48 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         className="text-center mb-32"
      >
        <div className="w-16 h-16 rounded-[1.5rem] bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto mb-10 shadow-glow">
           <Megaphone size={32} />
        </div>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8">Reportages <span className="text-amber-400">&</span> Voix</h1>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto">
           Porter un autre regard. Écouter les expertises. Humaniser les chiffres.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 opacity-30 grayscale pointer-events-none">
        {[
           { icon: <Play size={24} />, title: "Documentaire terrain", type: "VIDÉO" },
           { icon: <Mic size={24} />, title: "Entretien chercheur", type: "PODCAST" },
           { icon: <Volume2 size={24} />, title: "Paroles d'activistes", type: "AUDIO" },
           { icon: <Video size={24} />, title: "Analyse sociologique", type: "DOCUMENTAIRE" }
        ].map((item, idx) => (
           <div key={idx} className="p-12 glass rounded-[3rem] group border-dashed border-2 border-zinc-800 flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-20 h-20 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-800 bg-zinc-900 mb-8 font-bold">
                 {item.icon}
              </div>
              <div className="text-[10px] font-bold tracking-widest text-zinc-600 mb-4">{item.type}</div>
              <h4 className="text-2xl font-bold text-zinc-700">{item.title}</h4>
              <p className="mt-4 text-zinc-800 italic">Bientôt disponible</p>
           </div>
        ))}
      </div>
    </div>
  </div>
);

import { Heart, BookMarked, ExternalLink, ShieldCheck } from 'lucide-react';

export const Resources = () => (
  <div className="pt-48 pb-48 px-6">
    <div className="max-w-4xl mx-auto">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center mb-32"
       >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-white/5 text-purple-400 font-bold mb-8 text-sm uppercase tracking-widest">
            <Heart size={14} /> Centre de documentation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8">Ressources <span className="italic font-normal">&</span> Soutien</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
             Accédez à nos sources de recherche et découvrez les organismes qui œuvrent pour le droit et la dignité humaine.
          </p>
       </motion.div>

       <div className="grid gap-8">
          {[
            { 
               title: "Bibliographie académique", 
               desc: "Détails des références sociologiques et juridiques utilisées dans notre étude.",
               icon: <BookMarked className="text-purple-400" />
            },
            { 
               title: "Organismes de soutien", 
               desc: "Contactez les associations partenaires spécialisées dans l'accompagnement.",
               icon: <ShieldCheck className="text-cyan-400" /> 
            },
            { 
               title: "Guide de sensibilisation", 
               desc: "Téléchargez notre kit PDF pour sensibiliser votre milieu à l'impact des étiquettes.",
               icon: <ExternalLink className="text-rose-400" />
            }
          ].map((res, i) => (
            <motion.div 
               key={i} 
               whileHover={{ x: 10 }}
               className="p-10 rounded-[3rem] bg-zinc-900 border border-white/5 glass flex items-center gap-8 group cursor-pointer hover:border-white/20 transition-all duration-500"
            >
               <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  {res.icon}
               </div>
               <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors uppercase tracking-tight text-white">{res.title}</h3>
                  <p className="text-zinc-500 leading-relaxed max-w-md">{res.desc}</p>
               </div>
               <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} />
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  </div>
);
