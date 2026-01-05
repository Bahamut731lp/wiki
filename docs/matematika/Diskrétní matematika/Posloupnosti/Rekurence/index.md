# Rekurence
Rekurentní posloupnost (též _rekurence_) je vyjádření posloupnosti, která k výpočtu libovolného členu využívá jiné členy posloupnosti. Rekurence je dána __rekurentním vztahem__ a __počátečními podmínkami__. S rekurencí se velmi špatně počítají vyšší členy, a proto je vhodné zkoumat, jestli by daná rekurentní posloupnost, vyjádřená rekurentním vztahem, nešla převést na jinou posloupnost, která již vztah bude mít nerekurentní.


## Homogenní Lineární Rekurentní Vztahy
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

## Nehomogenní LRV

## Příklady
### Příklad 1
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

### Příklad 2
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

### Příklad 3
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

### Příklad 4
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
