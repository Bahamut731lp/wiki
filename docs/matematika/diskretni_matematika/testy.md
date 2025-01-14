# Řešení vzorových testů

## Řešení příkladů z PDF

### Úloha 1
!!! example "Zadání"
    Převeďte následující čísla do číselných soustav: 
    
    $$\begin{aligned}
        (3254)_{7 \to 13} \\
        (AC3D)_{14 \to 8} \\
        (2012021)_{3 \to 9} \\
        (8FE5)_{27 \to 3} \\
        (11110010101)_{2 \to 8} \\
        (AFEB)_{16 \to 4} \\
        (6AFEB)_{16 \to 4}
    \end{aligned}$$

!!! tip "Počet číslic převodu"
    Pokud si z nějaké soustavy převedeme číslo do desítkové, můžeme spočítat, kolik číslic bude mít číslo $N$ po převodu do základu $b$.

    $$
       \frac{\ln{N}}{\ln{b}}
    $$

---

$$\begin{aligned}
    (3254)_{7 \to 10} &= 3 \cdot 7^3 + 2 \cdot 7^2 + 5 \cdot 7^1 + 4 \cdot 7^0 \\
    (3254)_{7 \to 10} &= 1029 + 98 + 35 + 4 \\
    (3254)_{7} &= (1166)_{10} \\
    (3254)_{7} &= (6B9)_{13} \\
\end{aligned}$$

---

$$\begin{aligned}
    (AC3D)_{14 \to 10} &= 10 \cdot 14^3 + 12 \cdot 14^2 + 3 \cdot 14 + 13 \cdot 14^0 \\
    (AC3D)_{14 \to 10} &= 27440 + 2352 + 42 + 13 \\
    (AC3D)_{14} &= (29847)_{10} \\
    \\
    29847 : 8 &= 3730 \pod{7} \\
    3730 : 8 &= 3730 \pod{2} \\
    466 : 8 &= 3730 \pod{2} \\
    58 : 8 &= 3730 \pod{2} \\
    7 : 8 &= 0 \pod{7} \\
    \\
    (29847)_{10 \to 8} &= 72227 \\
    (AC3D)_{14} &= (72227)_8
\end{aligned}$$

---

$$\begin{aligned}
    (2012021)_{3 \to 10} &= 2 \cdot 3^6 + 1 \cdot 3^4 + 2 \cdot 3^3 + 2 \cdot 3^1 + 1 \cdot 3^0\\
    (2012021)_{3 \to 10} &= 1458 + 142\\
    (2012021)_{3} &= (1600)_10\\
    \\
    1600 : 9 &= 177 \pod{7} \\
    177 : 9 &= 19 \pod{6} \\
    19 : 9 &= 2 \pod{1} \\
    2 : 9 &= 0 \pod{2} \\
    \\
    (1600)_{10 \to 9} &= 2167 \\
    (2012021)_{3} &= (2167)_{9}
\end{aligned}$$

---

$$\begin{aligned}
    (8FE5)_{27 \to 10} &= 8 \cdot 27^3 + 15 \cdot 27^2 + 14 \cdot 27^1 + 5 \cdot 27^0 \\
    (8FE5)_{3 \to 10} &= 157464 + 10935 + 383\\
    (8FE5)_{27} &= (168782)_10\\
    \\
    168782 : 3 &= 56260 \pod{2} \\
    56260 : 3 &= 18753 \pod{1} \\
    18753 : 3 &= 6251 \pod{0} \\
    6251 : 3 &= 2083 \pod{2} \\
    2083 : 3 &= 694 \pod{1} \\
    694 : 3 &= 231 \pod{1} \\
    231 : 3 &= 77 \pod{0} \\
    77 : 3 &= 25 \pod{2} \\
    25 : 3 &= 8 \pod{1} \\
    8 : 3 &= 2 \pod{2} \\
    2 : 3 &= 0 \pod{2} \\
    \\
    (168782)_{10 \to 3} &= 22120112012 \\
    (8FE5)_{27} &= (22120112012)_{3}
\end{aligned}$$

--- 

