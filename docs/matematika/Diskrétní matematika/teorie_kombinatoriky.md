# Teorie kombinatoriky

## Kombinatorická pravidla

### Pravidlo součtu

Pokud lze úlohu rozložit na několik **disjunktních případů** (navzájem se vylučujících), je celkový počet možností **součtem** možností v jednotlivých případech.

$$|A \cup B| = |A| + |B| \quad \text{pokud } A \cap B = \emptyset$$

!!! example "Příklad"
    Kolika způsoby si můžu vybrat jídlo, když menu nabízí 3 polévky a 5 hlavních jídel? Předpokládám, že si beru **buď** polévku, **nebo** hlavní jídlo.

    $$3 + 5 = 8 \text{ způsobů}$$

### Pravidlo součinu
Pravidlo součinu udává počet všech $k$-tic, u kterých

- 1. prvek lze vybrat $n_1$ způsoby
- 2. prvek lze vybrat $n_2$ způsoby
- 3. prvek lze vybrat $n_3$ způsoby
- ...

Celkový počet: $n_1 \cdot n_2 \cdot \ldots \cdot n_k$.

!!! example "Příklad"
    Kolik různých SPZ lze vytvořit, pokud se skládá ze 3 písmen (26 možností) a 4 číslic (10 možností)?

    $$26^3 \cdot 10^4 = 17\,576 \cdot 10\,000 = 175\,760\,000$$

## Základní kombinatorické výběry

### Variace (záleží na pořadí)

Variace je libovolná **uspořádaná** $k$-tice prvků z $n$-prvkové množiny. **Záleží na pořadí** – výběr $(A, B)$ je jiný než $(B, A)$. Variace vychází z pravidla součinu.

!!! abstract "Vzorce"

    - **Bez opakování**: $V(k, n) = \frac{n!}{(n-k)!}$ — každý prvek lze použít nejvýše jednou.
    - **S opakováním**: $V'(k, n) = n^k$ — každý prvek lze použít libovolněkrát.

Variace z $n$ prvkové množiny nám dovoluje vytvořit dvojice, trojice, … $k$-tice prvků, ve kterých **záleží na pořadí**.

$$
\begin{aligned}
	V(3, 10) &= 10 \cdot 9 \cdot 8 \\
	V(3, 10) &= \frac{10 \cdot 9 \cdot 8 \cdot 7!}{7!} \\
	V(3, 10) &= \boxed{\frac{10!}{7!}}
\end{aligned}
$$

### Permutace (přeuspořádání všech prvků)

Permutace je libovolná uspořádaná $n$-tice, která obsahuje **všechny** prvky dané množiny. Jinak řečeno – kolika způsoby lze seřadit $n$ různých prvků.

!!! abstract "Vzorce"

    - **Bez opakování**: $P(n) = n!$ — každý prvek právě jednou.
    - **S opakováním**: $P'(k_1, \dots, k_n) = \frac{(k_1 + \dots + k_n)!}{k_1! \cdot \ldots \cdot k_n!}$ — některé prvky se opakují.

Permutace bez opakování jsou takové uspořádané $n$-tice, kde je každý prvek použit právě jednou. Kdybychom potřebovali spočítat, kolik různých permutací bez opakování můžeme vytvořit, využijeme k tomu faktoriál.

$$\large P(n) = n!$$

!!! abstract "Faktoriál"
    Faktoriál čísla $n$ je součin všech přirozených čísel menších než $n$

    $$\large n! = 1 \cdot 2 \cdot 3 \cdot ... \cdot (n-1) \cdot n$$

    !!! tip "Faktoriál nuly"
        Jednoduché vysvětlení je pomocí praktického použití faktoriálů. Nula věcí lze uspořádat pouze do jedné množiny - a to konkrétně do prázdné 
        množiny.
        
        $$\large 0! = 1$$ 

    !!! tip "Aproximace faktoriálu"
        Faktoriál díky svému výpočtu hodně rychle nabývá na hodnotě, abychom nemuseli ručně a zdlouhavě provádět výpočet faktoriálu, dá se výsledek odhadnout pomocí **stirlingova vzorce**

        $$\large n!\approx \sqrt{2 \cdot \pi \cdot n} \cdot \left(\frac{n}{e}\right)^n$$

        Čím vyšší faktoriál počítáme, tím menší je odchylka.

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

