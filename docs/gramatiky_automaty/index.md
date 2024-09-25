# Gramatiky a automaty

## Abecedy a slova

- Abeceda $\Sigma$ je neprázdná a konečná množina symbolů (číslic, znaků, ...)
- Řetězec (slovo) $\alpha$ je konečná posloupnost symbolů z abecedy
    - __Počet prvků__ v řetězci udává jeho délku a značí se pomocí absolutní hodnoty (např. $|\alpha|$)
    - __Prázdný řetězec__ je takový řetězec, který nemá žádný symbol. Označujeme ho $\varepsilon$ a jeho délka je $|\varepsilon|=0$
    - __Počet výskytů__ symbolu $k$ ve slově $\alpha$ značíme $\#_k(\alpha)$
- Reverzní (opačné) slovo $\alpha^r$ je takové slovo, jehož symboly jsou zapsané v opačném pořadí od slova $\alpha$
    - pro $\alpha = a_1, ..., a_n$ je $\alpha^R = a_n, ..., a_1$
    - $(\alpha^R)^R = \alpha$
    - $\varepsilon^R = \varepsilon$
- Slovo $\beta$ je podslovem slova $\alpha$, pokud existují slova $\gamma$ a $\delta$ taková, že platí $\alpha = \gamma . \beta . \delta$
    - Pokud je $\gamma = \epsilon$, je slovo $\beta$ předponou (prefixem)
    - Pokud je $\delta = \epsilon$, je slovo $\beta$ příponou (suffixem)

## Řetězení
Zřetězení (konkatenace) slov $\alpha = a_1, a_2, ...$ a $\beta = b_1, b_2, ...$ je spojení dvou slov k sobě.

### Vlastnosti řetězení
- $\alpha . \varepsilon = \varepsilon . \alpha = \alpha$
- $\alpha^0 = \varepsilon$
- $\alpha^{i+1} = \alpha . \alpha^i = \alpha^i . \alpha$
- $\alpha . \beta . \gamma = (\alpha . \beta) . \gamma = \alpha . (\beta . \gamma)$
- $\alpha . \beta \not= \beta . \alpha$

## Příklady

1. $L_1 = \{abc, aac, cb\}$ a $L_2 = \{baa, cb\}$
    - $L_1 . L_2 = \{abcbaa, aacbaa, cbcb, abccb, aaccb\}$
2. $L_1 = \{\varepsilon, ab\}$ a $L_2 = \{bba, cb\}$
    - $L_1 . L_2 = \{\varepsilon{bba}, \varepsilon{cb}, abbba, abcb\}$
3. $L_1 = \{abc, aab, cb\}$ a $L_2 = \{bba, cb\}$
    - $L_1 \cap L_2 = \{cb\}$
4. $L_1 = ab*$ a $L_2 = cb*$
    - $L_1 \cup L_2 = ab^* + cb^* = (a+c)b^* = \{a, c, ab, cb, aab, cbb, abbb, ...\}$
5. $L_1 = \{abc, aac, cb\}$ a $L_2 = \{baa, cb\}$
    - $L_1 \ L_2 = \{abc, aac\}$
6. $L = \{abc, aac, cb\}$, pak doplněk
    - $\overline{L} = \Sigma^* / \{abc, aac, cb\}$ 
7. $L = \{abc, mnp, \varepsilon\}$, pak
    - $L^R = \{cba, pnm, \varepsilon\}$

## Gramatiky a automaty
- Gramatika popisuje jazyk pomocí pravidel, podle kterých se vytváří slova.
- Automat rozpoznává jazyk

## Konečné automaty
- Konečný automat je výpočetní model, který má stav a přechází mezi jednotlivými stavy na základě symbolů.
- Konečný automat má konečný počet vnitřních stavů
- Rozpoznávací KA, klasifikační KA, KA s výstupní funkcí

### Rozpoznávací automaty
- Automat postupně čte vstupní slovo
- Automat se nemůže vracet na již přečtené symboly a nic si nepamatuje
- Automat má informaci o tom, v jakém stavu začít a v jakém či jakých stavech skončit.
- Pokud automat skončí v koncových stavech, je slovo součástí formálního jazyka

## Klasifikační automaty

## Konečný automat s výstupní funkce

### Typ Mealey

### Typ Moore
