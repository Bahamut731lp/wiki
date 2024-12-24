# Řešení vzorových testů

## Řešení k testu 6.2.2020

### Úloha 1
!!! example ""
    Nechť $a = 210 600, b = 117000, c = 268125$. Určete počet všech společných dělitelů čísel a, b, c a všechny je vypiště (vlastní i nevlastní). Určete $\varphi(NSN(a, b, c,))$, kde $\varphi$ označuje Eulerovu funkci.

#### Rozklady čísel na prvočísla

- $210600 = 2^3 \cdot 3^4 \cdot 5^2 \cdot 13$
- $117000 = 2^3 \cdot 3^2 \cdot 5^3 \cdot 13$
- $238125 = 3^1 \cdot 5^4 \cdot 11 \cdot 13$

???- quote "Rozklad čísla 210 600"
    ```mermaid
    flowchart LR
        r1(210 600)
        r1 --> r2(100)
        r2 --> r4([5])
        r2 --> r5(20)
        r5 --> r6([5])
        r5 --> r7(4)
        r7 --> r8([2])
        r7 --> r9([2])

        r1 --> r3(2106)
        r3 --> r10([2])
        r3 --> r11(1053)
        r11 --> r12([3])
        r11 --> r13(351)
        r13 --> r14([3])
        r13 --> r15(117)
        r15 --> r16([3])
        r15 --> r17(39)
        r17 --> r18([3])
        r17 --> r19([13])
    ```

???- quote "Rozklad čísla 117 000"
    ```mermaid
    flowchart LR
        r1(117 000)
        r1 --> r2(1000)
        r2 --> r4([5])
        r2 --> r5(200)
        r5 --> r6([5])
        r5 --> r7(40)
        r7 --> r8(5)
        r7 --> r9(8)
        r9 --> r10([2])
        r9 --> r11(4)
        r11 --> r12([2])
        r11 --> r13([2])

        r1 --> r14(117)
        r14 --> r15([3])
        r14 --> r16(39)
        r16 --> r17([13])
        r16 --> r18([3])
    ```

???- quote "Rozklad čísla 268 125"
    ```mermaid
    flowchart LR
        r1(268125)
        r1 --> r3([5])
        r1 --> r2(53625)
        r2 --> r5([5])
        r2 --> r4(10725)
        r4 --> r7([5])
        r4 --> r8(2145)
        r8 --> r9([5])
        r8 --> r10(429)
        r10 --> r11([3])
        r10 --> r12(143)
        r12 --> r13([13])
        r12 --> r14([11])
    ```

#### Určení NSD
Pokud máme čísla $a, b, c$ v jejich prvočíselném rozkladu, můžeme určit největšího společného dělitele. Ten se spočítá jako součin nejvyšších společných mocnic. To znamená, že musíme najít taková čísla a jejich mocniny, která jsou obsažena v každém zkoumaném čísle.

Pro názornost udělám tabulku četností prvočísel. Vybíráme takové číslo, které je v řádku nejmenší (samozřejmě kromě čísla označující prvočíslo, jehož četnost je popisována). Výsledný nejmenší společný dělitel $NSD(a, b, c) = 3 \cdot 5^2 \cdot 13$.

|Číslo|2|3|5|11|13|
|--:|:--:|:--:|:--:|:--:|:--:|
|__210600__|3|4|2|0|1|
|__11700__|3|2|3|0|1|
|__268125__|0|1|4|1|1|
|__NSD__|__0__|__1__|__2__|__0__|__1__|

#### Počet společných dělitelů
Počet společných dělitelů čísla lze vypočítat pomocí vztahu:

$$\begin{aligned}
\tau(n) &= (e_1 + 1) \cdot (e_2 + 1) \cdot\quad\ldots\quad\cdot (e_k + 1) \\
\\
\tau(NSD(a, b, c)) &= (1 + 1) \cdot (2 + 1) \cdot (1 + 1) \\
\tau(NSD(a, b, c)) &= 2 \cdot 3 \cdot 2 \\
\tau(NSD(a, b, c)) &= 12 \\
\end{aligned}$$

#### Určení všech dělitelů čísla

