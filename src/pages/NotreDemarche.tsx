import { Microscope, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';

const NotreDemarche = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-red-500/30 font-serif pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40">
        
        {/* --- MASTHEAD / HEADER --- */}
        <header className="mb-24">
          <div className="flex justify-between items-end mb-4">
            <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase">
              Édition Spéciale 2026
            </span>
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">Processus Académique v1.0</p>
              <p className="italic text-zinc-500 text-xs">Mardi 14 Avril 2026</p>
            </div>
          </div>
          
          <h1 className="text-[12vw] md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-8">
            Notre <span className="italic text-white">Démarche.</span>
          </h1>
          
          <div className="journal-double-rule flex justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">
            <span>Vol. I — No. 001</span>
            <span className="hidden md:block">Analyse Multidisciplinaire de la Stigmatisation</span>
            <span>Prix: Connaissance</span>
          </div>
        </header>

        <div className="space-y-40">
          
          {/* --- SECTION 1: PRÉSENTATION --- */}
          <section>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight uppercase">
                  Présentation <br/> <span className="text-secondary italic">du Projet</span>
                </h2>
                
                <div className="columns-1 md:columns-2 gap-12 text-zinc-400 text-lg leading-relaxed font-serif">
                  <p className="drop-cap mb-8">
                    Ce projet académique explore comment la <span className="text-white font-medium">stigmatisation sociale</span> influence les conditions de vie de ceux qui pratiquent la prostitution de nos jours. Pour ce faire, nous adoptons un regard sociologique, psychologique et historique.
                  </p>
                  <p className="mb-8">
                    Notre but principal est de mieux comprendre les <span className="text-white italic">réalités vécues</span> par les personnes concernées ainsi que les perceptions et les jugements portés afin de pouvoir instruire en retour. Nous visons à mettre en lumière les retombées de cette <span className="text-secondary">stigmatisation</span> sur leur quotidien.
                  </p>
                  <p className="mb-8">
                    Notre recherche est présentée dans un format informatique afin de rendre l’information simple et accessible. Nous utilisons les progrès technologiques pour vulgariser l’information et instruire les étudiants ainsi que le personnel du milieu de l’éducation.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 journal-sidebar space-y-8">
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 space-y-6">
                   <div className="flex items-center gap-4 text-xs font-black tracking-widest text-secondary uppercase">
                     <Sparkles size={16} /> Méthodologie
                   </div>
                   <p className="text-sm text-zinc-500 leading-relaxed italic">
                     "Une approche hybride combinant analyse de données, recherche historique et perspectives sociologiques contemporaines."
                   </p>
                   <div className="grid grid-cols-2 gap-2">
                     {['Sociologie', 'Psychologie', 'Histoire', 'Technologie'].map(tag => (
                       <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-black uppercase tracking-widest text-zinc-400">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECTION 2: QUESTION DE RECHERCHE --- */}
          <section className="py-20 border-y border-white/10 relative overflow-hidden group">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none -mr-20">
              <Microscope size={400} />
            </div>
            
            <div className="max-w-3xl relative z-10">
               <span className="text-secondary font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">
                 Question de Recherche
               </span>
               <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9] text-white">
                 « En quoi la stigmatisation sociale influence-t-elle les <span className="underline underline-offset-8 decoration-white/20">conditions de vie</span> de ceux qui pratiquent la prostitution ? »
               </h3>
            </div>
          </section>

          {/* --- SECTION 3: L'HYPOTHÈSE (EXACT MATCH) --- */}
          <section id="hypothese" className="pt-20">
             <div className="mb-12">
               <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
                 Édition Spéciale 2026
               </span>
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <h2 className="text-[15vw] md:text-[12rem] font-black tracking-tighter leading-[0.8] m-0">
                   L'Hypothèse.
                 </h2>
                 <div className="text-right">
                   <p className="italic text-zinc-500 text-3xl font-light mb-2">« Analyse de la Stigmatisation »</p>
                   <p className="text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase">Vue d'ensemble sociologique</p>
                 </div>
               </div>
               <div className="journal-rule-thick mt-8"></div>
             </div>

             <div className="grid lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-8">
                 <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                     <p className="drop-cap text-zinc-300 text-lg leading-relaxed m-0">
                       À notre avis, la prostitution est considérée dans notre société comme un thème controversé qui remet en cause certaines valeurs partagées. Elle suscite des discussions cruciales, notamment pour déterminer si elle doit être perçue comme un travail ou comme une forme d'exploitation. 
                     </p>
                     <p className="text-zinc-400 text-lg leading-relaxed m-0">
                       Dans de nombreux contextes, la prostitution est liée à des éléments négatifs comme l'exploitation et des questions relatives au consentement, ce qui participe à une image sociale généralement péjorative. Par conséquent, nous estimons que cette stigmatisation impacte les conditions d'existence des individus touchés.
                     </p>
                   </div>

                   <div className="space-y-12">
                     <div className="clipping-card">
                       <p className="text-2xl font-black leading-tight italic m-0">
                         « Elle reste un phénomène largement marginalisé, favorisant la persistance de conditions de vulnérabilité. »
                       </p>
                     </div>

                     <p className="text-zinc-400 text-lg leading-relaxed m-0">
                       Nous n'adoptons pas une position pro ou anti-prostitution, cependant nous sommes d'avis que malgré quelques efforts de régulation légale, elle reste un phénomène largement marginalisé. Cette situation favorise la persistance de conditions de vulnérabilité, aussi bien d'un point de vue social que sécuritaire.
                     </p>
                   </div>
                 </div>
               </div>

               <div className="lg:col-span-4 journal-sidebar flex flex-col justify-between h-full min-h-[400px]">
                 <div className="space-y-10">
                   <h4 className="text-xl font-black uppercase tracking-tighter border-b border-white mb-6 pb-2">Points Clés</h4>
                   <ul className="space-y-10">
                     {[
                       { label: "CONTROVERSE", value: "Valeurs remises en cause" },
                       { label: "EXPLOITATION", value: "Consentement & Réalité" },
                       { label: "LÉGITIMITÉ", value: "Impact sur l'existence" },
                       { label: "VULNÉRABILITÉ", value: "Risques sécuritaires" }
                     ].map((item, i) => (
                       <li key={i} className="group">
                         <span className="text-[10px] font-black text-secondary block mb-1 tracking-widest uppercase">{item.label}</span>
                         <span className="text-xl font-light text-zinc-400 group-hover:text-white transition-colors">{item.value}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="pt-24 opacity-20">
                   <ShieldAlert size={64} strokeWidth={1} className="mb-4" />
                   <p className="text-[9px] font-black leading-tight uppercase tracking-[0.2em] text-zinc-600">
                     Avis de recherche<br/>© 2026 Projet Intégrateur
                   </p>
                 </div>
               </div>
             </div>
          </section>

          {/* --- CLOSING CTA --- */}
          <section className="pt-24">
             <div className="p-20 border-2 border-white/5 rounded-[4rem] bg-zinc-900/10 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
               <h4 className="text-4xl md:text-6xl font-black italic mb-8">Poursuivre l'étude</h4>
               <p className="text-zinc-500 text-xl mb-12 max-w-xl mx-auto font-light">
                 Découvrez l'analyse sociologique profonde des structures de stigmatisation dans la section suivante.
               </p>
               <a href="/sociology" className="inline-flex items-center gap-6 bg-white text-black px-16 py-8 rounded-full font-black tracking-widest text-xs uppercase hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95">
                 Explorer la Sociologie <ArrowRight size={20} />
               </a>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default NotreDemarche;

