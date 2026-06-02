# Teorie kombinatoriky

## Kombinatorická pravidla
### Pravidlo součinu
Pravidlo součinu udává počet všech $k$-tic, u kterých
- 1. prvek lze vybrat $n_1$ způsoby
- 2. prvek lze vybrat $n_2$ způsoby
- 3. prvek lze vybrat $n_3$ způsoby
- ...

Jinak řečeno, výběry se nazvájem neovlivňují.

### Variance
Variace je libovolná **[[Uspořádaná dvojice|uspořádaná]]** $k$-tice prvků z $n$-prvkové [[Množiny|množiny]].

>[!tldr] TL,DR
> - Bez opakování: $\large V(k, n) = \frac{n!}{(n-k)!}$
> - S opakováním: $\large V'(k, n)= n^k$

Variace z $n$ prvkové množiny nám dovoluje vytvořit dvojice, trojice, čtveřice, ... k-tice prvků, ve kterých záleží na pořádí, tj.** jsou uspořádané**. Variace vychází z [[Pravidlo součinu|kombinatorického pravidla součinu]].

$$
\begin{aligned}
	V(3, 10) &= 10 \cdot 9 \cdot 8 && \cdot7! \\
	V(3, 10) &= \frac{10 \cdot 9 \cdot 8 \cdot7!}{7!} \\
	V(3, 10) &= \boxed{\frac{10!}{7!}}
\end{aligned}
$$

### Kombinační číslo
Jak už název napovídá - kombinační číslo nějak souvisí s [[Kombinace|kombinací]]. Je to totiž alternativnější a rychlejší zápis.

>$$C(k, n) = { n \choose k}$$
>Čteme jako "$n$ nad $k$"

Říká nám tedy, kolik můžeme vytvořit $k$ členných kombinací z $n$ prvků.

>$${n \choose k} = \frac{n!}{k!(n-k)!}$$
>Hodnota kombinačního čísla se počítá stejně jako kombinace.

### Faktoriál
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

### Faktoriál nuly
Obecně platí pravidlo, že **faktoriál nuly je jedna**.
>[!example] Faktoriál nuly
>$$\large 0! = 1$$

>[!help] Proč tomu ale tak je?
> Jednoduché vysvětlení je pomocí praktického použití faktoriálů. Faktoriály se totiž používají pro výpočet [[Permutace|permutací]].
> 
> Nula věcí lze uspořádat pouze do jedné množiny - a to konkrétně do prázdné množiny. 

### Stirlingův vzorec
Faktoriál díky svému výpočtu hodně rychle nabývá na hodnotě, abychom nemuseli ručně a zdlouhavě provádět výpočet faktoriálu, dá se výsledek odhadnout pomocí **stirlingova vzorce**

>[!info] Stirlingův vzorec
>$$\large n!\approx \sqrt{2 \cdot \pi \cdot n} \cdot \left(\frac{n}{e}\right)^n $$

Čím vyšší faktoriál počítáme, tím menší je odchylka.

## Výpočet faktoriálů pomocí logaritmů
$$\log(n!) \approx \frac{1}{2}\log(2\pi{n}) + n\cdot\log(n) - n\log(e) $$


### Permutace
Permutace je libovolná uspořádaná $n$-tice prvků z množiny. Mějme například množinu $N$ o pěti prvcích ($|N| = 5$). Permutací je poté jakákoliv pětice, kde se prvky vyskytují alespoň jednou. 

!!! abstract
    - Bez opakování: $P(n) = n!$
    - S opakováním: $P'(k_1, k_2, ..., k_n)= \frac{(k_1+k_2+...+k_n)!}{k_1!\cdot{k_2!}\cdot{...}\cdot{k_n}!}$
    - Permutace jde vyjádřit jako prosté zobrazení

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


## Rozdělení objektů do tříd
Systematická klasifikace 12 základních problémů kombinatoriky, které řeší rozmístění $n$ objektů do $k$ přihrádek (tříd). Výsledek závisí na třech kritériích:

- Zda jsou objekty rozlišitelné (R) nebo nerozlišitelné (N).
- Zda jsou přihrádky rozlišitelné (R) nebo nerozlišitelné (N).
- Jaké omezení platí pro počet objektů v přihrádce (libovolně, $\le 1$, $\ge 1$).