$$\begin{aligned}
    (11110010101)_{2 \to 10} &= 1 \cdot 2^{10} + 1 \cdot 2^{9} + 1 \cdot 2^{8} + 1 \cdot 2^{7} + 1 \cdot 2^{4} + 1 \cdot 2^{2} + 1 \cdot 2^{0}\\
    (11110010101)_{2 \to 10} &= 1024 + 512 + 256 + 128 + 16 + 4 + 1\\
    (11110010101)_{2} &= (1941)_10\\
    \\
    1941 : 8 &= 242 \pod{5} \\
    242 : 8 &= 30 \pod{2} \\
    30 : 8 &= 3 \pod{6} \\
    3 : 8 &= 0 \pod{3}
    \\
    (1941)_{10 \to 8} &= 3625 \\
    (11110010101)_{2} &= (3625)_{8}
\end{aligned}$$

---

$$\begin{aligned}
    (AFEB)_{16 \to 10} &= 10 \cdot 16^{3} + 15 \cdot 16^{2} + 14 \cdot 16^{1} + 11 \cdot 16^{0}\\
    (AFEB)_{16 \to 10} &= 40960 + 3840 + 224 + 11\\
    (AFEB)_{16 \to 10} &= 40960 + 4075\\
    (AFEB)_{16 \to 10} &= 45035\\
    \\
    45035 : 4 &= 11258 \pod{3} \\
    11258 : 4 &= 2814 \pod{2} \\
    2814 : 4 &= 703 \pod{2} \\
    703 : 4 &= 175 \pod{3} \\
    175 : 4 &= 43 \pod{3} \\
    43 : 4 &= 10 \pod{3} \\
    10 : 4 &= 2 \pod{2} \\
    2 : 4 &= 0 \pod{2} \\
    \\
    (45035)_{10 \to 4} &= 22333223 \\
    (AFEB)_{16} &= (22333223)_{4}
\end{aligned}$$

---

$$\begin{aligned}
    (6AFEB)_{16 \to 10} &= 6 \cdot 16^4 + 10 \cdot 16^{3} + 15 \cdot 16^{2} + 14 \cdot 16^{1} + 11 \cdot 16^{0}\\
    (6AFEB)_{16 \to 10} &= 393216 + 40960 + 3840 + 224 + 11\\
    (6AFEB)_{16 \to 10} &= 434176 + 4075\\
    (6AFEB)_{16 \to 10} &= 438251\\
    \\
    438251 : 4 &= 109562 \pod{3} \\
    109562 : 4 &= 27390 \pod{2} \\
    27390 : 4 &= 6847 \pod{2} \\
    6847 : 4 &= 1711 \pod{3} \\
    1711 : 4 &= 427 \pod{3} \\
    427 : 4 &= 106 \pod{3} \\
    106 : 4 &= 26 \pod{2} \\
    26 : 4 &= 6 \pod{2} \\
    6 : 4 &= 1 \pod{2} \\
    1 : 4 &= 0 \pod{1}
    \\
    (438251)_{10 \to 4} &= 1222333223 \\
    (6AFEB)_{16} &= (1222333223)_{4}
\end{aligned}$$

### Úloha 2
!!! example "Zadání"
    Pomocí euklidova algoritmu nalezněte $NSD(a, b), kde$
    
    1. 106050, 156450
    2. 548245, 9649112
    3. 473200, 4474106
    4. 1765161, 420753
    5. 3002389, 231608
    6. 1572487, 253942

<div class="grid cards" markdown>

-   1) $NSD(156450, 106050) = 1050$

    ---

    $$\begin{array}{rr}
        & 156450 \\
        & 106050 \\
        \hline
        1 & 50400 \\
        2 & 5250 \\
        9 & 3150 \\
        1 & 2100 \\
        1 & \boxed{1050} \\
        2 & 0
    \end{array}$$

-   2) $NSD(548245, 9649112) = 109649$

    ---

    $$\begin{array}{rr}
        & 9649112 \\
        & 548245 \\
        \hline
        17 & 328947 \\
        1 & 219298 \\
        1 & \boxed{109649} \\
        2 & 0 \\
    \end{array}$$

-   3) $NSD(473200, 4474106) = 2366$

    ---

    $$\begin{array}{rr}
        & 4474106 \\
        & 473200 \\
        \hline
        9 & 215306 \\
        2 & 42588 \\
        5 & \boxed{2366} \\
        18 & 0
    \end{array}$$