|Pořadí|Rozklad|Číslo|
|--:|:--|:--|
|1|$3^1 \cdot 5^2 \cdot 13^1$|975|
|2|$3^0 \cdot 5^2 \cdot 13^1$|325|
|3|$3^1 \cdot 5^1 \cdot 13^1$|195|
|4|$3^1 \cdot 5^2 \cdot 13^0$|75|
|5|$3^0 \cdot 5^1 \cdot 13^1$|65|
|6|$3^1 \cdot 5^0 \cdot 13^1$|39|
|7|$3^0 \cdot 5^2 \cdot 13^0$|25|
|8|$3^1 \cdot 5^1 \cdot 13^0$|15|
|9|$3^0 \cdot 5^0 \cdot 13^1$|13|
|10|$3^0 \cdot 5^1 \cdot 13^0$|5|
|11|$3^1 \cdot 5^0 \cdot 13^0$|3|
|12|$3^0 \cdot 5^0 \cdot 13^0$|1|

#### Určení NSN
K další úloze bude potřeba spočíta nejmenší společný násobek. Ten se spočítá jako podíl součinu všech čísel a největšího společného dělitele.

$$\begin{aligned}
    NSN(a, b, c) &= \frac{a \cdot b \cdot c}{NSD(a, b, c)} \\
    NSN(a, b, c) &= \frac{(2^3 \cdot 3^4 \cdot 5^2 \cdot 13) \cdot (2^3 \cdot 3^2 \cdot 5^3 \cdot 13) \cdot (3^1 \cdot 5^4 \cdot 11 \cdot 13)}{3 \cdot 5^2 \cdot 13} \\
    NSN(a, b, c) &= \frac{2^6 \cdot 3^7 \cdot 5^9 \cdot 11 \cdot 13^3}{3 \cdot 5^2 \cdot 13} \\
    NSN(a, b, c) &= \frac{2^6 \cdot 3^6 \cdot 5^7 \cdot 11 \cdot 13^2}{1} \\
    NSN(a, b, c) &= 2^6 \cdot 3^6 \cdot 5^7 \cdot 11 \cdot 13^2
\end{aligned}$$

Konkrétní číslo nebudeme dopočítávat, protože se na něj zadání neptá a v další části, kde počítáme výsledek Eulerovy funkce, není potřeba.

#### Výpočet Eulerovy funkce
$$\begin{aligned}
\varphi(n) &= (p_1^{e_{1}} - p_1^{e{_1} - 1}) \cdot\quad\ldots\quad\cdot (p_k^{e_{k}} - p_k^{e_{k} - 1}) \\
\\
\varphi(NSN(a,b,c)) &= (2^{6} - 2^{5}) \cdot (3^{6} - 3^{5}) \cdot (5^{7} - 5^{6}) \cdot (11^{1} - 11^{0}) \cdot (13^{2} - 13^{1}) \\
\varphi(NSN(a,b,c)) &= (64 - 32) \cdot (729 - 243) \cdot (78 125 - 15 625) \cdot (11 - 1) \cdot (169 - 13) \\
\varphi(NSN(a,b,c)) &= 32 \cdot 486 \cdot 62 500 \cdot 10 \cdot 156 \\
\varphi(NSN(a,b,c)) &= 32 \cdot 486 \cdot 62 500 \cdot 10 \cdot 156 \\
\varphi(NSN(a,b,c)) &= 32 \cdot 486 \cdot 625 \cdot 100 \cdot 10 \cdot 156 \\
\varphi(NSN(a,b,c)) &= 972 \cdot 10^4 \cdot 10^2 \cdot 10^1 \cdot 156 \\
\varphi(NSN(a,b,c)) &= 151632 \cdot 10^7\\
\end{aligned}$$

### Úloha 2
!!! example ""
    Uvažujte diofantickou rovnici $803x - 1397y = -1969$.
    
    1. Nalezněte všechna její celočíselná řešení.
    2. Určete řešení vyhovující podmínce - složka $x$ je největší celé číslo menší než -2020.

#### Ověření řešení diofantické rovnice
Než začneme s výpočtem, je potřeba ověřit, zda má diofantická rovnice nějaké celočíselné řešení. Pokud rozložíme všechna čísla na prvočinitele, zjistíme, že mají společný faktor 11. Platí, že $NSD(a, b) = 11$. Protože číslo 11 je také součástí prvočíselného rozkladu čísla $c$, znamená to, že největší společný dělitel $a$ a $b$ dělí i číslo $c$. Z toho vyplývá, že diofantická rovnice má řešení.