| Číslo | Objekty ($n$) | Přihrádky ($k$) | Omezení v přihrádce | Matematický vzorec / Výsledek | Kombinatorický význam / Příklad |
| :---: | :---: | :---: | :---: | :---: | :--- |
| **1** | Rozlišitelné | Rozlišitelné | Libovolně | $k^n$ | Variace s opakováním (Barvení $n$ křesel $k$ barvami) |
| **2** | Rozlišitelné | Rozlišitelné | Max jeden ($\le 1$) | $\frac{k!}{(k-n)!}$ pro $n \le k$ <br> $0$ pro $n > k$ | Variace bez opakování / Injektivní zobrazení |
| **3** | Rozlišitelné | Rozlišitelné | Min jeden ($\ge 1$) | $k! \cdot \left\{ \begin{matrix} n \\ k \end{matrix} \right\}$ | Surjektivní zobrazení (Rozdělení lidí do jmenovaných týmů) |
| **4** | Nerozlišitelné | Rozlišitelné | Libovolně | $\binom{n+k-1}{n}$ | Kombinace s opakováním / Hvězdičky a čáry |
| **5** | Nerozlišitelné | Rozlišitelné | Max jeden ($\le 1$) | $\binom{k}{n}$ pro $n \le k$ <br> $0$ pro $n > k$ | Kombinace bez opakování (Výběr $n$ hrnků, kam dáme minci) |
| **6** | Nerozlišitelné | Rozlišitelné | Min jeden ($\ge 1$) | $\binom{n-1}{k-1}$ | Hvězdičky a čáry, kdy v každé přihrádce musí být aspoň 1 prvek |
| **7** | Rozlišitelné | Nerozlišitelné | Libovolně | $\sum_{i=1}^{k} \left\{ \begin{matrix} n \\ i \end{matrix} \right\}$ | Rozklad množiny na nejvýše $k$ neprázdných podsystémů |
| **8** | Rozlišitelné | Nerozlišitelné | Max jeden ($\le 1$) | $1$ pro $n \le k$ <br> $0$ pro $n > k$ | Všechny objekty v samostatných stejných krabicích |
| **9** | Rozlišitelné | Nerozlišitelné | Min jeden ($\ge 1$) | $\left\{ \begin{matrix} n \\ k \end{matrix} \right\}$ | **Stirlingova čísla 2. druhu** (Rozklad množiny na $k$ bloků) |
| **10** | Nerozlišitelné | Nerozlišitelné | Libovolně | $\sum_{i=1}^{k} p_i(n)$ | Rozklad čísla $n$ na nejvýše $k$ sčítanců |
| **11** | Nerozlišitelné | Nerozlišitelné | Max jeden ($\le 1$) | $1$ pro $n \le k$ <br> $0$ pro $n > k$ | Každá stejná kulička má svou vlastní stejnou krabici |
| **12** | Nerozlišitelné | Nerozlišitelné | Min jeden ($\ge 1$) | $p_k(n)$ | **Počet rozkladů čísla** $n$ na přesně $k$ kladných sčítanců |

*Poznámka ke značení:* Výraz $\left\{ \begin{matrix} n \\ k \end{matrix} \right\}$ značí Stirlingovo číslo 2. druhu, symbol $p_k(n)$ značí partition function (funkci rozkladu čísla).

## Stirlingova čísla
Stirlingova čísla jsou dvě sady číselných řad.

### Stirlingova čísla 2. druhu
Stirlingova čísla 2. druhu odpovídají na základní kombinatorickou otázku: **Kolika způsoby lze rozdělit množinu $n$ rozlišitelných prvků do $k$ nerozlišitelných neprázdných přihrádek?**

$$\left\{ \begin{matrix} n \\ k \end{matrix} \right\} = \frac{1}{k!}\sum_{i=0}^{k}(-1)^{k-i}\binom{k}{n}i^n = \sum_{i=0}^{k}\frac{(-1)^{k-i}\cdot i^n}{(k-i)!i!}$$

!!! question "Rekurence"
    Stirlingova čísla 2. druhu lze vyjádřit také rekurentním vztahem:
    
    $$\begin{aligned}
    \left\{ \begin{matrix} n \\ k \end{matrix} \right\} &= k \cdot \left\{ \begin{matrix} n-1 \\ k \end{matrix} \right\} + \left\{ \begin{matrix} n-1 \\ k-1 \end{matrix} \right\}\\\\
    \left\{ \begin{matrix} n \\ 1 \end{matrix} \right\} &= 1\\
    \left\{ \begin{matrix} n \\ n \end{matrix} \right\} &= 1\\
    \left\{ \begin{matrix} n \\ 0 \end{matrix} \right\} &= 0\\
    \left\{ \begin{matrix} n \\ k \end{matrix} \right\} &= 0\quad(k > n)\\
    \end{aligned}$$

