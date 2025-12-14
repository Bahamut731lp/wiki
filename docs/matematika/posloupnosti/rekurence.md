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