!!! tip "Řešení diofantické rovnice"
    Diofantická rovnice $ax + by = c$ má řešení, pokud $NSD(a, b) \mid c$.

!!! note "Rozklady čísel"
    ???- quote "Rozklad čísla 803"
        ```mermaid
        flowchart LR
            r1(803)
            r1 --> r3([11])
            r1 --> r2(73)
        ```

    ???- quote "Rozklad čísla 1397"
        ```mermaid
        flowchart LR
            r1(1397)
            r1 --> r3([11])
            r1 --> r2(127)
        ```

    ???- quote "Rozklad čísla 1969"
        ```mermaid
        flowchart LR
            r1(1397)
            r1 --> r3([11])
            r1 --> r2(179)
        ```

#### Řešení rovnice přes vzorečky
Řešení lineární diofantické rovnice začíná zjednodušením rovnice vydělením všech koeficientů jejich největším společným dělitelem (zde 11), což vede k jednodušší rovnici. Dále pomocí rozšířeného Eukleidova algoritmu a tabulky rozvoje v řetězové zlomky najdeme základní řešení rovnice, konkrétně $x=−40$ a $y=−23$. Tyto hodnoty platí pro pravou stranu upravené rovnice $73x - 127y = 1$, nyní je potřeba je upravit, aby byly pro rovnici $73x - 127y = -179$. Nalezené Bezoutovy koeficienty tak vynásobíme pravou stranou, což tady je $-179$ a tím získáme partikulární řešení $x_0 = 7160$ a $y = 4117$.

$$\begin{aligned}
    803x - 1397y &= -1969 \\
    73x - 127y &= -179 \\
    \\
    73x - 127y &= NSD(73, 127) \\
    73x - 127y &= 1 \\
    \\
    x &= -40 \\
    y &= -23 \\
    \\
    x_0 &= -40 \cdot (-179) \\
    y_0 &= -23 \cdot (-179) \\
    \\
    x_0 &= 7160 \\
    y_0 &= 4117 \\
    \\
    x &= x_0 + k \cdot \frac{b}{NSD(a, b)} \\
    y &= y_0 - k \cdot \frac{a}{NSD(a, b)} \\
    \\
    x &= 7160 + -127k \\
    y &= 4117 - 73k \\
\end{aligned}$$

!!! note "Tabulka rozvoje v řetězové zlomky"
    |i|-1|0|1|2|3|4|5|
    |:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
    |q|-|1|1|2|1|5|3|
    |P|1|1|2|5|7|40|127|
    |Q|0|1|1|3|4|23|73|

#### Řešení pomocí kongruencí

$$\begin{aligned}
    73x - 127y &= -179 \\
    73x &= -179 + 127y \\
    x &= \frac{-179 + 127y}{73}
\end{aligned}$$

Teď musíme najít celočíselná řešení této rovnice, což znamená, že hledáme hodnoty yy, pro které bude čitatel $−179+127y$ dělitelný číslem 73. Jinými slovy, potřebujeme zjistit, pro které hodnoty $y$ platí, že zbytek po dělení $−179+127y$ číslem 73 je nula. K tomu používáme kongruence, protože kongruence nám umožňují zjistit, které hodnoty dávají konkrétní zbytek po dělení.

$$\begin{aligned}
    x &= \frac{-179 + 127y}{73}\\
    &\downarrow \\
    -179+127y &\equiv 0 \pmod{73}\\
    127y &\equiv 179 \pmod{73}\\
    54y &\equiv 33 \pmod{73} \\
\end{aligned}$$

Nyní už postupuje standardně jako u řešení každé jiné lineární kongruence. Pomocí euklidova algoritmu najdeme multiplikativní inverzi k číslu 54 a následně dostanem upravenou kongruenci tak, abychom ji měli ve tvaru $y = ? \pmod{73}$.

