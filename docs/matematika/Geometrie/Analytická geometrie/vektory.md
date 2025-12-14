# Vektorová algebra

## Příklady

### Úloha 2.6

### Úloha 2.7
Jsou dány souřadnice bodů $A$, $B$, $C$, $R$ a $Z$.

- Varianta A: $A[0,1], B[6,3], C[4,5], R[2,r_2], Z[7,z_2]$
- Varianta B: $A[1,2,3], B[3,3,6], C[0,1,2], R[0,r_2,r_3], Z[-2,z_2,z_3]$

#### a) Určete souřadnice vektorů $u = AB$ a $v = AC$ a jejich velikost.
##### Varianta A
$$\begin{align}
    \vec{u} &= AB\\
            &= (B_x - A_x, B_y - A_y)\\
            &= (6 - 0, 3 - 1)\\
            &= \boxed{(6, 2)}\\
            \\
    \vec{v} &= AC\\
            &= (C_x - A_x, C_y - A_y)\\
            &= (4 - 0, 5 - 1)\\
            &= \boxed{(4, 4)} \\
            \\
    |\vec{u}|   &= \sqrt{(u_1)^2 + (u_2)^2}\\
                &= \sqrt{(6)^2 + (2)^2}\\
                &= \sqrt{40}\\
                &= \sqrt{4 \cdot 10}\\
                &= \sqrt{4} \cdot \sqrt{10}\\
                &= \boxed{2\cdot\sqrt{10}} \\
                \\
    |\vec{v}|   &= \sqrt{(v_1)^2 + (v_2)^2}\\
                &= \sqrt{(4)^2 + (4)^2}\\
                &= \sqrt{32}\\
                &= \sqrt{16 \cdot 2} \\
                &= \sqrt{16} \cdot \sqrt{2} \\
                &= \boxed{4\cdot\sqrt{2}}
\end{align}$$