### Kombinace
Jak už název napovídá - kombinační číslo nějak souvisí s kombinací. Je to totiž alternativnější a rychlejší zápis.

$$C(k, n) = { n \choose k}$$

Říká nám tedy, kolik můžeme vytvořit $k$ členných kombinací z $n$ prvků.

$${n \choose k} = \frac{n!}{k!(n-k)!}$$

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

### Stirlingova čísla
Stirlingova čísla jsou dvě sady číselných řad.

#### Stirlingova čísla 2. druhu
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

#### Stirlingova čísla 1. druhu
Stirlingova čísla 1. druhu mají primární význam u permutací. Udávají **počet permutací $n$-prvkové množiny, které se skládají z přesně $k$ nezávislých cyklů.**

!!! question "Rekurence"
    Stirlingova čísla 1. druhu lze vyjádřit také rekurentním vztahem:
    
    $$\begin{aligned}
    \left[ \begin{matrix} n \\ k \end{matrix} \right] &= (n-1) \cdot \left[ \begin{matrix} n-1 \\ k \end{matrix} \right] + \left[ \begin{matrix} n-1 \\ k-1 \end{matrix} \right] \\\\
    \left[ \begin{matrix} n \\ n \end{matrix} \right] &= 1\\
    \left[ \begin{matrix} n \\ 1 \end{matrix} \right] &= (n-1)!
    \end{aligned}$$

!!! example "Rozpisy cyklů"
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

!!! example "Přechod mezi mocninami"
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

!!! example "Analýza algoritmů"
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

    __Závěr__
    Díky tomuto algebraickému propojení víme, že průměrný případ chování kódu přesně kopíruje růst Harmonického čísla. Z matematické analýzy víme, že $H_n \approx \ln n$. 
    
    Pro pole o **milionu prvcích** se proměnná `max` v průměru přepíše pouze **$\ln(1\ 000\ 000) \approx 14\text{-krát}$**. Vnitřek podmínky se spouští tak výjimečně, že na rychlost programu nemá prakticky žádný vliv.

## Algebraické vlastnosti permutací
Jestliže máme nějakou množinu $N$, tak permutace je v podstatě akorát přeuspořádání prvků - tedy z množiny $N$ uděláme nějakou množinu $N'$, která má stejné prvky, akorát se liší pořadím prvků. Můžeme tedy tvrdit, že každé přerovnání $n$-tice jí přirazuje další $n$-tici. Vzniká nám tedy zobrazení z množiny $N$ do množiny $N$. Toto zobrazení je prosté. Tím, že se jedná o prosté zobrazení, získává permutace všechny jeho vlastnosti, například možnost **skládat permutace** (skládat zobrazení) nebo vytvářet **inverzní permutaci**

!!! info "Skládání permutací"
    V horním řádku máme původní pozice prvků a v dolním řádku nové pozice prvků.
    
    V první permutaci koukáme, že k prvnímu prvku máme přiřazený prvek **2**. Koukneme tedy do druhé permutace a nahradíme dvojku prvkem, který v druhé permutaci dvojce odpovídá. 

    ![Image](../../../../images/Pasted image 20211025213122.png)

### Permutační cykly

Permutační cyklus je způsob zápisu permutace, kdy opakovaně aplikujeme permutaci, dokud se nedostaneme zpět na počáteční prvek. Každou permutaci $n$-prvkové množiny lze jednoznačně zapsat jako součin nezávislých (disjunktních) cyklů.

!!! example "Příklad"
    Permutace $\pi = \left(\begin{smallmatrix}1 & 2 & 3 & 4 & 5 \\ 4 & 3 & 2 & 5 & 1\end{smallmatrix}\right)$ má cykly:

    - $1 \to 4 \to 5 \to 1$ → cyklus $(1\,4\,5)$
    - $2 \to 3 \to 2$ → cyklus $(2\,3)$
    
    Zápis: $\pi = (1\,4\,5)(2\,3)$