!!! example "Rozmístění studentů na pokoje"
    Máme **4 studenty** (Karel, Adam, Petr, Jan) a chceme je ubytovat ve **2 identických pokojích** tak, aby žádný pokoj nezůstal prázdný. Chceme tedy zjistit hodnotu $\left\{ \begin{matrix} 4 \\ 2 \end{matrix} \right\}$.

    Podle rekurence:

    $$\left\{ \begin{matrix} 4 \\ 2 \end{matrix} \right\} = 2 \cdot \left\{ \begin{matrix} 3 \\ 2 \end{matrix} \right\} + \left\{ \begin{matrix} 3 \\ 1 \end{matrix} \right\} = 2 \cdot 3 + 1 = \mathbf{7}$$

    Těchto 7 reálných možností (rozkladů množiny) vypadá takto:

    1.  {Karel} | {Adam, Petr, Jan}
    2.  {Adam} | {Karel, Petr, Jan}
    3.  {Petr} | {Karel, Adam, Jan}
    4.  {Jan} | {Karel, Adam, Petr}
    5.  {Karel, Adam} | {Petr, Jan}
    6.  {Karel, Petr} | {Adam, Jan}
    7.  {Karel, Jan} | {Adam, Petr}

### Stirlingova čísla 1. druhu
Stirlingova čísla 1. druhu mají primární význam u permutací. Udávají **počet permutací $n$-prvkové množiny, které se skládají z přesně $k$ nezávislých cyklů.**

!!! question "Rekurence"
    Stirlingova čísla 1. druhu lze vyjádřit také rekurentním vztahem:
    
    $$\begin{aligned}
    \left[ \begin{matrix} n \\ k \end{matrix} \right] &= (n-1) \cdot \left[ \begin{matrix} n-1 \\ k \end{matrix} \right] + \left[ \begin{matrix} n-1 \\ k-1 \end{matrix} \right] \\\\
    \left[ \begin{matrix} n \\ n \end{matrix} \right] &= 1\\
    \left[ \begin{matrix} n \\ 1 \end{matrix} \right] &= (n-1)!
    \end{aligned}$$

???- example "Rozpisy cyklů"
    Chceme zjistit $\left[ \begin{matrix} 3 \\ 2 \end{matrix} \right]$, tedy kolik permutací 3 prvků $\{1, 2, 3\}$ má přesně 2 cykly.
    Podle vzorce: 
    $$\left[ \begin{matrix} 3 \\ 2 \end{matrix} \right] = 2 \cdot \left[ \begin{matrix} 2 \\ 2 \end{matrix} \right] + \left[ \begin{matrix} 2 \\ 1 \end{matrix} \right] = 2 \cdot 1 + 1 = \mathbf{3}$$

    Všech 3! = 6 možných permutací tří prvků vypadá v cyklickém zápisu takto:
    * $(1)(2)(3)$ — 3 cykly
    * $(1\ 2\ 3)$ — 1 cyklus
    * $(1\ 3\ 2)$ — 1 cyklus
    * $\mathbf{(1\ 2)(3)}$ — 2 cykly  | *Prvky 1 a 2 si prohodily místa, 3 zůstal.*
    * $\mathbf{(1\ 3)(2)}$ — 2 cykly  | *Prvky 1 a 3 si prohodily místa, 2 zůstal.*
    * $\mathbf{(2\ 3)(1)}$ — 2 cykly  | *Prvky 2 a 3 si prohodily místa, 1 zůstal.*

???- example "Přechod mezi mocninami"
    V matematické analýze a kombinatorice se často pracuje s tzv. **klesajícím faktoriálem**, který zkracuje zápis variací:
    $$x^{\underline{n}} = x(x-1)(x-2)\dots(x-n+1)$$

    Stirlingova čísla 1. druhu fungují jako koeficienty polynomu, když chceme tento klesající faktoriál roznásobit a převést na standardní mocniny $x^k$:
    $$x^{\underline{n}} = \sum_{k=0}^{n} (-1)^{n-k} \left[ \begin{matrix} n \\ k \end{matrix} \right] x^k$$

    **Příklad pro $n = 3$:**
    Vezmeme klasické algebraické roznásobení:
    $$x^{\underline{3}} = x(x-1)(x-2) = x(x^2 - 3x + 2) = \mathbf{x^3 - 3x^2 + 2x}$$

    Nyní použijeme vzorec se Stirlingovými čísly 1. druhu pro $n=3$:
    $$x^{\underline{3}} = (-1)^{3-1}\left[ \begin{matrix} 3 \\ 1 \end{matrix} \right]x^1 + (-1)^{3-2}\left[ \begin{matrix} 3 \\ 2 \end{matrix} \right]x^2 + (-1)^{3-3}\left[ \begin{matrix} 3 \\ 3 \end{matrix} \right]x^3$$
    Doplníme hodnoty čísel ($\left[ \begin{matrix} 3 \\ 1 \end{matrix} \right]=2$, $\left[ \begin{matrix} 3 \\ 2 \end{matrix} \right]=3$, $\left[ \begin{matrix} 3 \\ 3 \end{matrix} \right]=1$):
    $$x^{\underline{3}} = (1 \cdot 2)x^1 + (-1 \cdot 3)x^2 + (1 \cdot 1)x^3 = \mathbf{x^3 - 3x^2 + 2x}$$
    Oba postupy vedou ke stejnému polynomu. Stirlingova čísla 1. druhu tak umožňují počítačovým algebraickým systémům okamžitě roznásobovat složité závorky bez nutnosti krokového násobení.

