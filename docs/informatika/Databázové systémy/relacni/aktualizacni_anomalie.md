# Aktualizační anomálie
Aktualizační anomálie jsou nežádoucí vedlejší efekty operací nad databází, které vedou k nekonzistenci nebo ztrátě dat. Vyskytují se v databázích, kde není správně navržen datový model, a to obvykle kvůli redundanci dat.

!!! success "Řešení"
    Aktualizační anomálie lze řešit pomocí procesu zvaného __normalizace__, který zahrnuje rozdělení tabulek do menších tabulek a definování vztahů mezi nimi tak, aby bylo dosaženo odstranění redundantních dat a zajištění konzistence. Při normalizaci se aplikují [normální formy](normalizace.md), které udávají pravidla a omezení pro správný návrh databáze.

## Vkládací anomálie
Tyto anomálie nastávají, když je pro vložení nového záznamu do databáze nutné zadat redundantní data. Například v tabulce "Studenti" s atributy "Jméno", "Příjmení" a "Kurz" by bylo nutné pro studenta zapsaného do více kurzů vložit do tabulky více záznamů s opakujícími se hodnotami "Jméno" a "Příjmení".

## Modifikační anomálie
Tyto anomálie nastávají, když je pro aktualizaci hodnoty v databázi nutné provést změny na více místech.

!!! example "Příklad"
    Pokud chceme změnit název kurzu v tabulce `StudentCourses`, musíme aktualizovat všechny záznamy, které tento kurz obsahují. Pokud některé z těchto záznamů neaktualizujeme správně, databáze se dostane do nekonzistentního stavu.

## Mazací anomálie
Tyto anomálie nastávají, když smazání záznamu z databáze vede k nechtěnému smazání souvisejících dat.