!!! info "Vlastnosti cyklů"

    - Cyklus délky $k$ lze rozepsat jako $k-1$ transpozic: $(i_1, i_2, \dots, i_k) = (i_1,i_2)(i_1,i_3)\dots(i_1,i_k)$
    - Umocňování $(i_1, i_2, \dots, i_k)^m$ posouvá prvky o $m \bmod k$ pozic.
    - Sudá/lichá permutace: $\sigma(\pi) = (-1)^n$, kde $n$ je počet sudých cyklů v rozkladu.

### Permutační grupy

Množina všech permutací $n$-prvkové množiny se značí $S_n$ a nazývá se **symetrická grupa**. Má $n!$ prvků. Operací je skládání permutací – výsledkem složení dvou permutací je opět permutace z $S_n$. $S_n$ není komutativní pro $n \ge 3$.

### Věžové polynomy
Věžové polynomy (Rook Polynomials) jsou elegantní způsob, jak řešit **permutace se zakázanými pozicemi** (např. když konkrétní člověk nesmí dostat konkrétní úkol). Problém se vizualizuje jako umísťování $k$ šachových věží na desku $B$ (množinu povolených políček) tak, aby se navzájem neohrožovaly – tj. nesmí sdílet stejný řádek ani sloupec.

Věžový polynom desky $B$ definujeme jako:

$$R(x, B) = \sum_{k=0}^{\infty} r_k(B)x^k = 1 + r_1(B)x + r_2(B)x^2 + \dots$$

Kde $r_k(B)$ je počet způsobů, jak umístit $k$ neohrožujících se věží.

!!! info "Pravidla pro zjednodušení výpočtu"

    * **Disjunktní desky:** Pokud lze desku rozdělit na dvě části $B_1$ a $B_2$, které nesdílejí žádný společný řádek ani sloupec, polynom je jejich součinem: $R(x, B) = R(x, B_1) \cdot R(x, B_2)$
    
    * **Věta o větvení (Rozklad podle políčka $e$):** Zvolíme jedno políčko $e$. Buď na něj věž nedáme, nebo dáme (tím vyřadíme jeho řádek a sloupec, čímž vznikne redukovaná deska $B_e$): $R(x, B) = R(x, B \setminus \{e\}) + x \cdot R(x, B_e)$

Přes princip inkluze a exkluze pak počet povolených permutací (kdy žádná věž nestojí na zakázaném políčku desky $B$ o velikosti $n \times n$) spočítáme jako:

$$\text{Počet vyhovujících permutací} = \sum_{k=0}^{n} (-1)^k \cdot r_k(B) \cdot (n-k)!$$

## Rekurentní posloupnost
Rekurentní posloupnost (též _rekurence_) je vyjádření posloupnosti, která k výpočtu libovolného členu využívá jiné členy posloupnosti. Rekurence je dána __rekurentním vztahem__ a __počátečními podmínkami__. S rekurencí se velmi špatně počítají vyšší členy, a proto je vhodné zkoumat, jestli by daná rekurentní posloupnost, vyjádřená rekurentním vztahem, nešla převést na jinou posloupnost, která již vztah bude mít nerekurentní.

### Lineární rekurence s konstantními koeficienty

Lineární rekurence řádu $k$ s konstantními koeficienty má tvar:

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}$$

kde $c_i$ jsou konstanty. Řešíme substitucí $a_n = r^n$, která převede rekurenci na **charakteristický polynom** stupně $k$.

### Homogenní Lineární Rekurentní Vztahy
Začněme příkladem. Uvažujme následující rekurenci:

$$a_n = 3a_{n-1} - 2a_{n-2}$$

Našim cílem je najít takovou posloupnost, která má stejné členy, ale není vyjádřená rekurencí. Nejdříve je potřeba zjistit, jaké vlastnosti tato rekurence má. Když se na ní podíváme, tak:

- Je __lineární__, protože neobsahuje členy mocnin 2 a větší (vztah je lineární kombinací členů posloupnosti a konstant)
- Je __homogenní__, protože do výpočtu nevstupuje žádná další ("vnější") síla. Jinak řečeno, pravá strana rovnice je rovna nule.

