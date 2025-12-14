# Von Neumannova architektura
Von Neumannova architektura je model počítače, který navrhl matematik John von Neumann v roce 1945. Tento model definuje základní strukturu a principy fungování počítače s uloženým programem, což znamená, že programové instrukce i data jsou uloženy ve stejné paměti.

Základní komponenty von Neumannovy architektury zahrnují:

- __Operační paměť__: Slouží k uchovávání zpracovávaného programu, dat a výsledků výpočtů.
- __Aritmeticko-logická jednotka (ALU)__: Provádí veškeré aritmetické výpočty a logické operace.
- __Řídicí jednotka__: Řídí činnost všech částí počítače prostřednictvím řídicích signálů.
- __Vstupní a výstupní zařízení__: Umožňují vstup dat a programů do počítače a výstup výsledků zpracování.

!!! example "Von Neumannova architektura"
    ![von_neuman](../../images/von_neumann.png)

!!! question "Vlastnosti"
    1. Struktura počítače je nezávislá na typu řešené úlohy - počítač se programuje obsahem paměti
    2. Instrukce a data sdílí jednu a tu samou paměť
    3. Paměť je rozdělena do stejně velkých buněk
    4. Program je tvořen posloupností příkazů
    5. Změna pořadí provádění instrukcí se vyvolá podmíněným nebo nepodmíněným skokem
    6. Pro reprezentaci čísel se používá dvojková číselná soustava
    7. Během výpočtu nelze s počítačem komunikovat
    8. Vstupy a výstupy jsou napojeny přímo na ALU

!!! failure "Omezení Von Neumannovy architektury"
    Rychlost zpracování instrukcí dnešními procesory je výrazně vyšší než rychlost komunikace s pamětí, což zpomaluje celý výpočet. Procesor musí často čekat na přesun potřebných dat z paměti nebo do ní. Problém se zhoršuje s každou novou generací procesorů, protože jejich rychlost a velikost paměti rostou rychleji než propustnost sběrnice.

Alternativou k von Neumannově architektuře je [harvardská architektura](./hardvarska_architektura.md), která odděluje paměť pro instrukce a data, což umožňuje paralelní zpracování a může vést k vyšší rychlosti zpracování. 