$$\begin{aligned}
    54y &\equiv 33 \pmod{73} \\
    &\downarrow \\
    54y &\equiv 1 \pmod{73} \\
    54y + 73z &= 1 \\
    &\downarrow \\
    y &= 23 \\
    z &= -17 \\
    &\downarrow \\
    54 \cdot 23 \cdot y &\equiv 33 \cdot 23 \pmod{73} \\
    y &\equiv 759 \pmod{73} \\
    y &\equiv 29 \pmod{73} \\
    y &= \boxed{29 + 73k}
\end{aligned}$$

Našli jsme obecné řešení pro $y$ - nyní nám zbývá akorát nalézt $x$. To můžeme provést buďto dosazením do původní rovnice, a nebo do výrazu, kdy jsme si už $x$ z rovnice vyjadřovali.

$$\begin{aligned}
    x &= \frac{-179 + 127y}{73} \\
    x &= \frac{-179 + 127 \cdot (29 + 73k)}{73} \\
    x &= \frac{-179 + 127 \cdot 3683 + 127\cdot 73k}{73} \\
    x &= \frac{3504 + 127 \cdot 73}{73} \\
    x &= \frac{3504}{73} + \frac{127 \cdot 73}{73}k \\
    x &= \boxed{48 + 127k}
\end{aligned}$$

Ve výsledku máme tedy následující řešení rovnice:

- Obecné řešení $x = 48 + 127k$, $y = 29 + 73k$, $k \in \mathbb{Z}$
- Partikulární řešení $k = 0$, $x = 48$, $y = 29$

!!! note "Zkouška"
    Ověříme správnost partikulárního řešení dosazením do původní rovnice:

    $$\begin{aligned}
        k &= 0 \\
        &\downarrow \\
        73 \cdot 48 - 127 \cdot 29 &= -179 \\
        3504 - 3683 &= -179 \\
        -179 &= -179
    \end{aligned}$$

    Pro srandu ověříme ještě jedno řešení, například $k = 2$:
    
    $$\begin{aligned}
        k &= 2 \\
        &\downarrow \\
        73 \cdot (48 + 127 \cdot 2) - 127 \cdot (29 + 73\cdot 2) &= -179 \\
        73 \cdot 302 - 127 \cdot 175 &= -179 \\
        22046 - 22225 &= -179 \\
        -179 &= -179
    \end{aligned}$$

#### Nalezení největšího celého x menší než -2020

$$\begin{aligned}
    x &= \boxed{48 + 127k} \\
    &\downarrow \\
    48 + 127k &\lt -2020 \\
    127k &\lt -2068 \\
    k &= -\left\lceil\frac{2068}{127}\right\rceil \\
    k &= \boxed{-17} \\
    &\downarrow \\
    k &= -17 \\
    x &= 48 + 127 \cdot (-17) \\
    x &= 48 - 2159 \\
    x &= \boxed{2111}
\end{aligned}$$

### Úloha 3
!!! example ""
    Uvažujte soustavu kongruencí $2x \equiv -6 \pmod{15}$, $2x \equiv 3 \pmod{9}$, $3x \equiv -9 \pmod{10}$, $3x \equiv -15 \pmod{8}$.
    
    1. Uvedenou soustavu vyřešte
    2. Kolik celých čísel dané soustavě vyhovuje?
    3. Určete největší $x_0$, které vyhovuje dané kongruenci a navíc platí $|x_0 + 2020| < 250$

#### Řešení soustavy

