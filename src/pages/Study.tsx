import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GlossaryLink from '../components/GlossaryLink';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Clock, Users, Brain, List, Shield, BookOpen, FileText, ShieldCheck, ExternalLink, Video, Heart } from 'lucide-react';
import freudImg from '../assets/freud.jpg';
import breuerImg from '../assets/Josef brueur.jpeg';
import fem1 from '../assets/feminisme 1.jpeg';
import fem2 from '../assets/feminisme 2.jpeg';
import hysterieImg from '../assets/hysterie.jpeg';
import inconscienceImg from '../assets/inconscience.jpeg';

const JournalSheet = ({ title, subtitle, children }: any) => (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="bg-[#0c0d0e] border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-12 border-b-2 border-white/10 pb-12">
                    <span className="text-red-600 font-sans font-black uppercase text-[12px] tracking-[0.5em]">ÉDITION SPÉCIALE 2026</span>
                    <div className="text-right flex flex-col items-end">
                        <span className="text-zinc-500 italic text-2xl font-serif">« {subtitle} »</span>
                        <span className="text-zinc-700 font-sans font-black uppercase text-[10px] tracking-widest mt-4">Document de Recherche Officiel</span>
                    </div>
                </div>
                <h2 className="text-7xl md:text-[8rem] lg:text-[10rem] font-serif font-black tracking-tighter text-white leading-[0.8] mb-16 uppercase underline decoration-red-600/30 underline-offset-[20px]">{title}.</h2>
                {children}
            </div>
        </div>
    </div>
);


