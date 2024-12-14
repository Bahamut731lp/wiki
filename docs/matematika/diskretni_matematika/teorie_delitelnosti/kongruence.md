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