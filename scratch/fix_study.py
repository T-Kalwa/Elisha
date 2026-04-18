import os

file_path = "c:\\Users\\tegra\\OneDrive\\Desktop\\Elisha\\src\\pages\\Study.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_index = -1
for i, line in enumerate(lines):
    if "Pour conclure, les normes sociales et juridiques influence la" in line:
        target_index = i
        break

if target_index != -1:
    new_line = '                                            « Pour conclure, les normes sociales et juridiques influence la <GlossaryLink termId="stigmatisation" label="stigmatisation" onSelect={setActiveChapter} /> sur ceux qui pratiquent la prostitution, elles les affectent dans les relations sociales, leur accès aux ressources ainsi que leur protection. Malgré qu’il y ait eu des évolutions dans les débats, l’image de la prostitution reste visualisée par rapport aux normes et aux jugements. » [5]\n'
    lines[target_index] = new_line
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully updated line at index", target_index)
else:
    print("Target line not found")
