# Obecná rovnice přímky
Obecná rovnice přímky v rovině vyjadřuje všechny body přímky jako funkce jednoho parametru. Přímka je určena dvěma body, nebo jedním bodem a směrovým vektorem.

!!! abstract "Obecná rovnice přímky"
    $$
    p: ax + by + c = 0
    $$

    - $p$ je přímka, na které pracujeme
    - $a, b$ jsou souřadnice normálového vektoru
    - $c$ je bod na přímce

## Motivace
Předchozí kapitola se zabývala [parametrickou přímkou](parametricka_primka.md), což tehdy mělo intuitivní motivaci jednoho bodu a vektoru, který si akorát zvětšíme nebo zmenšíme podle potřeby tak, abychom tím vyjádřili jakýkoliv bod na přímce jako posun výchozího bodu o ten daný vektor. Proč se tedy zavádí další tvar, když už máme ten parametrický?

Parametrický tvar je sice intuitivní, ale nepraktický. V zápise $X = A + t \cdot \vec{u}$ pracujeme s vektory, což pořád někde vypisovat je na pytel. Je tedy možnost nějakého kompaktnějšího řešení? Je, právě proto vznikla obecná rovnice přímky.

Principielně pracuje stejně jako parametrické vyjádření, myšlenkou je najít takový vektor, pomocí kterého vyjádříme bod na přímce jako posun výchozího bodu. Chtělo by to ovšem nějakou operaci, která z vektoru udělá číslo. Existuje nějaká takováhle operace? No samozřejmě, a jmenuje se __skalární součin__.

!!! note ""
    Vzpomeň si, že skalární součin vektorů $\vec{u}$ a $\vec{v}$ je definovaný[^1] jako $\vec{u} \cdot \vec{v} = u_1 \cdot v_1 + u_2 \cdot v_2 + ...$

Skalární součin ale pracuje s dvěma vektory, my máme jenom jeden, a to ten směrový. Z něho ale můžeme uvařit ještě jeden vektor. Jaký? Normálový! Normálový vektor je takový vektor, který je ke směrovému vektoru kolmý. Pro dva kolmé vektory platí, že je skalární součin roven nule.

$$\begin{aligned}
    \vec{v} \cdot \vec{n} &= 0
\end{aligned}$$

Vektor $\vec{v}$ jsme určili jako rozdíl souřadnic výchozí bodu a bodu na přímce, takže $\vec{v} = (x_2 - x_1, y_2 - y_1)$:

$$\begin{aligned}
    (x_2 - x_1, y_2 - y_1) \cdot (n_1, n_2) &= 0 \\
    n_1 \cdot (x_2 - x_1) + n_2 \cdot (y_2 - y_1) &= 0 \\
    n_1 \cdot x_2 - n_1 \cdot x_1 + n_2 \cdot y_2 - n_2 \cdot y_1 &= 0 \\
    n_1 \cdot x_2 + n_2 \cdot y_2 + (-n_1 \cdot x_1 - n_2 \cdot y_1) &= 0
\end{aligned}$$

když se na tenhle výsledek podíváme, tak $n_1$ a $n_2$ jsou souřadnice normálového vektoru, ty se nikdy nemění. To samé $x_1$ a $x_2$, to se taky nikdy nemění. Reálně jediné proměnné, co tam jsou, jsou $x_2$ a $y_2$, což jsou souřadnice toho našeho hledaného bodu. Když si to tedy trochu zaškatulkujeme:

$$\begin{aligned}
    n_1 \cdot x_2 + n_2 \cdot y_2 + (-n_1 \cdot x_1 - n_2 \cdot y_1) &= 0 \\
    n_1 \cdot x + n_2 \cdot y + c &= 0 \\
    ax + by + c &= 0
\end{aligned}$$

dostaneme obecný tvar přímky.

## Vyjádření parametru $c$
V obecné rovnici přímky dosazujeme za $(a, b)$ normálový vektor a za $(x, y)$ bod, který hledáme. Co ale se zbylým parametrem $c$? Ten se dopočítá po dosazení bodu na přímce. Vzpomeň si, že tuhle rovnici jsme vytvářeli z bodu a směrového vektoru. Když tento výchozí bod dosadíme, můžeme si $c$ vyjádřit jako

$$\begin{aligned}
    c &= -ax - by
\end{aligned}$$

což odpovídá i našemu odvození, kdy to jsou souřadnice normálového vektoru a výchozího bodu.

## Vzájemná poloha obecných přímek
Stejně jako u [parametrického tvaru](parametricka_primka.md), i zde můžeme porovnávat dvě a více přímek a zjišťovat, jestli jsou:

- různoběžné
- rovnoběžné
- totožné

zde je to výpočetně ještě jednoduší díky tomu, že se jedná o řešení standardních soustav rovnic. Uvažujme přímky $p: 2x - 6x + 18 = 0$ a $q: -3x + 9y - 27 = 0$, potom pro porovnání jejich vzájemné polohy řešíme soustavu rovnic

$$\begin{aligned}
2x - 6y + 18 &= 0 \\
-3x + 9y - 27 &= 0 \\
\end{aligned}$$

A co může nastat? Stejně jako u klasických soustav mohou nastat tři situace:

- Soustava má jedno konkrétní řešení
- Soustava nemá řádné řešení
- Soustava má nekonečně mnoho řešení

když si tyhle situace porovnáme vedle sebe s tím seznamem možných poloh, tak možná uvidíme lehkou spojitost. Není to náhodou, každá soustava dvou lineárních rovnic o dvou neznámých je z hlediska geometrické interpretace akorát úloha hledání vzájemné polohy dvou přímek, respektive jejich společných bodů. 

- Pokud má tahle soustava jedno řešení, jsou různoběžné a řešením je průsečík těchto přímek.
- Pokud soustava nemá žádné řešení, jsou přímky rovnoběžné.
- Pokud má soustava nekonečně mnoho řešení, jsou přmky totožné.

[^1]: Pro ty stejné chytrolíny, který by mě mrdali za rovnoběžnost přímek, podotýkám, že pracujeme na aritmetickém vektorovém prostoru nad tělesem reálných čísel, takže bereme "standardní" definici skalárního součinu, která se učí již na střední škole. Já vim, že si to zobrazení můžeme zadefinovat jinak, ale to pak platí i pro součet a součin, a to mě tady fakt nezajímá.