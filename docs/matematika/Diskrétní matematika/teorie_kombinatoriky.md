# Teorie kombinatoriky
Variace je libovolná **[[Uspořádaná dvojice|uspořádaná]]** $k$-tice prvků z $n$-prvkové [[Množiny|množiny]].

>[!tldr] TL,DR
> - Bez opakování: $\large V(k, n) = \frac{n!}{(n-k)!}$
> - S opakováním: $\large V'(k, n)= n^k$

Variace z $n$ prvkové množiny nám dovoluje vytvořit dvojice, trojice, čtveřice, ... k-tice prvků, ve kterých záleží na pořádí, tj.** jsou uspořádané**.

## Odvození vzorce
Variace vychází z [[Pravidlo součinu|kombinatorického pravidla součinu]].

$$
\begin{aligned}
	V(3, 10) &= 10 \cdot 9 \cdot 8 && \cdot7! \\
	V(3, 10) &= \frac{10 \cdot 9 \cdot 8 \cdot7!}{7!} \\
	V(3, 10) &= \boxed{\frac{10!}{7!}}
\end{aligned}
$$

## Bez opakování

## S opakováním


## Pravidlo součinu
Pravidlo součinu udává počet všech $k$-tic, u kterých
- 1. prvek lze vybrat $n_1$ způsoby
- 2. prvek lze vybrat $n_2$ způsoby
- 3. prvek lze vybrat $n_3$ způsoby
- ...

Jinak řečeno, výběry se nazvájem neovlivňují.

# Kombinační číslo
Jak už název napovídá - kombinační číslo nějak souvisí s [[Kombinace|kombinací]]. Je to totiž alternativnější a rychlejší zápis.

>$$C(k, n) = { n \choose k}$$
>Čteme jako "$n$ nad $k$"

Říká nám tedy, kolik můžeme vytvořit $k$ členných kombinací z $n$ prvků.

>$${n \choose k} = \frac{n!}{k!(n-k)!}$$
>Hodnota kombinačního čísla se počítá stejně jako kombinace.

# Faktoriál
Faktoriál čísla $n$ je součin všech přirozených čísel menších než $n$

> [!tldr] TL,DR:
>- Faktoriál čísla $n$ je součin přirozených čísel menších než $n$
>- Výsledek se dá odhadnout pomocí **stirlingova vzorce**
>- $0! = 1$

Faktoriál je tedy v matematickém zápise definován jako

>[!example] Zápis faktoriálu:
>$$\large n! = 1 \cdot 2 \cdot 3 \cdot ... \cdot (n-1) \cdot n$$
>$$\large n \in \mathbb{N}$$

>[!tip] Rozložení faktoriálu:
>$$\large n! = (n-1)! \cdot n$$

## Faktoriál nuly
Obecně platí pravidlo, že **faktoriál nuly je jedna**.
>[!example] Faktoriál nuly
>$$\large 0! = 1$$

>[!help] Proč tomu ale tak je?
> Jednoduché vysvětlení je pomocí praktického použití faktoriálů. Faktoriály se totiž používají pro výpočet [[Permutace|permutací]].
> 
> Nula věcí lze uspořádat pouze do jedné množiny - a to konkrétně do prázdné množiny. 

## Stirlingův vzorec
Faktoriál díky svému výpočtu hodně rychle nabývá na hodnotě, abychom nemuseli ručně a zdlouhavě provádět výpočet faktoriálu, dá se výsledek odhadnout pomocí **stirlingova vzorce**

>[!info] Stirlingův vzorec
>$$\large n!\approx \sqrt{2 \cdot \pi \cdot n} \cdot \left(\frac{n}{e}\right)^n $$

Čím vyšší faktoriál počítáme, tím menší je odchylka.

## Výpočet faktoriálů pomocí logaritmů

$$\log(n!) \approx \frac{1}{2}\log(2\pi{n}) + n\cdot\log(n) - n\log(e) $$

## Rozšíření na reálná čísla
**Gamma funkce**

# Permutace
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
