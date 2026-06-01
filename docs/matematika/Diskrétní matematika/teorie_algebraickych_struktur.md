# Teorie algebraických struktur

# Grupy
Groupy jsou uspořádanou dvojící $(G, \cdot)$, kde $G$ je neprázdná množina prvků a $\cdot$ je binární operace.

!!! abstract "Vlastnosti Grupy"
    - __Operace musí být asociativní__: $\forall a,b,c \in G: (a \cdot b) \cdot c = a \cdot (b \cdot c)$
    - __Pro operaci musí existovat neutrální prvek__: $\exists e \in G: a \cdot e = e \cdot a = e$
    - __Pro prvky musí existovat symetrické prvky__: $\forall a, \hat{a}: a \cdot \hat{a} = e$

    Pokud je navíc operace komutativní, tj. $\forall a, b \in G: a \cdot b = b \cdot a$, pak je grupa Abelovská.

## Cyklické grupy
Pokud vezmeme jeden prvek grupy $(G, \cdot)$ a sestrojíme jednoprvkovou množinu $\left<g\right> = \{g^n \mid n\in \mathbb{Z}\}$, poté tato množina tvoří podgrupu a prvek $g$ je jejím generátorem. Tuto podgrupu nazýváme cyklickou. Cyklická grupa je tedy taková grupa, která je generovaná jedním prvkem.

!!! info "Definice cyklické grupy"
    Grupa je cyklická, pokud $\exists g \in G$ takové, že $G = \left<g\right>$

## Symetrické grupy
Symetrické grupy jsou takové grupy, které jsou sestrojené nad množinou všech permutací $n$-prkové množiny.

!!! example "Permutace"
    $$\Large
    \pi = \left(\begin{array}{}1 & 2 & 3 & 4 & 5  \\ 4 & 3 & 2 & 5 & 1  \\\end{array}\right)
    $$

!!! info "Výpočet inverzní permutace"
    Pro cyklus $(i_1, i_2, i_3, \ldots, i_n)$ vytvoříme inverzi otočením pořadí prvků v cyklu ($i_n, i_{n-1}, i_{n-2}, \ldots, i_1$)

Každou permutaci lze zapsat jako součin tzv. cyklů. Cyklus není nic jiného, než posloupnost obrazů v permutaci, které začínají a končí ve stejném vzoru. Permutace $\pi = \left(\begin{array}{}1 & 2 & 3 & 4 & 5  \\ 4 & 3 & 2 & 5 & 1  \\\end{array}\right)$ má cykly $(1,4,5)(2,3)$.

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

!!! info "Sudé a liché permutace"
    Permutaci nazveme sudou, jestliže ji lze zapsat ve tvaru součinu sudého počtu transpozic. Ostatní permutace nazýváme liché - $n$ je počet sudých cyklů v permutaci.

    $$\sigma{(\pi)} = (-1)^n$$

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

# Okruhy
Okruhy jsou uspořádanou trojicí $O = (A, +, \cdot)$, kde $A$ je neprázdná množina prvků a $(+, \cdot)$ jsou dvě binární operace.

!!! abstract "Vlastnosti okruhu"
    Pro $(A, +)$ platí:

    - __Operace musí být asociativní__: $\forall a,b,c \in O: (a + b) + c = a + (b + c)$
    - __Pro operaci musí existovat neutrální prvek__: $\exists 0 \in O: a + 0 = 0 + a = 0$
    - __Pro prvky musí existovat symetrické prvky__: $\forall a, -{a}: a + (-{a}) = 0$

    Pro $(A, \cdot)$ platí:
    
    - __Operace musí být asociativní__: $\forall a,b,c \in O: (ab)c = a(bc)$
    - __Pro operaci musí existovat neutrální prvek__: $\exists 1 \in O: a \cdot 1 = 1 \cdot a = a$
    - __Operace musí být distributivní__: $\forall a,b,c \in O: (a+b)\cdot c = ac+bc \land a(b+c)=ab+ac$

# Obor integrity
Obor integrity je takový okruh, ve kterém je operace násobení také komutativní, a zároveň nemá vlastní dělitele nuly (takový prvek, který po vynásobení dává nulu).

# Těleso
Těleso je uspořádanou trojicí $(T, +, \cdot)$, kde $T$ je neprázdná množina a:

- $(T, +)$ tvoří abelovu grupu
- $(T-\{0\}, \cdot)$ tvoří abelovu grupu
- Platí distributivní zákony

## Polynom
Polynom je výraz $a_0 + a_1x^1 + \dots + a_nx^n$ nad tělesem $(T, +, \cdot)$. Monický polynom je takový, který má koeficient u nejvyšší mocniny roven jedné.

### Dělení polynomů

### Ireducibilita
Polynom se nazývá ireducibilní, pokud má pouuze nevlastní dělitele (nejde rozložit na součin menších, nekonstantních, polynomů).

- Každý polynom stupně 1 je ireducibilní nad tělesem $T$
- Každý polynom stupně 2 nebo 3 je ireducibilní nad $T$ právě tehdy, pokud v $T$ nemá kořen.
- Každý polynom v $T$ lze rozepsat na rozklad monických ireducibilních polynomů.
- Jediné ireducibilní polynomy nad $\mathbb{C}$ jsou pouze polynomy stupně 1.
- Jediné ireducibilní polynomy nad $\mathbb{R}$ jsou polynomy stupně 1 a stupně 2 se záporným diskriminantem.

## Euklidův algoritmus pro polynomy

!!! example ""
    Uvažujte polynomy $f(x) = 2x^4 + 2x^3 + 4x^2 + 3x + 4$ a $g(x) = 3x^4 + x^3 + 4x^2 + x + 1$. Spočtěte $NSD(f(x), g(x))$ pomocí Euklidova algoritmu.

    $$\begin{aligned}
    \end{aligned}$$