$$\begin{aligned}
2x &\equiv -6 \pmod{15} \\
2x &\equiv 3 \pmod{9} \\
3x &\equiv -9 \pmod{10} \\
3x &\equiv -15 \pmod{8} \\
\\
2x &\equiv 9 \pmod{15} &/\cdot 8  \\
2x &\equiv 3 \pmod{9} &/\cdot 5  \\
3x &\equiv 1 \pmod{10} &/\cdot 7  \\
3x &\equiv 1 \pmod{8} &/\cdot 3 \\
\\
x &\equiv 12 \pmod{15} \\
x &\equiv 6 \pmod{9} \\
x &\equiv 7 \pmod{10} \\
x &\equiv 3 \pmod{8} \\
\\
x &= 12+ 15k \\
x &\equiv 6 \pmod{9} \\
x &\equiv 7 \pmod{10} \\
x &\equiv 3 \pmod{8} \\
&\downarrow \\
12+ 15k &\equiv 6 \pmod{9} \\
6k &\equiv 3 \pmod{9} \\
2k &\equiv 1 \pmod{3} &/\cdot(2) \\
k &= 2 + 3t \\
&\downarrow \\
x &= 12+ 15 \cdot (2 + 3t) \\
x &\equiv 7 \pmod{10} \\
x &\equiv 3 \pmod{8} \\
\\
x &= 42 + 45t \\
x &\equiv 7 \pmod{10} \\
x &\equiv 3 \pmod{8} \\
&\downarrow \\
42 + 45t &\equiv 7 \pmod{10} \\
45t &\equiv -35 \pmod{10} \\
5t &\equiv 5 \pmod{10}\\
t &\equiv 1 \pmod{2}
t &= 1 + 2s \\
&\downarrow \\
x &= 42 + 45\cdot(1 + 2s) \\
x &= 87 + 90s \\
&\downarrow \\
x &= 87 + 90s \\
x &\equiv 3 \pmod{8} \\
\\
87 + 90s &\equiv 3 \pmod{8} \\
7 + 2s &\equiv 3 \pmod{8} \\
2s &\equiv -4 \pmod{8} \\
2s &\equiv 4 \pmod{8} \\
s &\equiv 2 \pmod{4}
s &= 2 + 4r \\
&\downarrow \\
x &= 87 + 90 \cdot (2 + 4r) \\
x &= \boxed{267 + 360r}
\end{aligned}$$

#### Kolik celých čísel soustavě vyhovuje?
Všechny, máme obecné řešení, amigo.

#### Najděte největší x, které vyhovuje podmínce

$$\begin{aligned}
    |x_0 + 2020| &\lt 250 \\
    \\
    x_0 + 2020 &\lt 250 \\
    x_0 &\lt -1770 \\
    267 + 360r &\lt -1770 \\
    360r &\lt -2037 \\
    \\
    r &= -\left\lceil\frac{2037}{360}\right\rceil \\
    r &= \boxed{-6} \\
    \\
    x_0 &= 267 + 360 \cdot (-6) \\
    x_0 &= 267 - 2160 \\
    x_0 &= -1893 \\
    &\downarrow \\
    |x_0 + 2020| &\lt 250 \\
    |-1893 + 2020| &\lt 250 \\
    |127| &\lt 250
\end{aligned}$$

### Úloha 4
!!! example ""
    Nechť $f(x), g(x) \in \mathbb{Z}_7 \mod{(2x^4 + 4x^2 + 5x + 1)}$, kde $f(x) = 6x^3 + 2x^2 + 4$ a $g(x) = 5x^3 + 3x^2 + 2x + 6$.

    1. Spočtěte $f(x) \cdot g(x)$
    2. Rozhodněte, zda je $f(x)$ ireducibilní nad $\mathbb{Z}_7$. __Své tvrzení řádně zdůvodněte!__

#### Výpočet součinu
$$\begin{aligned}
    f(x) \cdot g(x) &= (6x^3 + 2x^2 + 4) \cdot (5x^3 + 3x^2 + 2x + 6) \\
    &= (30x^6 + 18x^5 + 12x^4 + 36x^3) + (10x^5 + 6x^4 + 4x^3 + 12x^2) + (20x^3 + 12x^2 + 8x + 24) \\
    &= 30x^6 + 28x^5 + 18x^4 + 60x^3 + 24x^2 + 8x + 24 \\
    &= 2x^6 + 0x^5 + 4x^4 + 4x^3 + 3x^2 + x + 3 \\
    &= \boxed{2x^6} + 4x^4 + 4x^3 + 3x^2 + x + 3 
\end{aligned}$$

|$x^6$  |$x^5$  |$x^4$  |x^3    |x^2    |x^1    |x^0    |
|:--:   |:--:   |:--:   |:--:   |:--:   |:--:   |:--:   |
|30     |18     |12     |36     |       |       |       |
|       |10     |6      |4      |12     |       |       |
|       |       |       |20     |12     |8      |24     |
|__30__ |__28__ |__18__ |__60__ |__24__ |__8__  |__24__ |

