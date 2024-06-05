# Konvoluce
__Konvoluce__ je operací, která vytváří lineární kombinace hodnot funkce v malém okolí v závislosti na __konvolučním jádře__.

$$\begin{aligned}
(x[n] \ast h[n]) = \sum_{k=-\infty}^{\infty} x[k] \cdot h[n-k]
\end{aligned}$$

Kde $x[n]$ je vstupní (diskrétní) signál a $h[n]$ je konvoluční jádro. Konvoluční jádro určuje, jak moc ovlivní okolní hodnoty výsledek v daném bodě. Výsledná hodnota konvoluce v každém bodě je tak vážený součet hodnot vstupní funkce v malém okolí tohoto bodu.

Mezi dvě nejdůležitější vlastnosti konvoluce patří __komunativita__ $x \ast h = h \ast x$, což nám říká, že oba signály jsou rovnocenné a zaměnitelné, a __asociativita__ $(x \ast h_1) \ast h_2 = x \ast (h_1 \ast h_2)$, což znamená, že můžeme více systémů sloučit do jednoho a získat tak jednu, finální, [impulzní odezvu](systemy.md#impulzní-odezva).

!!! example "Příklad konvoluce"
    $$\begin{aligned}
        x[n] &= [2, 1, 0, -1, -2] \\
        h[n] &= [1, 0, -1]
    \end{aligned}$$

    Spočtěte konvoluce signálů $x$ a $h$.

    $$(x[n] \ast h[n]) = \sum_{k=-\infty}^{\infty} x[k] \cdot h[n-k]$$


    $$\begin{cases}
        n=0 & y[0] = x[0] \cdot h[0] = 2 \cdot 1 = 2\\
        n=1 & y[1] = x[0] \cdot h[1] + x[1] \cdot h[0] = 2 \cdot 0 + 1 \cdot 1 = 1 \\
        n=2 & y[2] = x[0] \cdot h[2] + x[1] \cdot h[1] + x[2] \cdot h[0] = 2 \cdot -1 + 1 \cdot 0 + 0 \cdot 1 = -2
    \end{cases}$$
    



## 2D Konvoluce
__Konvoluce__ pro 2D signály (zpravidla obrázky) je definována jako klasická konvoluce, akorát se provede do dvou směrů.

$$\begin{aligned}
    f[x, y] \ast h[x, y] &= \sum_{m=-\infty}^{\infty} \sum_{n=-\infty}^{\infty} f[m, n] \cdot h[x - m, y - n]
\end{aligned}$$

