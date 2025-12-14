# Kongruence
Kongruence je vztah mezi čísly, která mají po dělení stejný zbytek. Říkáme tak, že celá čísla $a, b$ jsou kongruentní modulo $m$, pokud platí, že mají po dělení číslem $m$ stejný zbytek.

$$
    a \equiv b \pmod{m}
$$

!!! info "Vyjádření zbytku"
    Pokud chceme říci, že číslo $a$ je zbytek po dělení čísla $b$ číslem $m$, píšeme to jako $a = b \mod{m}$

!!! note "Tvrzení"
    $$\begin{aligned}
        a &\equiv b \pmod{m} \\
        m &\mid (a - b) \\
        \exists t \in \mathbb{Z}: a &= b + mt
    \end{aligned}$$

## Vlastnosti kongruencí
- K oběma stranám kongruence lze přičíst a odečíst libovolné celé číslo
- Obě strany kongruence (včetně modulu) lze vynásobit libovolným číslem
- Obě strany kongruence (včetně modulu) lze umocnit na $n \in \mathbb{N}$
- Členy z jedné strany kongruence lze převést na druhou, pokud u nich změníme znaménko

## Řešení lineárních kongruencí
Lineární kongruencí rozumíme kongruenci ve tvaru $ax \equiv b \pmod{m}$. Cílem je najít dvě řešení: partikulární (konkrétní) a obecné.

### Úpravy kongruence
Podle vlastnostní kongruencí je dobré se před samotným výpočtem podívat, zda-li není výhodné kongruenci upravit. Úpravou kongruencí myslím hlavně dvě následující vlastnosti:

- Všechny tři strany kongruence ($a$, $b$, a modul) můžeme násobit a dělit $k \cdot a = k \cdot x (k \cdot m)$
- $a$ a $b$ jsou zbytky po celočíselném dělení modulem

Proto je vhodné se na kongruenci podívat, a zjistit, zda-li $NSD(a, b, m) \not{=} 1$. Pokud je největší společný dělitel těchto čísel různý od jedničky, můžeme jít vydělit všechny tři strany rovnice. Pokud máme v rovnici čísla, která jsou větší než modul, můžeme je nahradit zbytkem po celočíselným dělení právě daným modulem.

$$\begin{aligned}
    192x &\equiv 212 \pmod{46} \\
    8x &\equiv 28 \pmod{46} \\
    4x &\equiv 14 \pmod{23} 
\end{aligned}$$

### Ověření řešitelnosti
Před samotným výpočtem lze ověřit, zda-li má kongruence řešení. K tomu se využívá [největší společný dělitel](spolecny_delitel.md) a euklidův algoritmus. Prvním krokem je spočítat největšího společného dělitele čísla $a$ a modulu $m$.

- Pokud $NSD(a, m) = 1$, poté má kongruence __právě jedno řešení__.
- Pokud $NSD(a, m) \gt 1$ a zároveň $NSD(a, m) \mid b$, má kongruence právě $NSD(a, m)$ řešení
- Pokud $NSD(a, m) \gt 1$ a zároveň $NSD(a, m) \not\mid b$, nemá kongruence řešení

### Princip řešení
Princip řešení lineární kongruence je, stejně jako u rovnic, osamostatnit neznámou $x$ na jedné straně a na druhé mít, k čemu je kongruentní. Protože ale nepracujeme v reálných číslech, ale v celých, tak je úlohou najít __multiplikativní inverzi__ daného koeficintu u $x$.

!!! example "Multiplikativní inverze v reálných číslech"
    V případě reálných čísel je multiplikativní inverzí __převrácené číslo__. Například pro číslo $5$ je multiplikativní inverzní $\frac{1}{5}$, protože vynásobením $5$ a $\frac{1}{5}$ vznikne při jejich vynásobení neutrální prvek - jednička.

Při hledání multiplikativní inverze řešíme podkongruenci $ax \equiv 1 (m)$, neboli ptáme se, jaké číslo je kongruentní k jedničce, neutrálnímu prvku při násobení. Tuto podkongruenci řešíme [Bezoutovou rovností](./bezoutova_rovnost.md), kdy Bezoutův koeficient u čísla $a$ je právě hledanou multiplikativní inverzí. Hledání bezoutových koeficientů probíhá pomocí rozšířeného euklidova algoritmu, neboli euklidova algoritmu s tabulkou jednotlivých prvků rozvoje v řetězový zlomek.

!!! todo "Obrázek"

!!! example "Příklad"
    Vyřeště kongruenci $419x \equiv 17 \pmod{21}$.

    Nejdříve se podíváme, zda-li lze kongruenci zjednodušit. V tomto příkladu je koeficient $a = 419$ větší než modulo $m = 21$, takže koeficient $a$ nahradíme jeho zbytkem po dělení modulem.

    $$\begin{aligned}
        419x &\equiv 17 \pmod{21} \\
        20x &\equiv 17 \pmod{21}
    \end{aligned}$$

    Podíváme se na řešitelnost. $NSD(20, 21) = 1$, takže tato upravená kongruence má právě jedno řešení. Cílem je osamostatnit neznámou na levé straně, tj. najít multiplikativní inverzi k číslu 20 v grupě $\mathbb{Z}_{21}$. Abychom takovou inverzi našli, řešíme kongruenci, a respektive bezoutovu rovnost:

    $$\begin{aligned}
        20x &\equiv 1 \pmod{21} \\
        20x + 21y &= 1
    \end{aligned}$$

    V tomto příkladě nemusíme nutně provádět euklidův algoritmus a rozvoj v přibližné zlomky, protože vidíme, že dosadíme $x = -1$ a $y = 1$, dostaneme $-20 + 21 = 1$, a rovnost bude tudíž platit. $x = -1$ je naše hledaná inverze, ale protože jsme v grupě $\mathbb{Z}_{21}$, převedeme si ji na prvek této grupy. $x = -1 + 21 = 20$.

    $$\begin{aligned}
        20x &\equiv 17 \pmod{21} \\
        20x \cdot 20 &\equiv 17 \cdot 20 \pmod{21} \\
        400x &\equiv 340 \pmod{21} \\
        (400 \mod{21}) x &\equiv (340 \mod{21}) \\
        x &\equiv 4 \pmod{21}
    \end{aligned}$$

    - Partikulárním řešením kongruence $419x \equiv 17 (21)$ je $x_0 = 4$.
    - Obecným řešením je pak $x = 4 + 21k$, kde $k\in N^+$

