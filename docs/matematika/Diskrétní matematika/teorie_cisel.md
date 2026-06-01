# Teorie čísel

## Posloupnosti
Posloupnost prvků je zobrazení $M \to \mathbb{N}$, kde $M$ je množina prvků. Ke každému prvku množiny je přiřazeno přirozené číslo, tzv. index.

## Nekonečné řady

### Aritmetika limit posloupností
Pravidla o aritmetice limit posloupností je soubor pravidel, které diktují, jak můžeme limity posloupnostní upravovat a jaké vztahy pro ně platí.

$$\Large\begin{aligned}
\lim_{n\to\infty}{a_n} &= a \\
\lim_{n\to\infty}{b_n} &= b \\
\\
\lim_{n\to\infty}{a_n + b_n} &= a + b \\
\lim_{n\to\infty}{a_n - b_n} &= a - b \\
\lim_{n\to\infty}{a_n \cdot b_n} &= a \cdot b \\
\large\text{pro }b \not= 0: \Large\lim_{n\to\infty}{\frac{a_n}{b_n}} &= \frac{a}{b}
\end{aligned}$$

##  Limita monotónní posloupnosti

>**Existence limity monotónní posloupnosti:**
>[[Monotónnost posloupnosti|Monotónní posloupnost]] je [[Vlastní limita posloupnosti#Konvergence a divergence|konvergentní]] jenom tehdy, když je [[Omezení posloupnosti|omezená]].

>**Vlastní limita neklesající posloupnosti:**
>Pokud je posloupnost neklesající a
>- Není shora omezená $\implies$ Má nevlastní limitu v $+\infty$
>- Je shora omezená $\implies$ Má vlastní limitu v [[Omezení množiny#Supremum a infimum|supremu]] posloupnosti.

>**Vlastní limita nerostoucí posloupnosti:**
>Pokud je posloupnost nerostoucí a
>- Není zdola omezená $\implies$ Má nevlastní limitu v $-\infty$
>- Je zdola omezená $\implies$ Má vlastní limitu v [[Omezení množiny#Supremum a infimum|infimu]] posloupnosti.

## Monotónnost posloupnosti

Mějme posloupnost $\{a_n\}_{n=1}^{\infty}$, poté říkáme, že je:

|Monotónie|Zápis|Vysvětlení|
|:--:|:--:|:--|
|Rostoucí|$\forall{n}\in\mathbb{N} : a_n < a_{n+1}$|Pro každé $n$ z přirozených čísel, pokud je prvek na pozici $n$ **menší** než prvek na pozici $n+1$, je posloupnost **rostoucí**.|
|Klesající|$\forall{n}\in\mathbb{N} : a_n > a_{n+1}$|Pro každé $n$ z přirozených čísel, pokud je prvek na pozici $n$ **větší** než prvek na pozici $n+1$, je posloupnost **klesající**.|
|Nerostoucí|$\forall{n}\in\mathbb{N} : a_n \le a_{n+1}$|Pro každé $n$ z přirozených čísel, pokud je prvek na pozici $n$ **menší nebo roven** než prvek na pozici $n+1$, je posloupnost **nerostoucí**. |
|Neklesající|$\forall{n}\in\mathbb{N} : a_n \ge a_{n+1}$|Pro každé $n$ z přirozených čísel, pokud je prvek na pozici $n$ **větší nebo roven** než prvek na pozici $n+1$, je posloupnost **neklesající**.|

Posloupnost nazýváme **ryze monotónní**, pokud je buďto **pouze rostoucí** nebo **pouze klesající**.

## Nevlastní limita posloupnosti
Nevlastní limita posloupnosti se vyskytuje u neomezených posloupností, kde vždy existuje prvek větší než libovolné zvolené číslo.

>**Definice nevlastní limity posloupnosti**:
>Pokud ke každému libovolnému číslu existují prvky nekonečné posloupnosti, které jsou větší než naše libovolné číslo, tak má posloupnost nevlastní limitu v $\infty$.
>
>Pokud pro libovolné číslo $A$ existují prvky, které jsou menší než libovolné číslo, tak má posloupnost nevlastní limitu v $-\infty$.
>
>$\large\forall{A}\in\mathbb{R}: \exists{n_0}\in\mathbb{N}, a_n > A \implies \text{Nevlastní limita v }+\infty$
>$\large\forall{A}\in\mathbb{R}: \exists{n_0}\in\mathbb{N}, a_n < A \implies \text{Nevlastní limita v }-\infty$

## Věta o sevření
Věta o sevření *(Věta o dvou strážcích, o dvou policajtech, v angličtině squeeze theorem)* je věta, která nám dovoluje zjistit limitu sevřené posloupnosti.

> **Definice věty o sevření**:
> Mějme tři posloupnosti:
> - $\Large\{a_n\}_{n=1}^{\infty}$
> - $\Large\{b_n\}_{n=1}^{\infty}$
> - $\Large\{c_n\}_{n=1}^{\infty}$
>
>Ve kterých pro všechna $n$ platí, že $a_n \le b_n \le c_n$. Poté můžeme říct, že 
>- Když $\{a_n\}$ konverguje k nějaké limitě $L$
>- a $\{c_n\}$ také konverguje k limitě $L$
>- $\implies \{b_n\}$ musí také konvergovat k limitě $L$.

>![[Pasted image 20220201121715.png]]

## Limita posloupnosti
Posloupnost $\{a_n\}_{n=1}^{\infty}$ má (vlastní) limitu v bodě $a$, pokud pro libovolně velké [[Okolí bodu|okolí]] platí, že rozdíl prvku a limity je menší než okolí.

>**Definice  vlastní limity posloupnosti:**
>Posloupnost má vlastní limitu v oboru reýlných čísel, jestliže pro každé [[Okolí bodu|okolí]] epsilon existuje pořadové číslo (index) $n_0$, od kterého každy prvek s vyšším pořadovým číslem spadá do prostoru ohraničeného okolím epsilon.
>
>![[Pasted image 20211210135426.png]]

>**Jednoznačnost limity posloupnosti:**
>Každá posloupnost může mít nejvýše jednu limitu.

## Konvergence a divergence
**Konvergence**
Pokud  posloupnost má vlastní limitu, tak se body sbíhají k sobě. V tomto případě říkáme, že posloupnost **konverguje** (k bodu limity). 

$$\Large\lim_{n\to\infty} a_n = a$$

**Divergence**
Pokud  posloupnost nemá vlastní limitu, tak říkáme, že posloupnost **diverguje**. 

## Kdy limita neexistuje
Limita posloupnosti neexistuje v případě, kdy najdeme dvě [[Vybraná posloupnost|vybrané posloupnosti]], které obě mají různé limity.

## Příklady

---
>Hledejte limitu posloupnosti $\Large\{\frac{1}{n}\}_{n=1}^\infty$. Výsledek dokažte pomocí definice limity.
>
>*Když za $\Large\frac{1}{n}$ budeme dosazovat větší a větší číslo, tak bude vznikat menší a menší číslo, tudíž se bude zlomek víc a víc blížit k nule.*
>
>Pro libovolné $\large\varepsilon \gt 0$ platí, že $\large|a_n - a| \lt \varepsilon$.
>$$\large\begin{aligned}
>|a_n - a| &\lt \varepsilon \\
>|\frac{1}{n} - 0| &\lt \varepsilon \\
>|\frac{1}{n}| &\lt \varepsilon
>\end{aligned}$$
>Protože $\varepsilon$ bylo libovolné číslo větší než nula, tak $\Large\frac{1}{n}$ musí být menší nebo rovno nule. Vzhledem k tomu, že je zlomek v absolutní hodnotě, tak jediné vyhovující číslo je 0.

---

>Uveďtě výsledek limity $\large\lim_{n\to\infty}{\sqrt[n]{x}}$ pro $x \ge 0$.
>
>$$\large
>\lim_{n\to\infty}{\sqrt[n]{x}} = 
>\lim_{n\to\infty}{x^{\frac{1}{n}}} = 
>x^{\lim_{n\to\infty}{\frac{1}{n}}} =
>x^0 = 1
>$$
## Vybraná posloupnost
Vybranou posloupností rozumíme takovou posloupnost, které vznikne tím, že z nějaké jiné posloupnosti vyškrtáme (ne)konečně mnoho členů.

>**Definice vybrané posloupnosti:**
>Mějme
>- posloupnost $\large\{a_n\}_{n=1}^{\infty}$
>- a [[Monotónnost posloupnosti|rostoucí posloupnost]] přirozených čísel $\large\{k_n\}_{n=1}^{\infty}$
>
> Poté posloupnost $\large\{a_{k_n}\}_{n=1}^{\infty}$ nazýváme **vybranou posloupností** z původní posloupnosti.
> 
> [[Posloupnosti#Značení|Co znamená to značení se složenými závorkami?]]


 [[Nutná podmínka]] konvergence je věta, která nám říká, zda může řada konvergovat.

>[!quote] Nutná podmínka konvergence řady:
>Řada $\sum_{n=1}^{\infty}a_n$ může konvergovat jen a pouze tehdy, když je $\lim_{n\to\infty}a_n = 0$

>[!question] Co říká nutná podmínka konvergence řady?
>Nutná podmínka konvergence řady říká, že pokud se prvky řady postupně blíží k nule, tak musí konvergovat.

Tento dokument se snaží shrnout postup, jakým lze vyšetřovat konvergenci řady.


## Ověření nutné podmínky konvergence řady.
Jako první by se měla ověřit [[Nutná podmínka konvergence]], která nám dá vodítko k tomu, zda má vůbec smysl řadu vyšetřovat.

>[!quote] [[Nutná podmínka|Nutná podmínka]] konvergence řady:
>Řada $\sum_{n=1}^{\infty}a_n$ může konvergovat jen a pouze, když je $\lim_{n\to\infty}a_n = 0$

Pokud limita výjde nula, můžeme pokračovat s vyšetřováním. Pokud výjde jinak, píšeme, že je řada divergentní a máme hotovo.

## Použití kritérií konvergence
Jestliže už víme, že řada může konvergovat, je na čase použít kritéria konvergence. Nejčastěji se asi používají [[Odmocninové kritérium#Limitní odmocninové kritérium|limitní odmocninové kritérium]] a [[Podílové kritérium#Limitní podílové kritérium|limitní podílové kritérium]]. Samozřejmě se hodí znát i další kritéria, jako je např. [[Integrální kritérium]] či [[Srovnávací kritérium]].

## Vyšetření oboru konvergence
Některé řady mohu být zadány s parametrem (např. $\sum_{n=1}^{\infty}\frac{x-2}{n}$). Poté je potřeba vyšetřit, s jakými hodnotami parametru daná řada konverguje.

Máme-li nějakou mocninnou řadu, např. výše zmíněnou $\sum_{n=1}^{\infty}\frac{x-2}{n}$, postupujeme následovně:
1) Vypočítáme **střed oboru konvergence**, neboli $x-2 = 0 \implies x = 2$.
2) Vypočítáme **poloměr konvergence**
	1) Buďto pomocí "převráceného odmocninového kritéria" $(\lim_{n\to\infty}\sqrt[n]{a_n})^{-1}$
	2) nebo pomocí "převráceného podílového kritéria" $\lim_{n\to\infty}\left|\frac{a_{n}}{a_{n+1}}\right|$

Odmocninové (neboli Cauchyho) kritérium je jedno z kritérií konvergence řady s nezápornými členy.

>[!quote] Řada $\sum_{n=1}^{\infty}a_n$ je řada s nezápornými členy.
>Pokud existují 
>- číslo $q < 1$
>- přirozené číslo $k$ <sup>(Jedná se o takovou "spodní mez", pozn. red.)</sup>
>
>Tak, že 
>- pro každé $n \ge k$ je $\sqrt[n]{a_n}\large<q$, pak je řada konvergentní,
>- jinak je divergentní.

## Limitní odmocninové kritérium
>[!example] Řada $\sum_{n=1}^{\infty}a_n$ je řada s nezápornými členy.
>Je-li 
>>[!done] $\lim_{n\to\infty}\sqrt[n]{a_n} \large\lt 1$, pak je řada konvergentní.
>
>>[!fail] $\lim_{n\to\infty}\sqrt[n]{a_n} \large\gt 1$, pak je řada divergentní.
>
>>[!question] $\lim_{n\to\infty}\sqrt[n]{a_n} \large= 1$, pak nelze tímto kritériem rozhodnout.

Podílové kritérium je jedno z kritérií konvergence řady s kladnými členy.

>[!example] Řada $\sum_{n=1}^{\infty}a_n$ je řada s kladnými členy.
>Pokud existují 
>- číslo $q < 1$
>- přirozené číslo $k$ <sup>(Jedná se o takovou "spodní mez", pozn. red.)</sup>
>
>Tak, že 
>- pro každé $n \ge k$ je $\Large\frac{a_{n+1}}{a_n}\large<q$, pak je řada konvergentní,
>- jinak je divergentní.

## Limitní podílové kritérium
>[!example] Řada $\sum_{n=1}^{\infty}a_n$ je řada s kladnými členy.
>Je-li 
>>[!done] $\lim_{n\to\infty}\Large\frac{a_{n+1}}{a_n} \large\lt 1$, pak je řada konvergentní.
>
>>[!fail] $\lim_{n\to\infty}\Large\frac{a_{n+1}}{a_n} \large\gt 1$, pak je řada divergentní.
>
>>[!question] $\lim_{n\to\infty}\Large\frac{a_{n+1}}{a_n} \large= 1$, pak nelze tímto kritériem rozhodnout.


## Kroneckerova delta
Kroneckorova delta je funkce, jejíž výsledek se 
- rovná 1, pokud se dvě proměnné rovnají, 
- a 0, pokud se nerovnají.

$$\Large \delta_{ij} = 
\begin{cases}
1 \impliedby i = j \\
0 \impliedby i \not= j
\end{cases}$$

Efektivně tak jde zapsat jednotková matice.

## Lineární zobrazení na prostoru číselných posloupností

1. Konečná množina $M \subset \mathbb{N}$, posloupnosti $(a_i)_{i>0}$ přiřadíme $k$-tici ($a_{n1}, a_{n2}, ..., a_{nk}$)

## Rekurentní posloupnost
Rekurentní posloupnost (též _rekurence_) je vyjádření posloupnosti, která k výpočtu libovolného členu využívá jiné členy posloupnosti. Rekurence je dána __rekurentním vztahem__ a __počátečními podmínkami__. S rekurencí se velmi špatně počítají vyšší členy, a proto je vhodné zkoumat, jestli by daná rekurentní posloupnost, vyjádřená rekurentním vztahem, nešla převést na jinou posloupnost, která již vztah bude mít nerekurentní.

### Lineární rekurence s konstatními koeficienty
1) $a_n = r^n$
2) Posun kladných mocnin $r$

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

!!! note "Sdružené komplexní kořeny"
    $$\begin{aligned}
    e^{j\cdot\theta} &= \cos{\theta} + j\cdot\sin{\theta}
    \end{aligned}$$

### Nehomogenní LRV

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