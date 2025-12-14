# DFWLD
__Dyadic fraction with least denominator__ (zkráceně DFWLD) je druhem aritmetického kódu, který je bezeztrátový nultého řádu.

## Kódování
Pro zdrojovou abecedu $A = \left(\begin{array}{cccccc}a & b & c & \ldots \\ p_1 & p_2 & p_3 & \ldots \end{array}\right)$, kde první řádek jsou __znaky zdrojové abecedy__ a druhý řádek jsou __pravděpodobnosti znaků__ kódujeme pomocí DFWLD následujícím způsobem:

1. __Spočítáme si kumulativní pravděpodobnosti znaků__ - Předpokládáme, že zdrojová abeceda je seřazena od nejvyšší pravděpodobnosti po tu nejmenší. Pak kumulativní pravděpodobnost $C(x)$ počítáme jako __ostře menší__, takže se pravděpodobnost toho konkrétního znaku __nepočítá__.
2. __Pro každý znak slova spočítáme novou dolní a horní mez__
    - dolní mez $a_i = a_{i-1} + l_{i-1} \cdot C(p_i)$
    - délka intervalu $l_i = l_{i-1} \cdot p_{i}$
3. __Určení parametru__ $t \in \mathbb{N}^+$ - Ten spočítáme z nerovnice $t \ge \left\lceil-\frac{\ln{l_n}}{\ln{2}}\right\rceil \gt -t + 1$
4. __Určení parametru__ $s \in \mathbb{N}$ - Ten spočítáme z nerovnice $a_n \cdot 2^t \le s \lt (a_n + l_n) \cdot 2^t$. V případě, že nám výjdou dva výsledky, volíme ten sudý.
5. __Sestavení dyadického zlomku__ $R = \frac{s}{2^t}$
6. __Zakódování do binární podoby__ - Výsledné číslo bude mít $t$ znaků. Pokud má číslo méně bitů než $t$, tak se doplní nulami zleva.

## Dekódování
