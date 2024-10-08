# Společný dělitel
Kladné přirozené číslo $d$ nazýváme společným dělitelem čísel $a, b \in \mathbb{Z}$, jestliže $d|a \wedge d|b$.

Množina všech společných dělitelů $d$ čísel $a$ a $b$ se zapisuje jako $d_{a,b} = \{d\in\mathbb{N}^+ | d|a \wedge d|b \}$. Tato množina nikdy není prázdná, protože vždy mají tyto čísla jednoho společného dělitele, a to nevlastního dělitele $\pm 1$. Tato množina je zároveň shora omezená, kdy horní hranicí je to menší ze dvou čísel.

!!! question "Kolik dělitelů má číslo?"
    Uvažujme číslo $n$, které je rozloženo na součin [prvočísel](prvocisla.md) ve tvaru

    $$n = p_1^{e_1} \cdot p_2^{e_2} \cdot\quad\ldots\quad\cdot p_k^{e_k} $$

    Každý dělitel čísla $n$ je součin některých mocnin těchto prvočísel. Pro každé prvočíslo $p_i$ můžeme použít jakoukoliv jeho mocninu od 0 (což znamená, že dané prvočíslo ve dělitelích vůbec není) až po $e_i$ (nejvyšší mocnina daného prvočísla, kterou můžeme použít), tudíž máme $e_i + 1$ možností.

    Počet dělitelů tak lze určit jako součin všech možných kombinací mocnin, které můžeme za každé prvočíslo použít. Označíme-li si počet dělitelů čísla $n$ jako $\tau(n)$, pak platí:

    $$\tau(n) = (e_1 + 1) \cdot (e_2 + 1) \cdot\quad\ldots\quad\cdot (e_k + 1)$$
    
!!! question "Lze určit součet všech dělitelů čísla?"
    !!! bug "TODO: Vysvětlit"

    $$S(n) = (\frac{p_{1}^{e_1 + 1} - 1}{p_1 - 1}) \cdot (\frac{p_{2}^{e_2 + 1} - 1}{p_2 - 1}) \cdot\quad\ldots\quad\cdot (\frac{p_{k}^{e_k + 1} - 1}{p_k - 1})$$

## Největší společný dělitel
Nechť $a, b \in \mathbb{Z}, a \cdot b \not= 0$. Největším společným dělitelem a, b rozumíme takového společného dělitele, který je ze všech společných dělitelů největší. Existuje vždy a je určen jednoznačně.

Největšího společného dělitele označujeme jako funkci dvou proměnných $NSD(a, b)$. Pokud je největší společný dělitel čísel $a$ a $b$ číslo jednička, neboli $NSD(a, b) = 1$, říkáme, že čísla $a$ a $b$ jsou __nesoudělná__.

!!! question "Jak určit další největší společné dělitele?"
    Pokud chceme určit například druhého či třetího největšího společného dělitele, využijeme [rozkladu na prvočísla](./prvocisla.md#kanonicky-rozklad-na-prvocisla) a odebereme to nejmenší možné číslo z prvočíselného rozkladu.

## Eukleidův algoritmus
Eukleidův algoritmus je algoritmem pro výpočet největšího společného dělitele. To znamená, že hledáme největší číslo, které obě čísla mohou dělit beze zbytku.

!!! abstract "Kroky Eukleidova algoritmu"
    Pro čísla $a \in \mathbb{Z}$ (větší číslo) a $b \in \mathbb{N}^+$ (menší číslo) a zbytek $r$ prováděj následující kroky:

    - Vyděl větší číslo menším a spočítej zbytek.
    - Nahraď větší číslo menším a opakuj dělení se zbytkem.
    - Pokračuj, dokud není zbytek 0.
    - Poslední číslo, kterým bylo děleno, je NSD.


=== "Implementace v Pythonu"
    ```py
    def gcd(a, b):
        while b != 0:
            a, b = b, a % b
        return a
    ```
=== "Implementace v Typescriptu"
    ```ts
    function gcd(a: number, b: number){
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }
    ```

## Vlastnosti NSD
Pro čísla $a, b \in \mathbb{Z}$ kde alespoň jedno je nenulové platí:

1. Největší společný dělitel není ovlivněn pořadím čísel
    - $NSD(a, b) = NSD(b, a)$
2. Největší společný dělitel není ovlivněn znaménkami čísel
    - $NSD(a, b) = NSD(-a, b) = NSD(a, -b) = NSD(-a, -b)$
3. Pokud čísla $a$ i $b$ dělí nějaké číslo, tak ho bude dělit i jejich dělitel
    - $(d \mid a) \wedge (d \mid b) \equiv d \mid NSD(a, b)$
4. Funkce pro výpočet největšího společného dělitele je homogenní pro kladné násobky.
    - $\forall k \in \mathbb{N}^+:\,NSD(k\cdot a, k\cdot b) = k\cdot NSD(a, b)$
    - $\forall d \in \mathbb{N}^+:\, NSD(\frac{a}{d}, \frac{b}{d}) = \frac{1}{d} \cdot NSD(a, b)$
5. Největší společný dělitel násobku čísla $a$ a čísla $b$ je dělitelný největším společným dělitelem koeficientu a čísla $b$.

## Dvojkový NSD algoritmus
Dvojkový NSD algoritmus je efektivní metoda pro výpočet největšího společného dělitele dvou přirozených čísel (jedno může být nula).

!!! important "Kroky dvojkového NSD algoritmu"
    |Číslo a|Číslo b|NSD|
    |:---:|:---:|:--|
    |Sudé|Sudé|$NSD(a, b) = 2\cdot NSD(\frac{a}{2}, \frac{b}{2})$|
    |Sudé|Liché|$NSD(a, b) = NSD(\frac{a}{2}, b)$|
    |Liché|Sudé|$NSD(a, b) = NSD(a, \frac{b}{2})$|
    |Liché|Liché|$a < b:\,NSD(a, b) = NSD(a, \frac{b - a}{2})$|