Nyní potřebujeme najít způsob, jakým rekurenci vyjádřit bez rekurence. Protože jsou členy rekurence podposloupnosti, musíme najít takovou náhradu, která při výpočtu dalšího členu posloupnosti nezmění tvar. Konstantní 

$$\begin{aligned}
    a_n &= r^n \\
    &\downarrow \\
    a_n &= 3a_{n-1} - 2a_{n-2} \\
    r^n &= 3r^{n-1} - 2r^{n-2} \\
    r^n &= 3r^{n} \cdot r^{-1} - 2r^{n} \cdot r^{-2} &/:r^n\\
    1 &= 3r^{-1} - 2r^{-2} &/:r^{-2}\\
    r^{2} &= 3r^{1} - 2 \\
    r^{2} -3r +2 &= 0
\end{aligned}$$

Tím jsme našli takzvaný __charakteristický polynom__.

!!! note "Komplexní kořeny"
    Pokud charakteristický polynom nemá reálné kořeny, použijeme Eulerův vzorec:

    $$e^{i\theta} = \cos{\theta} + i\cdot\sin{\theta}$$
    
    Obecné řešení pro komplexně sdružené kořeny $a \pm bi$:
    $$\rho = \sqrt{a^2 + b^2},\quad \theta = \arctan\frac{b}{a}$$
    $$a_n = \rho^n \left(\alpha \cos(n\theta) + \beta \sin(n\theta)\right)$$

### Nehomogenní LRV

Nehomogenní rekurence obsahuje **pravou stranu** $f(n)$:

$$a_n = c_1 a_{n-1} + \dots + c_k a_{n-k} + f(n)$$

Řešení je součtem **obecného řešení homogenní** rovnice a **partikulárního řešení**. Partikulární řešení odhadujeme podle tvaru $f(n)$ – pro $f(n) = n^2$ zkoušíme polynom 2. stupně, pro $f(n) = 3^n$ zkoušíme $\alpha \cdot 3^n$.

### Příklady
#### Příklad 1
!!! example "Zadání"
    Najděte explicitní tvar posloupnosti $a_{n+2}=5a_{n+1}-6a_{n}$ s počátečními podmínkami $a_0=2$ a $a_1=5$.

!!! info "Charakteristický polynom"
    $$\begin{aligned}
        a_n &= r^n \\
        &\downarrow \\
        \\
        r^{n+2} &= 5r^{n+1}-6r^n\\
        r^n\cdot r^2 &= 5 \cdot r^{n} \cdot r^{1} - 6r^{n}\\
        r^2 &= 5r^1 - 6 \\
        r^2 - 5r^1 + 6 &= 0
    \end{aligned}$$

!!! tip "Kořeny charakteristického polynomu"
    $$\begin{aligned}
        x_{1,2} &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\\
        x_{1,2} &= \frac{5 \pm \sqrt{25 - 24}}{2} \\
        x_{1,2} &= \frac{5 \pm 1}{2} \\
        x_1 &= \boxed{2} \\
        x_2 &= \boxed{3} \\
    \end{aligned}$$

$$\begin{aligned}
    a_n &= \alpha \cdot 2^n + \beta \cdot 3^n \\
    &\downarrow\\
    a_0 &= \alpha \cdot 2^0 + \beta \cdot 3^0 \\
    a_1 &= \alpha \cdot 2^1 + \beta \cdot 3^1 \\
    &\downarrow\\
    2 &= \alpha + \beta \\
    5 &= 2\alpha + 3\beta \\
    &\downarrow\\
    \alpha &= 2 - \beta \\
    5 &= 2\cdot(2 - \beta) + 3\beta \\
    5 &= 4 + \beta \\
    &\downarrow\\
    \beta &= \boxed{1}\\
    \alpha &= \boxed{1} \\
    &\downarrow\\
    a_n &= \boxed{2^n + 3^n}
\end{aligned}$$

#### Příklad 2
!!! example "Zadání"
    Najděte explicitní tvar posloupnosti $a_{n+2}-4a_{n+1}+4a_{n}=0$ s počátečními podmínkami $a_0=1$ a $a_1=4$.

