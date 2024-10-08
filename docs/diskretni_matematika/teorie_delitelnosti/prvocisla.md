# Prvočísla a prvočíselné rozklady
Prvočíslo je takové číslo, které má pouze nevlastní dělitele, neboli je dělitelné pouze jedničkou nebo samo sebou. Čísla, která nesplňují podmínky pro prvočísla, se nazývají čísla složená.

$$(\forall n \in N^+) (n \mid p \to n = 1 \vee n = p)$$

- Nejmenší dělitel (různý od 1) složeného čísla $n$ je prvočíslo, které je nejvyše rovný $\lfloor \sqrt{n} \rfloor$ (Odmocnina z $n$ zaokrouhlená dolů na celou část)
- Pro libovolná dvě čísla, která spolu nemají žádného společného dělitele (jsou nesoudělná), existuje nekonečně mnoho prvočísel, která při dělení tímto číslem dají určitý konkrétní zbytek. Jinými slovy, lze vždy najít nekonečně mnoho prvočísel, pro které platí $p = m \cdot q + a$
- Počet prvočísel menších nebo rovno přirozenému číslu $n$ lze přibližně vypočítat jako $\pi(n) = \frac{n}{\ln{n}}$

## Kanonický rozklad na prvočísla
Každé přirozené číslo větší než 1 lze zapsat jako kanonický rozklad na prvočísla, což je součin všech prvočísel vyskytujících se v rozkladu s mocninou značící jejich násobnost (kolikrát se vyskytuje v rozkladu).

$$a = p_1^{\alpha_1} \cdot ... \cdot p_k^{\alpha_k}$$

Algoritmus funguje tak, že číslo zkoušíme dělit prvočísly do té doby, než je zbytek po dělení nulový.

!!! example "Rozklad čísla 24 a 16"
    ![Rozklad na prvočísla](../images/rozklad_na_prvocisla.png)

    $$\begin{aligned}
    24 &= 2^3 \cdot 3 \\
    16 &= 2^4 \\
    \end{aligned}$$

## Eratosthenovo síto
__Eratosthenovo síto__ je algoritmus pro nalezení všech prvočísel menších nebo rovných zadanému číslu $n$. Tento algoritmus pochází z doby starověkého Řecka a vytvořil ho matematik Eratosthenés.

!!! abstract "Jak funguje Eratosthenovo síto?"
    Na začátku algoritmu si vytvořme seznam čísel od 2 do $n$. Nyní opakujeme následující kroky:
    
    1. První číslo v seznamu je prvočíslo
    2. Ze seznamu odstraní všechny násobky posledního prvočísla
    3. Přesuneme se na další číslo, které nebylo vyškrtnuto
    4. Opakujeme vyškrnutí násobků
    5. Algoritmus končí v moment, kdy narazíme na číslo $\lfloor \sqrt{n} \rfloor$ (odmocnina z $n$ zaokrouhlená dolů na celou část)

### Segmentované Eratosthenovo síto
Segmentované Eratosthenovo síto je optimalizovaná verze původního algoritmu, která řeší vysoké paměťové nároky u vyšších horních mezí a neefektivní používání mezipaměti. Řešením je rozdělit si síto na menší části, které se postupně zpracovávají a používají již dříve nalezené násobky.

!!! abstract "Jak funguje Segmentované Eratosthenovo síto"
    1. Rozsah čísel od 2 do $n$ si rozdělíme na segmenty o velikosti $\delta$, přičemž tato velikost musí být větší nebo rovna $\sqrt{n}$.
    2. První segment zpracujeme "klasickým" Eratosthenovým sítem.
    3. U každého dalšího segmentu
        - Vytvoříme pole o velikosti jednoho segmentu ($\delta$)
        - Označíme si násobky dříve nalezených prvočísel jako čísla složená
        - Neoznačené pozice odpovídají prvočíslům v daném segmentu.

### Inkrementální Eratosthenovo síto
Inkrementální síto je algoritmus pro generování prvočísel bez horní hranice, který funguje postupným vkládáním prvočísel do výpočtu jejich násobků. Tímto způsobem jsou prvočísla nalezena v mezerách mezi násobky, které jsou postupně odstraňovány.

## Atkinovo síto
!!! bug "TODO"

## Pritchardovo síto
!!! bug "TODO"

## Sundaramovo síto
!!! bug "TODO"

## Pseudočtvercové síto
!!! bug "TODO"