???- example "Analýza algoritmů"
    Představme si algoritmus pro nalezení maxima v poli o velikosti $n$:

    ```javascript
    let max = pole[0];
    for (let i = 1; i < n; i++) {
        if (pole[i] > max) {
            max = pole[i]; // <--- Kolikrát se spustí tento řádek?
        }
    }
    ```

    Chceme vědět: **Kolikrát se v průměru přepíše proměnná `max`?**

    Inicializace `max = pole[0]` je první přepis (1. prvek je vždy největší ze všech dosud viděných). Co se děje dál?

    * Když algoritmus kontroluje **2. prvek** v pořadí (`pole[1]`), jaká je šance, že je větší než ten první? Protože testujeme dvě náhodná čísla, šance, že to druhé je největší, je přesně **$\frac{1}{2}$**.
    * Když algoritmus dorazí ke **3. prvku** (`pole[2]`), jaká je šance, že přepíše `max`? Přepíše ho jen tehdy, pokud je toto číslo největší ze všech tří dosud prozkoumaných. Šance je tedy **$\frac{1}{3}$**.
    * U **$i$-tého prvku** je šance, že je největší z dosud viděných $i$ prvků, přesně **$\frac{1}{i}$**.

    Průměrný počet všech přepisů je prostým součtem těchto pravděpodobností:

    $$\text{Průměrný počet přepisů} = 1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{n} = H_n$$

    Tento součet se nazývá **Harmonické číslo ($H_n$)**. Abychom tyto zlomky sečetli, musíme je převést na společného jmenovatele, kterým je $n!$. Podívejme se, co se stane v čitateli.   Představme si funkci, která generuje čitatele pro libovolné $H_n$. Tato funkce úzce souvisí s derivací **klesajícího faktoriálu** $x^{\underline{n}} = x(x-1)(x-2)\dots(x-n+1)$. Když klesající faktoriál roznásobíme do klasického polynomu, jeho koeficienty jsou *z definice* Stirlingova čísla 1. druhu $\left[\begin{matrix} n \\ k \end{matrix} \right]$. Při sčítání zlomků v Harmonickém čísle provádíme algebraicky stejnou operaci (násobíme mezi sebou všechny kombinace indexů kromě jednoho), což způsobí, že se v čitateli objeví právě tato čísla jako váhy pro jednotlivé počty přepisů ($k$):

    $$H_n = \frac{1}{n!} \sum_{k=1}^{n} k \cdot \left[\begin{matrix} n \\ k \end{matrix} \right]$$

    *Příklad pro $n=3$:* 
    
    $$H_3 = \frac{1}{1} + \frac{1}{2} + \frac{1}{3} = \frac{(2 \cdot 3) + (1 \cdot 3) + (1 \cdot 2)}{3!} = \frac{6 + 3 + 2}{3!} = \frac{11}{6}$$

    Když se podíváme na klesající faktoriál pro $n=3$, jeho roznásobením dostaneme koeficienty $\mathbf{2}, \mathbf{3}, \mathbf{1}$:
    $$x^{\underline{3}} = x(x-1)(x-2) = \mathbf{1}x^3 - \mathbf{3}x^2 + \mathbf{2}x$$
    Tyto koeficienty jsou přesně Stirlingova čísla $\left[\begin{matrix} 3 \\ 3 \end{matrix} \right]=1$, $\left[\begin{matrix} 3 \\ 2 \end{matrix} \right]=3$ a $\left[\begin{matrix} 3 \\ 1 \end{matrix} \right]=2$. Vážený součet v čitateli pak dává: $(3 \cdot \mathbf{1}) + (2 \cdot \mathbf{3}) + (1 \cdot \mathbf{2}) = 11$.

    ### Závěr
    Díky tomuto algebraickému propojení víme, že průměrný případ chování kódu přesně kopíruje růst Harmonického čísla. Z matematické analýzy víme, že $H_n \approx \ln n$. 
    
    Pro pole o **milionu prvcích** se proměnná `max` v průměru přepíše pouze **$\ln(1\ 000\ 000) \approx 14\text{-krát}$**. Vnitřek podmínky se spouští tak výjimečně, že na rychlost programu nemá prakticky žádný vliv.

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