## Řešení soustavy lineárních kongruencí


!!! example "Příklad"
    Vyřeště soustavu lineárních kongruencí:
    
    $$\begin{aligned}
        7x &\equiv 84 \pmod{15} \\
        7x &\equiv 42 \pmod{9} \\
        7x &\equiv 49 \pmod{10} \\
        7x &\equiv 21 \pmod{8} \\
    \end{aligned}$$

    $$\begin{aligned}
        x &\equiv 12 \pmod{15} \\
        x &\equiv 6 \pmod{9} \\
        x &\equiv 7 \pmod{10} \\
        x &\equiv 3 \pmod{8} \\
    \end{aligned}$$

    $$\begin{aligned}
        x &\equiv 12 \pmod{15} \\
        x = 12 + 15t \\
        \\
        x &\equiv 6 \pmod{9} \\
        12 + 15t &\equiv 6 \pmod{9} \\
        15t &\equiv -6 \pmod{9} \\
        15t &\equiv 3 \pmod{9} \\
    \end{aligned}$$

    $$\begin{aligned}
        15t &\equiv 1 \pmod{9} \\
        15x + 9y &= 1 \\
    \end{aligned}$$

    |Násobky|Zbytky|
    |:--:|:--:|
    ||15|
    ||9|
    |1|6|
    |1|3|
    |2|0|

    |i|-1|0|1|2|
    |:--:|:--:|:--:|:--:|:--:|
    |q|-|1|1|2|
    |P|1|1|2|5|
    |Q|0|1|1|3|

    15x + 9y &= 1 \\

## Příklady

!!! example "Nalezněte řešení následující soustavy kongruencí"
    $$\begin{aligned}
        24x + 14y + 22z &\equiv 16 \pmod{15} \\
        33x + 45y + 27z &\equiv 6 \pmod{45} \\
        16x + 9y + 31z &\equiv 7 \pmod{15} \\
    \end{aligned}$$

$$\begin{aligned}
    9x + 14y + 7z &\equiv 1 \pmod{15} \\
    33x + 0y + 27z &\equiv 6 \pmod{45} \\
    1x + 9y + 1z &\equiv 7 \pmod{15} \\
\end{aligned}$$

$$\begin{aligned}
    9x + 14y + 7z &\equiv 1 \pmod{15} \\
    11x + 0y + 9z &\equiv 2 \pmod{15} \\
    1x + 9y + 1z &\equiv 7 \pmod{15} \\
\end{aligned}$$

Tady mám někdě chybu. Zlatého bludišťáka dostane ten, kdo ji najde. Už vim, když odečítám rovnice od sebe tak nestačí akorát vynásobit -1, ale musím to vzít inverzí... takže když potřebuju odečíst 5y, tak musím od všeho odečíst 10, abych dostal -5y

$$\begin{aligned}
    1x + 9y + 1z &\equiv 7 \pmod{15} \\
    9x + 14y + 7z &\equiv 1 \pmod{15} \\
    11x + 0y + 9 &\equiv 2 \pmod{15} \\
    \\
    1x + 9y + 1z &\equiv 7 \pmod{15} \\
    0x + 5y + 7z &\equiv 1 \pmod{15} \\
    0x + 6y + 13z &\equiv 0 \pmod{15} \\
    \\
    1x + 9y + 1z &\equiv 7 \pmod{15} \\
    0x + 65y + 91z &\equiv 13 \pmod{15} \\
    0x + 6y + 13z &\equiv 0 \pmod{15} \\
    \\
    1x + 9y + 1z &\equiv 7 \pmod{15} \\
    0x + 5y + 1z &\equiv 13 \pmod{15} \\
    0x + 6y + 13z &\equiv 0 \pmod{15} \\
    \\
    1x + 4y + 0z &\equiv 9 \pmod{15} \\
    0x + 5y + 1z &\equiv 13 \pmod{15} \\
    0x + 1y + 0z &\equiv 11 \pmod{15} \\
    \\
    1x + 4y + 0z &\equiv 9 \pmod{15} \\
    0x + 1y + 0z &\equiv 11 \pmod{15} \\
    0x + 5y + 1z &\equiv 13 \pmod{15} \\
    \\
    1x + 4y + 0z &\equiv 9 \pmod{15} \\
    0x + 1y + 0z &\equiv 11 \pmod{15} \\
    0x + 0y + 1z &\equiv 3 \pmod{15} \\
    \\
    1x + 0y + 0z &\equiv 10 \pmod{15} \\
    0x + 1y + 0z &\equiv 11 \pmod{15} \\
    0x + 0y + 1z &\equiv 3 \pmod{15} \\
\end{aligned}$$