!!! question "Úpravy mocnic u výpočtu velikosti"
    Pokud nechápeš úpravy, které jsem dělal s odmocninami, aneb proč se $\sqrt{40}$ rovná $2\cdot\sqrt{10}$ nebo proč $\sqrt{32}$ je $4\cdot\sqrt{2}$, přečti si kapitolu o [částečném odmocňování](../matematika/odmocniny.md#částečné-odmocňování).

##### Varianta B
$$\begin{align}
    \vec{u} &= AB \\
            &= (B_x - A_x, B_y - A_y, B_z - A_z) \\
            &= (3 - 1, 3 - 2, 6 - 3) \\
            &= \boxed{(2, 1, 3)}\\
    \\
    \vec{v} &= AC \\
            &= (C_x - A_x, C_y - A_y, C_z - A_z) \\
            &= (0 - 1, 1 - 2, 2 - 3) \\
            &= \boxed{(-1, -1, -1)} \\
            \\
    |\vec{u}|   &= \sqrt{(u_1)^2 + (u_2)^2 + (u_3)^2} \\
                &= \sqrt{(2)^2 + (1)^2 + (3)^2}\\
                &= \sqrt{4 + 1 + 9}\\
                &= \boxed{\sqrt{14}}\\
                \\
    |\vec{v}|   &= \sqrt{(v_1)^2 + (v_2)^2 + (v_3)^2} \\
                &= \sqrt{(-1)^2 + (-1)^2 + (-1)^2}\\
                &= \sqrt{1 + 1 + 1}\\
                &= \boxed{\sqrt{3}}\\
                \\
\end{align}$$

#### b) Určete souřadnice bodu $X$, pro který platí $AX = v - \frac{1}{2}u$.
##### Varianta A
$$\begin{align}
AX &= \vec{v} - \frac{1}{2}\vec{u}\\
AX &= (4, 4) - (3, 1) \\
AX &= (1, 3)\\
\\
X &= A + AX \\
X &= [0, 1] + (1, 3)\\
X &= \boxed{[1, 4]}
\end{align}$$

!!! question "Proč tam mám kulaté i hranaté závorky?"
    Hranaté závorky se běžně používají k označení bodu, zatímco kulaté k označení vektoru. Principielně je to ovšem jedno a to samé, jenom u bodu uvažujeme, že to je vektor, který má začátek v nule.

##### Varianta B
$$\begin{align}
AX &= \vec{v} - \frac{1}{2}\vec{u}\\
AX &= (-1, -1, -1) - \frac{1}{2}(2, 1, 3) \\
AX &= (-1, -1, -1) -  \left(1, \frac{1}{2}, \frac{3}{2}\right)\\
AX &= \left(-2, \frac{-3}{2}, \frac{-5}{2}\right)\\
\\
X &= A + AX \\
X &= [1,2,3] + \left(-2, \frac{-3}{2}, \frac{-5}{2}\right)\\
X &= \left[1,\frac{4}{2},\frac{6}{2}\right] + \left(-2, \frac{-3}{2}, \frac{-5}{2}\right)\\
X &= \left[1 - 2, \frac{4 - 3}{2}, \frac{6 - 5}{2}\right]\\
X &= \boxed{\left[-1, \frac{1}{2}, \frac{1}{2}\right]} \\
\end{align}$$

#### c) Určete souřadnice středu úsečky $AB$.
V této úloze je myšlenka taková, že známe vektor $\vec{AB}$, který je stejně velký jako úsečka $AB$. Pokud tedy hledáme střed, který leží přesně v polovině úsečky, stačí nám vzít polovinu vektoru $\vec{AB}$ a posunout jeden z bodů správným směrem. Vzhledem k tomu, že vektor $\vec{AB}$ začíná v bodě A a končí v bodě $B$, tak při hledání středu začneme také v bodě $A$, akorát se neposuneme o celý vektor, ale jenom o jeho polovinu.

!!! note
    Šlo by to i naopak, mohli bychom začít v bodě $B$, ovšem v ten moment bychom museli jít nadruhou stranu, tzn. že buďto použít vektor $\vec{BA}$, nebo obrátit vektor $\vec{AB}$, což uděláme tak, že před něj dáme mínus ($-\vec{AB} = \vec{BA}$).

##### Varianta A
$$\begin{align}
S_{AB} &= A + \frac{1}{2}\vec{AB}\\
S_{AB} &= [0, 1] + \frac{1}{2}(6, 2) \\
S_{AB} &= [0, 1] + (3, 1) \\
S_{AB} &= \boxed{[3, 2]}
\end{align}$$

##### Varianta B
$$\begin{align}
S_{AB} &= A + \frac{1}{2}\vec{AB}\\
S_{AB} &= [1,2,3] + \frac{1}{2}(2, 1, 3) \\
S_{AB} &= [1,2,3] + \left(1, \frac{1}{2}, \frac{3}{2}\right) \\
S_{AB} &= \boxed{\left[2, \frac{5}{2}, \frac{9}{2}\right]}
\end{align}$$

#### d) Ověřte, že body $A, B, C$ jsou vrcholy trojúhelníku.
!!! important "Pořádně si přečti zadání!"
    Zde je důležitý fakt, že po nás chtějí ověřit, jestli **vrcholy** tvoří trojúhelník. To, že ověřujeme jenom vrcholy, nám razantně snižuje obtížnost výpočtu, protože kdyby se ptali na **strany**, resp. vektory, tak musíme řešit trojúhelníkovou nerovnost.

Jak poznáme, jestli vrcholy tvoří trojúhelník? Stačí se podívat, jestli alespoň jeden z bodů není na stejné přímce, jako ty dva ostatní - potřebujeme se totiž vyvarovat situaci, kdy všechny tři body leží na jedné přímce a tím pádem se tam žádný trojúhelník nekoná.

##### Varianta A

##### Varianta B

#### e) Určete chybějící souřadnice bodu $R$ tak, aby $R \in \leftrightarrow AB$
Tato úloha po nás chce, abychom doplnili druhou souřadnici bodu $R$ tak, aby tento bod ležel na přímce $AB$. K tomu můžeme použít [parametrický předpis přímky](./parametricka_primka.md).

Postup bude tedy následující:

- Sestavit [parametrický předpis přímky AB](./parametricka_primka.md) pomocí vektoru $\vec{AB}$ a bodu $A$.
- Dosadit za neznámé $x$ a $y$ souřadnice bodu $R$
- Vyjádřit parametr $t$ a dopočítat souřadnici $r_2$

##### Varianta A
$$\begin{align}
A &= [0, 1] \\
R &= [2, r_2] \\
R &\in \leftrightarrow AB\\
\vec{AB} &= (6, 2) \\
\\
x &= A_x + t \cdot \vec{AB}_1 \\
y &= A_y + t \cdot \vec{AB}_2 \\
\\
2 &= 0 + t \cdot 6 \\
r_2 &= 1 + t \cdot 2 \\
\\
2 &= 0 + t \cdot 6 \\
\frac{2}{6} &= t \\
\boxed{\frac{1}{3}} &= t \\
\\
r_2 &= 1 + \frac{1}{3} \cdot 2 \\
r_2 &= 1 + \frac{2}{3} \\
r_2 &= \boxed{\frac{5}{3}} \\
R &= \boxed{\left[2, \frac{5}{3}\right]}
\end{align}$$

##### Varianta B
$$\begin{align}
A &= [1, 2, 3] \\
R &= [0, r_2, r_3] \\
R &\in \leftrightarrow AB\\
\vec{AB} &= (2, 1, 3) \\
\\
x &= A_x + t \cdot \vec{AB}_1 \\
y &= A_y + t \cdot \vec{AB}_2 \\
z &= A_z + t \cdot \vec{AB}_3 \\
\\
0 &= 1 + t \cdot 2 \\
r_2 &= 2 + t \cdot 1 \\
r_3 &= 3 + t \cdot 3 \\
\\
0 &= 1 + t \cdot 2 \\
-1 &= 2t \\
\boxed{\frac{-1}{2}} &= t \\
\\
r_2 &= 2 + \frac{-1}{2} \cdot 1 \\
r_2 &= \frac{4}{2} + \frac{-1}{2}\\
r_2 &= \boxed{\frac{3}{2}}\\
\\
r_3 &= 3 + \frac{-1}{2} \cdot 3 \\
r_3 &= 3 + \frac{-3}{2}\\
r_3 &= \frac{6}{2} + \frac{-3}{2}\\
r_3 &= \boxed{\frac{3}{2}}\\
\\
R &= \boxed{\left[0, \frac{3}{2}, \frac{3}{2}\right]}
\end{align}$$

#### f) Určete souřadnice těžiště trojúhelníku ABC a délku jeho těžnice $t_c$.
Tahle úloha bude trochu časově náročnější.

Postup řešení je následující:

- Najít středy stran trojúhelníku


#### g) Určete souřadnice bodu $D$ tak, aby $ABCD$ byl rovnoběžník.
#### h) Určete souřadnice bodu $E$ tak, aby bod $C$ byl středem úsečky $BE$.
#### i) Určete chybějící souřadnice bodu $Z$ tak, aby $CZ || AB$.