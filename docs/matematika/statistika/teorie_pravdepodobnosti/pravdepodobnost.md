# Pravděpodobnost
Pravděpodobnost vyjadřuje míru očekávatelnosti výskytu [náhodného jevu](jevy.md), která se označuje číslem v intervalu $\left<0, 1\right>$

## Klasická pravděpodobnost
Pokud máme $n$ [elementárních jevů](jevy.md#druhy-nahodnych-jevu) a všechny mají stejnou šanci výskytu, tj. $\frac{1}{n}$, potom je při provedení náhodného pokusu pravděpodobnost jevu definována jako

$$
P(A) = \frac{m}{n}
$$

Kde $m$ je počet příznivých výsledků a $n$ je počet všech možných výsledků.

!!! example "Příklad"
    > Vypočtěte pravděpodobnost, že na šestistěnné kostce padne jedno z čísel 2, 3, 5 nebo 6.

    Počet všech možných výsledků je $n=6$, protože může padnou maximálě 6 různých čísel. Počet příznivých výsledků je to, co chceme, aby na kostce padlo, to jsou dohromady 4 čísla (2, 3, 5, 6), takže $m=4$. Pravděpodobnost pak spočítáme jako

    $$
        P = \frac{4}{6} = \frac{2}{3}
    $$

## Statistická pravděpodobnost
Pokud můžeme náhodný pokus opakovat $n$-krát a zaručit stejné podmínky, pak můžeme pravděpodobnost jevu odhadnout jako klasická pravděpodobnost opakovaná vícekrát.

$$
P(A) = \lim_{n\to\infty}\frac{n(A)}{n}
$$

Kde $n(A)$ je počet příznivých výsledků a $n$ je počet provedených pokusů.

!!! example "Příklad"
    > Antonín Novák jezdí v MHD na černo a dělá si statistiku. Za loňský rok jel 2000krát a z toho byl 28krát chycen. Jaká je pravděpodobnost, že je chycen revizorem?

    Úloha se ptá na pravděpodobnost výskytu revizora, tudíž jako příznivý výsledek $n(A)$ je zde myšleno chycení revizorem, což proběhlo 28krát z celkových 2000 jízd.

    $$
        P = \frac{28}{2000} = 0.014 = 1.4%
    $$

## Geometrická pravděpodobnost
Geometrická pravdědpodobnost se používá v případech, kdy je počet všech možných výsledků nespočetný.

$$
P(A) = \frac{|A|}{|\Omega|}
$$