$$\begin{aligned}
    \begin{array}{r|l}
    2x^4 + 4x^2 + 5x + 1 & 2x^6 + 4x^4 + 4x^3 + 3x^2 + x + 3 \\
    \hline
        & - (2x^6 + 4x^4 + 5x^3 + x^2) \\
        \hline
        & -x^3 + 2x^2 + x + 3 \\
        & = \boxed{6x^3 + 2x^2 + x + 3} \\
    \end{array}
\end{aligned}$$

Výsledek součinu $f(x) \cdot g(x)$ v $\mathbb{Z}_7 \mod{(2x^4 + 4x^2 + 5x + 1)}$ je $6x^3 + 2x^2 + x + 3$.

#### Je polynom ireducibilní?
Polynom je ireducibilní v $\mathbb{Z}_7$, pokud má v $\mathbb{Z}_7$ alespoň jeden kořen. To znamená, že musí platit $f(x) = 0, x \in \mathbb{Z}$.

$$\begin{aligned}
    f(0) &= 6\cdot(0)^3 + 2(0)^2 + 4 = 4 \mod{7} \\
    f(1) &= 6\cdot(1)^3 + 2(1)^2 + 4 = 6 + 2 + 4 = 5 \mod{7} \\
    f(2) &= 6\cdot(2)^3 + 2(2)^2 + 4 = 6(8\mod{7}) + 2(4) + 4 = 6 + 1 + 4 = 4 \mod{7}\\
    f(3) &= 6\cdot(3)^3 + 2(3)^2 + 4 = 6(27 \mod{7}) + 2(9 \mod{7}) + 4 = 36 + 4 + 4 = 2 \mod{7} \\
    f(4) &= 6\cdot(4)^3 + 2(4)^2 + 4 = 6(64 \mod{7}) + 2(16 \mod{7}) + 4 = 6 + 4 + 4 = 0 \mod{7}
\end{aligned}$$

Dále nemusíme počítat, protože jsme nalezli kořen polynomu $f(x) = 6x^3 + 2x^2 + 4$ v $\mathbb{Z}_7$. Polynom je tedy ireducibilní, protože nejde dále rozložit na součin polynomů.


### Úloha 5
!!! example ""
    Rozhodněte, zda mnmožina čísel $\{2020 \cdot m \mid m \in \mathbb{Z}\}$ tvoří:

    1. Multiplikativní grupu
    2. Aditivní grupu

!!! info "Vlastnosti grupy"
    Pro grupu $G(M, *)$ nad množinou $M$ s operací $*$ musí platit následující vlastnosti:
    
    - Operace $*$ je uzavřená vůči množině $M$, tj. $\forall x, y \in M: x * y \in M$
    - Operace $*$ je asociativní, tj. $\forall x, y, z \in M: x * (y * z) = (x * y) * z$
    - Pro operaci $*$ existuje neutrální prvek $e$ takový, že $\forall x, \exists e \in M: x * e = e * x = x$
    - Pro operaci $*$ existuje inverzní prvek $i$ takový, že $\forall x, \exists i \in M: x * i = i * x = e$

#### Multiplikativní grupa
Uvažujme grupu $G(M, \cdot)$.

##### Uzavřenost operace
$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    y &= 2020 \cdot n \\
    \\
    x \cdot y &= (2020 \cdot m) \cdot (2020 \cdot n) \\
    x \cdot y &= 2020^2 \cdot m \cdot n
\end{aligned}$$

Operace násobení je pro celá čísla uzavřená, což znamená, že součin $m \cdot n$ také patří mezi celá čísla. Platí ale, že součin tohoto výrazu s číslem $2020^2$ náleží do množiny $M$? Ano, protože prvky množiny $M$ jsou definovány jako násobky čísla 2020, a $2020^2$ je rovněž násobkem 2020. Výsledkem je tedy násobek čísla 2020 vynásobený celým číslem, což odpovídá definici prvků množiny $M$. Proto je operace násobení uzavřená i vůči množině $M$.

$$\begin{aligned}
    m, n, p &\in \mathbb{Z} \\
    2020 \cdot p &= 2020^2 \cdot m \cdot n \\
    p &= 2020 \cdot m \cdot n \\
    p &\in \mathbb{M}
\end{aligned}$$

