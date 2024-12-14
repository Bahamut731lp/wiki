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
- Obě strany kongruence lze vynásobit libovolným číslem
- Obě strany kongruence lze umocnit na $n \in \mathbb{N}$
- Členy z jedné strany kongruence lze převést na druhou, pokud u nich změníme znaménko

## Řešení lineárních kongruencí
Lineární kongruencí rozumíme kongruenci ve tvaru $ax \equiv b \pmod{m}$.

### Úprava kongruence
Podle vlastnostní kongruencí je dobré se před samotným výpočtem podívat, zda-li není výhodné kongruenci upravit. Protože můžeme kongruence vynásobit, můžeme je také vydělit. Uvažujme například kongruenci $192x \equiv 212 \pmod{46}$. Čísla $a$ i $b$ jsou větší než modul, tudíž je můžeme převést do ekvivalentního tvaru, který odpovídá zbytku po dělení právě modulem.

$$\begin{aligned}
    192x &\equiv 212 \pmod{46} \\
    8x &\equiv 28 \pmod{46}
\end{aligned}$$

Nyní jsou čísla menší než modul. Pokud si ale všimneme, tak čísla 8, 28 a 46 jsou dělitelné číslem 2, proto je možné ještě celou kongruenci vydělit.

$$\begin{aligned}
    192x &\equiv 212 \pmod{46} \\
    8x &\equiv 28 \pmod{46} \\
    4x &\equiv 14 \pmod{23}
\end{aligned}$$

Takto jsme z kongruence $192x \equiv 212 \pmod{46}$ udělali podstatně jednoduší $4x \equiv 14 \pmod{23}$

### Ověření řešitelnosti
Před samotným výpočtem lze ověřit, zda-li má kongruence řešení. K tomu se využívá [největší společný dělitel](spolecny_delitel.md) a euklidův algoritmus. Prvním krokem je spočítat největšího společného dělitele čísla $a$ a modulu $m$.

- Pokud $NSD(a, m) = 1$, poté má kongruence __právě jedno řešení__.
- Pokud $NSD(a, m) \gt 1$ a zároveň $NSD(a, m) \mid b$, má kongruence právě $NSD(a, m)$ řešení
- Pokud $NSD(a, m) \gt 1$ a zároveň $NSD(a, m) \not\mid b$, nemá kongruence řešení

Pokud má kongruence právě jedno řešení, je řešení dáno vztahem $x_0 \equiv (-1)^nP_{n-1}b\pmod{m}$, kde $P_{n-1}$ je čitatel předposledního přibližného zlomku rozvoje $\frac{m}{a}$ v řetězový zlomek. Pokud má kongruence více řešení, je 

## Řešení soustav lineárních kongruencí