-   4) $NSD(1765161, 420753) = 417$

    ---

    $$\begin{array}{rr}
        & 1765161 \\
        & 420753 \\
        \hline
        4 & 82149 \\
        5 & 10008 \\
        8 & 2085 \\
        4 & 1668 \\
        1 & \boxed{417} \\
        4 & 0
    \end{array}$$

-   5) $NSD(3002389, 231608) = 1703$

    ---

    $$\begin{array}{rr}
        & 3002389 \\
        & 231608 \\
        \hline
        12 & 223093 \\
        1 & 8515 \\
        26 & \boxed{1703} \\
        5 & 0
    \end{array}$$

-   6) $NSD(1572487, 253942) = 9767$

    ---

    $$\begin{array}{rr}
        & 1572487 \\
        & 253942 \\
        \hline
        6 & 48835 \\
        5 & \boxed{9767} \\
        5 & 0
    \end{array}$$
</div>

### Úloha 3
!!! example "Zadání"
    Pomocí euklidova algoritmu nalezněte $NSN(a, b), kde$
    
    1. 13440, 19740
    2. 11550, 16950

<div class="grid cards" markdown>

-   1) $NSD(13440, 19740) = 420$

    ---

    $$\begin{array}{rr}
        & 19740 \\
        & 13440 \\
        \hline
        1 & 6300 \\
        2 & 840 \\
        7 & \boxed{420} \\
        2 & 0
    \end{array}$$

-   2) $NSD(11550, 16950) = 150$

    ---

    $$\begin{array}{rr}
        & 16950 \\
        & 11550 \\
        \hline
        1 & 5400 \\
        2 & 750 \\
        7 & \boxed{150} \\
        5 & 0
    \end{array}$$
</div>

<div class="grid cards" markdown>
-   $NSN(13440, 19740)$

    $$\begin{aligned}
        &= \frac{13440 \cdot 19740}{420} \\
        &= \frac{1344 \cdot 19740}{42} \\
        &= \frac{672 \cdot 19740}{21} \\
        &= 672 \cdot 940 \\
        &= \boxed{63168}
    \end{aligned}$$

-   $NSN(11550, 16950)$

    $$\begin{aligned}
        &= \frac{11550 \cdot 16950}{150} \\
        &= \frac{1155 \cdot 16950}{15} \\
        &= 77 \cdot 16950 \\
        &= \boxed{1305150}
    \end{aligned}$$
</div> 

### Úloha 4
!!! example "Zadání"
    Vyjádřete $NSD(13 440,19 740)$ ve tvaru [Bezoutovy rovnosti](./teorie_delitelnosti/bezoutova_rovnost.md).

