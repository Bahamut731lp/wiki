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