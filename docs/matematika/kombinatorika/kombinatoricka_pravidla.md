# Kombinatorická pravidla
Kombinatorická pravidla jsou pravidla udávající možnosti uspořádaní a výběru z množin.

## Pravidlo součinu
__Kombinatorické pravidlo součinu__ říká, že pokud máme dvě nezávislé události, kde první může nastat $n_1$ způsoby a druhá může nastat $n_2$ způsoby, tak celkový počet způsobů, jak mohou nastat obě události, je $n_1 \cdot n_2$.

!!! quote "Pravidlo součinu"
    Počet všech uspořádaných $k$-tic, jejichž členy $a_1, a_2, a_3, ..., a_k$ lze vybírat postupně vybírat $n_1, n_2, n_3, ..., n_k$ způsoby, je roven $n_1 \cdot n_2 \cdot n_3 \cdot ... \cdot n_k$

Pravidlo součinu se kromě výběru členů $k$-tic používá i při výpočtech [pravděpodobností](../statistika/pravdepodobnost.md), kdy součin dvou pravděpodobností udává pravděpodobnost, že obě události nastanou současně. 

!!! tip
    Při práci s pravděpodobnosti lze nad pravidlem součinu uvažovat jako nad [logickým součinem](), kdy výsledek je pravděpodobnost jedné události **a zároveň** pravděpodobnost druhé.

## Pravidlo součtu
__Kombinatorické pravidlo součtu__ říká, že pokud máme dvě množiny, které nemají žádné společné prvky, tak počet prvků obou množin se akorát sečte. 

!!! quote "Pravidlo součtu"
    Jsou-li $A_1, A_2, ..., A_n$ konečné množiny, které mají $p_1, p_2, ..., p_n$ prvků, a jsou-li každé dvě disjunktní, pak je počet prvků množiny $A_1 \cup A_2 \cup ... \cup A_n$ roven $p_1 + p_2 + ... + p_n$

Z pohledu [pravděpodobnosti](../statistika/pravdepodobnost.md) jsou to analogicky dvě události, které na sebe nemají žádným způsobem vliv. Součet jejich pravděpobností pak bude znamenat pravděpodobnost toho, že nastane jedna, nebo druhá,

!!! tip
    Při práci s pravděpodobnosti lze nad pravidlem součtu uvažovat jako nad [logickým součtem](), kdy výsledek je pravděpodobnost, že nastane jedna **nebo** druhá událost.