!!! question "Co je bezoutova rovnost?"
    Bezoutova rovnost říká, že [největší společný dělitel](./spolecny_delitel.md#spolecny-delitel) dvou přirozených čísel je jejich [lineární kombinace](../linearni_algebra/linearni_kombinace.md).

    $$
        ax + by = NSD(a, b)
    $$

!!! tip "Výpočet NSD"
    $$\begin{array}{rr}
        & 19740 \\
        & 13440 \\
        \hline
        1 & 6300 \\
        2 & 840 \\
        7 & \boxed{420} \\
        2 & 0
    \end{array}$$

!!! note "Tabulka rozvoje v řetězové zlomky"
    |i|-1|0|1|2|3|
    |:--:|:--:|:--:|:--:|:--:|:--:|
    |q|-|1|2|7|2|
    |P|1|1|3|22|47|
    |Q|0|1|2|15|32|

$$\begin{aligned}
    19740x + 13440y &= 420 \\
    47x + 32y &= 1 \\
    \\
    x &= 15 \\
    y &= -22 \\
\end{aligned}$$

### Úloha 5
!!! example "Zadání"
    Určete $NSD(a, b)$ pomocí dvojkového NSD algoritmu.

    1. 112, 161
    2. 130, 234
    3. 105, 231

### Úloha 6
!!! example "Zadání"
    Rozhodněte, která z následujících čísel jsou prvočísla: 983; 837;

### Úloha 7
!!! example "Zadání"
    Určete počet dělitelů a součet dělitelů čísla 17 439 786;

### Úloha 8
!!! example "Zadání"
    Pomocí kanonických rozkladů určete NSD/NSN čísel a = 2 598 225, b = 6 101 550.

### Úloha 9
!!! "Zadání"
    Určete $\varphi{(n)}$, kde

    1. $\varphi{(2478175)}$
    2. $\varphi{(367)}$

### Úloha 10
!!! example "Zadání"
    Nakreslete grafy funkcí

    1. $1 - 2\lceilx\rceil, x \in \left<-2,2\right>$
    2. $\left\lfloor\frac{x^2}{2}-3\right\rfloor, x \in \left<-3,3\right>$

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

Pro názornost udělám tabulku četností prvočísel. Vybíráme takové číslo, které je ve sloupci nejmenší (samozřejmě kromě čísla označující prvočíslo, jehož četnost je popisována). Výsledný nejmenší společný dělitel $NSD(a, b, c) = 3 \cdot 5^2 \cdot 13$.

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
K další úloze bude potřeba spočítat nejmenší společný násobek. Ten se spočítá jako podíl součinu všech čísel a největšího společného dělitele.

$$\begin{aligned}
    NSD(a, b) &= 2^3 \cdot 3^2 \cdot 5^2 \cdot 13 \\
    NSD(a, c) &= 2^0 \cdot 3^1 \cdot 5^2 \cdot 13 \\
    NSD(b, c) &= 2^0 \cdot 3^1 \cdot 5^3 \cdot 13 \\
    NSD(a, b, c) &=  3^1 \cdot 5^2 \cdot 13\\
    \\
    a &= 2^3 \cdot 3^4 \cdot 5^2 \cdot 13 \\
    b &= 2^3 \cdot 3^2 \cdot 5^3 \cdot 13 \\
    c &= 2^0 \cdot 3^1 \cdot 5^4 \cdot 11 \cdot 13 \\
\end{aligned}$$

$$\begin{aligned}
    NSN(a, b, c) &= \frac{(2^3 \cdot 3^4 \cdot 5^2 \cdot 13) \cdot (2^3 \cdot 3^2 \cdot 5^3 \cdot 13) \cdot (3^1 \cdot 5^4 \cdot 11 \cdot 13) \cdot (3^1 \cdot 5^2 \cdot 13)}{(2^3 \cdot 3^2 \cdot 5^2 \cdot 13) \cdot (3^1 \cdot 5^2 \cdot 13) \cdot (3^1 \cdot 5^3 \cdot 13)} \\
    NSN(a, b, c) &= \frac{2^6 \cdot 3^8 \cdot 5^{11} \cdot 11 \cdot 13^3}{2^3 \cdot 3^4 \cdot 5^7 \cdot 13^3} \\
    NSN(a, b, c) &= 2^3 \cdot 3^4 \cdot 5^5 \cdot 11
\end{aligned}$$

Konkrétní číslo nebudeme dopočítávat, protože se na něj zadání neptá a v další části, kde počítáme výsledek Eulerovy funkce, není potřeba.

#### Výpočet Eulerovy funkce
$$\begin{aligned}
\varphi(n) &= (p_1^{e_{1}} - p_1^{e{_1} - 1}) \cdot\quad\ldots\quad\cdot (p_k^{e_{k}} - p_k^{e_{k} - 1}) \\
\\
\varphi(NSN(a,b,c)) &= (2^{3} - 2^{2}) \cdot (3^{4} - 3^{3}) \cdot (5^{5} - 5^{4}) \cdot (11^{1} - 11^{0}) \\
\varphi(NSN(a,b,c)) &= (8 - 4) \cdot (81 - 27) \cdot (3125 - 625) \cdot (11 - 1) \\
\varphi(NSN(a,b,c)) &= 4 \cdot 54 \cdot 62 500 \cdot 10 \cdot 156 \\
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

Teď musíme najít celočíselná řešení této rovnice, což znamená, že hledáme hodnoty $y$, pro které bude čitatel $−179+127y$ dělitelný číslem 73. Jinými slovy, potřebujeme zjistit, pro které hodnoty $y$ platí, že zbytek po dělení $−179+127y$ číslem 73 je nula. K tomu používáme kongruence, protože kongruence nám umožňují zjistit, které hodnoty dávají konkrétní zbytek po dělení.

$$\begin{aligned}
    x &= \frac{-179 + 127y}{73}\\
    &\downarrow \\
    -179+127y &\equiv 0 \pmod{73}\\
    127y &\equiv 179 \pmod{73}\\
    54y &\equiv 33 \pmod{73} \\
\end{aligned}$$

Nyní už postupujeme standardně jako u řešení každé jiné lineární kongruence. Pomocí euklidova algoritmu najdeme multiplikativní inverzi k číslu 54 a následně dostaneme upravenou kongruenci tak, abychom ji měli ve tvaru $y = ? \pmod{73}$.

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
    x &= \boxed{-2111}
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
t &\equiv 1 \pmod{2} \\
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
Nekonečně mnoho - ta, pro která je zbytek po dělení 360 roven 267.

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
Polynom je ireducibilní v $\mathbb{Z}_7$, pokud nemá v $\mathbb{Z}_7$ ani jeden kořen. To znamená, že musí platit $f(x)\neq 0, x \in \mathbb{Z}$.

$$\begin{aligned}
    f(0) &= 6\cdot(0)^3 + 2(0)^2 + 4 = 4 \mod{7} \\
    f(1) &= 6\cdot(1)^3 + 2(1)^2 + 4 = 6 + 2 + 4 = 5 \mod{7} \\
    f(2) &= 6\cdot(2)^3 + 2(2)^2 + 4 = 6(8\mod{7}) + 2(4) + 4 = 6 + 1 + 4 = 4 \mod{7}\\
    f(3) &= 6\cdot(3)^3 + 2(3)^2 + 4 = 6(27 \mod{7}) + 2(9 \mod{7}) + 4 = 36 + 4 + 4 = 2 \mod{7} \\
    f(4) &= 6\cdot(4)^3 + 2(4)^2 + 4 = 6(64 \mod{7}) + 2(16 \mod{7}) + 4 = 6 + 4 + 4 = 0 \mod{7}
\end{aligned}$$

Dále nemusíme počítat, protože jsme nalezli kořen polynomu $f(x) = 6x^3 + 2x^2 + 4$ v $\mathbb{Z}_7$. Polynom je tedy reducibilní, protože lze dále rozložit na součin polynomů.


### Úloha 5
!!! example ""
    Rozhodněte, zda množina čísel $\{2020 \cdot m \mid m \in \mathbb{Z}\}$ tvoří:

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
    p &\in \mathbb{Z}
\end{aligned}$$

##### Asociativita
$$\begin{aligned}
    m, n, o&\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    y &= 2020 \cdot n \\
    z &= 2020 \cdot o \\
    \\
    (2020 \cdot m \cdot 2020 \cdot n) \cdot 2020 \cdot o &= 2020 \cdot m \cdot (2020 \cdot n \cdot 2020 \cdot o) \\
    2020^3 \cdot m \cdot n \cdot o &= 2020^3 \cdot m \cdot n \cdot o
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
    n &\not\in Z
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
    n &\not\in Z
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
    m, n, o&\in \mathbb{Z} \\
    x &= 2020 \cdot m \\
    y &= 2020 \cdot n \\
    z &= 2020 \cdot o \\
    \\
    (2020 \cdot m + 2020 \cdot n) + 2020 \cdot o &= 2020 \cdot m + (2020 \cdot n + 2020 \cdot o) \\
    2020 \cdot (m + n + o) &= 2020 \cdot (m + n + o)
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
2. __Tvoří aditivní grupu__ $G(M, +)$ s neutrálním prvkem $e = 0$ a inverzním prvkem $i = -2020 \cdot m$.

## Řešení k testu 4.3.2021

### Úloha 1
!!! example ""
    Nalezněte řešení následující soustavy kongruencí

    $$\begin{aligned}
        24x + 14y + 22z &\equiv 16 \pmod{15} \\
        33x + 45y + 27z &\equiv 6 \pmod{45} \\
        16x + 9y + 31z &\equiv 16 \pmod{15} \\
    \end{aligned}$$

    Řešení zapiště v soustavě nejmenších nezáporných zbytků vhodného modulu.

### Úloha 2
!!! example ""
    Uvažujte zdrojovou abecedu $\begin{array}{cccccc}a & b & c & d & e & f \\ 0.3 & 0.2 & 0.2 & 0.1 & 0.1 & 0.1 \end{array}$. Dekódujte text $(.100011)_2$, který vzniknul zakódováním textu o délce 3 znaky, jestliže byla použita metoda DFWLD.

### Úloha 3
!!! example ""
    Nechť $f(x), g(x) \in \mathbb{Z}_5 [x]$, kde $f(x) = 3 + x + x^5 + 2x^6$ a $g(x) = 1 + x + 3x^2 + 2x^3 + 4x^4$. Nalezněte $NSD(f(x), g(x))$ a vyjádřete ho ve tvaru $a(x) \cdot f(x) + b(x) \cdot g(x)$.

### Úloha 4
!!! example ""
    Rozhodněte, zda číslo $666!$ končí lichým, nebo sudým počtem nul. Své tvrzení řádně zdůvodněte!

    !!! quote ""
        Základem je si ujasnit co generuje ty nuly na konci. Jsou to násobky 5 krát násobky 2 (sudá čísla). Protože sudých čísel je mnohem víc než násobků 5 a tedy ke každému násobku 5 najdeme sudé číslo, stačí se soustředit na to kolik máš v daném faktoriálu čísel dělitelných 5.
        Pro 60! tedy stačí spočítat 60/5=12. Ovšem pozor na mocniny 5, v tomto případě je nutno vzít v úvahu pouze druhou mocninu 5, tedy 25. 25=5*5 a je tedy zapotřebí 60/25=2 a zbytek 10, který je irelevantní. Konečný počet 0 je tedy 12+2=14
        Pro názornost: Kolika nulami končí číslo 1026! ? 1026/5=205(1) 1026/25=41(1) 1026/125=8(26) 1026/625=1(401) 3125 už je větší než 1026 a nemusím se jím tedy zabývat.
        v ()jsou zbytky které nás nemusejí zajímat.
        V konečném součtu je tedy na konci 1026! 205+41+8+1=255 nul.
        Doufám, že ti to pomohlo :)

    $$\begin{aligned}
        z(666!) &= \left\lceil \frac{666}{5^1} \right\rceil + \left\lceil \frac{666}{5^2} \right\rceil + \left\lceil \frac{666}{5^3} \right\rceil + \left\lceil \frac{666}{5^4} \right\rceil  \\
        z(666!) &= 133 + 26 + 5 + 1 \\
        z(666!) &= \boxed{165}
    \end{aligned}$$

