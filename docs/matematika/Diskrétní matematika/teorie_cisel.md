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

