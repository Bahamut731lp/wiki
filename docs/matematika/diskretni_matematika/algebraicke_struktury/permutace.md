# Permutace (Symetrické grupy)

!!! important "Výpočet inverzní permutace"
    Pro cyklus $(i_1, i_2, i_3, \ldots, i_n)$ vytvoříme inverzi otočením pořadí prvků v cyklu ($i_n, i_{n-1}, i_{n-2}, \ldots, i_1$)

!!! tip "Zápis cyklu jako součin transpozic"
    Cyklus $(i_1, i_2, i_3, \ldots, i_n)$ lze zapsat jako součin transpozic $(i_1, i_2)(i_1, i_3)\cdot \ldots \cdot (i_{1}, i_n)$

!!! tip "Umocňování cyklů"
    Umocňování cyklu funguje tak, že každý prvek cyklu se posune o $n \mod{k}$ pozic doprava, kde $n$ je exponent a $k$ je délka cyklu, přičemž výsledný cyklus se uzavírá zpět na začátku.

    $$\begin{aligned}
        \pi &= (1234)\\
        \pi^2 &= (13)(24)\\
        \pi^3 &= (1432) \\
        \pi^4 &= (1)(2)(3)(4)
    \end{aligned}$$

## Sudé a liché permutace
Permutaci nazveme sudou, jestliže ji lze zapsat ve tvaru součinu sudého počtu transpozic. Ostatní permutace nazýváme liché.

$$\sigma{(\pi)} = (-1)^n$$

kde $n$ je počet sudých cyklů v permutaci.

!!! example ""
    Zjistěte znaménko permutace $\sigma(\pi^{17} \cdot \rho^{22} \cdot \tau^{-122} \cdot x^{5841})$.

    $$\begin{aligned}
        \pi &= (1,4,2,9,6,3,10,11) \\
        \rho &= (1,3,2,8,11)(4,6,10)(5,9) \\
        \tau &= (1,4,5,7,3)(8,9,11)\\
        x &= (1,5)(2,7,11,6)(3,4,9) \\
        \\
        \sigma(\pi) &= (-1)^1 \\
        \sigma(\rho) &= (-1)^1 \\
        \sigma(\tau) &= (-1)^0 \\
        \sigma(x) &= (-1)^2 \\
        \\
        \sigma(\pi^{17} \cdot \rho^{22} \cdot \tau^{-122} \cdot x^{5841}) 
        &= {\sigma(\pi)}^{17} \cdot {\sigma(\rho)}^{22} \cdot {\sigma{(\tau)}}^{-122} \cdot {\sigma{(x)}}^{5841} \\
        &= {((-1)^1)}^{17} \cdot {((-1)^1)}^{22} \cdot {((-1)^0)}^{-122} \cdot {((-1)^2)}^{5841} \\
        &= (-1) \cdot 1 \cdot 1 \cdot 1 \\
        &= \boxed{-1}
    \end{aligned}$$

!!! important "Znaménko permutace"
    