const Study = () => {
    const [activeChapter, setActiveChapter] = useState<string | null>(null);
    const location = useLocation();
    const { scrollYProgress } = useScroll();

    // Reset scroll and set chapter if coming from an external link with state
    useEffect(() => {
        if (location.state && (location.state as any).chapter) {
            setActiveChapter((location.state as any).chapter);
            const termId = (location.state as any).termId;
            if (termId) {
                setTimeout(() => {
                    const el = document.getElementById(`gloss-${termId}`);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.classList.add('bg-red-600/20');
                        setTimeout(() => el.classList.remove('bg-red-600/20'), 2000);
                    }
                }, 500);
            }
        }
    }, [location]);

    const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const chapters = [
        { id: 'hypothese', num: '00', title: 'L\'Hypothèse', desc: 'Analyse et vision du projet', icon: <FileText size={20} /> },
        { id: 'histoire', num: '01', title: 'Histoire', desc: 'L\'évolution du regard à travers les âges', icon: <Clock size={20} /> },
        { id: 'sociaux', num: '02', title: 'Sociaux', desc: 'Analyse sociologique et construction du stigmate', icon: <Users size={20} /> },
        { id: 'psycho', num: '03', title: 'Psycho', desc: 'Impacts psychologiques et réalités individuelles', icon: <Brain size={20} /> },
        { id: 'glossaire', num: '04', title: 'Glossaire', desc: 'Lexique et concepts fondamentaux', icon: <List size={20} /> },
        { id: 'ressources', num: '05', title: 'Ressources', desc: 'Organismes et outils de sensibilisation', icon: <Shield size={20} /> },
        { id: 'references', num: '06', title: 'Références', desc: 'Sources académiques et bibliographie', icon: <BookOpen size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-[#08090a] text-white selection:bg-red-500/50 overflow-x-hidden">
            <AnimatePresence mode="wait">
                {!activeChapter ? (
                    <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <section className="h-screen flex flex-col items-center justify-center relative px-6 text-center">
                            <motion.div style={{ y: yHero, opacity: opacityHero }} className="space-y-12">
                                <span className="text-red-500 font-bold uppercase tracking-[1em] text-[10px] block font-sans">RECHERCHE SOCIO-JURIDIQUE</span>
                                <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-serif font-black tracking-tighter leading-[0.8] uppercase italic">Étiquette <br /> <span className="text-red-600 not-italic">&</span> Réalité.</h1>
                                <p className="text-2xl md:text-3xl text-zinc-500 font-light max-w-4xl mx-auto italic font-serif">En quoi la <GlossaryLink termId="stigmatisation" label="stigmatisation" /> sociale influence les conditions de vie sur ceux qui pratiquent la prostitution de nos jours ?</p>
                            </motion.div>
                        </section>

                        <section className="py-48 bg-[#0c0d0e] border-y border-white/5 relative">
                            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
                                <div className="md:col-span-4 border-r border-white/10 pr-12">
                                    <h2 className="text-7xl font-serif font-black italic text-white uppercase mb-8 leading-none">Sommaire.</h2>
                                    <div className="h-2 w-full bg-red-600 mb-8" />
                                    <p className="text-zinc-500 text-xl font-light font-serif italic mb-12 leading-relaxed">Exploration des strates historiques et sociologiques de la déviance étiquetée.</p>
                                </div>
                                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                    {chapters.map((item, idx) => (
                                        <motion.div key={idx} whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.02)' }} onClick={() => { setActiveChapter(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="group p-10 border-b border-white/5 cursor-pointer flex items-center justify-between transition-all">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-red-600 font-black italic text-2xl font-serif">{item.num}</span>
                                                    <h3 className="text-3xl font-black uppercase text-white group-hover:text-red-500 transition-colors tracking-tighter font-serif">{item.title}</h3>
                                                </div>
                                                <p className="text-zinc-500 italic text-sm font-serif">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </motion.div>
                ) : (
                    <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 pb-48">
                        {/* Floating Chapter Navigation (Right Side) */}
                        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-6">
                            {/* Main Summary Trigger */}
                            <button
                                onClick={() => {
                                    setActiveChapter(null);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="group relative flex items-center justify-center w-14 h-14 bg-zinc-900 border border-white/10 rounded-full transition-all duration-500 hover:border-red-600 hover:bg-black group shadow-2xl"
                                title="Page d'Accueil / Sommaire"
                            >
                                <motion.div animate={{ rotate: activeChapter ? 0 : 360 }}>
                                    <List size={22} className={`${!activeChapter ? 'text-red-600' : 'text-zinc-500'} group-hover:text-white transition-colors`} />
                                </motion.div>
                                <span className="absolute right-full mr-4 px-4 py-2 bg-black/90 text-white text-[10px] font-black tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/5 rounded-lg shadow-2xl">
                                    Sommaire
                                </span>
                            </button>

                            <div className="w-px h-12 bg-white/10" />

                            {/* Chapter Jump Icons */}
                            <div className="flex flex-col gap-4">
                                {chapters.map((ch) => (
                                    <button
                                        key={ch.id}
                                        onClick={() => {
                                            setActiveChapter(ch.id);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 border shadow-xl ${activeChapter === ch.id
                                                ? 'bg-red-600 border-red-500 scale-110'
                                                : 'bg-zinc-900 border-white/5 hover:border-zinc-500'
                                            }`}
                                    >
                                        <div className={`${activeChapter === ch.id ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-300'} transition-colors`}>
                                            {ch.icon}
                                        </div>

                                        {/* Label Tooltip */}
                                        <div className="absolute right-full mr-5 pointer-events-none flex items-center gap-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                                            <div className="px-5 py-3 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-3xl min-w-[180px]">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-red-500 font-black text-[10px] tracking-widest">{ch.num}</span>
                                                    <span className="text-white text-[11px] font-black uppercase tracking-widest truncate">{ch.title}</span>
                                                </div>
                                                <p className="text-zinc-500 text-[9px] italic font-serif leading-tight">{ch.desc}</p>
                                            </div>
                                            <div className="w-2 h-2 bg-black/95 border-r border-t border-white/10 rotate-45 -ml-1" />
                                        </div>

                                        {/* Active Indicator Dot */}
                                        {activeChapter === ch.id && (
                                            <motion.div
                                                layoutId="activeDot"
                                                className="absolute -right-2 w-1.5 h-1.5 bg-red-600 rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {activeChapter === 'hypothese' && (
                            <JournalSheet title="L'Hypothèse" subtitle="Vision de Recherche">
                                <div className="grid md:grid-cols-12 gap-16 text-zinc-300 font-serif leading-relaxed">
                                    <div className="md:col-span-8 space-y-12">
                                        <div className="relative pt-20">
                                            <span className="text-[18rem] text-red-600 font-black absolute -top-12 -left-8 opacity-30 leading-none">À</span>
                                            <p className="text-3xl md:text-4xl font-light italic relative z-10 pl-8 pt-8">
                                                notre avis, la prostitution est considérée dans notre société comme un thème controversé qui remet en cause certaines valeurs partagées. Elle suscite des discussions cruciales, notamment pour déterminer si elle doit être perçue comme un travail ou comme une forme d'exploitation.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-12 text-justify">
                                            <p className="text-zinc-500 text-xl font-light leading-relaxed text-justify">Dans de nombreux contextes, la prostitution est liée à des éléments négatifs comme l'exploitation et des questions relatives au consentement, ce qui participe à une image sociale généralement péjorative.</p>
                                            <p className="text-zinc-500 text-xl font-light leading-relaxed text-justify">Par conséquent, nous estimons que cette <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> impacte les conditions d'existence des individus touchés, en particulier en accentuant les jugements sociaux et en restreignant leur sentiment de légitimité.</p>
                                        </div>
                                        <div className="bg-white p-16 rounded-sm shadow-2xl transform -rotate-1">
                                            <p className="text-black text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter italic text-center">« Elle reste un phénomène largement marginalisé, favorisant la persistance de conditions de vulnérabilité. »</p>
                                        </div>
                                        <p className="text-zinc-400 text-2xl font-light italic border-l-4 border-red-600 pl-12 text-justify">Nous n'adoptons pas une position pro ou anti-prostitution, cependant nous sommes d'avis que malgré quelques efforts de régulation légale, elle reste un phénomène largement marginalisé.</p>
                                    </div>
                                    <div className="md:col-span-4 border-l border-white/10 pl-12 space-y-16">
                                        <h3 className="text-4xl font-black uppercase text-white tracking-widest border-b-2 border-red-600 pb-4">Points Clés</h3>
                                        {['CONTROVERSE', 'EXPLOITATION', 'LÉGITIMITÉ', 'VULNÉRABILITÉ'].map((k, i) => (
                                            <div key={i} className="group">
                                                <span className="text-red-600 font-black text-xs tracking-widest block mb-2">{k}</span>
                                                <p className="text-white text-3xl font-bold italic uppercase group-hover:text-red-500 transition-all">{i === 0 ? 'Valeurs remises' : i === 1 ? 'Consentement & Réalité' : i === 2 ? 'Impact sur l\'existence' : 'Risques sécuritaires'}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {activeChapter === 'histoire' && (
                            <JournalSheet title="Histoire" subtitle="Évolution & Stigmate">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-12">
                                    <div className="grid md:grid-cols-12 gap-16 text-justify">
                                        <div className="md:col-span-8 space-y-12">
                                            <div className="relative pt-20">
                                                <span className="text-[18rem] text-red-600 font-black absolute -top-12 -left-12 opacity-30 leading-none">L</span>
                                                <p className="text-3xl md:text-4xl font-light italic relative z-10 pl-12 pt-12 text-white text-justify">
                                                    a prostitution est un métier pratiqué depuis plusieurs années mais pas forcément considéré comme le plus vieux métier. Selon la Fondation Scelles, on retrouve des traces que dans certaines civilisations anciennes, on retrouvait des pratiques d’hospitalité sexuelle, où les femmes étaient offertes aux invités.
                                                </p>
                                            </div>

                                            <div className="columns-1 md:columns-2 gap-12 space-y-8 text-zinc-400 text-xl font-light text-justify">
                                                <p>Tout de même, il existait la prostitution sacrée, qui était pratiquée religieusement par les prêtres. Au cours des années, la prostitution a perdu son aspect sacré et a évolué comme des activités sociales, visant à un aspect économique. </p>
                                                <p>Brièvement, en Grèce la prostitution était sous l’emprise de l’État patriarcal, où seuls les hommes avaient de l’autorité sur les libertés des femmes. Cette activité était autorisée par un système de taxes ainsi que pratiquée dans des lieux spécifiques[1].</p>
                                                <p>En parallèle, World History Encyclopédia confirme que dans la Grèce Antique, une femme qui se prostituait et qui était éduquée s’identifiait comme une hétaïre. Elle participait généralement dans des <GlossaryLink termId="symposions" label="symposions" onSelect={setActiveChapter} /> ou des soirées de consommations situées dans des maisons privées.</p>
                                                <p>Leur statut social était varié mais majoritairement elles étaient des esclaves, en revanche elles avaient des compétences uniques d’éveiller le désir des hommes par la danse, la musique, la culture et l’esprit[2]. Dans la Grèce Antique, elles ont été un symbole artistique et littéraire puisqu’elles offraient un service plus coûteux et plus charmeur au contraire de la prostitution de rue ou bien dans les maisons closes.</p>
                                                <p>Au contraire, à Rome la prostitution était légalisée mais les femmes étaient enregistrées et par conséquences elles perdaient leurs droits. En revanche, dans la société des Hébreux et les Musulmans, elles étaient perçues comme interdites.</p>
                                                <p>De plus, en 476 la chute de l’Empire romain a engendré une tentative d’abolition ou de limitation de la prostitution, qui a mené à l’échec. Par la suite, au Moyen-Âge, l’Église condamnait ceux qui pratiqué la prostitution, par défaut en raison de la pauvreté elle continuait à persister dans la société.</p>
                                                <p>Les autorités étaient indécises entre la tolérance et la prohibition du travail du sexe, cependant c’est l’époque qui développe l’invention des maisons closes et l’organisation plus structurée.</p>
                                                <p>Plus spécifiquement de la prostitution au Canada, l’Encyclopédie Canadienne affirme que dès les années 1800 elle était active principalement dans des maisons closes et dans des quartiers sous-développés comme les basses villes à Ottawa et Québec ainsi que près des quais Halifax, Saint-John et Kingston offrant des tables de jeu en plus des services sexuels et de l’alcool.</p>
                                                <p>Au cours de la première moitié du 19e siècle, dans ces villes ces activités étaient très rentables. Grâce au développement des chemins de fer, il s’est produit une hausse de migration dans l'Ouest, majoritairement des hommes célibataires ce qui a amplifié le travail du sexe.</p>
                                                <p>Arrivée en 1890, les renforcements juridiques sont plus stricts, ce qui cause des difficultés aux maisons closes et une augmentation de la visibilité de la prostitution exercée dans les espaces publics.</p>
                                                <p>Une augmentation s’est produite face à la prostitution suite à la Première Guerre Mondiale, car les femmes n’avaient pas beaucoup d’accès à des emplois dès le retour des hommes au travail. Tandis qu’au cours de la Seconde Guerre Mondiale, la prostitution vit une diminution étant donné qu’il y avait plus d’emplois accessibles pour les femmes dans les industries liées à la guerre.</p>
                                                <p>Toutefois, dans le cadre juridique du Canada le travail du sexe n’est pas illégal mais certaines activités liées à celle-ci le deviennent tel que le <GlossaryLink termId="proxenetisme" label="proxénétisme" onSelect={setActiveChapter} />, les maisons de débauche, les communications publiques pour mettre fin à la prostitution, les transports vers une maison de débauche et toutes activités qui impliquent des mineurs. Plusieurs activités illégales comme celle-ci sont en vigueur dans le système juridique depuis plus de 250 ans.</p>
                                                <p>Tout d’abord, avant 1867 dont avant la Confédération, les lois sur le vagabondage criminalisaient les travailleurs du sexe. Il n’y avait pas de nécessité de se comporter de manière perturbatrice pour être arrêté, toutefois l’application de la loi était irrégulière portant majoritairement à l’encontre des femmes.</p>
                                                <p>Après 1867, une loi a été mise à l’application par but de protéger les femmes et de punir les proxénètes. Néanmoins, grâce à l’adoption du Code criminel en 1892, d’où s’est prohibé les maisons closes et la prostitution dans les rues, de ce fait ils observent que la majorité des arrestations étaient des femmes donc c’est pourquoi qu’on peut constater que l’objectif de protection n’est pas réellement atteint.</p>
                                                <p>Entre les années 1920 à 1970, les débats publics sur la prostitution connaissent une baisse ainsi que sa visibilité est de plus en plus inconnue.</p>
                                                <p>À partir de 1970 à 1980, les débats publics ont refait surface, à l’égard de la visibilité de la prostitution dans les rues. Dans ce cas, il y avait deux visions qui s’opposer dont une approche répressive pour lutter au renforcement des lois sur la prostitution et de l’autre côté une approche réformiste sociale qui opte pour l’amélioration des droits des travailleurs du sexe.</p>
                                                <p>En 1983, le Comité Fédéral propose des sanctions sévères contre la prostitution ainsi que des réformes, comme la décriminalisation partielle des maisons de débauche. En résultat, seulement la proposition de l’approche répressive est retenue.</p>
                                                <p>Deux ans après, les lois concernant le vagabondage ont été remplacées par la loi sur la communication. Elle renforce la responsabilité des clients et des hommes ainsi que les sanctions, surtout lorsqu’il y a des mineurs concernés.</p>
                                                <p>En conséquence, cette loi a reçu extrêmement de critiques, notamment à cause d’une atteinte à la liberté d'expression des citoyens. Malgré qu’en 1990, la Cour suprême du Canada affirme qu’elle enfreint les droits, mais juge qu’il est justifié de la limiter.</p>
                                                <p>En outre, plusieurs groupes sociaux comme le Canadian Organizations for the Rights of Prostitutes se fondent en 1983. Malgré cela, l’application des lois ne cessait pas de pénaliser seulement les femmes et la prostitution dans les rues.</p>
                                                <p>Toutefois les années 1990 ont connu une évolution des débats en s’engagent à mettre en avant les droits, la sécurité et la santé. Plusieurs groupes ont contribué à mettre en place des meilleures conditions de vie, comme la prévention du VIH/SIDA ainsi que la décriminalisation.</p>
                                                <p>Bien qu'en 2013, la Cour Suprême invalide certaines lois pour ne pas mettre en danger la sécurité des travailleurs. Un an plus tard, ils adoptent le projet de loi C-36, afin de criminaliser toute forme d'achat de services sexuels.</p>
                                                <p>Lors de la pandémie en 2020 plusieurs d’entre eux n’ont pas pu obtenir de l’aide financière, par conséquence leurs conditions sociales et économique se sont aggravées. En conclusion, malgré certains aspects il y a une amélioration, les cadres juridiques continuent à affecter les conditions de vie des individus dans le milieu de la prostitution en raison de leur influence parfois négative.[3]</p>
                                            </div>
                                        </div>

                                        {/* Immersive Feminism Section */}
                                        <div className="md:col-span-4 border-l-2 border-white/5 pl-12 space-y-16">
                                            <div className="space-y-8 text-justify">
                                                <h3 className="text-4xl font-black uppercase text-red-600 tracking-tighter border-b-2 border-red-600 pb-4 italic font-serif">Féminisme</h3>
                                                
                                                <div className="relative group overflow-hidden rounded-2xl border border-white/10 mb-8">
                                                    <img src={fem1} alt="Mouvement Féministe" className="w-full aspect-video object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                                </div>

                                                <p className="text-zinc-400 text-xl leading-relaxed italic">
                                                    Plusieurs groupes féministes ont joué un rôle crucial pour défendre la perception de la prostitution dans la société. Ils dénoncent les conditions de vie complexes des femmes qui se prostituent ainsi que les conditions « <GlossaryLink termId="parias" label="parias" onSelect={setActiveChapter} /> ».
                                                </p>
                                                
                                                <p className="text-zinc-500 text-lg leading-relaxed">
                                                    Ces organismes affirment que les femmes vivent soumises à l'autorité policière et qu'ils luttent pour un changement du pouvoir des hommes sur les femmes. Les féministes mettent en évidence que ces travailleuses sont dans un système prostitutionnel en tant que victimes et veulent combattre l'injustice de l'inégalité entre les genres.
                                                </p>

                                                <p className="text-zinc-600 italic text-lg leading-relaxed border-l-2 border-zinc-800 pl-6">
                                                    Nous pouvons constater que spécifiquement les femmes qui sont dans le milieu de la prostitution sont mise de l'avant à des difficultés économiques et à une <GlossaryLink termId="stigmatisation" label="stigmatisation sociale" onSelect={setActiveChapter} /> par une isolement des institutions.
                                                </p>

                                                <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6 text-justify">
                                                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter">La double moral</h4>
                                                    <p className="text-zinc-400 text-lg leading-relaxed">
                                                        En premier lieu, un des aspects primordiaux de la révolte de ces organisations est la <span className="text-white font-bold">double moral</span> dans la société. Il est certes que lorsqu’un homme achète un service sexuel, il n’est pas jugé comme une femme qui offrent ce service.
                                                    </p>
                                                    <p className="text-zinc-500 text-sm leading-relaxed italic">
                                                        Cette situation cause une inégalité envers les femmes puisqu’elles se font stigmatisées en leur étiquetant une image négative. Ces mouvements confirment que la prostitution est influencée majoritairement par les normes sociales et le pouvoir généralement posséder par les hommes.
                                                    </p>
                                                </div>

                                                <div className="pt-8 space-y-6">
                                                    <p className="text-zinc-300 italic text-xl leading-relaxed font-serif border-l-4 border-red-600 pl-8">
                                                        « Les groupes opprimés et privés de droits, tels que les femmes, ne peuvent généralement pas décider des règles du jeu ; ils peuvent seulement agir à l'intérieur de celles-ci, profiter des contradictions inhérentes au système et proposer de nouvelles perspectives. […] Ils partagent certainement les postulats des discours dominants, mais sans les accepter purement et simplement, au contraire, ils les critiquent, les reformulent et parfois même les transforment. »
                                                    </p>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest pl-8 block">— Ann Taylor Allen, Historienne (p.20)</span>
                                                    <p className="text-zinc-500 text-sm italic leading-relaxed pl-8">
                                                        La citation explique que malgré le pouvoir des normes, elles peuvent influencer et remettre en question celle-ci d’une certaine façon.
                                                     </p>
                                                 </div>

                                                <p className="text-zinc-500 text-lg leading-relaxed border-t border-white/5 pt-8">
                                                    De plus, au Canada la prostitution a toujours été tolérée mais à la fois cachée et moralement condamnée. Les féministes cherchent à démontrer que l’application des lois sur la prostitution sont sexistes ainsi qu’il contrôle la sexualité des femmes. Dans ce cas, elles veulent prouver que ces lois sont en vigueur majoritairement pour les femmes.
                                                </p>

                                                <div className="pt-8 space-y-8 bg-red-600/5 p-8 rounded-3xl border border-red-600/10 text-justify">
                                                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Archives Statistique Canada [4]</h4>
                                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">Cependant, dans les archives de Statistique Canada ont montrent que les femmes sont plus criminalisées que les hommes. Dans le rapport entre 2008 à 2009 et 2013 à 2014, 31% des causes liées à la prostitution et réglées en tribunaux ce sont des femmes involucrées.</p>
                                                    
                                                    <div className="space-y-6 border-t border-red-600/10 pt-6">
                                                        {[
                                                            { val: '55%', label: 'Se déclarent coupables' },
                                                            { val: '30%', label: 'Emprisonnement (vs 22% hommes)' },
                                                            { val: '41%', label: 'Probation pour femmes (vs 33% hommes)' },
                                                            { val: '81%', label: 'Proportion hommes liée à la prostitution (2014)' }
                                                        ].map((s, i) => (
                                                            <div key={i} className="flex gap-4 items-center group">
                                                                <span className="text-4xl font-black text-white italic font-serif group-hover:text-red-500 transition-colors leading-none">{s.val}</span>
                                                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 leading-tight flex-1">{s.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p className="text-zinc-500 text-[10px] italic pt-6">
                                                        De plus, les données de 2009 à 2014 affirment que 43% des femmes étaient involucrés dans ces activités qui est le plus élevée en comparaison aux autres types de crimes.
                                                    </p>
                                                </div>

                                                <div className="relative group overflow-hidden rounded-2xl border border-white/10 my-12">
                                                    <img src={fem2} alt="Réforme Sociale" className="w-full aspect-[4/5] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                                </div>

                                                <div className="space-y-6 border-l-2 border-red-600 pl-8">
                                                    <div className="flex items-center gap-3">
                                                        <Shield className="text-red-600" size={20} />
                                                        <span className="text-white font-black uppercase tracking-widest text-xs">W.C.T.U.</span>
                                                    </div>
                                                    <p className="text-zinc-500 text-lg leading-relaxed">
                                                        Woman’s Christian Temparance Union est une des organisations qui opte sur une vision plus <GlossaryLink termId="puritaine" label="puritaine" onSelect={setActiveChapter} />. Initialement, elles cherchaient à réformer pour la pureté et la moralité, par la suite elles se sont tournées à une approche plus sociale et réformatrice.
                                                    </p>
                                                    <p className="text-zinc-600 text-sm italic leading-relaxed">
                                                        L’organisations s’est concentrées à instaurer de l’éducation, de la prévention et de l’amélioration aux conditions de vies des prostituées. Après tout, ces mouvements se sont faits critiqués par des approches s’appuyant aux valeurs des classes et des normes sociales. Cependant, il y a permis d’avantager les débats publics et obtenir une voix pour les femmes afin qui s’expriment dans la société.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Final Summary Card */}
                                    <div className="mt-24 bg-white/5 border border-white/10 p-16 rounded-[3rem] text-center max-w-5xl mx-auto shadow-3xl">
                                        <p className="text-zinc-300 text-2xl md:text-3xl font-light italic leading-relaxed">
                                            « Pour conclure, les normes sociales et juridiques influence la <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> sur ceux qui pratiquent la prostitution, elles les affectent dans les relations sociales, leur accès aux ressources ainsi que leur protection. Malgré qu’il y ait eu des évolutions dans les débats, l’image de la prostitution reste visualisée par rapport aux normes et aux jugements. » [5]
                                        </p>
                                    </div>

                                    {/* References Footer */}
                                    <div className="mt-24 pt-12 border-t-2 border-zinc-900 grid md:grid-cols-2 gap-12 text-zinc-700 text-[10px] font-black uppercase tracking-widest italic">
                                        <div className="space-y-4">
                                            <p>[1] Brève histoire de la prostitution, Carole Wahnoun, 2004</p>
                                            <p>[2] World History Encyclopedia, HétaÏre, Mark Cartwright, 2021</p>
                                            <p>[3] L’encyclopédie Canadienne, Travail du sexe au Canada, Frances M. Shaver, 2011</p>
                                        </div>
                                        <div className="space-y-4 md:text-right">
                                            <p>[4] Statistique Canada, Les infractions liées à la prostitution - ARCHIVED</p>
                                            <p>[5] Prostitution et traite des femmes, Yolande Cohen, DELBUSSO</p>
                                        </div>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {activeChapter === 'sociaux' && (
                            <JournalSheet title="Sociaux" subtitle="La Construction du Stigmate">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-24">
                                    <div className="grid md:grid-cols-12 gap-16">
                                        <div className="md:col-span-8 space-y-24">
                                            {/* SECTION 1: CONSTRUCTION SOCIALE */}
                                            <div className="relative pt-32">
                                                <span className="text-[24rem] text-red-600 font-black absolute -top-20 -left-20 opacity-10 leading-none pointer-events-none">C</span>
                                                <div className="relative z-10 space-y-12">
                                                    <div className="space-y-4">
                                                        <h2 className="text-sm font-black uppercase tracking-[0.5em] text-red-600">Partie I</h2>
                                                        <h3 className="text-6xl font-black text-white italic uppercase tracking-tighter">La Construction <br />Sociale</h3>
                                                    </div>

                                                    <p className="text-3xl font-light italic text-zinc-200 leading-snug text-justify">
                                                        Comme nous le savons, le travail du sexe n’est pas bien perçu encore aujourd’hui dans la société occidentale. En soit la <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> elle-même ne vient pas des individus mais de la manière que la société perçoit la prostitution.
                                                    </p>

                                                    <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed text-justify">
                                                        <div className="space-y-8">
                                                            <p>Pour mieux comprendre cela on peut se tourner vers le texte de Philippe Riutort. Une phrase importante de son œuvre est celle-ci :</p>
                                                            <div className="p-10 bg-white shadow-2xl rounded-sm transform -rotate-1 group hover:rotate-0 transition-transform duration-500">
                                                                <p className="text-black text-xl font-black italic uppercase leading-tight tracking-tighter text-center">
                                                                    “Le contrôle social peut être défini comme l’ensemble des dispositifs employés dans une société pour assurer le respect des règles édictées”
                                                                </p>
                                                            </div>
                                                            <p>En effet, nous pouvons l’observer dans les règles écrites et non écrits sur les normes sociales à adopter. Le controle social sert à encadrer une société afin qu’ils puissent respecter les valeurs et se conformer aux normes.</p>
                                                        </div>
                                                        <div className="space-y-8">
                                                            <p>Le côté juridique serait lorsqu’on met en place des lois ou des sanctions. En revanche le côté social serait tous ce qui n’est pas écrit mais qui affecte aussi la vie : le regard déshumanisant, les rumeurs ou encore les moqueries.</p>
                                                            <p>Un peu plus loin, il nous explique le concept d'<GlossaryLink termId="entrepreneurs-moraux" label="entrepreneurs moraux" onSelect={setActiveChapter} /> (médias, religion, politiciens) qui vont imposer leur vision du monde en créant des stéréotypes.</p>
                                                            <p className="text-white font-bold italic border-l-2 border-red-600 pl-6">
                                                                La prostitution est entourée d’une étiquette péjorative qui va à l’encontre des valeurs morales occidentales.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* SECTION 2: ÉTIQUETAGE ET DÉVIANCE */}
                                            <div className="pt-32 border-t border-white/5 space-y-16">
                                                <div className="space-y-4">
                                                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-red-600">Partie II</h2>
                                                    <h3 className="text-6xl font-black text-white italic uppercase tracking-tighter">Étiquetage et <br />Déviance</h3>
                                                </div>

                                                <div className="columns-1 md:columns-2 gap-12 text-zinc-400 text-lg leading-relaxed text-justify space-y-8 text-justify">
                                                    <p>Howard Saul Becker affirme que la réalité de nos comportements sont construits par nos interactions majoritairement influencées par les normes. Lorsqu’un individu va à l’encontre de ces normes, la société peut le traiter comme « étranger ».</p>
                                                    
                                                    <div className="break-inside-avoid p-10 border-l-4 border-red-600 bg-white/5 italic shadow-2xl rounded-sm my-8">
                                                        <p className="text-xl text-zinc-300 leading-relaxed font-serif">« Dès lors qu’une personne est étiquetée, il semble qu’elle soit enfermée en un cercle infernal ne connaissant aucune issue »</p>
                                                        <span className="text-[10px] font-sans font-black uppercase tracking-widest mt-6 block opacity-50">— Shlomo Shoham (1970-1991)</span>
                                                    </div>

                                                    <p>C’est la théorie de l’étiquetage : ce n'est pas l'action qui fait un déviant, mais l'étiquette qu'on lui colle. Le déviant est un « étranger moral ». Becker énonce la « Carrière déviante » : de la déviance primaire (sans conséquences majeures) à la déviance secondaire (rejet, sanctions).</p>
                                                    
                                                    <div className="break-inside-avoid bg-white p-12 shadow-2xl rotate-1 rounded-sm text-black text-center my-12">
                                                        <p className="text-2xl font-black italic leading-tight uppercase tracking-tighter mb-4">
                                                            « J’ai l’impression d’être une espèce de prostituée, tout le monde veut savoir ce que je fais à chaque instant... »
                                                        </p>
                                                        <span className="text-[10px] font-sans font-black uppercase tracking-widest block opacity-50">— Albert Einstein (p.11)</span>
                                                    </div>

                                                    <p>La religion a fait en sorte que la prostitution soit perçue comme un regard déviant. Comme l’illustre Einstein, le regard de la société peut influencer la construction de l’identité d’un individu quotidiennement.</p>
                                                </div>
                                            </div>

                                            {/* SECTION 3: IMPACTS SUR LES CONDITIONS DE VIE */}
                                            <div className="pt-32 border-t border-white/5 space-y-16 pb-24">
                                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                                    <div className="w-24 h-[1px] bg-red-600 mt-6 shrink-0" />
                                                    <div className="space-y-6">
                                                        <h2 className="text-sm font-black uppercase tracking-[0.5em] text-red-600">Impacts Humains</h2>
                                                        <h3 className="text-5xl font-black text-white uppercase tracking-tighter leading-none">Conditions de vie</h3>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-16 text-zinc-400 text-lg leading-relaxed text-justify">
                                                    <div className="space-y-12">
                                                        <p className="text-2xl text-zinc-300 font-light italic border-l-2 border-red-600/30 pl-8">
                                                            L’exclusion sociale a des répercussions directes sur la : santé physique et mentale, l’accessibilité au logement, et l’emploi.
                                                        </p>
                                                        <p>
                                                            Psychologiquement, l’exposition constante aux jugements péjoratifs affecte l’estime de soi. L’intériorisation de ces perceptions engendre la honte et la dévalorisation personnelle.
                                                        </p>
                                                        <div className="p-10 bg-red-600/5 rounded-[2rem] border border-red-600/10 flex gap-8 items-start">
                                                            <Brain className="text-red-600 shrink-0" size={32} />
                                                            <p className="text-zinc-300 italic text-lg">
                                                                « Malheureusement ce sont souvent des personnes isolées socialement... c'est compliqué d'extérioriser les réalités de leur travail. »
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-8">
                                                        <p>
                                                            La pression sociale contribue au développement de l’anxiété, du stress ou de la dépression. La peur d’être reconnu force à vivre dans l’isolement, ce qui limite le réseau de soutien vital.
                                                        </p>
                                                        <p>
                                                            Cette <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> freine la recherche d’aide par crainte d’être mal compris. L’exclusion renforce une précarité déjà extrêmement complexe.
                                                        </p>
                                                        <div className="pt-12 border-t border-zinc-800">
                                                            <p className="text-white font-black uppercase tracking-widest text-xs mb-4">Conclusion Sociologique</p>
                                                            <p className="text-zinc-500 italic">
                                                                Le déviant est celui à qui l’étiquette a été appliquée avec succès. L'image de la prostitution reste visualisée par rapport aux normes dominantes.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SIDEBAR ANALYSIS */}
                                        <div className="md:col-span-4 border-l-2 border-white/5 pl-12">
                                            <div className="sticky top-12 space-y-16">
                                                <div className="space-y-8">
                                                    <h3 className="text-3xl font-black uppercase text-red-600 tracking-tighter border-b-2 border-red-600 pb-4 italic font-serif">Analyse de Paire</h3>
                                                    <div className="space-y-6 text-zinc-500 italic text-lg text-justify">
                                                        <p>La stigmatisation ne reste pas seulement au niveau des idées, elle influence concrètement la perception par les pairs.</p>
                                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-zinc-400">
                                                            « Cette vision crée des divisions entre les femmes elles-mêmes, opposant les "respectables" aux "déviantes". »
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pt-24 opacity-20 group hover:opacity-100 transition-opacity">
                                                    <ShieldCheck size={120} className="text-zinc-500 mb-8" strokeWidth={1} />
                                                    <div className="text-[10px] font-black tracking-[0.3em] uppercase leading-loose text-zinc-500">
                                                        Sociological Archive<br />Series 2026<br />Project Elisha
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {activeChapter === 'psycho' && (
                            <JournalSheet title="Psycho" subtitle="L'Étude de l'Inconscient">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-12 text-justify">
                                    <div className="grid md:grid-cols-12 gap-16 text-justify">
                                        <div className="md:col-span-8 space-y-12 text-justify">
                                            {/* Section 1: Introduction */}
                                            <div className="relative pt-20 border-b border-white/5 pb-16 text-justify">
                                                <span className="text-[18rem] text-red-600 font-black absolute -top-12 -left-12 opacity-30 leading-none">N</span>
                                                <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-8 relative z-10 pl-12 uppercase text-justify">INTRODUCTION A LA PSYCHANALYSE</h3>
                                                <p className="text-2xl md:text-3xl font-light italic relative z-10 pl-12 text-zinc-200 text-justify">
                                                    Nous devons d'abord nous intéresser au cerveau derrière la psychanalyse, nous comprendrons que la curiosité envers la psychanalyse que Freud avait provenait de ces propres expériences auprès des patients qui le consultait dû à des cas d’hystérie.
                                                </p>
                                            </div>

                                            <div className="columns-1 md:columns-2 gap-12 space-y-8 text-zinc-400 text-xl font-light text-justify text-justify text-justify">
                                                <p>Dans un de ces travaux effectué en 1895 nommé “l’étude de l’hystérie” Freud à l’aide d’un physicien autrichien nommé Josef Breuer, vont s’intéresser a le début de la psychanalyse que nous connaissons a nos jours. Cette liaison entre les deux autrichiens va prendre fin lorsque Freud va décider de continuer a explorer sa thèse qui affirmait que la sexualité est liée a l’étude de l’hystérie, Brueur n’était point d'accord sur cette généralisation causant la rupture de cette collaboration entre eux.9</p>
                                                <p>La psychanalyse est donc apparue sous ce terme aux alentours de 1896, lors que le neurologue autrichien Sigmund Freud va continuer ces études sur la psychanalyse en dédiant une approche particulière à la sexualité. Elle est très importante dans la psychologie puisqu’elle s’intéresse à l’étude de l’inconscient pour mieux comprendre la réalité vécue chez plusieurs patients comme leurs traumatismes, leurs émotions et leurs répercussions.Jusqu’à nos jours la psychanalyse se pratique encore lors de certaines consultations au près d’un psychologue lors d’une séance mais aussi dans d’autre domaine comme le cinéma, la littérature et le débat social.10</p>
                                                <p>Selon “Le Dictionnaire Larousse”, elle est liée de près à la sexualité de tout être et elle impacte puiseurs sphère de la vie, d’où vient le modèle de Freud, la montagne du moi, surmoi et ça.</p>
                                                <p>Freud accord aussi une attention particulière au rêve de ces patients, il est convaincu qu’à travers ces derniers ils pourrait mieux comprendre leurs traumatismes de manière inconsciente, les plus profond et caché.</p>
                                                <p>En revanche, il affirme aussi dans l’un de ces livres qu’il a écrit, que selon lui les rêve sont une façade ou l’on put apprendre à connaitre les désirs et les fantasme d’un être.11</p>
                                                <p>Dans le cas de la prostitution, la psychanalyse sert a exploré les angles morts qui ne peuvent être naviguer par l'étude sociologique, économique ou encore historique.</p>
                                                <p>Dans cette discipline nous pouvons mieux comprendre comment les relations parentales, l’introduction à la sexualité, les mécanismes de défense ou encore les relations entretenues au cours d’une vie peuvent directement influencer le rapport eu envers la sexualité en général. Bien que la psychanalyse ne puisse généraliser tous les cas entourant le travail du sexe, elle reste primordiale pour pouvoir comprendre le poids qu’à l’étude de l’inconscient sur l’aspect psychologique chez les travailleurs du sexe.</p>
                                            </div>



                                            {/* Section 2: Inconscient */}
                                            <div className="pt-12 border-t border-white/5 space-y-12 text-justify">
                                                <h3 className="text-6xl font-black italic text-white uppercase tracking-tighter uppercase text-justify">L’INCONSCIENT ET LA SEXUALITÉ</h3>
                                                <div className="columns-1 md:columns-2 gap-12 space-y-8 text-zinc-400 text-xl font-light text-justify text-justify text-justify">
                                                    <p>Si nous optons pour une perspective psychanalytique, la sexualité bien qu’elle aille l’air si simple elle est en fait constituée de pulsions sexuelles, de pensée hors de notre contrôle et des expériences passées.</p>
                                                    <p>Dans Trois essais sur la théorie sexuelle, Sigmund Freud explique que l’être humain est doté de des pulsions sexuelles, aussi appelées <GlossaryLink termId="libido" label="libido" onSelect={setActiveChapter} />, qui représentent une un désir interne assez puissant qui cherche le plaisir et l'excitation13. Ces pulsions apparaissent très tôt dans le développement et évoluent à travers différentes étapes, ce qui montre que la sexualité est un processus construit et non instantané.</p>

                                                    <div className="bg-red-600 p-12 rounded-[3.5rem] shadow-2xl text-white italic my-8 text-center text-center">
                                                        <p className="text-2xl font-light leading-relaxed text-center text-center">« Ces pulsions ou désirs peuvent entrer en conflit avec les normes sociales ou les valeurs inculquées par l’entourage. »</p>
                                                    </div>

                                                    <p>C’est à ce moment que se met en place le mécanisme du refoulement, où certains désirs sont rejetés dans l’inconscient, car ils sont jugés inacceptables. Comme le souligne Freud, la sexualité humaine est souvent marquée par des « tendances partielles » qui ne sont pas toujours conscientes ce qui signifie que plusieurs aspects du désir échappent au contrôle de l’individu.</p>
                                                    <p>Par conséquent, même si ces désirs sont refoulés, ils ne disparaissent pas pour autant : ils continuent d’influencer les pensées, les émotions et les actions de manière assez discrètes. Selon Freud, les expériences vécues durant l’enfance, combinées aux mécanismes de défense comme le refoulement, jouent un rôle déterminant dans la manière dont un individu va construire son rapport au corps, au désir et aux relations.</p>
                                                    <p>Si on se base alors sur cette thèse il est donc plus simple de comprendre que certains comportements liés à la sexualité peuvent être influencés par des facteurs inconscients, et qu’ils ne relèvent pas uniquement d’un choix conscient.</p>
                                                    <p>Dans le cadre de la prostitution, cette approche psychanalytique permet d’apporter une compréhension plus nuancée des parcours individuels, sans pour autant les réduire à une seule explication. En effet, si la sexualité est influencée par des expériences passées, des désirs inconscients et des mécanismes de défense, comme le suggère Sigmund Freud dans Trois essais sur la théorie sexuelle, il est possible que certains rapports à la sexualité soient façonnés par des éléments profonds liés à l’histoire personnelle.</p>
                                                    <p>Par exemple, des expériences marquantes, des relations affectives complexes ou encore une construction particulière de l’identité peuvent influencer la manière dont un individu perçoit son corps, ses relations et la sexualité en général. La psychanalyse propose une théorie qui met l’accent sur l'inconscient, mais elle n'annule pas les autres facteurs sociaux, économiques ou culturels, il faut donc ne pas effectuer une généralisation.</p>
                                                    <p>Au lieu d’expliquer la prostitution par une seule cause, cette approche aide à mieux comprendre la diversité des parcours et la complexité des expériences vécues, en tenant compte du rôle que peut jouer l’inconscient dans certains cas.</p>
                                                </div>
                                            </div>

                                            {/* Section 3: Oedipe */}
                                            <div className="pt-20 border-t border-white/5 space-y-12 text-justify">
                                                <h3 className="text-6xl font-black italic text-white uppercase tracking-tighter uppercase text-justify">LE CONCEPT DE L’OEDIPE</h3>
                                                <div className="columns-1 md:columns-2 gap-12 space-y-8 text-zinc-400 text-xl font-light text-justify text-justify text-justify">
                                                    <p>Si l'on souhaite s’intéresser à la sexualité, il est essentiel de d'abord comprendre l’importance et le rôle des premières relations dans le développement d’un individu, notamment les relations parentales.</p>
                                                    <p>Dans cette partie nous allons explorer ce qu’est le concept de l’Œdipe, son influence possible au sujet de la sexualité et les nuances a apporté. Selon le livre ecrit par Roger Perron et Michelle Perron, des psychanalystes, en d'autres termes, ce concept universalise et avance une théorie, celle qu’un enfant a un moment précis de sa croissance va développer une attirance sexuelle défini comme “innocente et inconsciente” pour son parent du sexe opposé en rivalisant avec l’autre parent qui est du même sexe.</p>

                                                    <div className="bg-white p-12 shadow-2xl rounded-sm my-8 -rotate-1 text-black text-center">
                                                        <p className="text-3xl font-black italic leading-tight uppercase tracking-tighter text-justify text-center">« Ce drame est organisateur de la vie psychique. »</p>
                                                        <span className="text-[10px] font-sans font-black uppercase mt-4 block opacity-50 text-center">— Freud lui-même</span>
                                                    </div>

                                                    <p>Au cœur de la lecture on peut comprendre que ce concept est plus complexe qu’un simple désir de commettre un parricide ou de l’inceste mais que c’est un désir caché dans les propos sortant de la bouche des enfants comme la phrase ”mon prince charmant a moi doit être comme mon papa"</p>
                                                    <p>Le fantasme œdipien, est en soi très primordial dans le développement de l’enfant mais cela ne doit pas être confondu avec un fantasme conscient. C'est en fait à travers cela que l’enfant pourra ensuite situer par rapport à la dynamique avec ces parents et qu’il comprendra les normes de la société. Plus tard, lors de son développement il saura construire à partir de cela sa personnalité et son caractère vis à vis ces relations et sa sexualité. Cependant, une nuance est primordiale à énoncé, chaque être humain reste unique et différent. Il reste influençable selon sa culture, son environnement, son éducation et son propre vécu.</p>
                                                </div>
                                            </div>

                                            {/* Section 4: Traumatismes et Névroses */}
                                            <div className="pt-24 border-t border-white/5 space-y-16">
                                                <div className="space-y-4">
                                                    <h2 className="text-sm font-black uppercase tracking-[0.5em] text-red-600">Partie IV</h2>
                                                    <h3 className="text-6xl font-black text-white italic uppercase tracking-tighter">TRAUMATISMES, NÉVROSES ET DÉFENSES</h3>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-16 text-zinc-400 text-lg leading-relaxed text-justify">
                                                    <div className="space-y-8">
                                                        <p>
                                                            Après avoir saisi l’importance du rôle des relations parentales précoces, il est primordial de s’intéresser aux expériences plus difficiles qui marquent toute une existance. Dans son ouvrage, Juan-David Nasio [17] explique que la névrose provient des conflits affectifs non-résolus.
                                                        </p>
                                                        <div className="relative group overflow-hidden rounded-2xl border border-white/10 my-8">
                                                            <img src={hysterieImg} alt="Hystérie" className="w-full aspect-video object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                                                            <div className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest text-white/50">Archives : Étude de l'Hystérie</div>
                                                        </div>
                                                        <p>
                                                            Ce qui entraine certaine personne à être plus vulnérable à l’âge adulte (relations amoureuses compliquées, dissociation avec le corps et les émotions). La manifestation de cette dissociation peut mener à la prostitution.
                                                        </p>
                                                        <div className="p-10 bg-red-600/5 rounded-3xl border border-red-600/10">
                                                            <p className="text-white font-black uppercase tracking-widest text-xs mb-6">Statistiques PubMed</p>
                                                            <div className="space-y-4">
                                                                {[
                                                                    { val: '82%', label: 'Agressions physiques' },
                                                                    { val: '83%', label: 'Menaces avec arme' },
                                                                    { val: '68%', label: 'Viol dans l\'activité' },
                                                                    { val: '84%', label: 'Sans-abrisme declaré' }
                                                                ].map((s, i) => (
                                                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                                                        <span className="text-zinc-500 text-xs font-black uppercase">{s.label}</span>
                                                                        <span className="text-white font-black font-serif italic text-xl">{s.val}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-8">
                                                        <p>
                                                            Les mécanismes de défense sont inconscients, mis en place pour protéger l’individu face à une souffrance trop importante. Parmi cela, le refoulement et la dissociation (le détachement entre émotions et expériences).
                                                        </p>
                                                        <div className="relative group overflow-hidden rounded-2xl border border-white/10 my-8">
                                                            <img src={inconscienceImg} alt="L'Inconscient" className="w-full aspect-[4/5] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                                            <div className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest text-white/50">L'Inconscient et le Moi</div>
                                                        </div>
                                                        <p>
                                                            Comme le dicton scientifique le dit "rien ne se perd tout se transforme", c'est de même que les conflits non résolus durant l’enfance, peuvent réapparaître à l’âge adulte sous différentes formes (anxiété, difficultés relationnelles).
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Section 5: Limites et Angles Morts */}
                                            <div className="pt-24 border-t border-white/5 space-y-12">
                                                <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">LIMITES ET ANGLES MORTS</h3>
                                                <div className="columns-1 md:columns-2 gap-12 text-zinc-400 text-lg leading-relaxed text-justify">
                                                    <p>Bien que la psychanalyse puisse sembler révolutionnaire, il y a des angles morts. Premièrement, basée sur des thèses historiques sur l’hystérie, elle a donc peu de validation purement scientifique moderne.</p>
                                                    <p>Plusieurs concepts, encore plus ceux développer par Freud, sont peu vérifiables et restent fondés sur une thèse. Bien que la sexualité soit primordiale, elle reste par moment "sur-utilisée" dans la science de la psychanalyse.</p>
                                                    <p className="text-white font-bold italic pt-8 border-t border-white/10">
                                                        On peut utiliser l'approche historique, sociale ou économique mais sans oublier les angles morts de chaque analyse.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sidebar for Side-Context */}
                                        <div className="md:col-span-4 border-l-2 border-white/5 pl-12 space-y-16 text-justify">
                                            <div className="space-y-8 text-justify">
                                                <h3 className="text-4xl font-black uppercase text-red-600 tracking-tighter border-b-2 border-red-600 pb-4 italic font-serif">Approche Nuancée</h3>
                                                <p className="text-zinc-500 italic text-xl leading-relaxed text-justify">
                                                    La psychanalyse propose une théorie qui met l’accent sur l'inconscient, mais elle n'annule pas les autres facteurs.
                                                </p>
                                                <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 italic text-zinc-400 text-justify text-justify">
                                                    Il ne faut pas effectuer une généralisation. Cette approche aide à mieux comprendre la diversité des parcours et la complexité des expériences vécues.
                                                </div>
                                            </div>
                                            <div className="pt-24 opacity-30 text-center space-y-12">
                                                <div className="space-y-8 filter grayscale hover:grayscale-0 transition-all duration-700 contrast-125 hover:contrast-100">
                                                    <div className="space-y-4">
                                                        <img src={breuerImg} alt="Breuer" className="w-full h-100 object-cover rounded-[2.5rem] border border-white/10 shadow-2xl" />
                                                        <span className="text-[25px] font-black uppercase tracking-[0.4em]">Josef Breuer</span>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <img src={freudImg} alt="Freud" className="w-full h-150 object-cover rounded-[2.5rem] border border-white/10 shadow-2xl" />
                                                        <span className="text-[25px] font-black uppercase tracking-[0.4em]">Sigmund Freud</span>
                                                    </div>
                                                </div>
                                                <div className="pt-12 border-t border-white/5">
                                                    <ShieldCheck size={60} className="text-zinc-500 mb-6 mx-auto" />
                                                    <span className="text-[12px] font-black tracking-widest uppercase block text-center">Analytique Psy <br />© 2026 Archive Projet</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer References */}
                                    <div className="pt-12 border-t border-zinc-900 grid md:grid-cols-2 gap-8 text-[10px] text-zinc-700 font-black uppercase tracking-widest italic font-sans">
                                        <div className="space-y-4">
                                            <p>[9] Freud & Breuer, Étude de l'hystérie, 1895</p>
                                            <p>[10] Psychanalyse, Introduction Générale</p>
                                            <p>[12] Sigmund Freud, Trois essais sur la théorie sexuelle</p>
                                            <p>[17] Juan-David Nasio, L'ouvrage de la névrose</p>
                                        </div>
                                        <div className="space-y-4 md:text-right">
                                            <p>[11] Freud, L'interprétation des rêves</p>
                                            <p>[14] Roger & Michelle Perron, Concept de l'Œdipe</p>
                                            <p>[18] PubMed, Statistiques agressions et sans-abrisme</p>
                                        </div>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {activeChapter === 'glossaire' && (
                            <JournalSheet title="Glossaire" subtitle="Lexique & Concepts Fondamentaux">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-16">
                                    {/* Opening drop-cap paragraph */}
                                    <div className="relative pt-20 border-b border-white/5 pb-16">
                                        <span className="text-[18rem] text-red-600 font-black absolute -top-12 -left-12 opacity-30 leading-none">G</span>
                                        <p className="text-2xl md:text-3xl font-light italic relative z-10 pl-12 text-zinc-300 text-justify">
                                            Les termes et concepts ci-dessous sont essentiels à la compréhension du cadre théorique et sociologique
                                            qui structure cette étude sur la <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> de la prostitution.
                                        </p>
                                    </div>

                                    {/* Terms Grid */}
                                    <div className="grid grid-cols-1 gap-0">

                                        {/* SYMPOSIONS */}
                                        <div id="gloss-symposions" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">01</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Symposions</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Source : Larousse</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>« Chez les Grecs, seconde partie d'un banquet ou d'un festin, consacrée à la boisson, aux jeux, chansons, danses et intermèdes divers. »</p>
                                            </div>
                                        </div>

                                        {/* PARIAS */}
                                        <div id="gloss-parias" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">02</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Parias</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Source : Larousse</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>« Personne exclue socialement, méprisée par un groupe. »</p>
                                            </div>
                                        </div>

                                        {/* PURITAINE */}
                                        <div id="gloss-puritaine" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">03</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Puritaine</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Source : Larousse</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>Synonyme du mot « prude ». Qui affecte une grande rigidité morale ou doctrinale.</p>
                                            </div>
                                        </div>

                                        {/* STIGMATISATION */}
                                        <div id="gloss-stigmatisation" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">04</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Stigmatisation</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Source : Larousse</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>« Critiquer publiquement quelqu'un ou un acte que l'on juge moralement condamnable ou répréhensible » — socialement parlant.</p>
                                            </div>
                                        </div>

                                        {/* ENTREPRENEURS MORAUX */}
                                        <div id="gloss-entrepreneurs-moraux" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">05</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Entrepreneurs Moraux</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Concept Sociologique</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>Individus seuls ou groupe d'individus qui cherchent à influencer un groupe grâce à leur pouvoir.</p>
                                            </div>
                                        </div>

                                        {/* PROXÉNÉTISME */}
                                        <div id="gloss-proxenetisme" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">06</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Proxénétisme</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Concept Juridique</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>Le fait de tirer profit du travail du sexe à travers un autre en le contrôlant monétairement parlant dans certains cas.</p>
                                            </div>
                                        </div>

                                        {/* INTERRACTIONNISME SYMBOLIQUE */}
                                        <div id="gloss-interactionnisme" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">07</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Interractionnisme Symbolique</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Approche Sociologique</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>Est une approche sociologique qui a pour hypothèse que l'individu est influencé et change selon ses interactions autour de lui.</p>
                                            </div>
                                        </div>

                                        {/* L'EXCLUSION SOCIALE */}
                                        <div id="gloss-exclusion-sociale" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">08</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">L'Exclusion Sociale</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Concept Sociologique</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>Le fait d'exclure un individu de manière sociale puisqu'il ne s'intègre pas aux normes et au code social. Parfois cela peut aller jusqu'à l'interdiction à certaines ressources <span className="text-zinc-500 italic">(emploi, logement, aide médicale, aide bancaire)</span>.</p>
                                            </div>
                                        </div>

                                        {/* LIBIDO */}
                                        <div id="gloss-libido" className="group grid md:grid-cols-12 gap-8 border-b border-white/5 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">09</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Libido</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Source : Larousse / Freud</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>« Est utilisée par Freud pour désigner l'énergie des pulsions sexuelles dans ses écrits. »</p>
                                            </div>
                                        </div>

                                        {/* NÉVROSE */}
                                        <div id="gloss-nevrose" className="group grid md:grid-cols-12 gap-8 py-12 hover:bg-white/[0.01] transition-all">
                                            <div className="md:col-span-4 flex items-start gap-6">
                                                <span className="text-red-600 font-black text-5xl font-serif leading-none mt-1">10</span>
                                                <div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">Névrose</h3>
                                                    <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest block mt-1">Psychologie / Psychanalyse</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 text-zinc-400 text-xl font-light leading-relaxed text-justify">
                                                <p>En psychologie, c'est une angoisse, une phobie ou une obsession. C'est le conflit entre le moi contre le ça et le surmoi. C'est un moment où le patient va perdre contact avec la réalité.</p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Pull Quote */}
                                    <div className="bg-white p-12 shadow-2xl rounded-sm transform rotate-1 text-black text-center mt-8">
                                        <p className="text-3xl font-black italic leading-tight uppercase tracking-tighter">« La langue est le miroir de la société — comprendre ses mots, c'est comprendre ses normes. »</p>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {activeChapter === 'ressources' && (
                            <JournalSheet title="Ressources" subtitle="Aide & Sensibilisation">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-24">
                                    <div className="grid md:grid-cols-12 gap-16">
                                        <div className="md:col-span-8 space-y-24">
                                            {/* Section 1: Organismes */}
                                            <div className="space-y-12">
                                                <div className="flex items-center gap-6">
                                                    <Heart className="text-red-600" size={40} />
                                                    <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter">Organismes de Soutien</h3>
                                                </div>
                                                
                                                <div className="grid gap-8">
                                                    {[
                                                        {
                                                            name: "Maison de Marthe",
                                                            link: "https://www.maisondemarthe.com/",
                                                            desc: "Accompagne et soutient les femmes ayant un vécu en lien avec la prostitution dans leur rétablissement et dans toutes les étapes du processus de sortie."
                                                        },
                                                        {
                                                            name: "Stella",
                                                            link: "https://chezstella.org/fr/accueil/",
                                                            desc: "Améliore la qualité de vie des travailleuses du sexe et sensibilise la société aux différentes réalités pour garantir les mêmes droits à la santé et sécurité."
                                                        },
                                                        {
                                                            name: "Tel-Jeunes",
                                                            link: "https://www.teljeunes.com/fr/a-propos",
                                                            desc: "Accompagne les adolescent.e.s du Québec dans leurs découvertes et difficultés en offrant un environnement adapté à leurs réels besoins."
                                                        }
                                                    ].map((org, i) => (
                                                        <a key={i} href={org.link} target="_blank" rel="noopener noreferrer" className="group p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-red-600/50 transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl overflow-hidden relative">
                                                            <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
                                                            <div className="relative z-10 space-y-4 max-w-2xl">
                                                                <h4 className="text-3xl font-black uppercase text-white group-hover:text-red-500 transition-colors">{org.name}</h4>
                                                                <p className="text-zinc-400 text-lg leading-relaxed">{org.desc}</p>
                                                            </div>
                                                            <div className="shrink-0 w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                                                                <ExternalLink className="text-zinc-500 group-hover:text-white" size={24} />
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Section 2: Médiathèque */}
                                            <div className="pt-24 border-t border-white/5 space-y-12">
                                                <div className="flex items-center gap-6">
                                                    <Video className="text-red-600" size={40} />
                                                    <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter">Médiathèque</h3>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    {[
                                                        {
                                                            title: "Portrait de Victime",
                                                            author: "Bruno Savard / Radio-Canada",
                                                            url: "https://ici.radio-canada.ca/tele/le-telejournal-quebec/site/segments/reportage/420640/bruno-savard-victime-prostitution-juvenile",
                                                            desc: "Reportage poignant sur les réalités de la prostitution juvénile au Québec."
                                                        },
                                                        {
                                                            title: "Témoignages et Débat",
                                                            author: "Radio-Canada Info",
                                                            url: "https://ici.radio-canada.ca/info/videos/1-6982055/prostitution-temoignages-et-debat",
                                                            desc: "Discussion de fond sur les réalités du milieu et les enjeux de société."
                                                        }
                                                    ].map((vid, i) => (
                                                        <a key={i} href={vid.url} target="_blank" rel="noopener noreferrer" className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 hover:bg-black transition-colors group">
                                                            <div className="w-full aspect-video bg-zinc-950 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                                                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                <Video size={48} className="text-zinc-800 group-hover:text-red-600 transition-colors" />
                                                            </div>
                                                            <h4 className="text-xl font-black uppercase text-zinc-300 mb-2 truncate">{vid.title}</h4>
                                                            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-4">— {vid.author}</p>
                                                            <p className="text-zinc-500 text-sm leading-relaxed">{vid.desc}</p>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:col-span-4 border-l-2 border-white/5 pl-12">
                                            <div className="sticky top-12 space-y-12">
                                                <div className="p-10 bg-red-600 rounded-[2.5rem] text-white shadow-2xl">
                                                    <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-tight italic">Aide.</h4>
                                                    <p className="text-white/80 font-serif leading-relaxed italic mb-8">
                                                        Besoin d'écoute ou de soutien ? Ces organismes sont là pour vous accompagner sans aucun jugement.
                                                    </p>
                                                    <div className="pt-8 border-t border-white/20 text-4xl font-black tracking-tighter">
                                                        811 <span className="text-sm font-light uppercase opacity-60 tracking-[0.3em] block mt-1">Ligne Info-Santé</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {activeChapter === 'references' && (
                            <JournalSheet title="Références" subtitle="Sources & Bibliographie">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-24">
                                    <div className="grid md:grid-cols-12 gap-16">
                                        <div className="md:col-span-12 space-y-24">
                                            {/* Sections categories */}
                                            <div className="grid md:grid-cols-3 gap-16">
                                                {/* SECTION PSYCHO */}
                                                <div className="space-y-12">
                                                    <div className="relative">
                                                        <span className="text-8xl font-black text-white/5 absolute -top-8 -left-4">P</span>
                                                        <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter border-b-2 border-red-600 pb-4 relative z-10">Psycho</h3>
                                                    </div>
                                                    <div className="space-y-6 text-[10px] text-zinc-500 font-sans font-black uppercase tracking-[0.2em] leading-loose">
                                                        <a href="https://archipel.uqam.ca/16950/1/D4437.pdf" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Archipel UQAM - Dissertation D4437</a>
                                                        <a href="https://www.revmed.ch/revue-medicale-suisse/2010" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Revue Médicale Suisse - Sexologie</a>
                                                        <a href="https://frq.gouv.qc.ca/app/uploads/2021/05/pf_2016_rapport_n.lanctot.pdf" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">FRQ Rapport N. Lanctôt</a>
                                                        <a href="https://mouvementdunid.org/prostitution-societe/" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Mouvement du Nid - Santé Mentale</a>
                                                        <a href="https://www.canada.ca/content/dam/ofovc-ofvac/documents/research/fr/Coercive%20Control%20Sexual%20Exploitation%20Final%20-%20FR.pdf" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Canada.ca - Coercive Control</a>
                                                        <a href="https://pubmed.ncbi.nlm.nih.gov/9698636/" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors underline decoration-red-600 underline-offset-4">Farley M, Barkan H (PubMed 9698636)</a>
                                                    </div>
                                                </div>

                                                {/* SECTION SOCIO */}
                                                <div className="space-y-12">
                                                    <div className="relative">
                                                        <span className="text-8xl font-black text-white/5 absolute -top-8 -left-4">S</span>
                                                        <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter border-b-2 border-red-600 pb-4 relative z-10">Socio</h3>
                                                    </div>
                                                    <div className="space-y-6 text-[10px] text-zinc-500 font-sans font-black uppercase tracking-[0.2em] leading-loose">
                                                        <a href="https://www.universalis.fr/encyclopedie/interactionnisme-symbolique/" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Interactionnisme - Universalis</a>
                                                        <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/violences/exploitation-sexuelle" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Gouvernement Québec - Définitions</a>
                                                        <a href="https://shs.cairn.info/sociologie-de-la-prostitution" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Cairn.info - Sociologie Prostitution</a>
                                                        <a href="https://shs.cairn.info/revue-deviance-et-societe-2010" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Revue Déviance et Société</a>
                                                        <a href="https://www.erudit.org/fr/revues/bhp/2006-v15-n1-bhp04290/1056086ar/" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">Érudit - Bulletin d'histoire politique</a>
                                                    </div>
                                                </div>

                                                {/* SECTION HISTOIRE */}
                                                <div className="space-y-12">
                                                    <div className="relative">
                                                        <span className="text-8xl font-black text-white/5 absolute -top-8 -left-4">H</span>
                                                        <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter border-b-2 border-red-600 pb-4 relative z-10">Histoire</h3>
                                                    </div>
                                                    <div className="space-y-6 text-[10px] text-zinc-500 font-sans font-black uppercase tracking-[0.2em] leading-loose">
                                                        <a href="https://thecanadianencyclopedia.ca/fr/article/prostitution" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">L'Encyclopédie Canadienne</a>
                                                        <a href="https://crides.fondationscelles.org/mod/resource/view.php?id=18" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">CRIDES - Archives Fondation Scelles</a>
                                                        <a href="https://www.worldhistory.org/trans/fr/1-19387/hetaire/" target="_blank" rel="noopener" className="block hover:text-red-500 transition-colors">World History - L'Hétaïre</a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* BIBLIOGRAPHIE LIVRES */}
                                            <div className="pt-24 border-t border-white/5 grid md:grid-cols-2 gap-16 pb-24">
                                                <div className="space-y-12">
                                                    <h3 className="text-xs font-black text-red-600 uppercase tracking-[0.5em]">Bibliographie Papier</h3>
                                                    <ul className="space-y-8 text-xl font-light italic text-zinc-400">
                                                        <li className="p-8 bg-white/5 rounded-2xl border border-white/10 group hover:border-red-600 transition-colors">
                                                            <span className="text-white font-black not-italic block mb-2 uppercase text-sm tracking-widest">Danielle Lacasse</span>
                                                            “La prostitution féminine à Montréal 1945-1970”, Édition Boréal
                                                        </li>
                                                        <li className="p-8 bg-white/5 rounded-2xl border border-white/10 group hover:border-red-600 transition-colors">
                                                            <span className="text-white font-black not-italic block mb-2 uppercase text-sm tracking-widest">Yolande Cohen</span>
                                                            “Prostitution et traite des femmes”, Édition Delbusso
                                                        </li>
                                                        <li className="p-8 bg-white/5 rounded-2xl border border-white/10 group hover:border-red-600 transition-colors">
                                                            <span className="text-white font-black not-italic block mb-2 uppercase text-sm tracking-widest">C. Deschamps & A. Souyris</span>
                                                            “Femme publiques Les féminismes à l’épreuve”, Éditions Amsterdam
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="space-y-12">
                                                    <h3 className="text-xs font-black text-red-600 uppercase tracking-[0.5em]">Ouvrages Fondateurs</h3>
                                                    <ul className="space-y-8 text-xl font-light italic text-zinc-500">
                                                        <li>Juan-David Nasio, <span className="text-zinc-300">"L'ouvrage de la névrose" (2005)</span></li>
                                                        <li>Sigmund Freud, <span className="text-zinc-300">"Trois essais sur la théorie sexuelle" (2011)</span></li>
                                                        <li>Perron & Perron-Borelli, <span className="text-zinc-300">"Concept de l'Oedipe" (2001)</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {/* Other chapters placeholder fix */}
                        {!['hypothese', 'histoire', 'sociaux', 'psycho', 'glossaire', 'ressources', 'references'].includes(activeChapter || '') && (
                            <JournalSheet title="À Suivre" subtitle="Édition en cours">
                                <div className="py-64 text-center space-y-8">
                                    <h2 className="text-7xl font-serif font-black italic text-zinc-900 uppercase">Chapitre Suivant.</h2>
                                    <button onClick={() => setActiveChapter(null)} className="mt-12 px-12 py-6 rounded-full border border-white/10 text-zinc-500 hover:text-white transition-all uppercase text-[10px] font-black tracking-widest uppercase font-sans">Revenir au Sommaire</button>
                                </div>
                            </JournalSheet>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Study;