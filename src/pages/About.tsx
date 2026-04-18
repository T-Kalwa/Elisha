import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, ArrowDown, Quote } from 'lucide-react';
import GlossaryLink from '../components/GlossaryLink';
import elishaImg from '../assets/elisha.jpeg';
import rihannaImg from '../assets/RIhanna.jpeg';

const About = () => {
  const containerRef = useRef(null);

  const authors = [
    {
      name: "Elisha Kasongo",
      lastName: "Kasongo",
      firstName: "Elisha",
      role: "CHERCHEUSE DU PROJET",
      bio: <>Mon nom est Elisha Kasongo, je suis une étudiante finissante au Collège Lasalle dans le programme de sciences humaines. Passionnée par la criminalité, le droit et les sujets tabous de la société, j’ai trouvé l’opportunité d’explorer en profondeur ces intérêts à travers ce projet. J’ai toujours été attirée par les réalités de notre société qui sont moins abordées comme les crimes organisés, les théories du complot derrière les grosses institutions de notre société et notamment la prostitution. Ce site web est une occasion de mieux comprendre la <GlossaryLink termId="stigmatisation" label="stigmatisation" /> qui entoure la prostitution au Québec à travers le regard d’étudiantes en sciences humaines.</>,
      quote: "Comprendre le silence, c'est commencer à déconstruire l'étiquette.",
      interests: ["Criminalité", "SOCIOLOGIE DU DROIT", "TABOUS"],
      image: elishaImg,
      color: "#ff2d55"
    },
    {
      name: "Rihanna Natareno",
      lastName: "Natareno",
      firstName: "Rihanna",
      role: "ANALYSTE SOCIOCULTURELLE",
      bio: <>Mon nom est Rihanna Natareno, je suis une étudiante finissante au Collège Lasalle dans le programme de sciences humaines. Je m’intéresse profondément sur les enjeux sociaux et juridiques qui entournent notre société. Dans le cadre de ce projet, je m’intéresse à explorer sur la prostitution, car il s’agit d’un sujet qui est notamment sensible et rarement dialoguer. Mon objectif face à ce projet n’est pas de porter un jugement, mais de mieux comprendre l’englobement des personnes en situation de prostitution, et de sensibiliser le public sur la réalité derrière ce sujet qui reste tabou. Ce projet représente pour moi une opportunité de développer un regard plus objectif, mais aussi plus empathique, sur une réalité sociale complexe.</>,
      quote: "La réalité humaine ne tient pas dans une définition préconçue.",
      interests: ["ENJEUX SOCIAUX", "SENSIBILISATION", "HUMANITÉS"],
      image: rihannaImg,
      color: "#9d5cfc"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#030303] text-white">
      {/* Cinematic Intro Header */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
          <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay z-10" />
          <div className="grid-overlay opacity-30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-red-500 font-black uppercase text-[10px] mb-8 block"
          >
            L'ÉQUIPE DERRIÈRE LE PROJET
          </motion.span>
          <h1 className="text-8xl md:text-[12rem] font-serif font-black tracking-tighter leading-[0.8] mb-16">
            L'equipe des <span className="italic block text-zinc-600">Redactrices.</span>
          </h1>
          <div className="flex items-center justify-center gap-12 mt-12">
            <div className="w-24 h-px bg-zinc-800" />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="p-4 rounded-full border border-white/10"
            >
              <ArrowDown size={20} className="text-zinc-500" />
            </motion.div>
            <div className="w-24 h-px bg-zinc-800" />
          </div>
        </motion.div>
      </section>

      {/* Deep Dive Profiles */}
      <section className="relative px-6 pb-64 space-y-[40vh]">
        {authors.map((author, idx) => {
          const sectionRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: sectionRef,
            offset: ["start end", "end start"]
          });

          const xTranslate = useTransform(
            scrollYProgress,
            [0, 1],
            idx % 2 === 0 ? [-100, 100] : [100, -100]
          );

          const yTranslate = useTransform(scrollYProgress, [0, 1], [100, -100]);

          return (
            <div
              key={idx}
              id={author.firstName.toLowerCase()}
              ref={sectionRef}
              className={`max-w-7xl mx-auto flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center relative`}
            >
              {/* Floating Background Glow */}
              <motion.div
                style={{ y: yTranslate }}
                className={`absolute ${idx % 2 === 0 ? '-right-20' : '-left-20'} top-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-10`}
              />
              {/* Visual Column */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 group relative"
              >
                {/* Massive Name Background - Parallax Editorial style */}
                <motion.div
                  style={{ x: xTranslate }}
                  className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-left-64' : '-right-64'} z-0 opacity-[0.07] whitespace-nowrap pointer-events-none`}
                >
                  <span
                    className="text-[25rem] font-serif font-black italic tracking-tighter uppercase select-none"
                    style={{
                      WebkitTextStroke: '2px white',
                      color: 'transparent'
                    }}
                  >
                    {author.lastName}
                  </span>
                </motion.div>

                <motion.div
                  style={{ scale: useTransform(scrollYProgress, [0, 1], [0.95, 1.1]) }}
                  className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 group-hover:border-red-500/30 transition-all duration-700 shadow-2xl"
                >
                  {/* Interactive Grain Overlay */}
                  <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-[0.16, 1, 0.3, 1]"
                  />

                  {/* Vertical Decorative Bar */}
                  <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-red-600 to-purple-600 opacity-60" />
                </motion.div>

                {/* Floating ID Card snippet */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`absolute -bottom-12 ${idx % 2 === 0 ? '-right-12' : '-left-12'} p-8 glass-card border-red-500/20 max-w-[280px] hidden md:block`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-widest uppercase mb-1">{author.firstName}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{author.role}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Narrative Column */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full lg:w-1/2 space-y-12"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <span className="text-red-500 font-black text-xs tracking-[0.4em] uppercase">DOSSIER PERSO</span>
                    <div className="h-px flex-1 bg-zinc-800" />
                  </div>
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none group">
                    {author.name}
                    <span className="inline-block w-4 h-4 bg-red-600 rounded-full ml-4 animate-pulse" />
                  </h2>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-8 -left-8 text-white/5 w-20 h-20 -z-10" />
                  <p className="text-2xl md:text-3xl font-light italic text-zinc-300 leading-relaxed border-l-2 border-red-600/30 pl-10">
                    {author.quote}
                  </p>
                </div>

                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl">
                  {author.bio}
                </p>

                <div className="flex flex-wrap gap-4 pt-10">
                  {author.interests.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, borderColor: '#ff2d55' }}
                      className="px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase transition-all"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* Final Call to Action Section */}
      <section className="py-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5 blur-[200px] -z-10" />
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h3 className="text-4xl md:text-7xl font-serif font-black italic tracking-tighter mb-12">
            Notre combat est académique, <br />mais notre engagement est <span className="text-red-500 underline">humain.</span>
          </h3>
          <p className="text-zinc-500 text-xl font-light mb-16 max-w-2xl mx-auto italic">
            "Le projet Étiquette & Réalité ne se contente pas d'exposer des faits, il cherche à transformer la perception sociale de la marginalité."
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;


