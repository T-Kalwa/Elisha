import os

file_path = "c:\\Users\\tegra\\OneDrive\\Desktop\\Elisha\\src\\pages\\Study.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_index = -1
for i, line in enumerate(lines):
    if "{/* Sidebar for Socio-Nuance */}" in line:
        target_index = i
        break

if target_index != -1:
    new_content = [
        '                                            {/* Section 3: IMPACTS SUR LES CONDITIONS DE VIE */}\n',
        '                                            <div className="pt-24 border-t border-white/5 space-y-16">\n',
        '                                                <div className="flex flex-col md:flex-row gap-12 items-start">\n',
        '                                                    <div className="w-24 h-[2px] bg-red-600 mt-6 shrink-0" />\n',
        '                                                    <div className="space-y-6">\n',
        '                                                        <h3 className="text-5xl font-black text-white uppercase tracking-tighter leading-none">Impacts sur les <br />conditions de vie</h3>\n',
        '                                                        <p className="text-zinc-500 text-xl font-light italic max-w-2xl text-justify">\n',
        '                                                            L’exclusion sociale qui entoure le travail du sexe n’est pas seulement blessante, elle a des répercussions directes sur la condition humaine.\n',
        '                                                        </p>\n',
        '                                                    </div>\n',
        '                                                </div>\n',
        '\n',
        '                                                <div className="grid md:grid-cols-2 gap-16">\n',
        '                                                    <div className="space-y-8 text-zinc-400 text-xl font-light text-justify">\n',
        '                                                        <p>\n',
        '                                                            L’exclusion social qui entoure le travail du sexe n’est pas seulement blessante elle a des répercussions aussi directes sur leur : santé que ce soit physique ou mentale, sur leur accessibilité au service que chaque humain a normalement le droit tel que l’accès au logement, l’accès à l’emploi ou l’isolement social. \n',
        '                                                        </p>\n',
        '                                                        <p>\n',
        '                                                            Psychologiquement, le fait d’être constamment exposé à des jugements péjoratifs peut fortement affecter l’estime de soi des personnes concernées. L’intériorisation de ces perceptions négatives peut engendrer un sentiment de honte, voire une forme de dévalorisation personnelle.\n',
        '                                                        </p>\n',
        '                                                        <div className="p-10 bg-white/5 rounded-3xl border border-white/10 space-y-6">\n',
        '                                                           <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">\n',
        '                                                               <Brain className="text-red-600" size={24} />\n',
        '                                                           </div>\n',
        '                                                           <p className="text-zinc-300 italic">\n',
        '                                                               « Malheureusement ce sont souvent des personnes assez isolées socialement même de leur famille donc c\'est compliqué même d\'extériorisé les réalités de leur journée au travail par exemple. »\n',
        '                                                           </p>\n',
        '                                                        </div>\n',
        '                                                    </div>\n',
        '\n',
        '                                                    <div className="space-y-8 text-zinc-400 text-xl font-light text-justify">\n',
        '                                                        <p>\n',
        '                                                            Au fur et à mesure la pression sociale va contribuer au développement de l’anxiété, le stress ou la dépression. De plus, la peur d’être reconnu et dénoncé peut forcer certaines personnes à vivre dans la discrétion et dans l’isolement, ce qui limite leurs interactions sociales et leur réseau de soutien. \n',
        '                                                        </p>\n',
        '                                                        <p>\n',
        '                                                            Par ailleurs, cette <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> peut également freiner la recherche d’aide, notamment en matière de santé mentale, par crainte d’être jugé ou mal compris. \n',
        '                                                        </p>\n',
        '                                                        <p className="text-white font-black uppercase tracking-widest text-sm pt-8 border-t border-zinc-800">\n',
        '                                                            Précarité Renforcée\n',
        '                                                        </p>\n',
        '                                                        <p className="text-zinc-500 italic">\n',
        '                                                           Ces différentes formes d’exclusion fragilisent le bien-être psychologique des individus et compliquent davantage leur accès à des ressources adaptées. La stigmatisation impacte directement les conditions de vie des individus impliqués. L’exclusion sociale que vivent les membres de notre société dans la prostitution va renforcer leur précarité et leur condition de vie assez déjà compliqué.\n',
        '                                                        </p>\n',
        '                                                    </div>\n',
        '                                                </div>\n',
        '                                            </div>\n',
        '\n',
        '                                        {/* Sidebar for Socio-Nuance */}\n'
    ]
    lines[target_index] = "".join(new_content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully inserted Section 3 at index", target_index)
else:
    print("Sidebar comment not found")
