# Permutace
Permutace je libovolná uspořádaná $n$-tice prvků z množiny. Mějme například množinu $N$ o pěti prvcích ($|N| = 5$). Permutací je poté jakákoliv pětice, kde se prvky vyskytují alespoň jednou. 

!!! abstract
    - Bez opakování: $P(n) = n!$
    - S opakováním: $P'(k_1, k_2, ..., k_n)= \frac{(k_1+k_2+...+k_n)!}{k_1!\cdot{k_2!}\cdot{...}\cdot{k_n}!}$
    - Permutace jde vyjádřit jako prosté zobrazení

## Permutace s opakování a bez opakování
Permutace bez opakování jsou takové uspořádané $n$-tice, kde je každý prvek použit právě jednou. Kdybychom potřebovali spočítat, kolik různých permutací bez opakování můžeme vytvořit, využijeme k tomu faktoriál.

$$\large P(n) = n!$$

!!! example "Příklad"
    Mějme množinu $N$, která má tři prvky: $N\in \{a, b,c\}$. Libovolná permutace (bez opakování) těchto prvků je nějaká uspořádáná trojice těchto prkvů, např. *abc, bac,* nebo * cba.*

Permutace s opakováním stále vyžaduje, aby se využili všechny prvky, ovšem nyní se může prvek vyskytovat vícekrát.

$$P'(k_1, k_2, ..., k_n)= \frac{(k_1+k_2+...+k_n)!}{k_1!\cdot{k_2!}\cdot{...}\cdot{k_n}!}$$

!!! example "Příklad"
    Například pokud bychom spočítali písmena ve slově *Liberec*, tak dostaneme následující tabulku:

    |Písmeno|Počet výskytu|
    |:--:|:--:|
    |L|1|
    |I|1|
    |B|1|
    |E|2|
    |R|1|
    |C|1|

    Vidíme, že se písmeno $e$ vyskytuje dvakrát. Vzoreček se nám tedy mírně mění, a vypadá takto: $P'(1,1,1,2,1,1) = \frac{(1+1+1+2+1+1)!}{1!\cdot{1}!\cdot{1}!\cdot{2}!\cdot{1}!\cdot{1}!} = \frac{7!}{2}=2520$

---
## Permutace jako zobrazení
Jestliže máme nějakou množinu $N$, tak permutace je v podstatě akorát přeuspořádání prvků - tedy z množiny $N$ uděláme nějakou množinu $N'$, která má stejné prvky, akorát se liší pořadím prvků. Můžeme tedy tvrdit, že každé přerovnání $n$-tice jí přirazuje další $n$-tici. Vzniká nám tedy zobrazení z množiny $N$ do množiny $N$. Toto zobrazení je prosté. Tím, že se jedná o prosté zobrazení, získává permutace všechny jeho vlastnosti, například možnost **skládat permutace** (skládat zobrazení) nebo vytvářet **inverzní permutaci**

!!! info "Skládání permutací"
    V horním řádku máme původní pozice prvků a v dolním řádku nové pozice prvků.
    
    V první permutaci koukáme, že k prvnímu prvku máme přiřazený prvek **2**. Koukneme tedy do druhé permutace a nahradíme dvojku prvkem, který v druhé permutaci dvojce odpovídá. 

    ![Image](../../../../images/Pasted image 20211025213122.png)

## Permutační cykly
Permutační cyklus je způsob zápisu permutace, kdy opakovaně aplikujeme permutaci, dokud se nedostaneme zpět na počáteční prvek.

## Permutační grupy
