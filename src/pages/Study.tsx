import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Clock, Users, Brain, List, Shield, BookOpen, FileText, ShieldCheck } from 'lucide-react';
import freudImg from '../assets/freud.jpg';
import breuerImg from '../assets/Josef brueur.jpeg';

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
    const { scrollYProgress } = useScroll();
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
                                <p className="text-2xl md:text-3xl text-zinc-500 font-light max-w-4xl mx-auto italic font-serif">En quoi la stigmatisation sociale influence les conditions de vie sur ceux qui pratiquent la prostitution de nos jours ?</p>
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
                        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[100]">
                            <button onClick={() => setActiveChapter(null)} className="px-10 py-4 bg-red-600 text-white text-[12px] font-black uppercase tracking-[0.5em] rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">RETOURNER AU SOMMAIRE</button>
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
                                            <p className="text-zinc-500 text-xl font-light leading-relaxed text-justify">Par conséquent, nous estimons que cette stigmatisation impacte les conditions d'existence des individus touchés, en particulier en accentuant les jugements sociaux et en restreignant leur sentiment de légitimité.</p>
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
                                                <p>En parallèle, World History Encyclopédia confirme que dans la Grèce Antique, une femme qui se prostituait et qui était éduquée s’identifiait comme une hétaïre. Elle participait généralement dans des symposions ou des soirées de consommations situées dans des maisons privées.</p>
                                                <p>Leur statut social était varié mais majoritairement elles étaient des esclaves, en revanche elles avaient des compétences uniques d’éveiller le désir des hommes par la danse, la musique, la culture et l’esprit[2]. Dans la Grèce Antique, elles ont été un symbole artistique et littéraire puisqu’elles offraient un service plus coûteux et plus charmeur au contraire de la prostitution de rue ou bien dans les maisons closes.</p>
                                                <p>Au contraire, à Rome la prostitution était légalisée mais les femmes étaient enregistrées et par conséquences elles perdaient leurs droits. En revanche, dans la société des Hébreux et les Musulmans, elles étaient perçues comme interdites.</p>
                                                <p>De plus, en 476 la chute de l’Empire romain a engendré une tentative d’abolition ou de limitation de la prostitution, qui a mené à l’échec. Par la suite, au Moyen-Âge, l’Église condamnait ceux qui pratiqué la prostitution, par défaut en raison de la pauvreté elle continuait à persister dans la société.</p>
                                                <p>Les autorités étaient indécises entre la tolérance et la prohibition du travail du sexe, cependant c’est l’époque qui développe l’invention des maisons closes et l’organisation plus structurée.</p>
                                                <p>Plus spécifiquement de la prostitution au Canada, l’Encyclopédie Canadienne affirme que dès les années 1800 elle était active principalement dans des maisons closes et dans des quartiers sous-développés comme les basses villes à Ottawa et Québec ainsi que près des quais Halifax, Saint-John et Kingston offrant des tables de jeu en plus des services sexuels et de l’alcool.</p>
                                                <p>Au cours de la première moitié du 19e siècle, dans ces villes ces activités étaient très rentables. Grâce au développement des chemins de fer, il s’est produit une hausse de migration dans l'Ouest, majoritairement des hommes célibataires ce qui a amplifié le travail du sexe.</p>
                                                <p>Arrivée en 1890, les renforcements juridiques sont plus stricts, ce qui cause des difficultés aux maisons closes et une augmentation de la visibilité de la prostitution exercée dans les espaces publics.</p>
                                                <p>Une augmentation s’est produite face à la prostitution suite à la Première Guerre Mondiale, car les femmes n’avaient pas beaucoup d’accès à des emplois dès le retour des hommes au travail. Tandis qu’au cours de la Seconde Guerre Mondiale, la prostitution vit une diminution étant donné qu’il y avait plus d’emplois accessibles pour les femmes dans les industries liées à la guerre.</p>
                                                <p>Toutefois, dans le cadre juridique du Canada le travail du sexe n’est pas illégal mais certaines activités liées à celle-ci le deviennent tel que le proxénétisme, les maisons de débauche, les communications publiques pour mettre fin à la prostitution, les transports vers une maison de débauche et toutes activités qui impliquent des mineurs. Plusieurs activités illégales comme celle-ci sont en vigueur dans le système juridique depuis plus de 250 ans.</p>
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
                                                <p>Lors de la pandémie en 2020 plusieurs d’entre eux n’ont pas pu obtenir de l’aide financière, par conséquence leurs conditions sociales et économique se sont aggravées.</p>
                                                <p>En conclusion, malgré certains aspects il y a une amélioration, les cadres juridiques continuent à affecter les conditions de vie des individus dans le milieu de la prostitution en raison de leur influence parfois négative.[3]</p>
                                            </div>
                                        </div>

                                        {/* Sidebar for stats and feminism */}
                                        <div className="md:col-span-4 border-l-2 border-white/5 pl-12 space-y-16">
                                            <div className="space-y-8 text-justify">
                                                <h3 className="text-4xl font-black uppercase text-red-600 tracking-tighter border-b-2 border-red-600 pb-4 italic font-serif">Féminisme</h3>
                                                <p className="text-zinc-500 italic text-xl leading-relaxed text-justify">
                                                    Plusieurs groupes féministes ont joué un rôle crucial pour défendre la perception de la prostitution dans la société. Ils dénoncent les conditions de vie complexes des femmes qui se prostituent ainsi que les conditions « parias ».
                                                </p>
                                                <p className="text-zinc-500 italic text-xl leading-relaxed text-justify">
                                                    Ces organismes affirment que les femmes vivent soumises à l'autorité policière et qu’ils luttent pour un changement du pouvoir des hommes sur les femmes. Les féministes mettent en évidence que ces travailleuses sont dans un système prostitutionnel en tant que victimes.
                                                </p>
                                                <div className="p-8 bg-white/5 rounded-2xl italic text-zinc-400 space-y-6">
                                                    <p>Un aspect primordial de la révolte est le <span className="text-white font-black">double moral</span> dans la société. Lorsqu'un homme achète un service sexuel, il n'est pas jugé comme une femme qui offre ce service.</p>
                                                </div>
                                                <div className="pt-12 space-y-12">
                                                    {[
                                                        { val: '31%', label: 'Causes en tribunaux impliquant des femmes (2008-2014)' },
                                                        { val: '55%', label: 'Se déclarent coupables immédiatement' },
                                                        { val: '81%', label: 'Proportion d\'hommes impliqués en 2014' }
                                                    ].map((s, i) => (
                                                        <div key={i} className="flex gap-4 items-center border-b border-zinc-600 pb-6 group">
                                                            <span className="text-6xl font-black text-white italic font-serif group-hover:text-red-500 transition-colors leading-none">{s.val}</span>
                                                            <span className="text-[14px] uppercase font-black tracking-widest text-zinc-200 leading-tight flex-1">{s.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-24 space-y-8">
                                                <p className="text-zinc-600 italic text-2xl leading-relaxed font-serif border-l-4 border-zinc-800 pl-8 font-light italic text-justify text-justify">
                                                    « Les groupes opprimés et privés de droits [...] ne peuvent généralement pas décider des règles ; ils peuvent seulement agir à l'intérieur. »
                                                </p>
                                                <span className="text-zinc-700 text-[10px] font-black uppercase tracking-widest pl-8 block">— Ann Taylor Allen, Historienne</span>
                                            </div>
                                        </div>
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
                            <JournalSheet title="Sociaux" subtitle="Construction du Stigmate">
                                <div className="font-serif text-zinc-300 leading-relaxed text-lg flex flex-col gap-12">
                                    <div className="grid md:grid-cols-12 gap-16 text-justify">
                                        <div className="md:col-span-8 space-y-12">
                                            {/* Section 1: Construction Sociale */}
                                            <div className="relative pt-20 border-b border-white/5 pb-16">
                                                <span className="text-[18rem] text-red-600 font-black absolute -top-12 -left-12 opacity-40 leading-none text-justify">C</span>
                                                <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-8 relative z-10 pl-12">LA CONSTRUCTION SOCIAL DE LA STIGMATISATION</h3>
                                                <p className="text-2xl md:text-3xl font-light italic relative z-10 pl-12 text-zinc-300 text-justify">
                                                    Comme nous le savons, le travail du sexe n’est pas bien perçu encore aujourd’hui dans la société occidentale. En soit la stigmatisation elle-même ne vient pas des individus mais de la manière que la société perçoit la prostitution en catégorisant ce qui est acceptable et non acceptable.
                                                </p>
                                            </div>

                                            <div className="columns-1 md:columns-2 gap-12 space-y-8 text-zinc-400 text-xl font-light text-justify text-justify">
                                                <p>Pour mieux comprendre cela on peut se tourner vers le texte de Philippe Riutort. Une phrase importante de son œuvre est celle-ci :</p>

                                                <div className="bg-white p-10 shadow-2xl rounded-sm my-8 transform -rotate-1 text-center">
                                                    <p className="text-black text-2xl font-black italic uppercase leading-tight tracking-tighter text-center">
                                                        “Le contrôle social peut être défini comme l’ensemble des dispositifs employés dans une société pour assurer le respect des règles édictées”3.
                                                    </p>
                                                </div>

                                                <p>En effet, nous pouvons l’observer dans les règles écrites et non écrits sur les normes sociales à adopter. Le controle social est décrit dans l’ouvrage de Riutord en d'autres mots comme un moyen systématique qui peut être exercé à la fois de manière juridique ou social, puis elle sert à encadrer une société afin qu’ils puissent respecter les valeurs et se conformer aux normes.</p>
                                                <p>Le côté juridique serait lorsqu’on met en place des lois ou des sanctions pour s’assurer de maintenir l’ordre. En revanche le côté social serait tous ce qui n’est pas écrit en tant que tel mais qui affecte aussi la vie d’un individu comme : le regard déshumanisant, les rumeurs ou encore les moqueries.</p>
                                                <p>Lorsque nous effectuons une transgression dans les normes imposées, les agents de socialisations qui nous entourent comme la famille, les amis ou encore nos collègues vont réagirent pour maintenir l’ordre social et vous empêcher d'être stigmatisé.</p>
                                                <p>Un peu plus loin, toujours dans l’œuvre du professeur en sciences sociales, il nous explique le cas du sociologue américain Howard S.Becker qui élabore le concept d’entrepreneur morales qui peut être par exemple les médias, la religion, les politiciens etc.</p>
                                                <p>Il nous explique comment il y a des individus de la société qui vont imposer leur vision du monde en créant des stéréotypes voire une méfiance à la vue d'un comportement qui va à l’encontre de leurs visions. Il énonce l’exemple de la législation de la marijuana aux États-Unis pour nous le faire comprendre.</p>
                                                <p>Si maintenant on s’intéresse à notre sujet on peut comprendre qu’en fait les normes sociales ne sont pas innées mais elles sont imposées à la population afin que ce ne soit plus les entrepreneurs moraux ou les institutions qui s’occupe de maintenir l’ordre mais que même entre les citoyens on s’assure de respecter les normes.</p>
                                                <p>Si on applique maintenant cela à la prostitution on peut voir que ce phénomène est directement influencé par le control social. En effet ce qui est considéré comme " le plus vieux métier au monde” est entouré d’une étiquette péjorative qui va à l’encontre des valeurs morales et éthique en ce qui concerne la sexualité dans le monde occidentale.</p>
                                                <p>Cette “infraction” morales va attirer les regards déshumanisants voire jusqu’à l’exclusion totale de la société. Bien que ces conséquences puissent sembler sans aucune répercussion concrète, les simples regards peuvent s’aggraver et aller jusqu’au niveau dont la person est traitée ou encore perçus par les autres.</p>
                                                <p>Comme le montre l’article sur l’évolution du discours féministe au Québec écrit par Mensah et Laberge, le travail du sexe est fortement influencé par son contexte social, notamment par la criminalisation présente mais aussi par la persistance de la stigmatisation et de la discrimination envers les personnes qui l’exercent malgré les nombreuses lois juridiques misent en place.</p>
                                                <p>Le projet de loi C-36 qui est entrée en vigueur depuis 2014, interdit le proxénétisme et l'achat de services sexuelles mais ce n'est le cas avec la vente de services sexuelles. Comme le montre l’article Évolution du discours féministe sur « la prostitution » au Québec, le travail du sexe n’est pas perçu comme un « métier comme un autre ».</p>
                                                <p>La prostitution est souvent définie comme un problème social, ce qui renforce encore davantage la stigmatisation. Cette vision crée aussi des divisions entre les femmes elles-mêmes, en opposant celles qui sont considérées comme « respectables » à celles qui sont jugées déviantes (p. 73).</p>
                                                <p>Cette distinction “social” va accentuer leur exclusion au sein même des femmes. Ainsi, la stigmatisation ne reste pas seulement au niveau des idées ou des jugements, mais elle influence concrètement la manière dont ces personnes sont perçues et traitées dans la société et cela parmi leur pair même.</p>
                                                <p>Au sein du mouvement féministe, les points de vue sur la prostitution sont partagés. Certains considèrent les travailleuses du sexe comme des victimes, tandis que d’autres défendent leur autonomie. L'opposition montre à quel point, la perception de cette industrie est construite socialement et reste influençable dépendamment des croyances.</p>
                                            </div>

                                            {/* Section 2: Étiquetage and Déviance */}
                                            <div className="pt-20 border-t border-white/5 text-justify">
                                                <h3 className="text-6xl font-black italic text-white uppercase tracking-tighter mb-12 uppercase text-justify">Étiquetage et la déviance :</h3>
                                                <div className="columns-1 md:columns-2 gap-12 space-y-8 text-zinc-400 text-xl font-light text-justify text-justify">
                                                    <p>Deuxièmement, Howard Saul Becker, un sociologue américain qui s’est inspiré de l’interactionnisme symbolique et Erving Goffman pour expliquer la déviance et l’étiquetage. Avant tout, il affirme que la réalité de nos comportements sont construits par nos interactions majoritairement influencé par les normes qui nous entourent et jugée déviant ou nomaux par des contextes sociaux.</p>
                                                    <p>Plus précisément, les groupes sociaux ont ces propres normes afin de les faire appliquer dans des situations. Les normes sociales ce sont ce qui juge de ce qui est le mal et ce qui est le bien.</p>
                                                    <p>Il n’existe pas forcément une seule norme social universelle mais bien plusieurs normes sociales tout dépendant des valeurs de ces mondes sociaux. Une norme peut être à la fois écrite à l’image des forces policiers de l’état qui ont le devoir de s’assurer que les citoyens respectent les lois.</p>
                                                    <p>D’un autre côté, il y a les normes informelles, qui sont respecter car soit qu’ils sont des nouvelles normes que la société à accepter ou bien ils sont traditionnels, par exemple donner ces remerciement lorsqu’une personne tient la porte, par signe de courtoisie.</p>
                                                    <p>Lorsqu’un individu pose une action qui va à l’encontre de ces normes, la société peut traiter cet individu comme « étranger » dont l’action de le rejeté.4 La théorie de l’étiquetage n’est pas une action en temp que telle qui fait qu’un individu soit déviant mais plutôt l’étiquette que l’on puisse coller.</p>
                                                    <p>Par conséquence, on lui colle une étiquette bien que son comportement puisse changer, de plus il influence une certaine image sur l’individu considérer déviant ainsi qu’il exige une attente que l’individu agisse de cette façon.</p>

                                                    <div className="p-10 border-l-4 border-red-600 bg-white/5 italic shadow-2xl rounded-sm">
                                                        <p className="text-2xl text-zinc-300 leading-relaxed font-serif text-justify text-justify">« dès lors qu’une personne est étiquetée, il semble qu’elle soit enfermée en un cercle infernal ne connaissant aucune issue »</p>
                                                        <span className="text-xs font-sans font-black uppercase tracking-widest mt-6 block opacity-50">— Shlomo Shoham (1970-1991) (p.4)5</span>
                                                    </div>

                                                    <p>En outre, ce comportement peut affecter l’image et la confiance en soi que la personne éprouve. Becker constate que l’identité de l’individu est influencée par l’étiquetage social en fonction si l’on respecte les normes d’un groupe social.</p>
                                                    <p>Cette étiquette représente l’étranger, dont un individu qui enfreint une norme d’une majorité d’un groupe. Il porte l’étiquette de « Déviant » malgré qui ne se considère pas comme l’un de cette étiquette.</p>
                                                    <p>D’un côté, la vision du groupe majoritaire le déviant est un individu qui hors de la normale, en d’autres mots un étranger moral. Tandis que, la vision de l’étranger, soit qui rejette ce titre, soit qui lutte pour ses propres normes ou soit qui se regroupe avec d’autres qui partage les mêmes valeurs.</p>
                                                    <p>La déviance selon Howard Saul Becker, n'existe pas concrètement mais en réalité c’est un regard que les autres jugent envers les comportements qui trouve normal ou anormale. Elle se caractérise comme « Carrière déviante », qui est le processus de la déviance.</p>
                                                    <p>En commençant par la déviance primaire, qui est une frisure du respect de la norme, souvent sans conséquences majeures sur l’identité de cette personne. Par la suite, il y a la déviance secondaire, d’où une réaction sociale se produit, comme le rejet, les sanctions et les étiquetages où l’étranger peut arriver à se définir comme déviant se joindre dans un groupe de « Outsiders ».</p>
                                                    <p>Également, le système social alimente ces réactions en les isolant au lieu de les aider à sortir de cette rejection.6 Comme l’affirme Becker,« Le déviant est celui à qui l’étiquette de déviant a été appliquée avec succès ; le comportement déviant est le comportement que les gens stigmatisent comme tel » (Becker, 1985).7</p>

                                                    <div className="bg-white p-12 shadow-2xl rotate-1 rounded-sm text-black text-center">
                                                        <p className="text-3xl font-black italic leading-tight uppercase tracking-tighter text-justify text-center">« J’ai l’impression d’être une espèce de prostituée, tout le monde veut savoir ce que je fais à chaque instant, en cherchant l’occasion de me critiquer »</p>
                                                        <span className="text-[10px] font-sans font-black uppercase tracking-widest mt-6 block opacity-50 text-center">— Albert Einstein (p.11)8</span>
                                                    </div>

                                                    <p>Le concept d’étiquetage et de déviance nous démontre que la perception de ces années dont la religion fait en sorte que la prostitution s’est perçu d’un regard déviant car la société a cherché à cacher cette réalité par des maisons closes et des cérémonies privées.</p>
                                                    <p>Malgré d’un vue féminisme, la société percevait la prostitution de mal et comme « vulgaire », le laïcisme de nos ère profond. Pour donner suite à cette citation d'Albert Einstein, il est possible d’observer que le regard de la société peut influencer la construction de l’identité d’un individu.</p>
                                                    <p>Bien que la citation d’Albert Einstein ne soit pas un fait dans le contexte de la prostitution, elle élabore la pression du jugement sociale. De plus, on illustre que le jugement est persistant, car il est composé de normes sociaux et morales ancrées dans la société depuis plusieurs années.</p>
                                                    <p className="text-white font-bold italic pt-8 border-t border-white/10 text-justify">En conclusion, les personnes qui sont étiquetées négativement produit la stigmatisation et influence l’identité de soi quotidiennement.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sidebar for Socio-Nuance */}
                                        <div className="md:col-span-4 border-l-2 border-white/5 pl-12 space-y-16">
                                            <div className="space-y-8 text-justify">
                                                <h3 className="text-4xl font-black uppercase text-red-600 tracking-tighter border-b-2 border-red-600 pb-4 italic font-serif">Analyse de Paire</h3>
                                                <p className="text-zinc-500 italic text-xl leading-relaxed text-justify">
                                                    La stigmatisation ne reste pas seulement au niveau des idées ou des jugements, mais elle influence concrètement la manière dont ces personnes sont perçues.
                                                </p>
                                                <div className="bg-red-600/10 p-10 border border-red-600/20 rounded-[3rem] text-zinc-300 italic text-justify text-justify">
                                                    « Cette vision crée aussi des divisions entre les femmes elles-mêmes, en opposant celles qui sont considérées comme "respectables" à celles qui sont jugées déviantes. »
                                                </div>
                                            </div>

                                            <div className="pt-24 opacity-30 text-center">
                                                <ShieldCheck size={80} className="text-zinc-500 mb-6 mx-auto" />
                                                <span className="text-[10px] font-black tracking-widest uppercase block text-center">Analyse Sociologique <br />© 2026 Archive Projet</span>
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
                                                    <p>Dans Trois essais sur la théorie sexuelle, Sigmund Freud explique que l’être humain est doté de des pulsions sexuelles, aussi appelées libido12, qui représentent une un désir interne assez puissant qui cherche le plaisir et l'excitation13. Ces pulsions apparaissent très tôt dans le développement et évoluent à travers différentes étapes, ce qui montre que la sexualité est un processus construit et non instantané.</p>

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
                                        </div>
                                        <div className="space-y-4 md:text-right">
                                            <p>[11] Freud, L'interprétation des rêves</p>
                                            <p>[14] Roger & Michelle Perron, Concept de l'Œdipe</p>
                                        </div>
                                    </div>
                                </div>
                            </JournalSheet>
                        )}

                        {/* Other chapters */}
                        {!['hypothese', 'histoire', 'sociaux', 'psycho'].includes(activeChapter || '') && (
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