##### Asociativita
$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    y &= 2020 \cdot n \\
    \\
    2020 \cdot m \cdot 2020 \cdot n &= 2020 \cdot n \cdot 2020 \cdot m \\
    2020^2 \cdot m \cdot n &= 2020^2 \cdot m \cdot n
\end{aligned}$$

##### Existence neutrálního prvku
$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    e &= 2020 \cdot n \\
    \\
    x \cdot e &= x \\
    (2020 \cdot m) \cdot (2020 \cdot n) &= (2020 \cdot m)  & / :(2020 \cdot m)\\
    (2020 \cdot n) &= 1 \\
    n &= \frac{1}{2020 \cdot n} \\
    n &\not\in M
\end{aligned}$$

Neutrální prvek v grupě $G(M, \cdot)$ neexistuje, protože $\frac{1}{2020 \cdot n}$ není celé číslo.

##### Existence inverzního prvku
Dokazovat existenci inverzního prvku $i$ nemá smysl, protože jeho definice spoléhá na existenci neutrálního prvku $e$. Ovšem pro názornost zde předvedu, že opravdu neexistuje. Pro násobení v celých číslech je neutrálním prvkem číslo $1$, tudíž budeme uvažovat, že tohle je i neutrální prvek naší množiny $M$ (jak jsme ale dokázali v předchozím odstavci, není to pravda!).

$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    i &= 2020 \cdot n \\
    \\
    x \cdot i &= e \\
    (2020 \cdot m) \cdot (2020 \cdot n) &= 1 \\
    2020^2 \cdot m \cdot n &= 1 \\
    n &= \frac{1}{2020^2 \cdot m} \\
    n &\not\in M
\end{aligned}$$

#### Aditivní grupa
Uvažujme grupu $G(M, +)$.

##### Uzavřenost operace
$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    y &= 2020 \cdot n \\
    \\
    x + y &= (2020 \cdot m) + (2020 \cdot n) \\
    x + y &= 2020 \cdot (m + n)
\end{aligned}$$

Operace sčítání je pro celá čísla uzavřená, což znamená, že součet $m+n$ také patří mezi celá čísla. Platí ale, že součin tohoto výrazu s číslem $2020$ náleží do množiny $M$? Ano, protože prvky množiny $M$ jsou definovány jako celočíselné násobky čísla 2020. Výsledkem je násobek čísla 2020 vynásobený celým číslem, což odpovídá definici prvků množiny $M$. Proto je operace sčítání uzavřená i vůči množině $M$.

$$\begin{aligned}
    m, n, p &\in \mathbb{Z} \\
    2020 \cdot p &= 2020 \cdot (m + n) \\
    p &= m + n \\
    p &\in \mathbb{Z}
\end{aligned}$$

##### Asociativita
$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    y &= 2020 \cdot n \\
    \\
    (2020 \cdot m) + (2020 \cdot n) &= (2020 \cdot n) + (2020 \cdot m) \\
    2020 \cdot (m + n) &= 2020 \cdot (n + m)
    m + n &= n + m 
\end{aligned}$$

##### Existence neutrálního prvku
$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    e &= 2020 \cdot n \\
    \\
    x \cdot e &= x \\
    (2020 \cdot m) + (2020 \cdot n) &= (2020 \cdot m)  & / -(2020 \cdot m)\\
    (2020 \cdot n) &= 0 \\
    n &= 0 \\
    n &\in \mathbb{Z}
\end{aligned}$$

Neutrální prvek v grupě $G(M, +)$ existuje a je to $0$.

##### Existence inverzního prvku

$$\begin{aligned}
    m, n &\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    i &= 2020 \cdot n \\
    \\
    x + i &= e \\
    (2020 \cdot m) + (2020 \cdot n) &= 0 \\
    2020 \cdot (m + n) &= 0 &/ :2020 \\
    m + n &= 0 \\
    n &= -m \\
    n &\in \mathbb{Z}
\end{aligned}$$

#### Závěry
Množina $M = \{2020 \cdot m \mid m \in \mathbb{Z}\}$

1. __Netvoří multiplikativní grupu__ $G(M, \cdot)$, protože neexistuje neutrální a inverzní prvek, který by byl součástí množiny $M$.
2. __Tvoří aditivní grupu__ $G(M, +)$ s neutrálním prvkem $e = 0$ a inverzním prvkem $i = -m$.