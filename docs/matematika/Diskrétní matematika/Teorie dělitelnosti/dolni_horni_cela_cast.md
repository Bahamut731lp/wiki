# Dolní a horní celá část

Funkce __dolní__ a __horní__ celá část jsou takové funkce, které libovolné reální číslo ($x \in \mathbb{R}$) převádí na celé číslo ($x \in \mathbb{Z}$).

!!! info "Dolní celá část"
    Dolní část $\lfloor x \rfloor$ reálného čísla $x$ je definována jako nejbližší celé číslo menší nebo rovné číslu $x$. Číslo $x$ je tak vždycky zaokrouhleno dolů k nejblizšímu celému číslu.

    - Funkci dolní celá část označujeme symbolem $\lfloor x \rfloor$ nebo pomocí funkce $\floor{x}$
    - Platí $\lfloor x \rfloor \le x \lt \lfloor x \rfloor$.

!!! info "Horní celá část"
    Horní část $\lceil x \rceil$ reálného čísla $x$ je definována jako nejbližší celé číslo větší nebo rovné $x$. Číslo $x$ je tak vždycky zaokrouhleno nahoru k nejblizšímu celému číslu.

    - Funkci horní celá část označujeme symbolem $\lceil x \rceil$ nebo pomocí funkce $\ceil{x}$
    - Platí $\lceil x - 1 \rceil \lt x \le \lceil x \rceil$

!!! info "Lomenná část"
    Lomenná část $\{x\}$ reálného čísla $x$ je definována jako desetinná část čísla $x$. Číslu $x$ tak zůstane pouze část za desetinnou čárkou.

    - Funkci lomenná část označujeme symbolem $\{x}\$ nebo pomocí funkce $\frac2{x}$
    - Platí $\{x\} = x - \lfloor x \rfloor$

!!! technical "Psaní těchto funkcí v LaTeXu"
    - V klasickém LaTeXu nebo Mathjaxu nejsou funkce $\floor{x}$, $\ceil{x}$ nebo $\myfrac{x}$ definovaný. V Mathjax konfiguraci jsou tedy definovány jako makra.
    - Kvůli tomu, aby se funkce $\myfrac{x}$ netloukla s funkcí pro konstrukci zlomků `\frac`, tak se používá příkaz `\myfrac`.