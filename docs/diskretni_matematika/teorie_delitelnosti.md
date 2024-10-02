# Úvod do teorie dělitelnosti
Teorie dělitelnosti představuje jeden z klíčových pilířů aritmetiky a hraje zásadní roli v celé matematice. Už od starověku lidé řešili otázky spojené s rozdělováním množství. Teorie dělitelnosti poskytuje elegantní a efektivní nástroje pro řešení problémů, které sahají daleko za hranice jednoduchých početních úkonů. 

Přemýšlení o dělitelnosti vede k otázkám, jak lze efektivně rozkládat čísla na jejich základní prvky, jak určit jejich společné vlastnosti nebo jak nalézt rychlé způsoby řešení problémů s čísly. Například při zkoumání největšího společného dělitele, nejmenšího společného násobku či prvočísel se otevírají dveře do kryptografie, kódování a teorie čísel, na čemž dnes závisí široká škála technik, od optimalizace algoritmů v počítačových vědách až po šifrování dat, které chrání moderní komunikaci.

Základním kamenem teorie dělitelnosti je množina celých čísel a množina přirozených čísel s nulou. Když se podíváme na operace, které můžeme s celými čísly provádět, tak zjistíme, že je množina celých čísel:

- uzavřená vůči sčítání $a, b \in \mathbb{Z} \to a + b \in \mathbb{Z}$
- uzavřená vůči odčítání $a, b \in \mathbb{Z} \to a - b \in \mathbb{Z}$
- uzavřená vůči násobení $a, b \in \mathbb{Z} \to a - b \in \mathbb{Z}$
- a **není** uzavřená vůči dělení $a, b \in \mathbb{Z} \to a : b \not\in \mathbb{Z}$

???- abstract "Důkaz pro uzavřenost operací sčítání, odčítání a násobení"
    Důkaz provedem pro sčítání, ale principielně funguje i pro odčítání a násobení. Předpokládejme, že existují taková dvě čísla $a, b$, která jsou celá, a jejichž součet není celé číslo.
    
    $$\exists a, b \in \mathbb{Z}, a + b \not\in\mathbb{Z}$$

    To znamená, že součet těchto dvou čísel by mělo být číslo, které není celé, takže například raciolnální (zlomek), iracionální, či třeba komplexní. Celá čísla zahrnují čísla přirozená (1, 2, 3, ...), nulu a čísla opačná k přirozeným číslům (-1, -2, -3, ...).

    Máme tedy tři kategorie čísel, která se nám můžou v operaci zjevit, a to kladná, záporná a nulu.
    
    - Přičteme-li kladné a kladné celé číslo, dostaneme větší kladné celé číslo.
    - Přičteme-li záporné a záporné celé číslo, dostaneme větší záporné celé číslo.
    - Přičteme-li kladné a záporné celé číslo, dostaneme rozdíl, který je opět celé číslo.

    Neexistuje žádný způsob, jak by součet dvou celých čísel mohl vést k číslu, které není celé, protože operace sčítání mezi celými čísly nemůže vytvořit zlomky ani iracionální čísla. Předpoklad, že součet dvou celých čísel $a+b\in\mathbb{Z}:\, a+b\in\mathbb{Z}$, vede ke sporu, protože neexistuje žádný případ, kdy by součet dvou celých čísel nebyl celé číslo.

## Dělitelnost
Právě případ dělení, který výsledek operace přenáší za hranice celých čísel, je to, co se nám vyplatí zkoumat a hledat, jak můžeme poznatky z této operace dále využít.

!!! tip "Definice dělitelnosti"
    Uvažujme čísla $a$ a $b$, kde $a$ je libovolné celé číslo a $b$ je libovolné **nenulové** celé číslo. Poté řekneme, že $b$ dělí $a$, což značíme jako ($b|a$), jestliže existuje číslo $q$ tak, aby platilo $\exists q \in \mathbb{Z}: a = b \cdot q$.

    - Číslo $a$ se nazývá násobek čísla $b$ 
    - Číslo $b$ se nazývá dělitelem čísla $a$
    - Číslo $q$ se nazývá podílem čísel $a$ a $b$

    Ve své podstatě to znamená, že když číslo $a$ vydělíme číslem $b$, tak dostaneme celé číslo $q$, které není nějakým šíleným zlomkem či iracionálním číslem.

Dělitelé mohou být vlastní či nevlastní. Nevlastní dělitelé jsou taková čísla, která dělí "všechna" čísla - jedná se tak o dva případy:

- Dělení jedničkou $\pm 1$
- a dělení dělitelem samotným $\pm a$.

Všechny ostatní dělitelé nazýváme vlastní.

!!! info "Vždy budeme uvažovat pouze kladné dělitele"

### Vlastnosti dělitelnosti

1. Každé celé číslo lze vydělit jedničkou. 
    - $\forall a \in \mathbb{Z}: 1 | a$.
2. Každé celé číslo, kromě nuly, může dělit nulu.
    - $\forall a \in \mathbb{Z} - \{0\}: a | 0$.
