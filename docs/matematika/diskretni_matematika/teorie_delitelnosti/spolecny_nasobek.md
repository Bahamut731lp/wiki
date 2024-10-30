# Společný násobek
Společný násobek dvou nebo více čísel je číslo, které je dělitelné všemi těmito čísly.

$$\begin{aligned}
    (a \mid D) &\wedge (b \mid D) \\
    a, b &\in \mathbb{Z} - \{0\}
\end{aligned}$$

!!! example "Příklad"
    Pokud máme čísla $a=3$ $b=4$, jejich společné násobky jsou všechna čísla, která jsou násobky jak 3, tak 4, například 12,24,36 atd.

## Nejmenší společný násobek
Nejmenší společný násobek čísel $a, b \in \mathbb{Z}$ je takové číslo, které je dělitelné těmto čísly a je ze všech možných to nejmenší. Označujeme ho jako $NSN(a, b)$ nebo $LCM(a, b)$ (Least Common Multiple).

!!! tip "Způsob výpočtu nejmenšího společného násobku"
    1. Metodou hrubé síly, kdy hledáme $min(\{max(|a|, |b|), ..., a\cdot b\})$
    2. Metodou rozkladu čísel $a, b$ na prvočísla
    3. Využití vztahu nejmenšího společného násobku s [největším společným dělitelem](./spolecny_delitel.md)

Nejmenší společný násobek čísel $a, b \in \mathbb{Z}$ lze vypočítat jako podíl jejich součinu a jejich největšího společného dělitele.

$$NSN(a, b) = \frac{a \cdot b}{NSD(a, b)}$$

??? question "Jak funguje výpočet pomocí největšího společného dělitele?"
    Když vynásobíme dvě čísla, dostaneme určitě nějaký jejich násobek. Problém ale je, že tento násobek nemusí být ten nejmenší. Když se podíváme na rozklad obou čísel na prvočísla, může se stát, že mají některé prvočinitele stejné a při násobení se tak započítají dvakrát - jejdnou z jednoho čísla a jednou z druhého.

    ![rozklad na prvočísla čísel 24 a 16](../images/rozklad_na_prvocisla_2.png)

    Jak najdeme společné prvočinitele dvou čísel? Uvědomme si, že prvočinitelé jsou v součinu, tudíž musíme najít číslo, kterým můžeme obě čísla vydělit beze zbytku. Když hledáme to největší číslo, kterým můžeme obě čísla vydělit beze zbytku, hledáme [největšího společného dělitele](#nejvetsi-spolecny-delitel). Ten nám ukáže, jaké společné faktory obě čísla mají.

    ![Výpočet největšího společného dělitele pro čísla 24 a 16](../images/nsd_24_16.png)

    Pak už nám stačí spočítat součin čísel a vydělit ho největším společným dělitelem (NSD).

    - Pokud mají nějaké společné prvočinitele, při násobení se započítají dvakrát, ale NSD jeden výskyt odstraní jeho vydělením.
    - Pokud nemají žádné společné prvočinitele, jejich NSD je jednička, takže dělení výsledek nijak nezmění.
