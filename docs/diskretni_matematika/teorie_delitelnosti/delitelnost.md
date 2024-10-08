# Dělitelnost
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

## Vlastnosti dělitelnosti

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