3. Každé celé nenulové číslo je dělitelné samo sebou.
    - $\forall a \in \mathbb{Z} - \{0\}: a | a$.
3. Pokud nezáleží na pořadí při dělení dvou celých nenulových čísel, pak musí mít tato čísla stejnou hodnotu (velikost). 
    - $\forall a, b \in \mathbb{Z} - \{0\}: (b | a) \wedge (a | b) \implies |a| = |b|$
4. Pokud máme tři celá čísla a platí, že třetí číslo je dělitelné druhým, a druhé je dělitelné prvním, pak z toho vyplývá, že třetí číslo musí být také dělitelné prvním. Tento princip nazýváme **tranzitivita**.
    - $\forall a, b, c \in \mathbb{Z}: (c | b) \wedge (b | a) \implies (c | a)$.
5. Pokud má celé číslo vlastního dělitele, tak je dělitelné i jeho násobky.
    - $\forall a, b, c \in \mathbb{Z}: (b | a) \implies (b | (a\cdot c))$.
6. Pokud máme tři celá čísla, jejichž součet dává určitý výsledek, a nějaké číslo dělí jak první číslo, tak i ten výsledek, pak to stejné číslo musí dělit i druhé číslo.
    - $\forall a, b, c \in \mathbb{Z} \wedge (a + b = c): (d | a) \wedge (d | c) \implies (d | b)$.

## Dělení se zbytkem
Dělení se zbytkem je jednoduchý, ale mocný nástroj, který využíváme nejen v matematických úlohách, ale i v běžném životě. Když rozdělujeme věci na části a nemůžeme je dokonale rozdělit, zůstává určitý "zbytek", který představuje nedokonalost dělení. Tento koncept však není jen praktickým nástrojem pro rozdělování, ale má mnohem širší využití. V informatice je klíčový například při šifrování, práci s daty nebo při návrhu algoritmů, kde zbytek po dělení umožňuje optimalizaci výpočtů nebo vytváření bezpečnostích šifer. V praktickém životě ho používáme například pro plánování času či rozdělování omezeného počtu zdrojů.

!!! tip "Definice dělení se zbytkem"
    Nechť $a \in \mathbb{Z}, b \in \mathbb{N}^+$. Potom existuje $q, r \in \mathbb{Z}$, kde $0 \le r \le b$.

    - Číslo $a$ je dělenec
    - Číslo $b$ je dělitel
    - Číslo $q$ je neúplný podíl
    - Číslo $r$ je zbytek


## Společný dělitel

!!! info "Definice společného dělitele"
    Kladné přirozené číslo $d$ nazýváme společným dělitelem čísel $a, b \in \mathbb{Z}$, jestliže $d|a \wedge d|b$.

Množina všech společných dělitelů $d$ čísel $a$ a $b$ se zapisuje jako $d_{a,b} = \{d\in\mathbb{N}^+ | d|a \wedge d|b \}$. Tato množina nikdy není prázdná, protože vždy mají tyto čísla jednoho společného dělitele, a to nevlastního dělitele $\pm 1$. Tato množina je zároveň shora omezená, kdy horní hranicí je to menší ze dvou čísel.

!!! tip "Největší společný dělitel"
    Nechť $a, b \in \mathbb{Z}, a \cdot b \not= 0$. Největším společným dělitelem a, b rozumíme takového společného dělitele, který je ze všech společných dělitelů největší. Existuje vždy a je určen jednoznačně.

    Největšího společného dělitele označujeme jako funkci dvou proměnných $NSD(a, b)$.


!!! tip "Nesoudělnost čísel"
    Pokud je největší společný dělitel čísel $a$ a $b$ číslo jednička, neboli $NSD(a, b) = 1$, říkáme, že čísla $a$ a $b$ jsou __nesoudělná__.

### Eukleidův algoritmus
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

### Vlastnosti NSD
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

### Dvojkový NSD algoritmus
Dvojkový NSD algoritmus je efektivní metoda pro výpočet největšího společného dělitele dvou přirozených čísel (jedno může být nula).

!!! important "Kroky dvojkového NSD algoritmu"
    |Číslo a|Číslo b|NSD|
    |:---:|:---:|:--|
    |Sudé|Sudé|$NSD(a, b) = 2\cdot NSD(\frac{a}{2}, \frac{b}{2})$|
    |Sudé|Liché|$NSD(a, b) = NSD(\frac{a}{2}, b)$|
    |Liché|Sudé|$NSD(a, b) = NSD(a, \frac{b}{2})$|
    |Liché|Liché|$a < b:\,NSD(a, b) = NSD(a, \frac{b - a}{2})$|

## Bézoutova rovnost
Bézoutova rovnost říká, že [největší společný dělitel](#spolecny-delitel) dvou přirozených čísel je jenom jejich [lineární kombinace](../linearni_algebra/linearni_kombinace.md).

$$\begin{aligned}
NSD(a,b) &= ax + by\\
x, y &\in \mathbb{Z}
\end{aligned}$$