!!! info "Charakteristický polynom"
    $$\begin{aligned}
        a_n &= r^n \\
        &\downarrow \\
        \\
        r^{n+2} -4r^{n+1}+4r^n &= 0\\
        r^n\cdot r^2 - 4 \cdot r^{n} \cdot r^{1} + 4r^{n} &= 0\\
        r^2 -4r^1 - 4 &= 0
    \end{aligned}$$

!!! tip "Kořeny charakteristického polynomu"
    $$\begin{aligned}
        x_{1,2} &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\\
        x_{1,2} &= \frac{4 \pm \sqrt{16 - 16}}{2} \\
        x_{1,2} &= \frac{4 \pm 0}{2} \\
        x_1 &= \boxed{2} \\
        x_2 &= \boxed{2} \\
    \end{aligned}$$

$$\begin{aligned}
    a_n &= (\alpha + \beta \cdot n) \cdot 2^n \\
    &\downarrow\\
    1 &= (\alpha + \beta \cdot 0) \cdot 2^0 \\
    4 &= (\alpha + \beta \cdot 1) \cdot 2^1 \\
    &\downarrow\\
    1 &= \alpha \\
    4 &= 2\alpha + 2\beta \\
    &\downarrow\\
    \alpha &= 2 - \beta \\
    2 &= 2\beta \\
    1 &= \beta \\
    &\downarrow\\
    \beta &= \boxed{1}\\
    \alpha &= \boxed{1} \\
    &\downarrow\\
    a_n &= \boxed{(1+n)\cdot 2^n}
\end{aligned}$$

#### Příklad 3
!!! example "Zadání"
    Najděte explicitní tvar posloupnosti $a_{n+2}+a_n=0$ s počátečními podmínkami $a_0=1$ a $a_1=0$.

!!! info "Charakteristický polynom"
    $$\begin{aligned}
        a_n &= r^n \\
        &\downarrow \\
        \\
        r^{n+2}+r^n &= 0 \\
        r^n \cdot r^2 + r^n &= 0 \\
        r^2 + 1 &= 0
    \end{aligned}$$

!!! tip "Kořeny charakteristického polynomu"
    $$\begin{aligned}
        x_{1,2} &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\\
        x_{1,2} &= \frac{0 \pm \sqrt{-4}}{2} \\
        x_{1,2} &= \frac{\pm 2i}{2} \\
        x_1 &= \boxed{+i} \\
        x_2 &= \boxed{-i} \\
    \end{aligned}$$

$$\begin{aligned}
    a_n &= \rho^n \cdot \left(\alpha\cos{\left(n\cdot\theta\right)} + \beta\sin{\left(n\cdot\theta\right)}\right) \\
    &\downarrow\\
    \rho &= \sqrt{0^2 + 1^2}\\
    \rho &= \boxed{1}\\
    \theta &= \arccos{\left(\frac{0}{1}\right)}\\
    \theta &= \boxed{\frac{\pi}{2}}\\
    &\downarrow\\
    a_n &= 1^n \cdot \left(\alpha\cos{\left(n\cdot\frac{\pi}{2}\right)} + \beta\sin{\left(n\cdot\frac{\pi}{2}\right)}\right) \\
    &\downarrow\\
    1 &= 1^0 \cdot \left(\alpha\cos{\left(0\cdot\frac{\pi}{2}\right)} + \beta\sin{\left(0\cdot\frac{\pi}{2}\right)}\right) \\
    0 &= 1^1 \cdot \left(\alpha\cos{\left(1\cdot\frac{\pi}{2}\right)} + \beta\sin{\left(1\cdot\frac{\pi}{2}\right)}\right) \\
    &\downarrow\\
    1 &= 1 \cdot \left(\alpha\cos{\left(0\right)} + \beta\sin{\left(0\right)}\right) \\
    0 &= 1 \cdot \left(\alpha\cos{\left(\frac{\pi}{2}\right)} + \beta\sin{\left(\frac{\pi}{2}\right)}\right) \\
    &\downarrow\\
    1 &= 1 \cdot \left(\alpha\cdot 1 + \beta\cdot 0\right) \\
    0 &= 1 \cdot \left(\alpha\cdot 0 + \beta\cdot 1\right) \\
    &\downarrow\\
    \alpha &= \boxed{1}\\
    \beta &= \boxed{0}\\
    &\downarrow\\
    a_n &= \boxed{1^n \cdot \cos{\left(n\cdot\frac{\pi}{2}\right)}} \\