### Úloha 5
!!! example ""
    Nechť $\pi, \rho \in S_7$, kde $\pi = (2,4,3,7,1)(3,1,2)(5,6,3,4)$ a $\rho = (3,2,5,4,1)(7,5,3,1)(2,6,1,5,4)$.

    $$\begin{array}
        1 & 2 & 3 & 4 & 5 & 6 & 7 \\
        4 & 5 & 7 & 1 & 6 & 3 & 2
    \end{array}$$

    (1,4)(2,5,6,3,7)

    1. Spočtěte $\pi^{-1}$ a $\rho^{-1}$
    2. Spočtěte $\pi^{-1} \cdot \rho \cdot \pi$

    Veškeré výsledky zapiště ve tvaru součinu disjunktních cyklů.

## Řešení k testu 9.2.2021

### Úloha 2
!!! example ""
    Nechť $\pi, \rho \in S_7$, kde $\pi = \left(\begin{array}1 & 2 & 3 & 4 & 5 & 6 & 7 \\7 & 1 & 4 & 6 & 2 & 3 & 5\end{array}\right)$, $\rho = (2615)(1427)(436)$.

    1. Permutace $\pi, \rho$ zapiště ve tvaru součinu disjunktních cyklů
    2. Spočtěte $\pi \cdot \rho$
    3. Ze vztahu $x \cdot \rho^{-1} \cdot x^{-1} = (x \cdot \pi)^{-1}$ vyjádřete $x$ v co nejjednoduším tvaru a dopočtěte jeho hodnotu.

    __Výsledky zapiště vždy ve tvaru součinu disjunktních cyklů__

#### Zápis ve tvaru disjunktních cyklů.

$$\begin{aligned}
\pi &= (1,7,5,2)(3,4,6) \\
\rho &= (5,4)(6,)
\end{aligned}$$