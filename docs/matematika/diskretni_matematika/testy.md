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

???+ quote "Rozklad čísla 268 125"
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