\end{aligned}$$

#### Příklad 4
!!! example "Zadání"
    Najděte explicitní tvar posloupnosti $a_{n+3}-3a_{n+2}+3a_{n+1}-a_n=0$ s počátečními podmínkami $a_0=0$, $a_1=1$ a $a_2=4$.

!!! info "Charakteristický polynom"
    $$\begin{aligned}
        a_n &= r^n \\
        &\downarrow \\
        \\
        r^{n+3}-3r^{n+2}+3r^{n+1}-r^n &= 0 \\
        r^{n} \cdot r^{3} - 3\cdot r^{n}\cdot r^{2}+3\cdot r^{n}\cdot r^{1}-r^n &= 0 \\
        r^3 -3r^2+3r-1 &= 0
    \end{aligned}$$

!!! tip "Kořeny charakteristického polynomu"
    Pomocí hornerova schématu. Kandidátní kořeny polynomu $ax^n + ... + b$ musí splňovat $a \mid 1$ a $b \mid 1$. Tudíž množina kandidátních kořenů je $\{\pm 1\}$.

    |x|1|-3|+3|-1|
    |:--:|:--:|:--:|:--:|:--:|
    |1|1|-2|1|0|

    $$(r-1)\cdot(r^2 - 2r + 1) = (r-1)^3$$

$$\begin{aligned}
    a_n &= 1^n \cdot \left(\alpha\cdot n^0 + \beta \cdot n^1 + \gamma \cdot n^2\right) \\
    &\downarrow\\
    0 &= 1^0 \cdot \left(\alpha + 0\beta + 0\gamma\right) \\
    1 &= 1^1 \cdot \left(1\alpha + \beta + \gamma\right) \\
    4 &= 1^2 \cdot \left(2\beta + 4\gamma\right) \\
    &\downarrow\\
    \alpha &= 0 \\
    1 &= \beta + \gamma \\
    4 &= 2\beta + 4\gamma \\
    &\downarrow\\
    \alpha &= 0 \\
    \beta &= 1 - \gamma \\
    4 &= 2\cdot(1 - \gamma) + 4\gamma \\
    &\downarrow\\
    \alpha &= 0 \\
    \beta &= 1 - \gamma \\
    4 &= 2 + 2\gamma \\
    &\downarrow\\
    \alpha &= 0 \\
    \beta &= 1 - \gamma \\
    \gamma &= 1 \\
    &\downarrow\\
    \alpha &= 0 \\
    \beta &= 0 \\
    \gamma &= 1 \\
    &\downarrow\\
    a_n &= 1 \cdot \left(0\cdot 1 + 0 \cdot n + 1 \cdot n^2\right) \\
    a_n &= \boxed{n^2}
\end{aligned}$$

## Vytvořující (generující funkce)
Vytvořující funkce umožňují kódovat nekonečné číselné posloupnosti $(a_n)$ do koeficientů formálních mocninných řad. Kombinatorické operace se pak řeší pomocí běžné algebry.

* **Obyčejná vytvořující funkce (OGF):** $A(x) = \sum_{n=0}^{\infty} a_n x^n$
  Typicky reprezentuje výběr prvků, kde **nezáleží na pořadí** (kombinace, nerozlišitelné objekty).

  * *Příklad:* Posloupnost samých jedniček $(1, 1, 1, \dots)$ vyjadřuje řada $1 + x + x^2 + \dots$, což odpovídá funkci $\frac{1}{1-x}$.
* **Exponenciální vytvořující funkce (EGF):** $E(x) = \sum_{n=0}^{\infty} a_n \frac{x^n}{n!}$
  Používá se tam, kde **na pořadí záleží** (permutace, rozlišitelné objekty).
