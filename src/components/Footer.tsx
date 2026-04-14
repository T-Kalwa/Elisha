import { Link } from 'react-router-dom';
import { Tag, Globe, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-32 border-t border-white/5 bg-[#08090a] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-2">
          <Link to="/" className="text-2xl font-bold font-serif flex items-center gap-4 mb-10 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(157,92,252,0.3)] group-hover:shadow-[0_0_35px_rgba(157,92,252,0.5)] transition-all group-hover:rotate-6">
              <Tag size={28} className="text-white" />
            </div>
            <span className="text-white font-black tracking-tight">Étiquette <span className="text-purple-400">&</span> Réalité</span>
          </Link>
          <p className="text-zinc-500 max-w-sm leading-relaxed mb-10 text-lg">
            Un projet intégrateur en sciences humaines explorant la stigmatisation sociale au cœur de la prostitution de notre ère.
          </p>
          <div className="flex gap-5">
            {[
              { icon: <Globe size={22} />, label: "Web" },
              { icon: <MessageSquare size={22} />, label: "Contact" },
              { icon: <Mail size={22} />, label: "Mail" }
            ].map((social) => (
              <a 
                key={social.label}
                href="#" 
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
           <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
           <ul className="space-y-4 text-zinc-500 text-lg">
             <li><Link to="/" className="hover:text-purple-400 transition-colors inline-block">Accueil</Link></li>
             <li><Link to="/about" className="hover:text-purple-400 transition-colors inline-block">À Propos</Link></li>
             <li><Link to="/etude" className="hover:text-purple-400 transition-colors inline-block">Études</Link></li>
             <li><Link to="/resources" className="hover:text-purple-400 transition-colors inline-block">Ressources</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Institution</h4>
           <p className="text-zinc-500 text-lg leading-relaxed mb-6 font-light">
             Projet de fin d'études en <span className="text-zinc-300">Sciences Humaines</span>.
           </p>
           <div className="pt-6 border-t border-white/5">
             <p className="text-zinc-600 text-sm font-medium">
               Collège Lasalle, Montréal
             </p>
             <p className="text-zinc-500 text-sm mt-1">
               © 2026 Elisha Kasongo & Rihanna Natareno
             </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

