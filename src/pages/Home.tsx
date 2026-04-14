import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import stigmaHeroImg from '../assets/stigma-hero.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const authors = [
    { name: "Elisha Kasongo", firstName: "elisha" },
    { name: "Rihanna Natareno", firstName: "rihanna" }
  ];

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-24 overflow-hidden bg-[#08090a]"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Background Image Layer */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 0.3], [0, 100]),
            scale: useTransform(scrollYProgress, [0, 0.3], [1.1, 1.2])
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src={stigmaHeroImg}
            alt="Stigmatisation"
            className="w-full h-full object-cover opacity-60 contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090a]/80 via-[#08090a]/20 to-[#08090a]" />
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-red-600/10 blur-[180px] rounded-full z-0"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full z-0"
        />

        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="max-w-6xl mx-auto space-y-12 relative z-10 px-4"
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <span className="tag-label">SCIENCES HUMAINES</span>
            <span className="text-zinc-100 text-[10px] font-bold tracking-[0.4em] uppercase">COLLÈGE LASALLE 2026</span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-serif leading-[0.95] font-black tracking-tighter">
            <span className="block italic text-zinc-400">Étiquette</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-indigo-400">& Réalité</span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-zinc-300 max-w-4xl mx-auto font-light leading-snug">
            Une exploration de la stigmatisation entourant la <span className="text-red-500 font-bold underline decoration-red-500/30 underline-offset-8 italic">prostitution au Québec</span> à travers le prisme sociologique.
          </h2>

          <div className="pt-12 flex flex-wrap justify-center gap-8">
            <Link to="/etude" className="group relative h-16 px-12 rounded-full bg-red-600 text-white font-black flex items-center gap-3 transition-all hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95">
              CONSULTER L'ÉTUDE
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Minimalist Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12 border-b border-white/10 pb-16">
          <div className="space-y-2">
            <span className="text-red-500 font-bold tracking-[0.4em] uppercase text-[10px]">COLLABORATION</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black italic text-zinc-500">L'Équipe.</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {authors.map((author, idx) => (
              <Link 
                key={idx} 
                to={`/about#${author.firstName.toLowerCase()}`}
                className="group flex flex-col items-center"
              >
                <span className="text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-500 group-hover:text-red-500 group-hover:italic group-hover:translate-x-2">
                  {author.name}
                </span>
                <span className="text-xs font-black tracking-[0.3em] uppercase text-zinc-600 group-hover:text-zinc-400 transition-colors mt-2">
                   Voir le profil complet →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Intro Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative">
        <div className="absolute inset-0 bg-red-600/5 blur-[150px] -z-10 rounded-full" />
        
        {/* Qui nous sommes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, borderColor: 'rgba(239, 68, 68, 0.4)' }}
          className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform duration-500">
            <Shield size={32} />
          </div>
          <h3 className="text-red-500 font-black tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Qui nous sommes
          </h3>
          <p className="text-zinc-400 text-xl leading-relaxed font-light">
            Nous sommes deux étudiantes finissantes au programme de sciences humaines du Collège Lasalle, portées par une curiosité commune pour les dynamiques sociales complexes.
          </p>
        </motion.div>

        {/* Pourquoi ce sujet ? */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.4)' }}
          className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform duration-500">
            <Target size={32} />
          </div>
          <h3 className="text-purple-500 font-black tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            Pourquoi ce sujet ?
          </h3>
          <p className="text-zinc-400 text-xl leading-relaxed font-light">
            À cause de la sensibilité du thème et de sa rareté dans le dialogue public. Nous explorons la prostitution comme une réalité sociale souvent occultée derrière des étiquettes morales.
          </p>
        </motion.div>

        {/* Notre objectif */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.4)' }}
          className="group p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
            <Zap size={32} />
          </div>
          <h3 className="text-white font-black tracking-widest text-xs uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Notre objectif
          </h3>
          <p className="text-zinc-400 text-xl leading-relaxed font-light">
            Mieux comprendre l’englobement des personnes concernées et sensibiliser le public pour développer un regard plus objectif et empathique sur ce tabou de notre société.
          </p>
        </motion.div>
      </section>

    </motion.div>
  );
};

export default Home;
